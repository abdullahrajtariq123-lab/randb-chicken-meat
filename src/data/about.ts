export interface AboutData {
  titleUrdu: string;
  titleEn: string;
  subtitleUrdu: string;
  subtitleEn: string;
  historyUrdu: string;
  historyEn: string;
  missionUrdu: string;
  missionEn: string;
  ceoMessageUrdu: string;
  ceoMessageEn: string;
  pillars: Array<{
    titleUrdu: string;
    titleEn: string;
    descUrdu: string;
    descEn: string;
    icon: string;
  }>;
  stats: Array<{
    value: string;
    labelUrdu: string;
    labelEn: string;
  }>;
}

export const ABOUT_CONTENT: AboutData = {
  titleUrdu: 'آر اینڈ بی چکن میٹ کے بارے میں',
  titleEn: 'About R and B Chicken Meat',
  subtitleUrdu: 'خیابانِ سرسید اور جڑواں شہروں (راولپنڈی و اسلام آباد) کے لیے 100% حلال، تازہ اور معیاری پولٹری کی قابلِ اعتماد فراہمی۔',
  subtitleEn: 'Supplying 100% Halal, farm-fresh, premium poultry with uncompromising hygiene in Rawalpindi & Islamabad.',
  historyUrdu: `آر اینڈ بی چکن میٹ کی بنیاد ایک سادہ مگر مضبوط سوچ کے ساتھ رکھی گئی: "ہر خاندان اور کسٹمر کو خالص، شرعی طریقے سے ذبح شدہ اور صفائی سے تراشا گیا تازہ چکن میٹ ملے جس پر وہ آنکھیں بند کر کے اعتماد کر سکیں۔"

ہمارا مرکزی آؤٹ لیٹ شاپ نمبر 2، بٹی پلازہ، اعوان مارکیٹ روڈ، خیابانِ سرسید، راولپنڈی (نزد یو بی ایل بینک) میں واقع ہے۔ ہم نے اپنے سفر کا آغاز ایک اصول پر کیا جہاں ملاوٹ، باسی گوشت اور کم تولنے کے خلاف زیرو ٹالرنس اپنائی گئی۔ گاہکوں کے بھرپور اعتماد کی بدولت آج آر اینڈ بی چکن میٹ راولپنڈی و اسلام آباد کے ہزاروں گھرانوں کی روزمرہ ضرورت پوری کرتا ہے اور معروف ہوٹلوں و شادی ہالز کا باقاعدہ سپلائر ہے۔`,
  historyEn: `R and B Chicken Meat was founded with a straightforward, uncompromising conviction: "Every household and culinary professional deserves fresh, ethically slaughtered, precision-trimmed poultry they can trust wholeheartedly."

Operating from our flagship shop at Shop #2, Butty Plaza, Awan Market Rd, Khayaban-e-Sir Syed, Rawalpindi (near UBL Bank), we established a zero-tolerance policy against chemical injections, stale leftovers, and inaccurate weights. Driven by customer loyalty, R and B Chicken Meat has expanded into a leading poultry provider across Rawalpindi and Islamabad.`,
  missionUrdu: `ہمارا مشن کسٹمرز کو فارم سے سیدھا ان کے باورچی خانے تک 100% حلال، حفظانِ صحت کے بین الاقوامی اصولوں پر پورا اترنے والا اور من پسند کٹنگ کے ساتھ چکن میٹ فراہم کرنا ہے — شفاف ڈیجیٹل وزن اور مناسب ترین مارکیٹ ریٹس کے ساتھ۔`,
  missionEn: `Our mission is to bring pristine, 100% Halal, hygienically processed poultry directly from trusted bio-secure farms to your kitchen. We combine old-world master butchery with modern cold-chain safety, verified digital weights, and transparent pricing.`,
  ceoMessageUrdu: `ہماری ترجیح صرف گوشت بیچنا نہیں، بلکہ گاہکوں کے اعتماد اور ان کی صحت کی حفاظت ہے۔ میں ذاتی طور پر ہر صبح چکن کے معیار اور شرعی ذبیحہ کی نگرانی کرتا ہوں۔ اگر کسی گاہک کو ذرہ برابر بھی شکایت ہو تو ہم مکمل ذمہ داری لیتے ہیں۔`,
  ceoMessageEn: `Our priority is not simply selling chicken, but earning lifelong customer trust and protecting family health. I personally oversee slaughter quality and hygiene standards daily to guarantee perfection in every order.`,
  pillars: [
    {
      titleUrdu: 'سو فیصد شرعی حلال ذبیحہ',
      titleEn: '100% Shariah-Compliant Halal',
      descUrdu: 'روزانہ فجر بعد باقاعدہ تکبیر کے ساتھ دستی ذبیحہ، بغیر کسی مکینیکل بے ہوشی کے۔',
      descEn: 'Hand-slaughtered strictly according to Islamic dietary guidelines with complete reverence and manual precision.',
      icon: 'CheckCircle'
    },
    {
      titleUrdu: 'روزانہ تازہ — باسی یا فریز نہیں',
      titleEn: 'Fresh Daily — Never Stale Frozen',
      descUrdu: 'ہم پرانا گوشت فریز نہیں کرتے۔ ہر آرڈر کے لیے اسی دن کی تازہ سپلائی سے گوشت تیار کیا جاتا ہے۔',
      descEn: 'We operate on a zero-leftover policy. Birds are slaughtered and carved daily so meat is naturally tender and nutritious.',
      icon: 'Clock'
    },
    {
      titleUrdu: 'شفاف ڈیجیٹل وزن',
      titleEn: 'Transparent Certified Weights',
      descUrdu: 'زندہ وزن اور صافی وزن کا واضح موازنہ تاکہ گاہک کو ادا کردہ ہر روپے کا پورا گوشت ملے۔',
      descEn: 'Calibrated digital scales ensuring 100% accurate net weight with zero hidden wastage or water plumping.',
      icon: 'Scale'
    },
    {
      titleUrdu: 'ماہر قصابوں کی من پسند کٹنگ',
      titleEn: 'Master Custom Butchery',
      descUrdu: 'کڑاہی، بریانی، بون لیس فلٹ یا قیمہ — آپ جیسا کٹ پسند کریں، ویسا ہی تیار کیا جاتا ہے۔',
      descEn: 'From uniform Karahi cubes and Biryani cuts to delicate breast fillets and double-minced keema.',
      icon: 'Scissors'
    }
  ],
  stats: [
    { value: '100%', labelUrdu: 'حلال تصدیق شدہ', labelEn: 'Halal Certified' },
    { value: '10,000+', labelUrdu: 'مطمئن گاہک اور خاندان', labelEn: 'Happy Households' },
    { value: '50+', labelUrdu: 'ہوٹل و کیٹرنگ پارٹنرز', labelEn: 'Commercial Partners' },
    { value: '0', labelUrdu: 'باسی گوشت یا کیمیکلز', labelEn: 'Preservatives / Leftovers' }
  ]
};
