/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { CartProvider, useCart } from './context/CartContext';
import { CategoryId, OrderDetails } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryNav } from './components/CategoryNav';
import { DailyRates } from './components/DailyRates';
import { ProductCatalog } from './components/ProductCatalog';
import { CutCalculator } from './components/CutCalculator';
import { AboutSection } from './components/AboutSection';
import { WholesaleSection } from './components/WholesaleSection';
import { HygienePromise } from './components/HygienePromise';
import { ReviewsAndFaq } from './components/ReviewsAndFaq';
import { CartDrawer } from './components/CartDrawer';
import { OrderConfirmationModal } from './components/OrderConfirmationModal';
import { ShareModal } from './components/ShareModal';
import { Footer } from './components/Footer';

function MainAppContent() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const { lastConfirmedOrder, setLastConfirmedOrder } = useCart();

  const handleOrderConfirmed = (order: OrderDetails) => {
    setLastConfirmedOrder(order);
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900">
      {/* 3-Zone Header Contract */}
      <Header onOpenShareModal={() => setIsShareModalOpen(true)} />

      <main className="flex-grow">
        {/* Hero Section with dominant visual anchor and scrim */}
        <Hero onOpenShareModal={() => setIsShareModalOpen(true)} />

        {/* Categories Section (Whole Chicken, Breasts, Thighs, Wings, Specialty Cuts) */}
        <CategoryNav
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Live Daily Rates Board with Yield Calculator */}
        <DailyRates />

        {/* Product Catalog with Filtering & Custom Cuts */}
        <ProductCatalog
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Interactive Meat Cut & Guest Portion Estimator */}
        <CutCalculator />

        {/* About Us Section: Introduction, Mission, History, Dedication to Quality */}
        <AboutSection />

        {/* Wholesale & Commercial Supply for Caterers / Hotels */}
        <WholesaleSection />

        {/* 100% Halal & Hygiene Standards */}
        <HygienePromise />

        {/* Testimonials & FAQs */}
        <ReviewsAndFaq />
      </main>

      {/* Cart & Online Ordering Drawer with Mock Checkout & Pickup/Delivery */}
      <CartDrawer onOrderConfirmed={handleOrderConfirmed} />

      {/* Order Confirmation & Printable Receipt Modal */}
      <OrderConfirmationModal
        order={lastConfirmedOrder}
        onClose={() => setLastConfirmedOrder(null)}
      />

      {/* Share Website Modal with 1-click WhatsApp & Copy Link */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />

      {/* Footer */}
      <Footer onOpenShareModal={() => setIsShareModalOpen(true)} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <MainAppContent />
      </CartProvider>
    </LanguageProvider>
  );
}
