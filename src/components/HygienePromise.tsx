import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Sparkles, ThermometerSnowflake, CheckCheck, Clock } from 'lucide-react';

export const HygienePromise: React.FC = () => {
  const { isUrdu } = useLanguage();

  const standards = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-600" />,
      titleUrdu: '100% دستی شرعی ذبیحہ',
      titleEn: 'Strict Manual Shariah Slaughter',
      descUrdu: 'ہر پرندے کو تکبیر کے ساتھ ہاتھ سے ذبح کیا جاتا ہے، کسی مکینیکل بلیڈ یا غیر شرعی طریقوں کا شائبہ تک نہیں۔',
      descEn: 'Every bird is manually slaughtered adhering to authentic Islamic halal tenets with zero automated mechanical stunning.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-600" />,
      titleUrdu: 'حفظانِ صحت اور پاک پانی سے صفائی',
      titleEn: 'Pure Water & Clean Butchery',
      descUrdu: 'ذبیحہ کے بعد گوشت کو جراثیم سے پاک فلٹر شدہ پانی سے دھویا جاتا ہے اور خون کے قطرے مکمل خارج کیے جاتے ہیں۔',
      descEn: 'Thoroughly washed with purified water and drained clean of residual blood on sanitised food-grade stainless surfaces.'
    },
    {
      icon: <ThermometerSnowflake className="w-6 h-6 text-amber-600" />,
      titleUrdu: 'کولڈ چین اور چلڈ پیکنگ',
      titleEn: 'Insulated Cold Chain Logistics',
      descUrdu: 'ترسیل کے دوران گوشت کی تازگی اور قدرتی ذائقہ محفوظ رکھنے کے لیے تھرمل انسولیٹڈ بیگز کا استعمال۔',
      descEn: 'Packed in insulated thermal boxes with temperature monitoring to ensure meat reaches you in natural pristine condition.'
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-600" />,
      titleUrdu: 'صفر باسی گوشت پالیسی',
      titleEn: 'Strict Zero-Leftover Fresh Policy',
      descUrdu: 'ہم گزشتہ روز کا بچا ہوا گوشت فریز کر کے فروخت نہیں کرتے۔ روزانہ فجر بعد نئی لاٹ کا ذبیحہ ہوتا ہے۔',
      descEn: 'We never carry over or re-freeze leftover stock. Each morning brings fresh live birds from certified bio-secure poultry farms.'
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
            {isUrdu ? 'ہمارا پاکیزہ معیار' : 'Hygiene & Quality Standard'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 mb-3">
            {isUrdu ? 'آر اینڈ بی چکن میٹ کا حفظانِ صحت کا عزم' : 'Our Quality & Hygiene Commitments'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            {isUrdu
              ? 'صحت مند گوشت آپ کے خاندان کی صحت کا ضامن ہے۔ ہم صفائی اور حلال معیار کے ہر مرحلے پر خود نگرانی کرتے ہیں۔'
              : 'Pure, wholesome poultry begins with sanitary facilities and strict ethical standards.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((std, idx) => (
            <div
              key={idx}
              className="bg-stone-50 border border-stone-200/80 rounded-xl p-6 hover:border-amber-400 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                {std.icon}
              </div>
              <h3 className="text-base font-bold text-stone-900 mb-2">
                {isUrdu ? std.titleUrdu : std.titleEn}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {isUrdu ? std.descUrdu : std.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
