
import React, { useEffect, useState } from 'react';
import { Section, DetailedInfo } from '../types';
import { fetchSectionDetails } from '../geminiService';

interface DetailModalProps {
  section: Section | null;
  onClose: () => void;
}

const DetailModal: React.FC<DetailModalProps> = ({ section, onClose }) => {
  const [details, setDetails] = useState<DetailedInfo | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (section) {
      setLoading(true);
      fetchSectionDetails(section.title, section.description)
        .then(data => {
          setDetails(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    } else {
      setDetails(null);
    }
  }, [section]);

  if (!section) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity">
      <div className="bg-[#F4F1EA] dark:bg-[#1A1816] border border-[#B49A67]/20 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors z-10"
        >
          <span className="material-symbols-outlined text-primary">close</span>
        </button>

        <div className="p-8 md:p-12 lg:p-16">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 space-y-4">
              <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
              <p className="text-primary animate-pulse font-display tracking-widest text-sm uppercase">Đang truy vấn kho lưu trữ...</p>
            </div>
          ) : details ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase border-b border-primary/20 pb-2 inline-block mb-6">
                Chuyên đề: {section.badge}
              </span>
              <h2 className="font-display text-4xl md:text-6xl mb-8 dark:text-[#EAE6DF] leading-tight max-w-2xl">
                {details.title}
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 prose dark:prose-invert prose-stone max-w-none">
                  <p className="text-xl leading-relaxed text-[#33302E]/80 dark:text-[#EAE6DF]/80 mb-8 font-serif italic border-l-4 border-primary/40 pl-6">
                    {details.culturalContext}
                  </p>
                  <div className="text-base md:text-lg leading-loose dark:text-[#EAE6DF]/70 whitespace-pre-wrap">
                    {details.content}
                  </div>
                </div>

                <div className="space-y-10">
                  <div className="bg-forest/10 border border-primary/20 p-8 rounded-lg">
                    <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-4">Mức độ ảnh hưởng</h4>
                    <div className="flex items-end gap-2 mb-2">
                       <span className="text-4xl font-display font-bold text-primary">{details.significance}</span>
                       <span className="text-xs dark:text-white/40 mb-1">/ 100</span>
                    </div>
                    <div className="w-full bg-primary/10 h-1.5 rounded-full overflow-hidden">
                       <div className="bg-primary h-full transition-all duration-1000" style={{ width: `${details.significance}%` }}></div>
                    </div>
                  </div>

                  {details.sources && details.sources.length > 0 && (
                    <div className="space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-primary/60">Nguồn trích lục</h4>
                      <div className="space-y-2">
                        {details.sources.map((source, i) => (
                          source.web && (
                            <a 
                              key={i} 
                              href={source.web.uri} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="block p-3 text-xs bg-white dark:bg-[#24221F] border border-primary/10 hover:border-primary/40 transition-colors rounded truncate"
                            >
                              <span className="material-symbols-outlined text-[14px] align-middle mr-2">link</span>
                              {source.web.title}
                            </a>
                          )
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-20">
              <p>Không thể tải dữ liệu. Vui lòng thử lại sau.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
