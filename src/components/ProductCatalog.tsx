import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CategoryId } from '../types';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from './ProductCard';
import { Search, Sparkles } from 'lucide-react';

interface ProductCatalogProps {
  selectedCategory: CategoryId;
  onSelectCategory: (id: CategoryId) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  const { isUrdu } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const currentCategory = CATEGORIES.find(c => c.id === selectedCategory) || CATEGORIES[0];

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory;

    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      product.nameUrdu.toLowerCase().includes(query) ||
      product.nameEn.toLowerCase().includes(query) ||
      product.descriptionUrdu.toLowerCase().includes(query) ||
      product.descriptionEn.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
              {isUrdu ? 'تازہ اسٹاک و من پسند کٹس' : 'Farm-Fresh Catalog'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
              {isUrdu ? 'آر اینڈ بی چکن میٹ مینو' : 'Browse Fresh Poultry Products'}
            </h2>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute top-3.5 left-3 text-stone-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={isUrdu ? 'تلاش کریں (مثلاً کڑاہی، بریسٹ، ونگز)' : 'Search cuts, boneless, wings...'}
              className="w-full text-xs bg-white border border-stone-200 rounded-lg pl-9 pr-3 py-2.5 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>

        {/* Category Segmented Control */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {CATEGORIES.map(cat => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-stone-900 text-amber-400 shadow-xs'
                    : 'bg-white text-stone-700 hover:text-stone-950 border border-stone-200 hover:border-stone-300'
                }`}
              >
                {isUrdu ? cat.nameUrdu : cat.nameEn}
              </button>
            );
          })}
        </div>

        {/* Active Category Description Banner */}
        <div className="bg-white border border-stone-200/80 rounded-xl p-4 sm:p-5 mb-8 flex items-center justify-between gap-4">
          <div>
            <h3 className="text-sm sm:text-base font-bold text-stone-900">
              {isUrdu ? currentCategory.nameUrdu : currentCategory.nameEn}
            </h3>
            <p className="text-xs text-stone-600 mt-1">
              {isUrdu ? currentCategory.descriptionUrdu : currentCategory.descriptionEn}
            </p>
          </div>
          <span className="text-xs font-mono font-semibold text-stone-500 bg-stone-100 px-2.5 py-1 rounded shrink-0">
            {filteredProducts.length} {isUrdu ? 'آئٹمز' : 'items'}
          </span>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl border border-stone-200 p-8">
            <Sparkles className="w-10 h-10 text-stone-300 mx-auto mb-3" />
            <h4 className="text-base font-bold text-stone-800 mb-1">
              {isUrdu ? 'کوئی پروڈکٹ نہیں ملی' : 'No poultry cuts found'}
            </h4>
            <p className="text-xs text-stone-500 mb-4">
              {isUrdu
                ? 'براہ کرم سرچ کیورڈ تبدیل کریں یا تمام کیٹیگریز دیکھیں۔'
                : 'Try clearing your search or switching to another category.'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('all');
              }}
              className="text-xs font-semibold text-amber-700 hover:text-amber-800 underline cursor-pointer"
            >
              {isUrdu ? 'تمام پروڈکٹس دیکھیں' : 'Reset filters & view all'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
