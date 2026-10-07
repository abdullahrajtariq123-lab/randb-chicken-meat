import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Truck, Scale, PhoneCall, Share2 } from 'lucide-react';
import { STORE_INFO } from '../data/products';

interface HeroProps {
  onOpenShareModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenShareModal }) => {
  const { isUrdu } = useLanguage();

  return (
    <section id="home" className="relative bg-stone-900 text-white overflow-hidden">
      {/* Background Image with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_fresh_poultry_display_1791179043271.jpg"
          alt="Fresh chicken butcher display at R and B Chicken Meat"
          className="w-full h-full object-cover object-center opacity-35"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/80 to-stone-950/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          {/* Unboxed Metadata Trust Line */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-amber-400 mb-4 tracking-wide">
            <span>100% حلال ذبیحہ</span>
            <span aria-hidden="true">·</span>
            <span>روزانہ تازہ گوشت</span>
            <span aria-hidden="true">·</span>
            <span>فری ہوم ڈیلیوری</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            {isUrdu ? (
              <>
                خالص، تازہ اور حفظانِ صحت کے اصولوں پر پورا اترنے والا چکن میٹ
              </>
            ) : (
              <>
                Farm-Fresh, 100% Halal Poultry & Precision Master Cuts
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-stone-300 leading-relaxed mb-8 max-w-2xl">
            {isUrdu ? (
              <>
                آر اینڈ بی چکن میٹ آپ کو فراہم کرتا ہے روزانہ فجر بعد باقاعدہ شرعی طریقے سے ذبح شدہ برائلر اور دیسی مرغی۔ کیمیکلز اور باسی فریزنگ سے مکمل پاک، آپ کی پسندیدہ کٹنگ کے ساتھ سیدھا آپ کے گھر، ہوٹل یا کیٹرنگ پر۔
              </>
            ) : (
              <>
                R and B Chicken Meat delivers certified fresh morning-slaughtered poultry directly from bio-secure farms. 100% chemical-free and zero frozen leftovers, prepared to your exact cutting preference.
              </>
            )}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#products"
              className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-sm rounded-lg transition-colors shadow-sm inline-flex items-center gap-2"
            >
              <span>{isUrdu ? 'تازہ چکن مصنوعات دیکھیں' : 'View Fresh Cuts'}</span>
            </a>

            <a
              href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(
                isUrdu
                  ? 'السلام علیکم راجہ عبداللہ صاحب! مجھے آر اینڈ بی چکن میٹ سے چکن آرڈر کرنا ہے۔'
                  : 'Hello Raja Abdullah! I would like to order fresh chicken from R and B Chicken Meat.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-lg transition-colors inline-flex items-center gap-2 shadow-xs"
            >
              <PhoneCall className="w-4 h-4 text-white" />
              <span>{isUrdu ? 'واٹس ایپ پر براہِ راست آرڈر' : 'Order on WhatsApp (0340-5519895)'}</span>
            </a>

            <a
              href="#daily-rates"
              className="px-5 py-3.5 text-stone-300 hover:text-white text-sm font-medium transition-colors"
            >
              {isUrdu ? 'روزانہ ریٹ و کٹنگ معلومات →' : "Daily Rates & Cuts Info →"}
            </a>

            {onOpenShareModal && (
              <button
                type="button"
                onClick={onOpenShareModal}
                className="px-4 py-3.5 bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 hover:text-amber-200 text-xs sm:text-sm font-semibold rounded-lg border border-amber-500/30 transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <Share2 className="w-4 h-4 text-amber-400" />
                <span>{isUrdu ? 'ویب سائٹ لنک شیئر کریں' : 'Share Website Link'}</span>
              </button>
            )}
          </div>

          {/* Adjacent Proof Badges (Unboxed) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-stone-800/80 text-stone-300">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">
                  {isUrdu ? '100% شرعی حلال' : '100% Halal Verified'}
                </h4>
                <p className="text-xs text-stone-400 mt-1">
                  {isUrdu ? 'روزانہ ہاتھ سے ذبیحہ' : 'Hand-slaughtered daily'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Scale className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">
                  {isUrdu ? 'پورا اور شفاف وزن' : 'Guaranteed Net Weight'}
                </h4>
                <p className="text-xs text-stone-400 mt-1">
                  {isUrdu ? 'ڈیجیٹل اسکیل سے تولا گیا' : 'Calibrated digital scales'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Truck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">
                  {isUrdu ? 'فری ہوم ڈیلیوری' : 'Free Express Delivery'}
                </h4>
                <p className="text-xs text-stone-400 mt-1">
                  {isUrdu ? '1500 روپے سے زائد کے آرڈر پر' : 'On orders above Rs. 1,500'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
