
import React from 'react';
import { APP_CONFIG } from '../constants';

interface HeaderProps {
  onSectionClick?: (id: string) => void;
  onThemeToggle?: () => void;
  isDarkMode?: boolean;
  activeSection?: string;
}

const Header: React.FC<HeaderProps> = ({ onSectionClick, onThemeToggle, isDarkMode, activeSection = 'home' }) => {
  return (
    <header className="border-b border-white/10 sticky top-0 z-50 bg-gradient-to-r from-black/90 via-black/85 to-black/90 backdrop-blur-xl shadow-2xl shadow-black/50">
      <div className="max-w-full mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => onSectionClick?.('home')}>
          <div className="bg-gradient-to-br from-primary/30 to-primary/10 p-2 rounded-lg shadow-lg shadow-primary/20 border border-primary/30 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-300">
            <span className="material-symbols-outlined text-primary">account_balance</span>
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
            {APP_CONFIG.appName}
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'Giới thiệu' },
            { id: 'development', label: 'Phát triển' },
            { id: 'resources', label: 'Tài Nguyên' },
            { id: 'guide', label: 'Hướng dẫn' },
            { id: 'quiz', label: 'Game Quiz' }
          ].map((item) => (
            <button 
              key={item.id} 
              onClick={() => onSectionClick?.(item.id)}
              className={`text-sm font-semibold transition-all duration-300 pb-1 px-3 py-2 rounded-lg relative ${
                activeSection === item.id 
                  ? 'text-primary bg-primary/10 shadow-lg shadow-primary/20 border-b-2 border-primary' 
                  : 'text-[#E5E7EB] hover:text-primary hover:bg-white/5 hover:shadow-md'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full shadow-lg shadow-primary/50"></span>
              )}
            </button>
          ))}
        </nav>
        <button 
          onClick={onThemeToggle}
          className="relative overflow-hidden border-2 border-primary/50 text-primary hover:bg-primary hover:text-black hover:border-primary font-semibold px-4 py-2 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 group"
        >
          <span className="material-symbols-outlined text-base block dark:hidden group-hover:rotate-180 transition-transform duration-500">dark_mode</span>
          <span className="material-symbols-outlined text-base hidden dark:block group-hover:rotate-180 transition-transform duration-500">light_mode</span>
          <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
