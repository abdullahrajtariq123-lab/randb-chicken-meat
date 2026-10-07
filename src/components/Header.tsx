import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Globe, Share2 } from 'lucide-react';
import { STORE_INFO } from '../data/products';

interface HeaderProps {
  onOpenShareModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenShareModal }) => {
  const { language, toggleLanguage, isUrdu } = useLanguage();
  const { itemCount, subtotal, setIsCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-stone-900 text-stone-100 border-b border-stone-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          className="text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors whitespace-nowrap"
        >
          {isUrdu ? STORE_INFO.nameUrdu : STORE_INFO.nameEn}
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-300">
          <a href="#categories" className="hover:text-amber-400 transition-colors">
            {isUrdu ? 'کیٹیگریز' : 'Categories'}
          </a>
          <a href="#products" className="hover:text-amber-400 transition-colors">
            {isUrdu ? 'تازہ چکن مصنوعات' : 'Products'}
          </a>
          <a href="#daily-rates" className="hover:text-amber-400 transition-colors">
            {isUrdu ? 'روزانہ ریٹ لسٹ' : 'Daily Rates'}
          </a>
          <a href="#calculator" className="hover:text-amber-400 transition-colors">
            {isUrdu ? 'کٹنگ کیلکولیٹر' : 'Cut Estimator'}
          </a>
          <a href="#about" className="hover:text-amber-400 transition-colors">
            {isUrdu ? 'ہمارے بارے میں' : 'About Us'}
          </a>
          <a href="#wholesale" className="hover:text-amber-400 transition-colors">
            {isUrdu ? 'ہول سیل و کیٹرنگ' : 'Wholesale'}
          </a>
        </nav>

        {/* Zone 3: Primary actions (Share + Language switcher + Cart) */}
        <div className="flex items-center gap-2.5">
          {onOpenShareModal && (
            <button
              onClick={onOpenShareModal}
              type="button"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-amber-300 hover:text-amber-200 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              title={isUrdu ? 'ویب سائٹ لنک شیئر کریں' : 'Share Website Link'}
            >
              <Share2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="hidden sm:inline">{isUrdu ? 'شیئر کریں' : 'Share'}</span>
            </button>
          )}

          <button
            onClick={toggleLanguage}
            type="button"
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-300 hover:text-white bg-stone-800/80 hover:bg-stone-700/80 rounded-lg transition-colors border border-stone-700/60 whitespace-nowrap cursor-pointer"
            title={isUrdu ? 'Switch to English' : 'اردو میں دیکھیں'}
          >
            <Globe className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>{isUrdu ? 'English' : 'اردو'}</span>
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            type="button"
            className="flex items-center gap-2.5 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs sm:text-sm rounded-lg transition-colors shadow-sm cursor-pointer whitespace-nowrap"
          >
            <ShoppingBag className="w-4 h-4 shrink-0" />
            <span>{isUrdu ? 'کارٹ' : 'Cart'}</span>
            {itemCount > 0 && (
              <span className="bg-stone-900 text-amber-400 text-xs px-2 py-0.5 rounded-full font-bold tabular-nums">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
