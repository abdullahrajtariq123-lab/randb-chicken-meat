import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ABOUT_CONTENT } from '../data/about';
import { CheckCircle, Clock, Scale, Scissors, Award, HeartHandshake } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { isUrdu } = useLanguage();

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'CheckCircle':
        return <CheckCircle className="w-5 h-5 text-amber-600" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-amber-600" />;
      case 'Scale':
        return <Scale className="w-5 h-5 text-amber-600" />;
      case 'Scissors':
        return <Scissors className="w-5 h-5 text-amber-600" />;
      default:
        return <Award className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
            {isUrdu ? 'ہمارا سفر اور اقدار' : 'Our Story & Heritage'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-stone-900 mb-4">
            {isUrdu ? ABOUT_CONTENT.titleUrdu : ABOUT_CONTENT.titleEn}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            {isUrdu ? ABOUT_CONTENT.subtitleUrdu : ABOUT_CONTENT.subtitleEn}
          </p>
        </div>

        {/* Introduction & History & Mission Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left Column: Image & Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-200 aspect-[4/3]">
              <img
                src="/src/assets/images/hero_fresh_poultry_display_1791179043271.jpg"
                alt="R and B Chicken Meat master butchery"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-semibold text-amber-400 block mb-1">
                  {isUrdu ? 'اعلیٰ کوالٹی پولٹری' : 'Artisanal Butchery'}
                </span>
                <p className="text-sm font-medium">
                  {isUrdu
                    ? 'تازگی اور دیانت داری ہمارا اولین اصول ہے'
                    : 'Uncompromising Freshness & Integrity'}
                </p>
              </div>
            </div>

            {/* Float Card */}
            <div className="absolute -bottom-6 -right-4 bg-stone-900 text-white p-4 rounded-xl shadow-xl hidden sm:flex items-center gap-3 border border-stone-800">
              <HeartHandshake className="w-8 h-8 text-amber-400 shrink-0" />
              <div>
                <div className="text-xs text-stone-400">{isUrdu ? '2015 سے' : 'Established'}</div>
                <div className="text-sm font-bold text-white">
                  {isUrdu ? 'لاکھوں کلو حلال چکن کی فراہمی' : '10+ Years of Pure Trust'}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: History & Mission Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-stone-50 border border-stone-200/80 rounded-xl p-6">
              <h3 className="text-lg font-bold text-stone-900 mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-600" />
                <span>{isUrdu ? 'کمپنی کا پس منظر اور تاریخ' : 'Company History & Heritage'}</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed whitespace-pre-line">
                {isUrdu ? ABOUT_CONTENT.historyUrdu : ABOUT_CONTENT.historyEn}
              </p>
            </div>

            <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-6">
              <h3 className="text-lg font-bold text-stone-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>{isUrdu ? 'ہمارا مشن اور عزم' : 'Our Mission'}</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                {isUrdu ? ABOUT_CONTENT.missionUrdu : ABOUT_CONTENT.missionEn}
              </p>
            </div>

            {/* CEO Note */}
            <div className="bg-stone-900 text-white rounded-xl p-6 border border-stone-800">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-stone-950 font-bold flex items-center justify-center text-sm">
                    RA
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {isUrdu ? 'راجہ عبداللہ (CEO)' : 'Raja Abdullah (CEO)'}
                    </h4>
                    <span className="text-[11px] text-amber-400">
                      {isUrdu ? 'چیف ایگزیکٹو، آر اینڈ بی چکن میٹ' : 'Chief Executive, R and B Chicken Meat'}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed italic border-t border-stone-800 pt-3">
                "{isUrdu ? ABOUT_CONTENT.ceoMessageUrdu : ABOUT_CONTENT.ceoMessageEn}"
              </p>
            </div>
          </div>
        </div>

        {/* Dedication to Quality Pillars */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              {isUrdu ? 'معیار اور حفظانِ صحت کی 4 بنیادی ضمانتیں' : 'Our Dedication to High-Quality Poultry'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              {isUrdu
                ? 'ہم کوالٹی پر کبھی سمجھوتہ نہیں کرتے، یہی ہماری پہچان ہے۔'
                : 'Every piece of chicken from R and B adheres to rigorous health and ethical benchmarks.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_CONTENT.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-stone-50 border border-stone-200/90 rounded-xl p-5 hover:border-amber-400 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                  {getPillarIcon(pillar.icon)}
                </div>
                <h4 className="text-sm font-bold text-stone-900 mb-2">
                  {isUrdu ? pillar.titleUrdu : pillar.titleEn}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {isUrdu ? pillar.descUrdu : pillar.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Numbers & Stats */}
        <div className="bg-stone-900 text-white rounded-2xl p-8 sm:p-10 border border-stone-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x md:divide-stone-800">
            {ABOUT_CONTENT.stats.map((stat, idx) => (
              <div key={idx} className="pt-4 md:pt-0">
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono tabular-nums mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-stone-300 font-medium">
                  {isUrdu ? stat.labelUrdu : stat.labelEn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
