import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CategoryId } from '../types';
import { CATEGORIES } from '../data/products';
import {
  Layers,
  Feather,
  ShieldCheck,
  Flame,
  Zap,
  Sparkles,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

interface CategoryNavProps {
  selectedCategory: CategoryId;
  onSelectCategory: (id: CategoryId) => void;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  const { isUrdu } = useLanguage();

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'Feather':
        return <Feather className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Flame':
        return <Flame className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section id="categories" className="py-16 bg-stone-100 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
              {isUrdu ? 'ہماری وسیع ورائٹی' : 'Product Categories'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
              {isUrdu ? 'چکن میٹ کی اہم کیٹیگریز' : 'Explore Chicken Cuts & Categories'}
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-lg">
            {isUrdu
              ? 'سالم مرغی سے لے کر بون لیس فلٹ اور مصالحہ دار ونگز تک، ہر قسم کی ضرورت کے مطابق تیار شدہ۔'
              : 'From oven-ready whole birds and lean breast fillets to juicy thighs, wings, and artisanal specialty cuts.'}
          </p>
        </div>

        {/* Categories Grid with Descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.filter(cat => cat.id !== 'all').map(category => {
            const isSelected = selectedCategory === category.id;
            return (
              <div
                key={category.id}
                onClick={() => {
                  onSelectCategory(category.id);
                  const el = document.getElementById('products');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`group p-6 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-amber-500 shadow-md ring-1 ring-amber-500/20'
                    : 'bg-white/80 hover:bg-white border-stone-200 hover:border-stone-300 hover:shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-amber-500 text-stone-950 font-bold'
                          : 'bg-stone-100 text-stone-700 group-hover:bg-amber-100 group-hover:text-amber-800'
                      }`}
                    >
                      {getCategoryIcon(category.icon)}
                    </div>
                    {isSelected && (
                      <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                        {isUrdu ? 'منتخب شدہ' : 'Active'}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {isUrdu ? category.nameUrdu : category.nameEn}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                    {isUrdu ? category.descriptionUrdu : category.descriptionEn}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-amber-700 group-hover:text-amber-800">
                  <span>{isUrdu ? 'پروڈکٹس دیکھیں اور خریدیں' : 'View & Order Cuts'}</span>
                  {isUrdu ? (
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  ) : (
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
