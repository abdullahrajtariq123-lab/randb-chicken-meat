import { Product, DailyRate, Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'all',
    nameEn: 'All Products',
    nameUrdu: 'تمام پروڈکٹس (100% اسکن لیس)',
    descriptionEn: 'Browse our complete catalog of farm-fresh, 100% Halal skinless chicken cuts, fillets, and mince.',
    descriptionUrdu: 'ہماری تمام فارم فریش، 100% حلال بغیر کھال (اسکن لیس) چکن کٹس، فلے اور قیمہ ملاحظہ فرمائیں۔',
    icon: 'Layers'
  },
  {
    id: 'whole-chicken',
    nameEn: 'Whole Skinless Chicken',
    nameUrdu: 'سالم چکن (بغیر کھال)',
    descriptionEn: 'Freshly slaughtered, fully eviscerated and cleaned whole skinless chickens, perfect for roasting, chargha, or custom carving.',
    descriptionUrdu: 'روزانہ تازہ ذبح شدہ سالم بغیر کھال والی مرغی، مکمل اندرونی و بیرونی صفائی کے ساتھ، چرغہ یا من پسند کٹنگ کے لیے تیار۔',
    icon: 'Feather'
  },
  {
    id: 'chicken-breasts',
    nameEn: 'Chicken Breasts & Fillets',
    nameUrdu: 'چکن بریسٹ و فلٹ (بون لیس)',
    descriptionEn: 'Lean, boneless skinless chicken breast fillets packed with pure protein, ideal for grilling, meal prep, stir-fries, and steaks.',
    descriptionUrdu: 'چربی سے پاک، خالص بون لیس اسکن لیس سینے کے قتلے، ہائی پروٹین اور جوسی، گرل، اسٹیک، ڈائیٹ اور تکہ بوٹی کے لیے بہترین۔',
    icon: 'ShieldCheck'
  },
  {
    id: 'chicken-thighs',
    nameEn: 'Skinless Drumsticks & Thighs',
    nameUrdu: 'اسکن لیس لیگ پیس و ران',
    descriptionEn: 'Tender, skinless deeply flavorful and succulent dark meat cuts, exceptionally juicy for slow curries, barbecue, and broast.',
    descriptionUrdu: 'بغیر کھال کے انتہائی نرم، جوسی اور لذیذ ران کا گوشت اور ڈرم اسٹکس، باربی کیو، فرائیڈ چکن، قورمہ اور تندوری روسٹ کے لیے۔',
    icon: 'Flame'
  },
  {
    id: 'wings',
    nameEn: 'Skinless Wings',
    nameUrdu: 'چکن ونگز (اسکن لیس)',
    descriptionEn: 'Tender skinless trimmed chicken wings, perfect for buffalo glazing, frying, and coal barbecue.',
    descriptionUrdu: 'مکمل صاف شدہ اسکن لیس ونگز، پارٹی اسنیکس، ہاٹ ونگز اور کوئلہ باربی کیو کے لیے شاندار انتخاب۔',
    icon: 'Zap'
  },
  {
    id: 'specialty-cuts',
    nameEn: 'Specialty Cuts & Mince',
    nameUrdu: 'اسپیشل کٹس و قیمہ (اسکن لیس)',
    descriptionEn: 'Artisanal culinary cuts including skinless Biryani cuts, Karahi cuts, double-minced keema, and bulk packs.',
    descriptionUrdu: 'روایتی اسکن لیس کڑاہی کٹ، شاہی بریانی کٹ، ڈبل مشین چکن قیمہ اور ہوٹل ہول سیل پیکس۔',
    icon: 'Sparkles'
  }
];

export const DAILY_RATES: DailyRate[] = [
  {
    id: 'live-bird',
    itemUrdu: 'زندہ برائلر مرغی',
    itemEn: 'Live Broiler Chicken',
    rate: 420,
    prevRate: 425,
    unitUrdu: 'فی کلو زندہ وزن',
    unitEn: 'Per Kg Live Weight',
    descriptionUrdu: 'مارکیٹ کمیٹی کا تصدیق شدہ سرکاری روزانہ ریٹ',
    descriptionEn: 'Official daily poultry association market rate'
  },
  {
    id: 'dressed-meat',
    itemUrdu: 'صافی اسکن لیس گوشت (سالم)',
    itemEn: 'Fresh Skinless Whole Dressed Meat',
    rate: 650,
    prevRate: 660,
    unitUrdu: 'فی کلو صاف گوشت',
    unitEn: 'Per Kg Clean Meat',
    descriptionUrdu: 'مکمل صاف شدہ، بغیر کھال خالص 100% حلال گوشت',
    descriptionEn: '100% cleaned, dressed skinless without feathers or wastage'
  },
  {
    id: 'boneless-breast',
    itemUrdu: 'بون لیس سینہ (چکن فلے)',
    itemEn: 'Boneless Breast Fillet',
    rate: 1150,
    prevRate: 1150,
    unitUrdu: 'فی کلو خالص بون لیس',
    unitEn: 'Per Kg Pure Boneless',
    descriptionUrdu: 'چربی اور جھلی سے پاک، جم اور ڈائیٹ کے لیے بہترین',
    descriptionEn: 'Zero-fat trimmed, ideal for fitness and high protein'
  },
  {
    id: 'desi-chicken',
    itemUrdu: 'اصیل دیسی چکن (اسکن لیس)',
    itemEn: 'Organic Desi Chicken (Skinless)',
    rate: 1450,
    prevRate: 1450,
    unitUrdu: 'فی کلو صافی گوشت',
    unitEn: 'Per Kg Clean Meat',
    descriptionUrdu: 'قدرتی دانہ چرنے والی خالص دیسی مرغی بغیر کھال',
    descriptionEn: 'Free-range organic fed, traditional flavor & soup'
  }
];

export const PRODUCTS: Product[] = [
  // --- Category: Whole Chicken ---
  {
    id: 'whole-dressed-chicken',
    nameUrdu: 'سالم اسکن لیس چکن (بغیر کھال)',
    nameEn: 'Whole Skinless Chicken (Dressed & Cleaned)',
    descriptionUrdu: 'روزانہ فجر بعد تازہ ذبح شدہ سالم مرغی، کھال اور آلائشوں سے مکمل صاف۔ چرغہ، روسٹ یا من پسند کٹنگ کے لیے تیار۔',
    descriptionEn: 'Freshly slaughtered 100% skinless whole chicken, completely eviscerated and hygienically cleaned ready for custom cuts, whole roast, or chargha.',
    category: 'whole-chicken',
    basePricePerKg: 650,
    image: '/src/assets/images/skinless_whole_chicken_1791556694256.jpg',
    popular: true,
    minOrderKg: 1.2,
    stepKg: 0.5,
    badgeUrdu: '100% بغیر کھال (اسکن لیس)',
    badgeEn: '100% Skinless',
    cuttingOptions: [
      { id: 'whole-uncut', nameUrdu: 'سالم چکن (بغیر کٹنگ - چرغہ/روسٹ)', nameEn: 'Whole Uncut (Roast / Chargha ready)' },
      { id: 'roast-4-pcs', nameUrdu: 'روسٹ کٹ (4 بڑے ٹکڑے)', nameEn: 'Roast Cut (4 Quarter Pieces)' },
      { id: 'karahi-16', nameUrdu: 'کڑاہی کٹ (16 درمیانے ٹکڑے)', nameEn: 'Karahi Cut (16 Pieces)' }
    ],
    skinOptions: [
      { id: 'skinless', nameUrdu: 'بغیر کھال (100% اسکن لیس)', nameEn: '100% Skinless' }
    ]
  },
  {
    id: 'organic-desi-chicken',
    nameUrdu: 'خالص اصیل دیسی مرغی (اسکن لیس صافی)',
    nameEn: 'Authentic Whole Desi Chicken (Skinless)',
    descriptionUrdu: 'کھلے فارم میں قدرتی دانہ چرنے والی خالص دیسی مرغی، بغیر کھال۔ نزلہ زکام، طاقت اور روایتی یخنی کے لیے خصوصی تحفہ۔',
    descriptionEn: 'Free-range pasture-raised village chicken completely skinless. Lean, highly nutritious, and unmatched for traditional aromatic broth and medicinal soups.',
    category: 'whole-chicken',
    basePricePerKg: 1450,
    image: '/src/assets/images/skinless_whole_chicken_1791556694256.jpg',
    popular: false,
    minOrderKg: 1,
    stepKg: 0.5,
    badgeUrdu: '100% قدرتی دیسی اسکن لیس',
    badgeEn: '100% Organic Skinless',
    cuttingOptions: [
      { id: 'desi-shorba', nameUrdu: 'شوربے کے لیے روایتی کٹنگ (16 بوٹیاں)', nameEn: 'Traditional Broth Cut (16 Pieces)' },
      { id: 'desi-whole', nameUrdu: 'سالم مرغی', nameEn: 'Whole Dressed' }
    ],
    skinOptions: [
      { id: 'skinless', nameUrdu: 'بغیر کھال (100% اسکن لیس)', nameEn: '100% Skinless' }
    ]
  },

  // --- Category: Chicken Breasts ---
  {
    id: 'boneless-breast-fillet',
    nameUrdu: 'بون لیس سینہ فلٹ (چکن فلے)',
    nameEn: 'Fresh Boneless Breast Fillet (Skinless)',
    descriptionUrdu: 'تازہ نرم سینے کا خالص گوشت، بغیر ہڈی، بغیر کھال اور بغیر چربی۔ اسٹیک، باربی کیو، جم ڈائیٹ اور سینڈوچز کے لیے اعلیٰ معیار۔',
    descriptionEn: 'Prime tender whole chicken breast fillets, trimmed clean of skin, excess fat and silver skin. Superior lean protein for gym meal preps and steaks.',
    category: 'chicken-breasts',
    basePricePerKg: 1150,
    image: '/src/assets/images/skinless_breast_fillet_1791556718537.jpg',
    popular: true,
    minOrderKg: 0.5,
    stepKg: 0.5,
    badgeUrdu: 'ہائی پروٹین زیرو فیٹ',
    badgeEn: 'High Protein / Lean',
    cuttingOptions: [
      { id: 'whole-fillet', nameUrdu: 'سالم فلٹ (پورا سینہ)', nameEn: 'Whole Fillets' },
      { id: 'steaks', nameUrdu: 'اسٹیک سٹرپس (پتلے قتلے)', nameEn: 'Steak Cut / Thin Strips' },
      { id: 'cubes', nameUrdu: 'تکہ کیوبز (1 انچ کے برابر ٹکڑے)', nameEn: 'Tikka Cubes (1 Inch)' }
    ],
    skinOptions: [
      { id: 'skinless', nameUrdu: 'بغیر کھال (100% اسکن لیس)', nameEn: '100% Skinless' }
    ]
  },
  {
    id: 'boneless-handi-boti',
    nameUrdu: 'بون لیس ہانڈی بوٹی (سینے کے کیوبز)',
    nameEn: 'Boneless Handi Boti (Breast Cubes)',
    descriptionUrdu: 'سینے کے گوشت سے تراشے گئے یکساں سائز کے بون لیس کیوبز، بغیر کھال۔ مکھنی ہانڈی، قورمہ اور چکن تکہ کے لیے بے حد ذائقے دار۔',
    descriptionEn: 'Evenly cut 1-inch boneless skinless breast cubes that cook evenly and soak in gravies and marinades perfectly for handi, curries, and skewers.',
    category: 'chicken-breasts',
    basePricePerKg: 1180,
    image: '/src/assets/images/skinless_breast_fillet_1791556718537.jpg',
    popular: false,
    minOrderKg: 0.5,
    stepKg: 0.5,
    badgeUrdu: '100% اسکن لیس بون لیس',
    badgeEn: 'Skinless Boneless',
    cuttingOptions: [
      { id: 'cube-small', nameUrdu: 'چھوٹے کیوبز (ہانڈی سائز)', nameEn: 'Small Handi Cubes' },
      { id: 'cube-large', nameUrdu: 'بڑے کیوبز (سیخ تکہ سائز)', nameEn: 'Large BBQ Skewer Cubes' }
    ],
    skinOptions: [
      { id: 'skinless', nameUrdu: 'بغیر کھال (100% اسکن لیس)', nameEn: '100% Skinless' }
    ]
  },

  // --- Category: Chicken Thighs ---
  {
    id: 'chicken-drumsticks',
    nameUrdu: 'تازہ اسکن لیس ڈرم اسٹکس (لیگ پیس)',
    nameEn: 'Fresh Skinless Drumsticks (Leg Pcs)',
    descriptionUrdu: 'جوسی اور رس بھرے منتخب ڈرم اسٹکس، کھال سے مکمل پاک۔ فرائیڈ چکن، بروسٹ اور مصالحہ دار بھنائی کے لیے سب کا پسندیدہ۔',
    descriptionEn: 'Plump, tender fresh chicken drumsticks with skin completely removed and meat trimmed around the bone. Superb for crispy broast and curries.',
    category: 'chicken-thighs',
    basePricePerKg: 780,
    image: '/src/assets/images/skinless_drumsticks_1791556729872.jpg',
    popular: true,
    minOrderKg: 1,
    stepKg: 0.5,
    badgeUrdu: 'اسکن لیس لیگ پیس',
    badgeEn: 'Skinless Drumsticks',
    cuttingOptions: [
      { id: 'plain-legs', nameUrdu: 'سالم لیگ پیس', nameEn: 'Whole Drumsticks' },
      { id: 'slit-cuts', nameUrdu: 'کٹ لگے ہوئے (مصالحہ جلد جذب کرنے کے لیے)', nameEn: 'Deep Knife Slits for Fast Marination' }
    ],
    skinOptions: [
      { id: 'skinless', nameUrdu: 'بغیر کھال (100% اسکن لیس)', nameEn: '100% Skinless' }
    ]
  },
  {
    id: 'boneless-chicken-thighs',
    nameUrdu: 'بون لیس چکن تھائیز (ران کا گوشت)',
    nameEn: 'Boneless Skinless Chicken Thighs',
    descriptionUrdu: 'ران سے ہڈی اور کھال نکلا ہوا رس بھرا نرم گوشت۔ باربی کیو تکہ اور روسٹ میں بریسٹ سے کہیں زیادہ جوسی اور کبھی خشک نہیں ہوتا۔',
    descriptionEn: 'Deboned and skinless succulent dark meat thighs. Stays buttery tender under high heat, making it the choice cut for gourmet tikkas and slow roasting.',
    category: 'chicken-thighs',
    basePricePerKg: 1050,
    image: '/src/assets/images/skinless_drumsticks_1791556729872.jpg',
    popular: false,
    minOrderKg: 0.5,
    stepKg: 0.5,
    badgeUrdu: 'جوسی تھائی کٹ',
    badgeEn: 'Juicy Thigh Cut',
    cuttingOptions: [
      { id: 'thigh-whole', nameUrdu: 'سالم بون لیس تھائی', nameEn: 'Whole Deboned Thighs' },
      { id: 'thigh-cubes', nameUrdu: 'تکہ کیوبز', nameEn: 'Juicy Tikka Cubes' }
    ],
    skinOptions: [
      { id: 'skinless', nameUrdu: 'بغیر کھال (100% اسکن لیس)', nameEn: '100% Skinless' }
    ]
  },

  // --- Category: Wings ---
  {
    id: 'chicken-wings',
    nameUrdu: 'چکن ونگز (اسکن لیس باربی کیو)',
    nameEn: 'Fresh Skinless Chicken Wings',
    descriptionUrdu: 'کھال سے مکمل صاف ستھرے تازہ ونگز۔ ہاٹ ونگز، گارلک ساس اور کوئلہ باربی کیو کے لیے پسندیدہ ترین۔',
    descriptionEn: 'Freshly trimmed poultry wings with skin completely removed. Ideal for glazed buffalo wings and coal grill snacks.',
    category: 'wings',
    basePricePerKg: 620,
    image: '/src/assets/images/skinless_drumsticks_1791556729872.jpg',
    popular: true,
    minOrderKg: 1,
    stepKg: 0.5,
    badgeUrdu: 'اسکن لیس ونگز',
    badgeEn: 'Skinless Wings',
    cuttingOptions: [
      { id: 'wings-whole', nameUrdu: 'سالم ونگز (3 جوائنٹس)', nameEn: 'Whole 3-Joint Wings' },
      { id: 'wings-split', nameUrdu: 'دو ٹکڑے (ونگیٹ اور ڈرمٹ الگ)', nameEn: 'Split (Wingettes & Drumettes)' }
    ],
    skinOptions: [
      { id: 'skinless', nameUrdu: 'بغیر کھال (100% اسکن لیس)', nameEn: '100% Skinless' }
    ]
  },

  // --- Category: Specialty Cuts ---
  {
    id: 'karahi-cut',
    nameUrdu: 'کڑاہی کٹ چکن (100% اسکن لیس)',
    nameEn: 'Skinless Karahi Cut Chicken (16-18 Pcs)',
    descriptionUrdu: 'گھریلو چکن کڑاہی کے لیے یکساں سائز کے 16 سے 18 ٹکڑے، بغیر کھال، خون اور فالتو چربی سے مکمل پاک۔ کڑاہی میں آسانی سے گل جانے والا گوشت۔',
    descriptionEn: 'Standard 16 to 18 medium uniform bone-in pieces, 100% skinless, meticulously trimmed for rapid and even cooking in traditional woks (karahi).',
    category: 'specialty-cuts',
    basePricePerKg: 690,
    image: '/src/assets/images/skinless_karahi_cut_1791556706190.jpg',
    popular: true,
    minOrderKg: 1,
    stepKg: 0.5,
    badgeUrdu: 'ٹاپ سیلر · 100% اسکن لیس',
    badgeEn: 'Top Seller · 100% Skinless',
    cuttingOptions: [
      { id: 'standard-karahi', nameUrdu: 'معیاری کڑاہی کٹ (16 بوٹیاں)', nameEn: 'Standard Karahi (16 Pcs)' },
      { id: 'small-karahi', nameUrdu: 'چھوٹی بوٹی (20-22 بوٹیاں)', nameEn: 'Small Karahi Cut (20-22 Pcs)' },
      { id: 'large-cut', nameUrdu: 'بڑی بوٹی (12-14 بوٹیاں)', nameEn: 'Large Cut (12-14 Pcs)' }
    ],
    skinOptions: [
      { id: 'skinless', nameUrdu: 'بغیر کھال (100% اسکن لیس)', nameEn: '100% Skinless' }
    ]
  },
  {
    id: 'biryani-cut',
    nameUrdu: 'بریانی کٹ چکن (100% اسکن لیس)',
    nameEn: 'Skinless Biryani Cut Chicken (10-12 Large Pcs)',
    descriptionUrdu: 'شاہی بریانی اور پلاؤ کے لیے خاص طور پر کٹے ہوئے بڑے اور رس بھرے اسکن لیس ٹکڑے تاکہ چاولوں میں دم لگنے سے گوشت نہ ٹوٹے۔',
    descriptionEn: 'Substantial 10-12 large cut pieces, 100% skinless, specially designed to hold succulent moisture during rice dum cooking without disintegrating.',
    category: 'specialty-cuts',
    basePricePerKg: 710,
    image: '/src/assets/images/skinless_karahi_cut_1791556706190.jpg',
    popular: true,
    minOrderKg: 1,
    stepKg: 0.5,
    badgeUrdu: 'خاص شاہی بریانی اسکن لیس',
    badgeEn: 'Biryani Special Skinless',
    cuttingOptions: [
      { id: 'biryani-large', nameUrdu: 'بڑے سائز کے 10-12 ٹکڑے', nameEn: 'Large 10-12 Pcs' },
      { id: 'biryani-medium', nameUrdu: 'درمیانے سائز کے 14 ٹکڑے', nameEn: 'Medium 14 Pcs' }
    ],
    skinOptions: [
      { id: 'skinless', nameUrdu: 'بغیر کھال (100% اسکن لیس)', nameEn: '100% Skinless' }
    ]
  },
  {
    id: 'fresh-chicken-keema',
    nameUrdu: 'تازہ چکن قیمہ (ڈبل مشین باریک)',
    nameEn: 'Fresh Skinless Chicken Mince (Keema)',
    descriptionUrdu: 'آرڈر ملنے پر تازہ بغیر کھال بون لیس گوشت سے تیار کردہ قیمہ، بغیر کسی اضافی چکنائی کے۔ کوفتے، قیمہ کچوری اور کباب کے لیے لاجواب۔',
    descriptionEn: 'Freshly minced upon order from pure skinless chicken breast and thigh meat with zero fat fillers. Ultra-clean for meatballs, samosas and patties.',
    category: 'specialty-cuts',
    basePricePerKg: 1250,
    image: '/src/assets/images/fresh_chicken_mince_1791556741447.jpg',
    popular: true,
    minOrderKg: 0.5,
    stepKg: 0.5,
    badgeUrdu: 'تازہ تیار شدہ خالص قیمہ',
    badgeEn: 'Freshly Ground Keema',
    cuttingOptions: [
      { id: 'fine-mince', nameUrdu: 'ڈبل مشین باریک قیمہ', nameEn: 'Fine Double Mince' },
      { id: 'coarse-mince', nameUrdu: 'سنگل مشین موٹا قیمہ', nameEn: 'Coarse Single Mince' }
    ],
    skinOptions: [
      { id: 'skinless', nameUrdu: 'بغیر کھال (100% اسکن لیس)', nameEn: '100% Skinless' }
    ]
  },
  {
    id: 'wholesale-catering-pack',
    nameUrdu: 'ہوٹل و کیٹرنگ بلک سپلائی (100% اسکن لیس)',
    nameEn: 'Wholesale Skinless Commercial Pack (10kg+)',
    descriptionUrdu: 'شادی ہالز، ہوٹلوں اور کیٹرنگ کے لیے خصوصی ہول سیل نرخ، مکمل اسکن لیس۔ یکساں کٹنگ، وقت پر فراہمی اور تھوک قیمتوں میں بچت۔',
    descriptionEn: 'Commercial supply for restaurants, banquet halls, and caterers with 100% skinless meat, tiered wholesale rates and guaranteed timed morning delivery.',
    category: 'specialty-cuts',
    basePricePerKg: 620,
    image: '/src/assets/images/skinless_karahi_cut_1791556706190.jpg',
    popular: false,
    minOrderKg: 10,
    stepKg: 5,
    badgeUrdu: 'ہول سیل اسکن لیس',
    badgeEn: 'Bulk Skinless Savings',
    cuttingOptions: [
      { id: 'karahi-commercial', nameUrdu: 'کڑاہی کٹ 16 بوٹیاں', nameEn: 'Commercial Karahi (16 Pcs)' },
      { id: 'biryani-commercial', nameUrdu: 'بریانی کٹ 10-12 بوٹیاں', nameEn: 'Commercial Biryani (10-12 Pcs)' },
      { id: 'roast-commercial', nameUrdu: 'شادی بیاہ روسٹ کٹ (4 ٹکڑے)', nameEn: 'Banquet Roast Cut (4 Pcs)' }
    ],
    skinOptions: [
      { id: 'skinless', nameUrdu: 'بغیر کھال (100% اسکن لیس)', nameEn: '100% Skinless' }
    ]
  }
];

export const STORE_INFO = {
  nameEn: 'R and B Chicken Meat',
  nameUrdu: 'آر اینڈ بی چکن میٹ',
  ceoEn: 'Raja Abdullah',
  ceoUrdu: 'راجہ عبداللہ',
  taglineUrdu: 'روزانہ تازہ ذبیحہ، 100% اسکن لیس حلال گوشت اور من پسند کٹنگ',
  taglineEn: 'Daily Fresh Slaughter, 100% Skinless Halal Meat & Custom Precision Cuts',
  phone: '0340-5519895',
  phoneFormatted: '+92 340 5519895',
  whatsapp: '923405519895',
  whatsappFormatted: '0340 5519895',
  email: 'order@randbchicken.com',
  addressUrdu: 'دکان نمبر 2، بٹی پلازہ، اعوان مارکیٹ روڈ، خیابانِ سرسید، راولپنڈی، 43600 (نزد یو بی ایل بینک)',
  addressEn: 'Shop #2, Butty Plaza, Awan Market Rd, Khayaban-e-Sir Syed, Rawalpindi, 43600 (Near UBL Bank)',
  landmarkUrdu: 'نزد یو بی ایل بینک (UBL Bank)',
  landmarkEn: 'Near UBL Bank',
  cityUrdu: 'راولپنڈی',
  cityEn: 'Rawalpindi',
  postalCode: '43600',
  openingHoursUrdu: 'روزانہ صبح 7:00 بجے تا رات 11:00 بجے (ہفتے کے 7 دن کھلی ہے)',
  openingHoursEn: 'Mon - Sun: 7:00 AM - 11:00 PM (Open 7 Days)',
  freeDeliveryThreshold: 1500,
  standardDeliveryFee: 150
};
