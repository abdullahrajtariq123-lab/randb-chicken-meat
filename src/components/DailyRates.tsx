import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { DAILY_RATES, STORE_INFO } from '../data/products';
import { Calculator, CheckCircle2, MessageCircle, Clock, ShieldCheck } from 'lucide-react';

export const DailyRates: React.FC = () => {
  const { isUrdu } = useLanguage();
  const [liveKgInput, setLiveKgInput] = useState<number>(2.2);

  // Poultry industry standard: 1 kg live bird yields approx 650g - 680g net clean meat (67% dressing percentage)
  const estimatedCleanKg = Math.round(liveKgInput * 0.67 * 10) / 10;
  const wasteKg = Math.round((liveKgInput - estimatedCleanKg) * 10) / 10;

  const askRateOnWhatsApp = (itemName: string) => {
    const text = isUrdu
      ? `السلام علیکم راجہ عبداللہ صاحب! مجھے آر اینڈ بی چکن میٹ سے "${itemName}" کا آج کا تازہ ترین سرکاری ریٹ معلوم کرنا ہے اور آرڈر کرنا ہے۔`
      : `Hello Raja Abdullah! I would like to know today's fresh market rate for "${itemName}" and place an order.`;

    window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="daily-rates" className="py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
              {isUrdu ? 'روزانہ مارکیٹ اپڈیٹ و کٹنگ' : 'Daily Market Rates & Custom Cuts'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
              {isUrdu ? 'روزانہ تازہ ترین ریٹ کی معلومات' : "Daily Market Rate Inquiries"}
            </h2>
          </div>
          <div className="text-xs text-stone-500 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>
              {isUrdu
                ? 'ہر صبح فجر بعد مارکیٹ کمیٹی ریٹس کے مطابق تازہ ترین نرخ'
                : 'Rates updated every morning as per official market committee'}
            </span>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-amber-600 shrink-0" />
            <p className="text-xs text-amber-900 leading-relaxed">
              {isUrdu
                ? 'مرغی کے ریٹ روزانہ صبح مارکیٹ کے مطابق تبدیل ہوتے ہیں۔ آج کا تازہ ترین ریٹ جاننے اور فوری آرڈر کے لیے براہِ راست راجہ عبداللہ صاحب سے واٹس ایپ پر رابطہ فرمائیں۔'
                : 'Poultry rates fluctuate daily per official market committee. For today\'s live rates and instant orders, contact CEO Raja Abdullah directly on WhatsApp.'}
            </p>
          </div>
          <a
            href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(
              isUrdu
                ? 'السلام علیکم راجہ عبداللہ صاحب! مجھے آر اینڈ بی چکن میٹ سے آج کی ریٹ لسٹ اور ہوم ڈیلیوری کی معلومات چاہیے۔'
                : 'Hello Raja Abdullah! Please share today\'s poultry rate list and home delivery info.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold flex items-center gap-2 shrink-0 transition-colors shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{isUrdu ? 'واٹس ایپ پر ریٹ لسٹ منگوائیں' : 'Get Rates on WhatsApp'}</span>
          </a>
        </div>

        {/* Rate Cards Grid (No static prices - Direct WhatsApp Inquiry) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {DAILY_RATES.map(item => (
            <div
              key={item.id}
              className="bg-stone-50 border border-stone-200/80 rounded-xl p-5 hover:border-amber-400 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-semibold text-stone-500">
                    {isUrdu ? item.unitUrdu : item.unitEn}
                  </span>
                  <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                    {isUrdu ? 'روزانہ تازہ ریٹ' : 'Daily Rate'}
                  </span>
                </div>

                <h3 className="text-base font-bold text-stone-900 mb-2">
                  {isUrdu ? item.itemUrdu : item.itemEn}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  {isUrdu
                    ? '100% شرعی ذبیحہ، مکمل صفائی اور من پسند کٹنگ کی سہولت۔'
                    : '100% Halal slaughter, hygienic trimming, and free custom cuts.'}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-200/60">
                <button
                  type="button"
                  onClick={() => askRateOnWhatsApp(isUrdu ? item.itemUrdu : item.itemEn)}
                  className="w-full py-2 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{isUrdu ? 'آج کا ریٹ و آرڈر' : 'Inquire Rate & Order'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Educational Live vs Net Clean Weight Explainer (Zero Prices, Pure Physical Transparency) */}
        <div className="bg-amber-50/50 border border-amber-200/70 rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-amber-800 text-sm font-semibold mb-2">
                <Calculator className="w-4 h-4" />
                <span>{isUrdu ? 'شفاف حساب: زندہ وزن بمقابلہ صافی گوشت' : 'Yield Transparency: Live vs Clean Meat'}</span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                {isUrdu
                  ? 'آپ کو کتنا صاف گوشت ملے گا؟'
                  : 'How much clean meat do you get from a live bird?'}
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed mb-4">
                {isUrdu
                  ? 'اکثر گاہک الجھن کا شکار ہوتے ہیں کہ زندہ مرغی ذبح کرنے کے بعد کتنا گوشت دیتی ہے۔ آر اینڈ بی چکن میٹ پر ہم مکمل شفافیت رکھتے ہیں۔ پر، کھال اور آلائشیں نکلنے کے بعد زندہ وزن کا تقریباً 67% خالص تیار گوشت بنتا ہے۔'
                  : 'A whole live chicken yields approximately 67% pure clean dressed meat once feathers, blood, and inedible parts are removed. We guarantee zero hidden water weight and complete honesty in net weight.'}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-stone-700">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  {isUrdu ? 'صفر کیمیکل یا پانی کی ملاوٹ' : 'Zero Water Plumping'}
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  {isUrdu ? 'ڈیجیٹل الیکٹرانک وزن کی رسید' : 'Calibrated Digital Scale'}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-5 rounded-xl border border-amber-200/80 shadow-sm">
              <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-3">
                {isUrdu ? 'زندہ بمقابلہ صافی گوشت کیلکولیٹر' : 'Instant Yield Estimator'}
              </div>

              <div className="mb-4">
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  {isUrdu ? 'زندہ مرغی کا وزن منتخب کریں:' : 'Live Bird Weight (KG):'}
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="1.5"
                    max="4.0"
                    step="0.1"
                    value={liveKgInput}
                    onChange={e => setLiveKgInput(parseFloat(e.target.value))}
                    className="w-full accent-amber-600 cursor-pointer"
                  />
                  <span className="text-sm font-bold font-mono text-stone-900 min-w-14 text-right">
                    {liveKgInput} kg
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-3 border-t border-stone-100 text-xs">
                <div className="flex justify-between items-center text-stone-600">
                  <span>{isUrdu ? 'زندہ وزن:' : 'Live Bird Weight:'}</span>
                  <span className="font-mono font-bold text-stone-900">{liveKgInput} kg</span>
                </div>
                <div className="flex justify-between items-center text-emerald-800 font-bold bg-emerald-50/80 p-2.5 rounded-lg">
                  <span>{isUrdu ? 'خالص تیار گوشت (تخمیناً 67%):' : 'Estimated Net Clean Meat:'}</span>
                  <span className="font-mono text-sm">{estimatedCleanKg} kg</span>
                </div>
                <div className="flex justify-between items-center text-stone-500 text-[11px]">
                  <span>{isUrdu ? 'پر، خون و آلائشیں (33%):' : 'Feathers & Inedibles (33%):'}</span>
                  <span className="font-mono">{wasteKg} kg</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
