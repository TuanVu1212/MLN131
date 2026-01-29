
import React from 'react';
import { APP_CONFIG } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full aspect-[21/9] md:aspect-[3/1] rounded-2xl overflow-hidden shadow-2xl mb-12 group border border-[#D4CFC7] dark:border-white/10">
      <div className="absolute inset-0 hero-pattern transform transition-transform duration-[3s] group-hover:scale-105"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
        <span className="bg-[#1A1816]/80 backdrop-blur-md text-primary text-[10px] md:text-xs font-bold tracking-[0.3em] border border-primary/40 px-6 py-2.5 rounded-full mb-6 uppercase shadow-lg">
          Chuyên đề Văn hóa & Hội nhập
        </span>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white max-w-5xl leading-[1.1] mb-6 drop-shadow-2xl">
          {APP_CONFIG.tagline}
        </h1>
        <p className="text-[#EAE6DF]/80 italic text-base md:text-xl font-medium max-w-2xl border-t border-primary/30 pt-6 leading-relaxed">
          {APP_CONFIG.quote}
        </p>
      </div>
    </section>
  );
};

export default Hero;
