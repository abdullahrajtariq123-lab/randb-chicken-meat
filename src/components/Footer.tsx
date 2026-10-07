import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { STORE_INFO } from '../data/products';
import { MapPin, Phone, Clock, Mail, ShieldCheck, Share2 } from 'lucide-react';

interface FooterProps {
  onOpenShareModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenShareModal }) => {
  const { isUrdu } = useLanguage();

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Bio */}
          <div>
            <span className="text-xl font-bold text-white block mb-3">
              {isUrdu ? STORE_INFO.nameUrdu : STORE_INFO.nameEn}
            </span>
            <p className="text-xs text-stone-400 leading-relaxed mb-4">
              {isUrdu ? STORE_INFO.taglineUrdu : STORE_INFO.taglineEn}
            </p>
            <div className="text-xs text-amber-400 flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{isUrdu ? '100% حلال ذبیحہ اور تصدیق شدہ قصاب' : 'Certified 100% Halal Butcher'}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {isUrdu ? 'اہم لنکس' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <a href="#categories" className="hover:text-amber-400 transition-colors">
                  {isUrdu ? 'چکن میٹ کیٹیگریز' : 'Product Categories'}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  {isUrdu ? 'تازہ مصنوعات و کٹس' : 'Fresh Poultry Products'}
                </a>
              </li>
              <li>
                <a href="#daily-rates" className="hover:text-amber-400 transition-colors">
                  {isUrdu ? 'آج کے سرکاری ریٹس' : 'Live Daily Rates'}
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-400 transition-colors">
                  {isUrdu ? 'کٹنگ و ڈش کیلکولیٹر' : 'Portion & Cut Calculator'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  {isUrdu ? 'ہمارے بارے میں اور تاریخ' : 'About Us & Mission'}
                </a>
              </li>
              <li>
                <a href="#wholesale" className="hover:text-amber-400 transition-colors">
                  {isUrdu ? 'ہول سیل و کیٹرنگ سپلائی' : 'Wholesale Commercial Supply'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Timings & Order Coverage */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {isUrdu ? 'اوقات کار اور ڈیلیوری' : 'Store Hours & Coverage'}
            </h4>
            <div className="space-y-3 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-200 block">
                    {isUrdu ? 'دکان کے اوقات:' : 'Working Hours:'}
                  </span>
                  <span>{isUrdu ? STORE_INFO.openingHoursUrdu : STORE_INFO.openingHoursEn}</span>
                </div>
              </div>
              <p className="text-[11px] text-stone-400 leading-relaxed border-t border-stone-800/80 pt-2.5">
                {isUrdu
                  ? 'صبح کا تازہ ذبیحہ بیچ 7:00 بجے تیار ہو جاتا ہے۔ شام کا دوسرا بیچ 4:00 بجے تیار ہوتا ہے۔'
                  : 'First fresh slaughter ready at 7:00 AM. Second evening fresh batch at 4:00 PM.'}
              </p>
            </div>
          </div>

          {/* Col 4: Contact & Location */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {isUrdu ? 'رابطہ و پتہ' : 'Store Location & Contact'}
            </h4>
            <div className="space-y-3 text-xs text-stone-400">
              <div className="text-amber-400 font-semibold text-xs pb-1 border-b border-stone-800">
                <span>{isUrdu ? 'سی ای او:' : 'CEO:'} </span>
                <span className="text-white font-bold">{isUrdu ? STORE_INFO.ceoUrdu : STORE_INFO.ceoEn}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{isUrdu ? STORE_INFO.addressUrdu : STORE_INFO.addressEn}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${STORE_INFO.phone}`} className="hover:text-white font-mono font-semibold">
                  {STORE_INFO.phoneFormatted}
                </a>
              </div>
              <div className="pt-1">
                <a
                  href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(
                    isUrdu
                      ? 'السلام علیکم راجہ عبداللہ صاحب! مجھے آر اینڈ بی چکن میٹ سے آرڈر اور کٹنگ کی معلومات چاہیے۔'
                      : 'Hello Raja Abdullah! I would like to order fresh chicken from R and B Chicken Meat.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-600/90 hover:bg-emerald-600 text-white rounded-md text-xs font-semibold transition-colors"
                >
                  <span>WhatsApp: {STORE_INFO.whatsappFormatted}</span>
                </a>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Mail className="w-4 h-4 text-stone-500 shrink-0" />
                <a href={`mailto:${STORE_INFO.email}`} className="hover:text-stone-300">
                  {STORE_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div>
            © {new Date().getFullYear()} {isUrdu ? STORE_INFO.nameUrdu : STORE_INFO.nameEn}.{' '}
            {isUrdu ? 'جملہ حقوق محفوظ ہیں۔' : 'All rights reserved.'}
          </div>
          <div className="flex flex-wrap items-center gap-4 text-stone-400">
            {onOpenShareModal && (
              <button
                type="button"
                onClick={onOpenShareModal}
                className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{isUrdu ? 'ویب سائٹ لنک شیئر کریں' : 'Share Website Link'}</span>
              </button>
            )}
            <span>·</span>
            <span>{isUrdu ? '100% حلال ضمانت' : '100% Halal Guarantee'}</span>
            <span>·</span>
            <span>{isUrdu ? 'ڈیجیٹل وزن' : 'Digital Weighing'}</span>
            <span>·</span>
            <span>{isUrdu ? 'حفظانِ صحت' : 'Sanitary Certified'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
