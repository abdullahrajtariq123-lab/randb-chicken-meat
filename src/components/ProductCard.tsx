import React, { useState } from 'react';
import { Product, CuttingOption, SkinOption } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { Plus, Minus, Check, ShoppingBag, Scissors, MessageCircle, ShieldCheck } from 'lucide-react';
import { STORE_INFO } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { isUrdu } = useLanguage();
  const { addToCart } = useCart();

  const [weightKg, setWeightKg] = useState<number>(product.minOrderKg);
  const [selectedCut, setSelectedCut] = useState<CuttingOption>(product.cuttingOptions[0]);
  const [selectedSkin] = useState<SkinOption>(product.skinOptions[0]);
  const [isAddedFeedback, setIsAddedFeedback] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleWeightChange = (delta: number) => {
    setWeightKg(prev => {
      const next = Math.round((prev + delta) * 10) / 10;
      return next >= product.minOrderKg ? next : product.minOrderKg;
    });
  };

  const handleAddToCart = () => {
    addToCart({
      product,
      cuttingOption: selectedCut,
      skinOption: selectedSkin,
      weightKg
    });

    setIsAddedFeedback(true);
    setTimeout(() => setIsAddedFeedback(false), 1200);
  };

  const handleDirectWhatsAppOrder = () => {
    const text = isUrdu
      ? `السلام علیکم راجہ عبداللہ صاحب! مجھے آر اینڈ بی چکن میٹ سے یہ اسکن لیس چکن آرڈر کرنا ہے:
• پروڈکٹ: ${product.nameUrdu}
• وزن: ${weightKg} کلو
• کٹنگ کا انداز: ${selectedCut.nameUrdu}
• کھال: 100% بغیر کھال (اسکن لیس)

براہ کرم آج کا لائیو ریٹ اور ڈیلیوری کا وقت بتا دیں۔ شکریہ!
شاپ: دکان نمبر 2، بٹی پلازہ، اعوان مارکیٹ، راولپنڈی`
      : `Hello Raja Abdullah! I would like to order skinless chicken from R and B Chicken Meat:
• Product: ${product.nameEn}
• Weight: ${weightKg} kg
• Cutting Style: ${selectedCut.nameEn}
• Skin: 100% Skinless

Please share today's live rate and delivery time. Thank you!`;

    window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-white rounded-xl border border-stone-200/90 hover:border-amber-400/90 transition-all duration-200 flex flex-col justify-between overflow-hidden group shadow-sm hover:shadow-md">
      {/* Product Image Section */}
      <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
        {!imgError ? (
          <img
            src={product.image}
            alt={isUrdu ? product.nameUrdu : product.nameEn}
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-stone-100 text-stone-400">
            <Scissors className="w-8 h-8 mb-2 text-stone-300" />
            <span className="text-xs text-stone-500 font-medium">
              {isUrdu ? product.nameUrdu : product.nameEn}
            </span>
          </div>
        )}

        {/* Badge */}
        <div className="absolute top-3 left-3 bg-stone-900/90 backdrop-blur-xs text-amber-300 text-[11px] font-semibold px-2.5 py-1 rounded">
          {product.badgeUrdu && isUrdu ? product.badgeUrdu : (product.badgeEn || '100% Skinless')}
        </div>
      </div>

      {/* Product Details Section */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-baseline justify-between gap-2 mb-2">
            <h3 className="text-base font-bold text-stone-900 leading-snug">
              {isUrdu ? product.nameUrdu : product.nameEn}
            </h3>
            <div className="text-right shrink-0">
              <span className="inline-block bg-amber-50 text-amber-900 border border-amber-200/80 text-[11px] font-semibold px-2 py-0.5 rounded">
                {isUrdu ? 'روزانہ تازہ سپلائی' : 'Fresh Daily'}
              </span>
            </div>
          </div>

          <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-3">
            {isUrdu ? product.descriptionUrdu : product.descriptionEn}
          </p>

          {/* 100% Skinless Guarantee Tag */}
          <div className="mb-3.5 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-md">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>{isUrdu ? '100% بغیر کھال (اسکن لیس تیار)' : '100% Clean Skinless Guaranteed'}</span>
          </div>

          {/* Cutting Option Selector */}
          <div className="mb-3">
            <label className="block text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-1">
              {isUrdu ? 'کٹنگ کا انداز (طریقہ):' : 'Cutting Style:'}
            </label>
            <select
              value={selectedCut.id}
              onChange={e => {
                const found = product.cuttingOptions.find(c => c.id === e.target.value);
                if (found) setSelectedCut(found);
              }}
              className="w-full text-xs font-medium bg-stone-50 border border-stone-200 rounded-lg px-2.5 py-2 text-stone-800 focus:outline-none focus:ring-1 focus:ring-amber-500 cursor-pointer"
            >
              {product.cuttingOptions.map(opt => (
                <option key={opt.id} value={opt.id}>
                  {isUrdu ? opt.nameUrdu : opt.nameEn}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Weight Selector & WhatsApp / Cart Actions */}
        <div className="pt-4 border-t border-stone-100 mt-2 space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-stone-700">
              {isUrdu ? 'وزن منتخب کریں:' : 'Select Weight:'}
            </span>
            <div className="flex items-center gap-2 border border-stone-200 rounded-lg p-0.5 bg-stone-50">
              <button
                type="button"
                onClick={() => handleWeightChange(-product.stepKg)}
                className="w-7 h-7 flex items-center justify-center text-stone-600 hover:text-stone-900 hover:bg-white rounded transition-colors cursor-pointer disabled:opacity-40"
                disabled={weightKg <= product.minOrderKg}
                aria-label="Decrease weight"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="font-mono font-bold text-stone-900 px-2 text-xs tabular-nums">
                {weightKg} kg
              </span>
              <button
                type="button"
                onClick={() => handleWeightChange(product.stepKg)}
                className="w-7 h-7 flex items-center justify-center text-stone-600 hover:text-stone-900 hover:bg-white rounded transition-colors cursor-pointer"
                aria-label="Increase weight"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Primary Action: Direct WhatsApp Order */}
          <button
            type="button"
            onClick={handleDirectWhatsAppOrder}
            className="w-full py-2.5 px-4 rounded-lg font-bold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-xs"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>{isUrdu ? 'واٹس ایپ پر آرڈر کریں' : 'Order on WhatsApp'}</span>
          </button>

          {/* Secondary Action: Add to Order List */}
          <button
            type="button"
            onClick={handleAddToCart}
            className={`w-full py-2 px-3 rounded-lg font-medium text-xs flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer border ${
              isAddedFeedback
                ? 'bg-amber-100 text-amber-900 border-amber-300'
                : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200'
            }`}
          >
            {isAddedFeedback ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>{isUrdu ? 'آرڈر لسٹ میں شامل ہو گیا!' : 'Added to Order List!'}</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5 text-stone-500" />
                <span>{isUrdu ? 'آرڈر لسٹ میں شامل کریں' : 'Add to Order List'}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
