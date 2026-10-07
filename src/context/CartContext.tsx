import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product, CuttingOption, SkinOption, OrderDetails } from '../types';
import { STORE_INFO } from '../data/products';

interface AddToCartParams {
  product: Product;
  cuttingOption: CuttingOption;
  skinOption: SkinOption;
  weightKg: number;
  specialInstructions?: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (params: AddToCartParams) => void;
  updateItemWeight: (cartItemId: string, weightKg: number) => void;
  removeFromCart: (cartItemId: string) => void;
  clearCart: () => void;
  fulfillmentType: 'delivery' | 'pickup';
  setFulfillmentType: (type: 'delivery' | 'pickup') => void;
  subtotal: number;
  deliveryFee: number;
  totalAmount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  itemCount: number;
  lastConfirmedOrder: OrderDetails | null;
  setLastConfirmedOrder: (order: OrderDetails | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('rb_chicken_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [fulfillmentType, setFulfillmentType] = useState<'delivery' | 'pickup'>('delivery');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [lastConfirmedOrder, setLastConfirmedOrder] = useState<OrderDetails | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('rb_chicken_cart', JSON.stringify(cartItems));
    } catch {
      // Ignore storage errors
    }
  }, [cartItems]);

  const addToCart = ({
    product,
    cuttingOption,
    skinOption,
    weightKg,
    specialInstructions = ''
  }: AddToCartParams) => {
    const existingIndex = cartItems.findIndex(
      item =>
        item.productId === product.id &&
        item.cuttingOption.id === cuttingOption.id &&
        item.skinOption.id === skinOption.id
    );

    if (existingIndex > -1) {
      setCartItems(prev => {
        const copy = [...prev];
        const existing = copy[existingIndex];
        const newWeight = Math.round((existing.weightKg + weightKg) * 10) / 10;
        copy[existingIndex] = {
          ...existing,
          weightKg: newWeight,
          totalPrice: Math.round(newWeight * existing.pricePerKg),
          specialInstructions: specialInstructions || existing.specialInstructions
        };
        return copy;
      });
    } else {
      const newItem: CartItem = {
        cartItemId: `${product.id}-${cuttingOption.id}-${skinOption.id}-${Date.now()}`,
        productId: product.id,
        nameUrdu: product.nameUrdu,
        nameEn: product.nameEn,
        cuttingOption,
        skinOption,
        weightKg,
        pricePerKg: product.basePricePerKg,
        totalPrice: Math.round(weightKg * product.basePricePerKg),
        specialInstructions,
        image: product.image
      };
      setCartItems(prev => [...prev, newItem]);
    }
    setIsCartOpen(true);
  };

  const updateItemWeight = (cartItemId: string, weightKg: number) => {
    if (weightKg <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    const cleanWeight = Math.round(weightKg * 10) / 10;
    setCartItems(prev =>
      prev.map(item =>
        item.cartItemId === cartItemId
          ? {
              ...item,
              weightKg: cleanWeight,
              totalPrice: Math.round(cleanWeight * item.pricePerKg)
            }
          : item
      )
    );
  };

  const removeFromCart = (cartItemId: string) => {
    setCartItems(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  const deliveryFee =
    fulfillmentType === 'pickup' || subtotal === 0 || subtotal >= STORE_INFO.freeDeliveryThreshold
      ? 0
      : STORE_INFO.standardDeliveryFee;
  const totalAmount = subtotal + deliveryFee;
  const itemCount = cartItems.length;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateItemWeight,
        removeFromCart,
        clearCart,
        fulfillmentType,
        setFulfillmentType,
        subtotal,
        deliveryFee,
        totalAmount,
        isCartOpen,
        setIsCartOpen,
        itemCount,
        lastConfirmedOrder,
        setLastConfirmedOrder
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
