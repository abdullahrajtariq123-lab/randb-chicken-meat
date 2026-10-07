import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown, Star, MessageSquare } from 'lucide-react';

export const ReviewsAndFaq: React.FC = () => {
  const { isUrdu } = useLanguage();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const reviews = [
    {
      nameUrdu: 'محترمہ ثناء طارق',
      nameEn: 'Mrs. Sana Tariq',
      roleUrdu: 'گھریلو خاتون، خیابانِ سرسید، راولپنڈی',
      roleEn: 'Home Cook, Khayaban-e-Sir Syed, Rawalpindi',
      textUrdu: 'آر اینڈ بی چکن میٹ سے پچھلے ایک سال سے منگوا رہی ہوں۔ ان کی کڑاہی کٹ کی بوٹیاں بالکل ہموار ہوتی ہیں اور گوشت سے بالکل بھی ناگوار بو نہیں آتی۔ ڈیلیوری ہمیشہ وقت پر ہوتی ہے۔',
      textEn: 'Been ordering from R and B Chicken for over a year. The Karahi cut pieces are uniformly trimmed and the meat smells pristine. Always punctual delivery.',
      rating: 5
    },
    {
      nameUrdu: 'شیف عاصم رضوی',
      nameEn: 'Chef Asim Rizvi',
      roleUrdu: 'ہیڈ شیف، دہلی کڑاہی ہاؤس',
      roleEn: 'Head Chef, Traditional Dining',
      textUrdu: 'ریسٹورنٹ کے لیے سب سے بڑا مسئلہ گوشت میں وزن کی کمی اور کٹنگ کی بے ترتیبی تھا۔ آر اینڈ بی چکن میٹ کا بون لیس فلٹ اور کڑاہی کٹ 100% پرفیکٹ نکلتا ہے۔ ہم ان کے مستقل ہول سیل کلائنٹ ہیں۔',
      textEn: 'Our restaurant depends heavily on precise breast cuts and accurate net weight. R and B has never disappointed us in quality or morning timelines.',
      rating: 5
    },
    {
      nameUrdu: 'بلال اشرف',
      nameEn: 'Bilal Ashraf',
      roleUrdu: 'فٹنس ایتھلیٹ',
      roleEn: 'Fitness Athlete',
      textUrdu: 'ڈائیٹ کے لیے مجھے روزانہ 500 گرام خالص بون لیس بریسٹ چاہیے ہوتا ہے۔ آر اینڈ بی کا فلٹ چربی سے بالکل پاک ہوتا ہے اور ذائقہ بھی قدرتی اور رسیلا رہتا ہے۔',
      textEn: 'Strict fitness meal prep requires zero-fat breast fillets. R and B cuts are perfectly trimmed, fresh and cook up so juicy.',
      rating: 5
    }
  ];

  const faqs = [
    {
      qUrdu: 'کیا گوشت روزانہ تازہ ذبح ہوتا ہے یا فریز کیا ہوا ہوتا ہے؟',
      qEn: 'Is your chicken meat freshly slaughtered daily or frozen?',
      aUrdu: 'آر اینڈ بی چکن میٹ پر ہم باسی فریز گوشت کے سخت خلاف ہیں۔ ہر صبح فجر کے بعد تازہ زندہ مرغیوں کا شرعی ذبیحہ کیا جاتا ہے اور اسی دن کسٹمرز کو سپلائی کیا جاتا ہے۔',
      aEn: 'We have a strict fresh-only policy. All birds are slaughtered fresh each morning after Fajr and delivered fresh on the same day. We never sell frozen leftovers.'
    },
    {
      qUrdu: 'زندہ وزن اور صافی وزن میں کتنا فرق ہوتا ہے؟',
      qEn: 'What is the yield difference between live weight and clean dressed meat?',
      aUrdu: 'ایک زندہ مرغی میں سے پر، خون، فالتو چربی اور آلائشیں نکلنے کے بعد تقریباً 65% سے 68% خالص صافی گوشت حاصل ہوتا ہے۔ ہمارے تمام صافی گوشت کے ریٹس خالص تیار گوشت کے مطابق ہوتے ہیں۔',
      aEn: 'After removing feathers, blood, and inedible parts, a live chicken yields about 65% to 68% net clean meat. Our dressed meat prices reflect pure, ready-to-cook meat.'
    },
    {
      qUrdu: 'کیا من پسند کٹنگ کے کوئی اضافی چارجز ہیں؟',
      qEn: 'Are there any extra charges for custom cutting styles?',
      aUrdu: 'جی نہیں، بالکل نہیں۔ چاہے آپ چھوٹی کڑاہی کٹ کروائیں، بریانی کٹ، بون لیس بوٹی یا چکن قیمہ — تمام کٹنگز بالکل مفت اور ماہر قصابوں کے ذریعے کی جاتی ہیں۔',
      aEn: 'No, not at all! Custom butchery (Karahi cut, Biryani cut, boneless cubes, mince) is provided free of charge by our master butchers.'
    },
    {
      qUrdu: 'ڈیلیوری کتنی دیر میں پہنچ جاتی ہے اور ڈیلیوری چارجز کیا ہیں؟',
      qEn: 'How long does delivery take and what are the charges?',
      aUrdu: 'شہر کے اندر آرڈر 45 سے 90 منٹ میں چلڈ انسولیٹڈ پیکنگ میں پہنچا دیا جاتا ہے۔ 1500 روپے سے زائد کے آرڈر پر ڈیلیوری بالکل مفت ہے، جبکہ اس سے کم پر صرف 150 روپے ڈیلیوری چارجز ہیں۔ دکان سے خود پک اپ کی صورت میں کوئی چارجز نہیں۔',
      aEn: 'Deliveries typically arrive within 45 to 90 minutes in insulated bags. Delivery is 100% free on orders over Rs. 1,500 (standard fee is Rs. 150 for smaller orders). Store pickup is always completely free.'
    },
    {
      qUrdu: 'پیمنٹ کے کون سے طریقے دستیاب ہیں؟',
      qEn: 'Which payment methods are accepted?',
      aUrdu: 'آپ کیش آن ڈیلیوری (گوشت وصول کرنے کے بعد کیش ادا کرنا)، کیش آن پک اپ، JazzCash، EasyPaisa، یا بینک ٹرانسفر کے ذریعے باآسانی ادائیگی کر سکتے ہیں۔',
      aEn: 'We accept Cash on Delivery (COD), Cash on Store Pickup, JazzCash, EasyPaisa, Debit/Credit Card, and direct bank transfers.'
    }
  ];

  return (
    <section className="py-16 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
              {isUrdu ? 'ہمارے مطمئن گاہک' : 'Customer Testimonials'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 mb-3">
              {isUrdu ? 'گاہکوں کا آر اینڈ بی چکن پر اعتماد' : 'Trusted by Thousands of Households & Chefs'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white border border-stone-200/90 rounded-xl p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-6 italic">
                    "{isUrdu ? rev.textUrdu : rev.textEn}"
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100">
                  <div className="text-sm font-bold text-stone-900">
                    {isUrdu ? rev.nameUrdu : rev.nameEn}
                  </div>
                  <div className="text-xs text-stone-500">
                    {isUrdu ? rev.roleUrdu : rev.roleEn}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
              {isUrdu ? 'رہنمائی اور سوالات' : 'Got Questions?'}
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-stone-900">
              {isUrdu ? 'اکثر پوچھے جانے والے سوالات' : 'Frequently Asked Questions'}
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-stone-200 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-stone-900 hover:text-amber-700 cursor-pointer"
                  >
                    <span>{isUrdu ? faq.qUrdu : faq.qEn}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-amber-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                      {isUrdu ? faq.aUrdu : faq.aEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
