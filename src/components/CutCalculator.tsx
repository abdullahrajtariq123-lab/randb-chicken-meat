import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { Calculator, Users, Utensils, Check, ShoppingBag, MessageCircle } from 'lucide-react';
import { STORE_INFO } from '../data/products';

export const CutCalculator: React.FC = () => {
  const { isUrdu } = useLanguage();
  const { addToCart } = useCart();

  const [dishType, setDishType] = useState<'karahi' | 'biryani' | 'handi' | 'bbq' | 'roast'>('karahi');
  const [peopleCount, setPeopleCount] = useState<number>(6);
  const [addedNotice, setAddedNotice] = useState(false);

  // Standard serving math:
  // Karahi / Handi: ~250g clean meat per person
  // Biryani: ~200g meat per person
  // BBQ / Roast: ~300g per person
  const perPersonGrams =
    dishType === 'karahi' ? 250 : dishType === 'biryani' ? 220 : dishType === 'handi' ? 200 : 300;

  const totalRequiredKg = Math.max(1, Math.round(((peopleCount * perPersonGrams) / 1000) * 10) / 10);

  // Corresponding product based on dish
  const matchedProduct =
    dishType === 'karahi'
      ? PRODUCTS.find(p => p.id === 'karahi-cut')!
      : dishType === 'biryani'
      ? PRODUCTS.find(p => p.id === 'biryani-cut')!
      : dishType === 'handi'
      ? PRODUCTS.find(p => p.id === 'boneless-handi-boti')!
      : dishType === 'bbq'
      ? PRODUCTS.find(p => p.id === 'chicken-wings') || PRODUCTS[0]
      : PRODUCTS.find(p => p.id === 'whole-dressed-chicken')!;

  const handleAddCustomToCart = () => {
    addToCart({
      product: matchedProduct,
      cuttingOption: matchedProduct.cuttingOptions[0],
      skinOption: matchedProduct.skinOptions[0],
      weightKg: totalRequiredKg,
      specialInstructions: `${peopleCount} افراد کے لیے 100% اسکن لیس ${dishType.toUpperCase()} کی کٹنگ`
    });

    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 1500);
  };

  const getWhatsAppMessage = () => {
    const dishLabel =
      dishType === 'karahi'
        ? 'چکن کڑاہی'
        : dishType === 'biryani'
        ? 'چکن بریانی'
        : dishType === 'handi'
        ? 'بون لیس ہانڈی'
        : dishType === 'bbq'
        ? 'باربی کیو تکہ'
        : 'روسٹ/چرغہ';

    return encodeURIComponent(
      `السلام علیکم راجہ عبداللہ صاحب! مجھے آر اینڈ بی چکن میٹ سے ${peopleCount} افراد کے لیے 100% اسکن لیس چکن آرڈر کرنا ہے:
• ڈش: ${dishLabel}
• تجویز کردہ کٹنگ: ${matchedProduct.nameUrdu}
• خالص اسکن لیس وزن: ${totalRequiredKg} کلوگرام
• کھال: 100% بغیر کھال (اسکن لیس)

براہ کرم آج کا لائیو ریٹ اور تیاری کا وقت بتا دیں۔ شکریہ!`
    );
  };

  return (
    <section id="calculator" className="py-16 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
            {isUrdu ? 'سمارٹ گوشت تخمینہ کار' : 'Meal & Portion Estimator'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 mb-3">
            {isUrdu ? 'دعوت یا کھانے کے حساب سے چکن کا تخمینہ لگائیں' : 'Calculate Exact Meat Portions for Your Gathering'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            {isUrdu
              ? 'افراد کی تعداد اور ڈش کا انتخاب کریں، ہمارا سسٹم خودکار طور پر بتائے گا کہ آپ کو کتنا گوشت چاہیے تاکہ گوشت کم نہ پڑے۔'
              : 'Select your recipe and number of guests to get the exact butcher-recommended weight and cutting style.'}
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Step Controls */}
            <div className="md:col-span-7 space-y-6">
              {/* Step 1: Dish Selection */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                  <Utensils className="w-4 h-4 text-amber-600" />
                  <span>{isUrdu ? '1. آپ کیا ڈش پکا رہے ہیں؟' : '1. What are you cooking?'}</span>
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {[
                    { id: 'karahi', labelUrdu: 'کڑاہی', labelEn: 'Karahi' },
                    { id: 'biryani', labelUrdu: 'بریانی', labelEn: 'Biryani' },
                    { id: 'handi', labelUrdu: 'بون لیس ہانڈی', labelEn: 'Handi' },
                    { id: 'bbq', labelUrdu: 'باربی کیو', labelEn: 'BBQ' },
                    { id: 'roast', labelUrdu: 'روسٹ/چرغہ', labelEn: 'Roast' }
                  ].map(dish => (
                    <button
                      key={dish.id}
                      type="button"
                      onClick={() => setDishType(dish.id as any)}
                      className={`py-2 px-1 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                        dishType === dish.id
                          ? 'bg-stone-900 text-amber-400 border-stone-900 shadow-xs'
                          : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      {isUrdu ? dish.labelUrdu : dish.labelEn}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: People Count */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-stone-700 uppercase tracking-wider">
                    <Users className="w-4 h-4 text-amber-600" />
                    <span>{isUrdu ? '2. افراد / مہمانوں کی تعداد:' : '2. Number of Guests:'}</span>
                  </label>
                  <span className="font-mono font-bold text-stone-900 text-sm">
                    {peopleCount} {isUrdu ? 'افراد' : 'People'}
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="30"
                  step="1"
                  value={peopleCount}
                  onChange={e => setPeopleCount(parseInt(e.target.value))}
                  className="w-full accent-amber-600 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-stone-500 font-mono mt-1">
                  <span>2 {isUrdu ? 'افراد' : 'ppl'}</span>
                  <span>10 {isUrdu ? 'افراد' : 'ppl'}</span>
                  <span>20 {isUrdu ? 'افراد' : 'ppl'}</span>
                  <span>30 {isUrdu ? 'افراد' : 'ppl'}</span>
                </div>
              </div>

              {/* Step 3: 100% Skinless Standard */}
              <div className="bg-amber-50/80 border border-amber-200/90 rounded-xl p-3.5 flex items-center gap-3">
                <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-stone-900">
                    {isUrdu ? '100% خالص بغیر کھال (اسکن لیس) تیار' : '100% Clean Skinless Guaranteed'}
                  </div>
                  <div className="text-[11px] text-stone-600">
                    {isUrdu
                      ? 'آر اینڈ بی چکن میٹ پر تمام گوشت کھال، چربی اور آلائشوں سے مکمل صاف کر کے دیا جاتا ہے۔'
                      : 'All meat at R and B Chicken Meat is meticulously prepared 100% skinless and trimmed clean.'}
                  </div>
                </div>
              </div>
            </div>

            {/* Calculated Result Card */}
            <div className="md:col-span-5 bg-stone-900 text-white rounded-xl p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-1">
                  {isUrdu ? 'قصاب کا تجویز کردہ تخمینہ' : 'Butcher Recommended Order'}
                </div>
                <h4 className="text-base font-bold text-white mb-4">
                  {isUrdu ? matchedProduct.nameUrdu : matchedProduct.nameEn}
                </h4>

                <div className="space-y-3 pb-4 border-b border-stone-800 text-xs">
                  <div className="flex justify-between items-center text-stone-300">
                    <span>{isUrdu ? 'تجویز کردہ خالص وزن:' : 'Recommended Net Weight:'}</span>
                    <span className="font-mono font-bold text-amber-300 text-sm tabular-nums">
                      {totalRequiredKg} kg
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-stone-300">
                    <span>{isUrdu ? 'بوٹیوں کی تعداد (تخمیناً):' : 'Estimated Pieces:'}</span>
                    <span className="font-mono text-stone-100 tabular-nums">
                      ~{Math.round(totalRequiredKg * 16)} {isUrdu ? 'بوٹیاں' : 'pieces'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-stone-300">
                    <span>{isUrdu ? 'ریٹ کی قسم:' : 'Rate Policy:'}</span>
                    <span className="text-amber-400 font-semibold">
                      {isUrdu ? 'آج کے لائیو مارکیٹ ریٹ کے مطابق' : 'Daily Live Market Rate'}
                    </span>
                  </div>
                </div>

                <div className="pt-4 mb-6">
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {isUrdu
                      ? `یہ تخمینہ ${peopleCount} افراد کی بھرپور دعوت کے لیے کافی ہے۔ حتمی قیمت اور کٹنگ کے لیے راجہ عبداللہ صاحب سے واٹس ایپ پر رابطہ کریں۔`
                      : `Portion estimated for ${peopleCount} guests. For exact live rate & custom cutting, connect with Raja Abdullah on WhatsApp.`}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <a
                  href={`https://wa.me/${STORE_INFO.whatsapp}?text=${getWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{isUrdu ? 'یہ آرڈر واٹس ایپ پر بھیجیں' : 'Send this Portion to WhatsApp'}</span>
                </a>

                <button
                  type="button"
                  onClick={handleAddCustomToCart}
                  className={`w-full py-2 px-3 rounded-lg font-medium text-xs flex items-center justify-center gap-2 transition-all cursor-pointer border ${
                    addedNotice
                      ? 'bg-amber-500/20 text-amber-300 border-amber-400/50'
                      : 'bg-stone-800 hover:bg-stone-700 text-stone-200 border-stone-700'
                  }`}
                >
                  {addedNotice ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>{isUrdu ? 'آرڈر لسٹ میں شامل کر دیا گیا!' : 'Added to Order List!'}</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>{isUrdu ? 'آرڈر لسٹ میں شامل کریں' : 'Add Portion to Order List'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
