
import React from 'react';
import { APP_CONFIG } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 py-12 border-t border-[#D4CFC7] dark:border-white/10 bg-gradient-to-b from-[#ECE9E0] to-[#F4F1EA] dark:from-black/40 dark:to-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg shadow border border-primary/20">
                <span className="material-symbols-outlined text-primary text-2xl">account_balance</span>
              </div>
              <span className="font-display font-bold text-2xl">Ethnic Archive</span>
            </div>
            <p className="text-[#33302E]/70 dark:text-[#A3A3A3] text-sm max-w-sm leading-relaxed">
              {APP_CONFIG.footerDescription}
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-6">
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-[#33302E]/5 dark:bg-white/5 flex items-center justify-center text-[#33302E]/40 dark:text-[#A3A3A3] hover:bg-primary/20 hover:text-primary transition-all hover:scale-110" href="#"><span className="material-symbols-outlined text-lg">share</span></a>
              <a className="w-10 h-10 rounded-full bg-[#33302E]/5 dark:bg-white/5 flex items-center justify-center text-[#33302E]/40 dark:text-[#A3A3A3] hover:bg-primary/20 hover:text-primary transition-all hover:scale-110" href="#"><span className="material-symbols-outlined text-lg">help_outline</span></a>
              <a className="w-10 h-10 rounded-full bg-[#33302E]/5 dark:bg-white/5 flex items-center justify-center text-[#33302E]/40 dark:text-[#A3A3A3] hover:bg-primary/20 hover:text-primary transition-all hover:scale-110" href="#"><span className="material-symbols-outlined text-lg">public</span></a>
            </div>
            <p className="text-[#33302E]/40 dark:text-[#A3A3A3] text-[10px] tracking-widest uppercase">
              © 2024 Ethnic Archive. Preserve the Past, Inspire the Future.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
