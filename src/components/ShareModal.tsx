import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { STORE_INFO } from '../data/products';
import {
  Share2,
  Copy,
  Check,
  MessageCircle,
  X,
  Globe,
  MapPin,
  ExternalLink,
  QrCode,
  Smartphone
} from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const { isUrdu } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'social' | 'google' | 'qr'>('social');

  if (!isOpen) return null;

  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : '';
  const websiteUrl = currentOrigin && !currentOrigin.includes('localhost')
    ? currentOrigin
    : 'https://ais-dev-zicjl4fqfg2udempgje3hl-705991334830.asia-southeast1.run.app';

  const shareText = isUrdu
    ? `السلام علیکم! آر اینڈ بی چکن میٹ (R and B Chicken Meat) کی آفیشل ویب سائٹ وزٹ کریں۔ تازہ ترین، 100% حلال مرغی، روزانہ لائیو ریٹ لسٹ اور من پسند کٹنگ کے ساتھ آن لائن آرڈر کریں:
${websiteUrl}

سی ای او: راجہ عبداللہ
واٹس ایپ و کال: ${STORE_INFO.phoneFormatted}
پتہ: ${STORE_INFO.addressUrdu}`
    : `Hello! Visit R and B Chicken Meat's official website. Order 100% Halal fresh chicken, custom cuts & view daily market rates online:
${websiteUrl}

CEO: ${STORE_INFO.ceoEn}
Call/WhatsApp: ${STORE_INFO.phoneFormatted}
Address: ${STORE_INFO.addressEn}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(websiteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`, '_blank');
  };

  const handleShareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(websiteUrl)}`, '_blank');
  };

  const handleShareTwitter = () => {
    const tweet = `${isUrdu ? 'آر اینڈ بی چکن میٹ راولپنڈی - تازہ 100% حلال چکن آن لائن آرڈر کریں' : 'R and B Chicken Meat Rawalpindi - Order Fresh 100% Halal Chicken'} ${websiteUrl} #Rawalpindi #HalalChicken`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-stone-200">
        {/* Header */}
        <div className="bg-stone-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Share2 className="w-5 h-5 text-amber-400" />
            <h3 className="text-base font-bold text-white">
              {isUrdu ? 'ویب سائٹ کو گوگل اور تمام پلیٹ فارمز پر پھیلائیں' : 'Publish & Share Across Platforms'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-stone-400 hover:text-white cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-stone-200 bg-stone-100 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('social')}
            className={`flex-1 py-3 text-center border-b-2 transition-colors cursor-pointer ${
              activeTab === 'social'
                ? 'border-amber-600 text-stone-900 bg-white font-bold'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            {isUrdu ? '1. سوشل پلیٹ فارمز پر شیئر' : '1. Social Platforms'}
          </button>
          <button
            onClick={() => setActiveTab('google')}
            className={`flex-1 py-3 text-center border-b-2 transition-colors cursor-pointer ${
              activeTab === 'google'
                ? 'border-amber-600 text-stone-900 bg-white font-bold'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            {isUrdu ? '2. گوگل میپس و سرچ پر لسٹنگ' : '2. Google Search & Maps'}
          </button>
          <button
            onClick={() => setActiveTab('qr')}
            className={`flex-1 py-3 text-center border-b-2 transition-colors cursor-pointer ${
              activeTab === 'qr'
                ? 'border-amber-600 text-stone-900 bg-white font-bold'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            {isUrdu ? '3. دکان کے لیے کیو آر کوڈ (QR)' : '3. Store QR Code'}
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 text-xs">
          {activeTab === 'social' && (
            <>
              {/* Link Box */}
              <div>
                <label className="block text-stone-700 font-bold mb-1.5">
                  {isUrdu ? 'آپ کی ویب سائٹ کا لائیو پبلک لنک:' : 'Your Live Public Website Link:'}
                </label>
                <div className="bg-stone-50 border border-stone-300 rounded-xl p-3 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <Globe className="w-4 h-4 text-amber-600 shrink-0" />
                    <span className="font-mono text-xs text-stone-900 truncate select-all font-semibold">
                      {websiteUrl}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyLink}
                    className="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg font-semibold flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{isUrdu ? 'کاپی ہو گیا' : 'Copied'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{isUrdu ? 'کاپی لنک' : 'Copy'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Direct 1-Click Platform Buttons */}
              <div>
                <label className="block text-stone-700 font-bold mb-2">
                  {isUrdu ? 'ایک کلک سے شیئر کریں:' : 'One-Click Direct Share:'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    onClick={handleShareWhatsApp}
                    className="py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </button>

                  <button
                    onClick={handleShareFacebook}
                    className="py-2.5 px-3 bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>Facebook</span>
                  </button>

                  <button
                    onClick={handleShareTwitter}
                    className="py-2.5 px-3 bg-stone-900 hover:bg-stone-800 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>Twitter / X</span>
                  </button>
                </div>
              </div>

              {/* Ready-made promo message */}
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-3.5 text-stone-700 space-y-1">
                <span className="text-[11px] font-bold text-stone-900 block">
                  {isUrdu ? 'واٹس ایپ گروپ میسج (پیش منظر):' : 'Pre-written WhatsApp Message:'}
                </span>
                <p className="text-[11px] leading-relaxed whitespace-pre-line text-stone-600 max-h-36 overflow-y-auto">
                  {shareText}
                </p>
              </div>
            </>
          )}

          {activeTab === 'google' && (
            <div className="space-y-4">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 text-emerald-950">
                <div className="font-bold flex items-center gap-1.5 mb-1 text-emerald-900">
                  <Check className="w-4 h-4 text-emerald-700" />
                  <span>{isUrdu ? 'گوگل سرچ انجن میٹا ٹیگز شامل ہو چکے ہیں!' : 'Google SEO & Schema Meta Tags Active!'}</span>
                </div>
                <p className="text-[11px] leading-relaxed text-emerald-800">
                  {isUrdu
                    ? 'آپ کی ویب سائٹ کے اندر Schema.org، گوگل روبوٹس (robots.txt)، سائیٹ میپ (sitemap.xml)، اور راولپنڈی کی تمام لوکل کیورڈز شامل کر دیے گئے ہیں۔'
                    : 'Schema.org JSON-LD local business tags, sitemap.xml, and robots.txt are fully activated for Googlebot indexing.'}
                </p>
              </div>

              <div className="border border-stone-200 rounded-xl p-4 bg-stone-50 space-y-3">
                <div className="font-bold text-stone-900 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span>{isUrdu ? 'گوگل میپس پر شاپ کے ساتھ ویب سائٹ لنک شامل کریں:' : 'Add Website to Google Business / Maps:'}</span>
                </div>
                <ol className="list-decimal list-inside space-y-1.5 text-[11px] text-stone-700 leading-relaxed">
                  <li>
                    {isUrdu
                      ? 'اپنے موبائل پر گوگل میپس (Google Maps) کھولیں یا google.com/business پر جائیں۔'
                      : 'Open Google Maps or visit google.com/business.'}
                  </li>
                  <li>
                    {isUrdu
                      ? 'اپنی شاپ "R and B Chicken Meat, Khayaban-e-Sir Syed, Rawalpindi" سرچ کریں یا ایڈ کریں۔'
                      : 'Search or Claim your business "R and B Chicken Meat".'}
                  </li>
                  <li>
                    {isUrdu
                      ? 'ایڈٹ پروفائل (Edit Profile) پر جا کر "Website" والے خانے میں یہ لنک پیسٹ کر دیں:'
                      : 'Under "Website", paste your link:'}
                    <div className="font-mono text-stone-900 font-bold bg-white p-1.5 rounded border border-stone-200 mt-1 select-all truncate">
                      {websiteUrl}
                    </div>
                  </li>
                </ol>
                <div className="pt-1">
                  <a
                    href="https://www.google.com/business/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 underline"
                  >
                    <span>{isUrdu ? 'گوگل بزنس پروفائل کھولیں' : 'Open Google Business Profile'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'qr' && (
            <div className="text-center space-y-4">
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 inline-block mx-auto">
                {/* Visual QR Code Generator via standard secure service */}
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(websiteUrl)}`}
                  alt="R and B Chicken Meat QR Code"
                  className="w-44 h-44 mx-auto rounded-lg shadow-xs"
                />
                <span className="text-[11px] font-mono text-stone-500 block mt-2">
                  Scan to visit R and B Chicken Meat
                </span>
              </div>

              <div className="text-stone-600 text-xs max-w-sm mx-auto leading-relaxed">
                {isUrdu
                  ? 'یہ کیو آر کوڈ پرنٹ کر کے اپنی دکان (شاپ نمبر 2، بٹی پلازہ) کے کاؤنٹر پر لگائیں تاکہ جو بھی گاہک آئے وہ اپنے موبائل سے اسکین کر کے فوراً ویب سائٹ کھول سکے۔'
                  : 'Print this QR code on your shop counter at Butty Plaza so customers can scan it with their phone camera to instantly view daily rates and order.'}
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between">
          <span className="text-[11px] text-stone-500">
            {isUrdu ? 'سی ای او: راجہ عبداللہ | راولپنڈی' : 'CEO: Raja Abdullah | Rawalpindi'}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white font-semibold rounded-lg text-xs cursor-pointer"
          >
            {isUrdu ? 'بند کریں' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
