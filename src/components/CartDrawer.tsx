import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { STORE_INFO } from '../data/products';
import { CustomerInfo, OrderDetails, PaymentMethod } from '../types';
import {
  X,
  Plus,
  Minus,
  Trash2,
  Truck,
  Store,
  CheckCircle2,
  ShoppingBag,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  Clock,
  Phone
} from 'lucide-react';

interface CartDrawerProps {
  onOrderConfirmed: (order: OrderDetails) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onOrderConfirmed }) => {
  const { isUrdu } = useLanguage();
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    updateItemWeight,
    removeFromCart,
    clearCart,
    fulfillmentType,
    setFulfillmentType
  } = useCart();

  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'details'>('cart');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [area, setArea] = useState('Khayaban-e-Sir Syed');
  const [timeSlot, setTimeSlot] = useState('morning');
  const [specialNotes, setSpecialNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  if (!isCartOpen) return null;

  const totalWeightKg = Math.round(cartItems.reduce((acc, item) => acc + item.weightKg, 0) * 10) / 10;

  const generateWhatsAppOrderText = () => {
    let msg = `*R and B Chicken Meat - نیا آرڈر انکوائری*\n`;
    msg += `---------------------------------\n`;
    msg += `گاہک کا نام: ${customerName || 'معزز کسٹمر'}\n`;
    msg += `رابطہ فون: ${phone || 'N/A'}\n`;
    msg += `طریقہ: ${fulfillmentType === 'delivery' ? 'ہوم ڈیلیوری' : 'دکان سے پک اپ'}\n`;
    if (fulfillmentType === 'delivery' && address) {
      msg += `پتہ: ${address} (${area})\n`;
    }
    msg += `ٹائم سلاٹ: ${timeSlot === 'morning' ? 'صبح 8:00 تا 12:00' : timeSlot === 'afternoon' ? 'دوپہر 12:00 تا 4:00' : 'شام 4:00 تا 9:00'}\n\n`;
    msg += `*آرڈر کردہ کٹنگز کی تفصیل:*\n`;

    cartItems.forEach((item, index) => {
      msg += `${index + 1}. ${item.nameUrdu} - ${item.weightKg} کلو\n`;
      msg += `   • کٹنگ کا انداز: ${item.cuttingOption.nameUrdu}\n`;
      msg += `   • کھال: 100% بغیر کھال (اسکن لیس)\n`;
    });

    msg += `---------------------------------\n`;
    msg += `*کل گوشت کا وزن: ${totalWeightKg} کلوگرام*\n`;
    if (specialNotes) {
      msg += `خصوصی ہدایات: ${specialNotes}\n`;
    }
    msg += `---------------------------------\n`;
    msg += `سی ای او: راجہ عبداللہ\n`;
    msg += `شاپ: دکان نمبر 2، بٹی پلازہ، اعوان مارکیٹ، خیابانِ سرسید، راولپنڈی\n`;
    msg += `براہ کرم آج کا لائیو ریٹ اور ڈیلیوری کا وقت بتا دیں۔ شکریہ!`;

    return encodeURIComponent(msg);
  };

  const handleSendToWhatsAppDirectly = () => {
    window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${generateWhatsAppOrderText()}`, '_blank');
  };

  const handleSaveAndConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !phone.trim()) {
      setFormError(isUrdu ? 'براہ کرم اپنا نام اور فون نمبر درج فرمائیں۔' : 'Please enter your name and phone number.');
      return;
    }
    if (fulfillmentType === 'delivery' && !address.trim()) {
      setFormError(isUrdu ? 'ڈیلیوری کے لیے گھر کا مکمل پتہ ضروری ہے۔' : 'Please provide complete delivery address.');
      return;
    }

    setIsSubmitting(true);
    const generatedOrderId = `RB-${Date.now().toString().slice(-6)}`;
    const timeSlotLabel =
      timeSlot === 'morning'
        ? isUrdu ? 'صبح 8:00 تا 12:00 بجے (تازہ فجر بیچ)' : 'Morning: 8:00 AM - 12:00 PM'
        : timeSlot === 'afternoon'
        ? isUrdu ? 'دوپہر 12:00 تا 4:00 بجے' : 'Afternoon: 12:00 PM - 4:00 PM'
        : isUrdu ? 'شام 4:00 تا 9:00 بجے (شام بیچ)' : 'Evening: 4:00 PM - 9:00 PM';

    const customerInfo: CustomerInfo = {
      name: customerName,
      phone,
      email,
      fulfillmentType,
      address: fulfillmentType === 'delivery' ? address : STORE_INFO.addressUrdu,
      area,
      timeSlot: timeSlotLabel,
      specialNotes,
      paymentMethod: 'cod'
    };

    const newOrder: OrderDetails = {
      orderId: generatedOrderId,
      customerInfo,
      items: [...cartItems],
      subtotal: 0,
      deliveryFee: 0,
      totalAmount: 0,
      date: new Date().toLocaleDateString('en-PK', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      status: 'confirmed',
      estimatedTime: fulfillmentType === 'pickup' ? '30-45 Minutes' : '45-90 Minutes'
    };

    setTimeout(() => {
      setIsSubmitting(false);
      clearCart();
      setIsCartOpen(false);
      setCheckoutStep('cart');
      onOrderConfirmed(newOrder);

      // Also trigger WhatsApp for the customer automatically
      window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${generateWhatsAppOrderText()}`, '_blank');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-stone-950/70 backdrop-blur-xs transition-opacity cursor-pointer"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          {/* Top Header */}
          <div className="p-4 sm:p-5 border-b border-stone-200 bg-stone-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              <h2 className="text-base font-bold text-white">
                {checkoutStep === 'cart'
                  ? (isUrdu ? 'آپ کی آرڈر لسٹ' : 'Your Order List')
                  : (isUrdu ? 'ڈیلیوری و واٹس ایپ تصدیق' : 'Delivery & WhatsApp Confirmation')}
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Fulfillment Type Toggle (Delivery vs Pickup) */}
          <div className="bg-stone-100 p-2 border-b border-stone-200">
            <div className="grid grid-cols-2 gap-2 bg-stone-200/80 p-1 rounded-lg text-xs font-semibold">
              <button
                type="button"
                onClick={() => setFulfillmentType('delivery')}
                className={`py-2 px-3 rounded-md flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  fulfillmentType === 'delivery'
                    ? 'bg-white text-stone-950 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Truck className="w-4 h-4 text-amber-600" />
                <span>{isUrdu ? 'ہوم ڈیلیوری' : 'Home Delivery'}</span>
              </button>
              <button
                type="button"
                onClick={() => setFulfillmentType('pickup')}
                className={`py-2 px-3 rounded-md flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  fulfillmentType === 'pickup'
                    ? 'bg-white text-stone-950 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Store className="w-4 h-4 text-amber-600" />
                <span>{isUrdu ? 'دکان سے پک اپ' : 'Store Pickup'}</span>
              </button>
            </div>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {/* STEP 1: CART ITEMS */}
            {checkoutStep === 'cart' && (
              <>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-xs flex items-center gap-2 text-emerald-900">
                  <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    {isUrdu
                      ? 'آرڈر کی حتمی تصدیق اور آج کا لائیو ریٹ براہِ راست واٹس ایپ پر طے ہوگا۔'
                      : 'Final order confirmation and live daily rates are handled directly on WhatsApp.'}
                  </span>
                </div>

                {/* Items List */}
                {cartItems.length > 0 ? (
                  <div className="space-y-3">
                    {cartItems.map(item => (
                      <div
                        key={item.cartItemId}
                        className="bg-stone-50 border border-stone-200 rounded-xl p-3 flex gap-3 items-center justify-between"
                      >
                        <div className="w-14 h-14 rounded-lg bg-stone-200 overflow-hidden shrink-0">
                          <img
                            src={item.image}
                            alt={isUrdu ? item.nameUrdu : item.nameEn}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-stone-900 truncate">
                            {isUrdu ? item.nameUrdu : item.nameEn}
                          </h4>
                          <div className="text-[11px] text-stone-500 truncate mt-0.5">
                            {isUrdu ? item.cuttingOption.nameUrdu : item.cuttingOption.nameEn} · {isUrdu ? '100% اسکن لیس' : '100% Skinless'}
                          </div>
                          <div className="text-xs font-semibold text-stone-700 mt-1">
                            {isUrdu ? `وزن: ${item.weightKg} کلوگرام` : `Weight: ${item.weightKg} kg`}
                          </div>
                        </div>

                        {/* Weight Controller */}
                        <div className="flex flex-col items-end gap-1 shrink-0">
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.cartItemId)}
                            className="text-stone-400 hover:text-rose-600 transition-colors p-1"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>

                          <div className="flex items-center gap-1 border border-stone-200 rounded bg-white">
                            <button
                              type="button"
                              onClick={() => updateItemWeight(item.cartItemId, item.weightKg - 0.5)}
                              className="w-6 h-6 flex items-center justify-center text-stone-600 hover:bg-stone-100"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-[11px] font-mono font-bold px-1 tabular-nums">
                              {item.weightKg}k
                            </span>
                            <button
                              type="button"
                              onClick={() => updateItemWeight(item.cartItemId, item.weightKg + 0.5)}
                              className="w-6 h-6 flex items-center justify-center text-stone-600 hover:bg-stone-100"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 text-stone-500">
                    <ShoppingBag className="w-12 h-12 text-stone-300 mx-auto mb-3" />
                    <p className="text-sm font-semibold text-stone-700">
                      {isUrdu ? 'آپ کی لسٹ فی الحال خالی ہے' : 'Your list is currently empty'}
                    </p>
                    <p className="text-xs text-stone-500 mt-1">
                      {isUrdu ? 'چکن مصنوعات میں سے اپنی پسند کی کٹنگ شامل کریں۔' : 'Select chicken cuts and add them to your order.'}
                    </p>
                  </div>
                )}
              </>
            )}

            {/* STEP 2: CUSTOMER & FULFILLMENT DETAILS */}
            {checkoutStep === 'details' && (
              <form id="details-form" onSubmit={handleSaveAndConfirm} className="space-y-4 text-xs">
                {formError && (
                  <div className="bg-rose-50 border border-rose-200 text-rose-700 p-2.5 rounded-lg text-xs">
                    {formError}
                  </div>
                )}

                <div>
                  <label className="block text-stone-700 font-semibold mb-1">
                    {isUrdu ? 'گاہک کا نام *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={e => setCustomerName(e.target.value)}
                    placeholder={isUrdu ? 'مثلاً محمد عثمان' : 'e.g. Usman Tariq'}
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-900 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 font-semibold mb-1">
                    {isUrdu ? 'موبائل نمبر / واٹس ایپ نمبر *' : 'Phone / WhatsApp Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="0300 1234567"
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-900 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                {/* Delivery or Pickup Specific Fields */}
                {fulfillmentType === 'delivery' ? (
                  <>
                    <div>
                      <label className="block text-stone-700 font-semibold mb-1">
                        {isUrdu ? 'گھر / فلیٹ کا مکمل پتہ *' : 'Delivery Address *'}
                      </label>
                      <textarea
                        required
                        rows={2}
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        placeholder={isUrdu ? 'مکان نمبر، گلی، بلاک، نزدیکی مسجد یا لینڈ مارک' : 'House #, Street, Block, Landmark'}
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-900 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-stone-700 font-semibold mb-1">
                        {isUrdu ? 'علاقہ / ٹاؤن:' : 'Area / Neighborhood:'}
                      </label>
                      <select
                        value={area}
                        onChange={e => setArea(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-900 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      >
                        <option value="Khayaban-e-Sir Syed">خیابانِ سرسید (Khayaban-e-Sir Syed)</option>
                        <option value="Awan Market Road">اعوان مارکیٹ روڈ (Awan Market Rd)</option>
                        <option value="Satellite Town">سیٹلائٹ ٹاؤن (Satellite Town)</option>
                        <option value="Katarian / Sector I-9 & I-10">کٹاریاں / سیکٹر I-9 & I-10</option>
                        <option value="Westridge">ویسٹریج راولپنڈی (Westridge)</option>
                        <option value="Saddar Rawalpindi">صدر راولپنڈی (Saddar)</option>
                        <option value="Chaklala / Airport Road">چکلالہ اسکیم / ائیرپورٹ روڈ</option>
                        <option value="Bahria Town / DHA">بحریہ ٹاؤن / ڈی ایچ اے</option>
                        <option value="Other Area">دیگر علاقہ (Other Area)</option>
                      </select>
                    </div>
                  </>
                ) : (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-stone-700 space-y-1">
                    <div className="font-bold text-stone-900 flex items-center gap-1.5">
                      <Store className="w-4 h-4 text-amber-700" />
                      <span>{isUrdu ? 'پک اپ لوکیشن:' : 'Pickup Location:'}</span>
                    </div>
                    <p>{isUrdu ? STORE_INFO.addressUrdu : STORE_INFO.addressEn}</p>
                    <p className="text-[11px] text-amber-800">
                      {isUrdu ? 'آرڈر دینے کے بعد 30 منٹ میں تازہ گوشت تیار ملے گا۔' : 'Order ready in 30 minutes after placement.'}
                    </p>
                  </div>
                )}

                {/* Time Slot Selection */}
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">
                    {isUrdu ? 'وقت کا انتخاب (سلاٹ):' : 'Preferred Timing Slot:'}
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      { id: 'morning', labelUrdu: 'صبح 8:00 تا 12:00 (تازہ ترین صبح کا ذبیحہ)', labelEn: 'Morning (8:00 AM - 12:00 PM)' },
                      { id: 'afternoon', labelUrdu: 'دوپہر 12:00 تا 4:00 بجے', labelEn: 'Afternoon (12:00 PM - 4:00 PM)' },
                      { id: 'evening', labelUrdu: 'شام 4:00 تا 9:00 بجے (شام کا تازہ بیچ)', labelEn: 'Evening (4:00 PM - 9:00 PM)' }
                    ].map(slot => (
                      <label
                        key={slot.id}
                        className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer text-xs ${
                          timeSlot === slot.id
                            ? 'bg-amber-50 border-amber-500 font-semibold text-stone-900'
                            : 'bg-stone-50 border-stone-200 text-stone-700'
                        }`}
                      >
                        <input
                          type="radio"
                          name="timeSlot"
                          checked={timeSlot === slot.id}
                          onChange={() => setTimeSlot(slot.id)}
                          className="accent-amber-600"
                        />
                        <span>{isUrdu ? slot.labelUrdu : slot.labelEn}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Special Butchery Notes */}
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">
                    {isUrdu ? 'قصاب کے لیے خصوصی ہدایات (اختیاری):' : 'Special Butchery Instructions (Optional):'}
                  </label>
                  <input
                    type="text"
                    value={specialNotes}
                    onChange={e => setSpecialNotes(e.target.value)}
                    placeholder={isUrdu ? 'مثلاً بوٹیاں چھوٹی رکھیں، گردن الگ کر دیں' : 'e.g. Small pieces, keep neck separate'}
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-900 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>
              </form>
            )}
          </div>

          {/* Bottom Bar: Direct WhatsApp Ordering */}
          <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50 space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="text-stone-600 font-medium">
                {isUrdu ? 'کل منتخب شدہ گوشت:' : 'Total Meat Weight:'}
              </span>
              <span className="font-mono font-bold text-stone-900 text-sm">
                {totalWeightKg} kg
              </span>
            </div>

            {checkoutStep === 'cart' ? (
              <div className="space-y-2">
                {/* 1-Click WhatsApp Order Button */}
                <button
                  type="button"
                  onClick={handleSendToWhatsAppDirectly}
                  disabled={cartItems.length === 0}
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm text-xs sm:text-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{isUrdu ? 'واٹس ایپ پر فوری آرڈر بھیجیں' : 'Send Order to WhatsApp (0340-5519895)'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setCheckoutStep('details')}
                  disabled={cartItems.length === 0}
                  className="w-full py-2.5 px-4 bg-stone-900 hover:bg-stone-800 disabled:opacity-50 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{isUrdu ? 'پتہ اور ہدایات درج کریں' : 'Add Address & Details'}</span>
                  {isUrdu ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setCheckoutStep('cart')}
                  className="py-2.5 px-3 bg-stone-200 hover:bg-stone-300 text-stone-700 font-semibold rounded-lg text-xs cursor-pointer"
                >
                  {isUrdu ? 'واپس' : 'Back'}
                </button>

                <button
                  form="details-form"
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold rounded-lg text-xs flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{isUrdu ? 'واٹس ایپ پر آرڈر مکمل کریں' : 'Confirm on WhatsApp'}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
