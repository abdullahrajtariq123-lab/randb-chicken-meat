import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { STORE_INFO } from '../data/products';
import { Building2, UtensilsCrossed, PhoneCall, CheckCircle } from 'lucide-react';

export const WholesaleSection: React.FC = () => {
  const { isUrdu } = useLanguage();
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('restaurant');
  const [dailyRequirementKg, setDailyRequirementKg] = useState('25');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWholesaleWhatsApp = () => {
    const text = isUrdu
      ? `السلام علیکم! میرا نام/ادارہ: ${businessName || 'کسٹمر'} ہے۔ ادارہ: ${businessType}۔ ہماری روزانہ/ہفتہ وار چکن کی ضرورت تقریباً ${dailyRequirementKg} کلو ہے۔ ہول سیل نرخ اور سپلائی کی تفصیل درکار ہے۔ فون: ${phone}`
      : `Hello! I am inquiring for wholesale chicken supply for ${businessName || 'Business'}. Requirement: ~${dailyRequirementKg} kg. Contact: ${phone}`;
    return `https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="wholesale" className="py-16 bg-stone-900 text-white border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
              {isUrdu ? 'کمرشل و ہوٹل سپلائی' : 'Commercial & Wholesale'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
              {isUrdu ? 'ہوٹلوں، شادی ہالز اور کیٹررز کے لیے ہول سیل ریٹس' : 'Wholesale Poultry Partner for Banquet Halls & Restaurants'}
            </h2>
            <p className="text-sm text-stone-300 leading-relaxed mb-6">
              {isUrdu
                ? 'آر اینڈ بی چکن میٹ شہر کے درجنوں معروف ہوٹلوں اور شادی ہالز کو روزانہ علی الصبح تازہ، حفظانِ صحت کے اصولوں پر پورا اترنے والا چکن میٹ فراہم کرتا ہے۔ بڑی مقدار کے آرڈرز پر خصوصی رعایتی نرخ اور کسٹمر کی پسندیدہ کٹنگ۔'
                : 'Reliable, early-morning bulk deliveries of certified fresh poultry for culinary businesses. We offer guaranteed delivery windows, customized bulk butchery, and tiered commercial pricing.'}
            </p>

            <div className="space-y-3 mb-8 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{isUrdu ? '10 کلو، 50 کلو اور 100 کلو+ پر خصوصی ہول سیل ڈسکاؤنٹ' : 'Tiered bulk pricing for 10kg, 50kg, and 100kg+ orders'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{isUrdu ? 'صبح 7:00 بجے سے پہلے محفوظ چلڈ گاڑیوں میں ترسیل' : 'Guaranteed early morning delivery in temperature-safe containers'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{isUrdu ? 'یکساں سائز کے روسٹ اور بریانی کٹس تاکہ سرونگ میں آسانی ہو' : 'Uniform portioning to optimize kitchen cost per plate'}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={getWholesaleWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{isUrdu ? 'ہول سیل مینیجر سے واٹس ایپ پر بات کریں' : 'Chat with Wholesale Manager'}</span>
              </a>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-6 bg-stone-800/90 border border-stone-700 rounded-2xl p-6 sm:p-8">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-amber-400" />
              <span>{isUrdu ? 'ہول سیل کوٹیشن کی درخواست' : 'Request Commercial Wholesale Quote'}</span>
            </h3>
            <p className="text-xs text-stone-400 mb-6">
              {isUrdu ? 'اپنی تفصیل درج کریں، ہماری کمرشل ٹیم 15 منٹ میں رابطہ کرے گی' : 'Submit your business details for customized contract rates.'}
            </p>

            {submitted ? (
              <div className="bg-emerald-950/80 border border-emerald-800 rounded-xl p-6 text-center text-emerald-200">
                <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
                <h4 className="font-bold text-sm text-white mb-1">
                  {isUrdu ? 'درخواست موصول ہو گئی ہے!' : 'Inquiry Received!'}
                </h4>
                <p className="text-xs text-stone-300 mb-4">
                  {isUrdu
                    ? 'ہمارا ہول سیل نمائندہ جلد آپ کے فون نمبر پر خصوصی ریٹ لسٹ شیئر کرے گا۔'
                    : 'Our wholesale team will contact you promptly with contract pricing.'}
                </p>
                <a
                  href={getWholesaleWhatsApp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-amber-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>{isUrdu ? 'فوری جواب کے لیے واٹس ایپ پر اوپن کریں →' : 'Open WhatsApp for Instant Rate Sheet →'}</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry} className="space-y-4 text-xs">
                <div>
                  <label className="block text-stone-300 font-medium mb-1">
                    {isUrdu ? 'ہوٹل / شادی ہال / ادارے کا نام:' : 'Business / Hotel / Caterer Name:'}
                  </label>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={e => setBusinessName(e.target.value)}
                    placeholder={isUrdu ? 'مثلاً الحبیب ریسٹورنٹ، گرینڈ مارکی' : 'e.g. Royal Banquet Hall'}
                    className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-white placeholder:text-stone-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-300 font-medium mb-1">
                      {isUrdu ? 'ادارے کی قسم:' : 'Business Type:'}
                    </label>
                    <select
                      value={businessType}
                      onChange={e => setBusinessType(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                    >
                      <option value="restaurant">{isUrdu ? 'ریسٹورنٹ / کڑاہی شاپ' : 'Restaurant / Cafe'}</option>
                      <option value="marriage_hall">{isUrdu ? 'شادی ہال / مارکی' : 'Banquet / Marriage Hall'}</option>
                      <option value="caterer">{isUrdu ? 'کیٹرنگ سروس' : 'Catering Company'}</option>
                      <option value="other">{isUrdu ? 'دیگر کمرشل ادارہ' : 'Other Bulk Buyer'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-stone-300 font-medium mb-1">
                      {isUrdu ? 'روزانہ چکن کی ضرورت (کلو):' : 'Estimated Requirement (KG):'}
                    </label>
                    <input
                      type="number"
                      required
                      min="10"
                      value={dailyRequirementKg}
                      onChange={e => setDailyRequirementKg(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-stone-300 font-medium mb-1">
                    {isUrdu ? 'رابطہ نمبر / واٹس ایپ:' : 'Contact Phone / WhatsApp:'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="0300 1234567"
                    className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-white placeholder:text-stone-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-lg transition-colors cursor-pointer"
                >
                  {isUrdu ? 'ہول سیل کوٹیشن حاصل کریں' : 'Submit Wholesale Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
