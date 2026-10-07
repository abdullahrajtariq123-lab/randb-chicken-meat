export type Language = 'ur' | 'en';

export type CategoryId = 'all' | 'whole-chicken' | 'chicken-breasts' | 'chicken-thighs' | 'wings' | 'specialty-cuts';

export interface Category {
  id: CategoryId;
  nameEn: string;
  nameUrdu: string;
  descriptionEn: string;
  descriptionUrdu: string;
  icon: string;
}

export interface CuttingOption {
  id: string;
  nameUrdu: string;
  nameEn: string;
}

export interface SkinOption {
  id: string;
  nameUrdu: string;
  nameEn: string;
}

export interface Product {
  id: string;
  nameUrdu: string;
  nameEn: string;
  descriptionUrdu: string;
  descriptionEn: string;
  category: CategoryId;
  basePricePerKg: number;
  image: string;
  cuttingOptions: CuttingOption[];
  skinOptions: SkinOption[];
  popular?: boolean;
  minOrderKg: number;
  stepKg: number;
  badgeUrdu?: string;
  badgeEn?: string;
}

export interface CartItem {
  cartItemId: string;
  productId: string;
  nameUrdu: string;
  nameEn: string;
  cuttingOption: CuttingOption;
  skinOption: SkinOption;
  weightKg: number;
  pricePerKg: number;
  totalPrice: number;
  specialInstructions?: string;
  image: string;
}

export interface DailyRate {
  id: string;
  itemUrdu: string;
  itemEn: string;
  rate: number;
  prevRate: number;
  unitUrdu: string;
  unitEn: string;
  descriptionUrdu: string;
  descriptionEn: string;
}

export type FulfillmentType = 'delivery' | 'pickup';

export type PaymentMethod = 'cod' | 'jazzcash' | 'easypaisa' | 'card' | 'bank_transfer';

export interface CustomerInfo {
  name: string;
  phone: string;
  email: string;
  fulfillmentType: FulfillmentType;
  address: string;
  area: string;
  timeSlot: string;
  specialNotes?: string;
  paymentMethod: PaymentMethod;
  cardNumber?: string;
  cardExpiry?: string;
  cardCvv?: string;
  walletNumber?: string;
}

export interface OrderDetails {
  orderId: string;
  customerInfo: CustomerInfo;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  totalAmount: number;
  date: string;
  status: 'confirmed' | 'preparing' | 'ready' | 'dispatched';
  estimatedTime: string;
}

