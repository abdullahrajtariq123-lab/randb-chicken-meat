import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { OrderDetails } from '../types';
import { STORE_INFO } from '../data/products';
import {
  CheckCircle,
  Truck,
  Store,
  Printer,
  MessageCircle,
  X
} from 'lucide-react';

interface OrderConfirmationModalProps {
  order: OrderDetails | null;
  onClose: () => void;
}

export const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({
  order,
  onClose
}) => {
  const { isUrdu } = useLanguage();

  if (!order) return null;

  const totalWeight = Math.round(order.items.reduce((sum, it) => sum + it.weightKg, 0) * 10) / 10;

  const handlePrint = () => {
    window.print();
  };

  const shareToWhatsApp = () => {
    let msg = `*R and B Chicken Meat - آرڈر کنفرمیشن سلپ*\n`;
    msg += `---------------------------------\n`;
    msg += `آرڈر نمبر: ${order.orderId}\n`;
    msg += `کسٹمر کا نام: ${order.customerInfo.name}\n`;
    msg += `فون: ${order.customerInfo.phone}\n`;
    msg += `طریقہ: ${order.customerInfo.fulfillmentType === 'delivery' ? 'ہوم ڈیلیوری' : 'دکان سے پک اپ'}\n`;
    if (order.customerInfo.fulfillmentType === 'delivery') {
      msg += `پتہ: ${order.customerInfo.address} (${order.customerInfo.area})\n`;
    }
    msg += `ٹائم سلاٹ: ${order.customerInfo.timeSlot}\n\n`;
    msg += `*آرڈر کردہ کٹس کی فہرست:*\n`;
    order.items.forEach((item, idx) => {
      msg += `${idx + 1}. ${item.nameUrdu} (${item.weightKg} کلو)\n`;
      msg += `   • کٹنگ: ${item.cuttingOption.nameUrdu} | کھال: ${item.skinOption.nameUrdu}\n`;
    });
    msg += `---------------------------------\n`;
    msg += `*کل گوشت کا وزن: ${totalWeight} کلوگرام*\n`;
    msg += `ریٹ: آج کے لائیو مارکیٹ ریٹ کے مطابق\n`;
    msg += `سی ای او: راجہ عبداللہ (0340-5519895)\n`;
    msg += `شاپ: دکان نمبر 2، بٹی پلازہ، اعوان مارکیٹ، خیابانِ سرسید، راولپنڈی\n`;
    msg += `شکریہ!`;

    window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-stone-200">
        {/* Success Header */}
        <div className="bg-stone-900 text-white p-6 text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-stone-400 hover:text-white p-1 rounded-lg cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3">
            <CheckCircle className="w-8 h-8" />
          </div>

          <h3 className="text-xl font-bold text-white mb-1">
            {isUrdu ? 'آرڈر درخواست کامیابی سے موصول ہو گئی!' : 'Order Request Placed Successfully!'}
          </h3>
          <p className="text-xs text-stone-300">
            {isUrdu
              ? `آرڈر آئی ڈی: #${order.orderId}`
              : `Order ID: #${order.orderId}`}
          </p>
        </div>

        {/* Status Tracker */}
        <div className="bg-emerald-50 border-b border-emerald-200 px-6 py-4">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 font-semibold text-emerald-800">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span>
                {order.customerInfo.fulfillmentType === 'delivery'
                  ? (isUrdu ? 'تازہ کٹنگ اور ڈیلیوری کی تیاری جاری ہے' : 'Order Confirmed & Preparing')
                  : (isUrdu ? 'دکان سے پک اپ کے لیے 30 منٹ میں تیار' : 'Ready for Pickup in 30 Mins')}
              </span>
            </div>
            <span className="font-mono text-emerald-700 text-[11px] font-bold">{order.estimatedTime}</span>
          </div>
        </div>

        {/* Printable Order Receipt */}
        <div className="p-6 space-y-4 text-xs print:p-0">
          {/* Customer & Fulfillment Info */}
          <div className="grid grid-cols-2 gap-3 bg-stone-50 p-3.5 rounded-xl border border-stone-200">
            <div>
              <span className="text-stone-500 block text-[11px]">
                {isUrdu ? 'کسٹمر کا نام:' : 'Customer:'}
              </span>
              <span className="font-bold text-stone-900">{order.customerInfo.name}</span>
              <span className="text-stone-600 block text-[11px]">{order.customerInfo.phone}</span>
            </div>

            <div>
              <span className="text-stone-500 block text-[11px]">
                {isUrdu ? 'طریقہ و ٹائمنگ:' : 'Fulfillment & Slot:'}
              </span>
              <span className="font-bold text-stone-900">
                {order.customerInfo.fulfillmentType === 'delivery'
                  ? (isUrdu ? 'ہوم ڈیلیوری' : 'Home Delivery')
                  : (isUrdu ? 'دکان سے پک اپ' : 'Store Pickup')}
              </span>
              <span className="text-stone-600 block text-[11px] truncate">
                {order.customerInfo.timeSlot}
              </span>
            </div>

            <div className="col-span-2 pt-2 border-t border-stone-200/60">
              <span className="text-stone-500 block text-[11px]">
                {order.customerInfo.fulfillmentType === 'delivery'
                  ? (isUrdu ? 'ڈیلیوری ایڈریس:' : 'Delivery Address:')
                  : (isUrdu ? 'دکان کا پتہ (پک اپ لوکیشن):' : 'Pickup Store Address:')}
              </span>
              <span className="text-stone-900 font-medium">{order.customerInfo.address}</span>
            </div>
          </div>

          {/* Itemized list */}
          <div>
            <div className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-2">
              {isUrdu ? 'آرڈر کردہ گوشت کی تفصیل:' : 'Itemized Poultry Items:'}
            </div>
            <div className="space-y-2 border-t border-b border-stone-200 py-2.5">
              {order.items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs">
                  <div>
                    <span className="font-bold text-stone-900">
                      {isUrdu ? item.nameUrdu : item.nameEn}
                    </span>
                    <span className="text-stone-500 block text-[11px]">
                      {isUrdu ? item.cuttingOption.nameUrdu : item.cuttingOption.nameEn} · {isUrdu ? item.skinOption.nameUrdu : item.skinOption.nameEn}
                    </span>
                  </div>
                  <span className="font-mono font-bold text-stone-900">
                    {item.weightKg} kg
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Total Weight & WhatsApp Live Rate Note */}
          <div className="space-y-1.5 pt-1 text-xs">
            <div className="flex justify-between text-stone-700 font-medium">
              <span>{isUrdu ? 'کل گوشت کا وزن:' : 'Total Weight:'}</span>
              <span className="font-mono font-bold text-stone-950 text-sm">{totalWeight} kg</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>{isUrdu ? 'ریٹ کی قسم:' : 'Rate Policy:'}</span>
              <span className="font-semibold text-amber-700">
                {isUrdu ? 'روزانہ مارکیٹ ریٹ کے مطابق' : 'Daily Market Rate'}
              </span>
            </div>
            <div className="bg-amber-50 p-2.5 rounded-lg border border-amber-200 text-stone-700 text-[11px] leading-relaxed mt-2">
              {isUrdu
                ? 'راجہ عبداللہ صاحب آپ سے واٹس ایپ پر آج کے سرکاری ریٹ اور ڈیلیوری وقت کی تصدیق فرمائیں گے۔'
                : 'CEO Raja Abdullah will confirm today\'s exact market rate and rider delivery time on WhatsApp.'}
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-200 flex flex-wrap gap-2.5">
          <button
            onClick={shareToWhatsApp}
            className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{isUrdu ? 'واٹس ایپ پر رسید شیئر کریں' : 'Send Slip to Store WhatsApp'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="py-2.5 px-3 bg-stone-200 hover:bg-stone-300 text-stone-800 font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            title="Print Receipt"
          >
            <Printer className="w-4 h-4" />
            <span className="hidden sm:inline">{isUrdu ? 'پرنٹ' : 'Print'}</span>
          </button>

          <button
            onClick={onClose}
            className="py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
          >
            {isUrdu ? 'ٹھیک ہے' : 'Done'}
          </button>
        </div>
      </div>
    </div>
  );
};
