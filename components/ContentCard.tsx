
import React from 'react';
import { Section } from '../types';

interface ContentCardProps {
  section: Section;
  onClick: (section: Section) => void;
}

const ContentCard: React.FC<ContentCardProps> = ({ section, onClick }) => {
  return (
    <div 
      onClick={() => onClick(section)}
      className="group bg-white dark:bg-[#24221F] rounded-2xl overflow-hidden border border-[#D4CFC7] dark:border-white/5 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-primary/30 hover:-translate-y-2 cursor-pointer"
    >
      <div className="relative h-56 lg:h-64 overflow-hidden">
        {section.imageUrl ? (
          <img 
            alt={section.description} 
            className="w-full h-full object-cover grayscale-[30%] transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0" 
            src={section.imageUrl}
          />
        ) : (
          <div className="relative w-full h-full bg-forest">
            <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 15px, #000 15px, #000 30px)' }}></div>
            <div className="absolute inset-0 flex flex-col opacity-40">
              <div className="h-6 bg-[#4A3728] w-full mb-1"></div>
              <div className="h-6 bg-[#B49A67] w-full mb-1"></div>
              <div className="h-6 bg-[#2D3A2D] w-full mb-1"></div>
              <div className="h-6 bg-[#5C4033] w-full mb-1"></div>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1816] via-transparent to-transparent opacity-80"></div>
        <div className="absolute bottom-6 left-6">
          <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase block mb-1">{section.badge}</span>
          <span className="text-white font-display text-2xl">{section.title}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display text-lg dark:text-[#EAE6DF] mb-6 min-h-[3rem] leading-relaxed">
          {section.description}
        </h3>
        <button className="w-full bg-forest hover:bg-primary text-[#EAE6DF] hover:text-[#1A1816] font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-widest shadow-lg hover:shadow-xl hover:scale-[1.02]">
          Xem chi tiết
          <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
        </button>
      </div>
    </div>
  );
};

export default ContentCard;
