
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ContentCard from './components/ContentCard';
import Footer from './components/Footer';
import DetailPage from './components/DetailPage';
import { SECTIONS } from './constants';
import { Section } from './types';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [activeMenuSection, setActiveMenuSection] = useState<string>('home');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Scroll detection for active menu
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'home', element: document.getElementById('hero-section') },
        { id: 'about', element: document.getElementById('about-section') },
        { id: 'development', element: document.getElementById('development-section') }
      ];

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const offsetTop = section.element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveMenuSection(section.id);
            break;
          }
        }
      }

      if (window.scrollY < 100) {
        setActiveMenuSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Home View
  if (!activeSectionId) {
    return (
      <div className="min-h-screen transition-colors duration-500 bg-[#F4F1EA] dark:bg-[#1A1816]">
        <Header 
          onSectionClick={(id) => {
            // Handle smooth scroll or navigation
            setActiveMenuSection(id);
            if (id === 'home') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (id === 'about') {
              document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
            } else if (id === 'development') {
              document.getElementById('development-section')?.scrollIntoView({ behavior: 'smooth' });
            } else if (id === 'resources') {
              // Resources section - coming soon
            } else if (id === 'guide') {
              // Handle guide section
            } else if (id === 'quiz') {
              // Handle quiz section
            }
          }} 
          onThemeToggle={toggleTheme}
          isDarkMode={isDarkMode}
          activeSection={activeMenuSection}
        />
        
        <main className="max-w-7xl mx-auto px-6 py-12">
          <div id="hero-section">
          <Hero />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {SECTIONS.map((section) => (
              <ContentCard 
                key={section.id} 
                section={section} 
                onClick={(s) => setActiveSectionId(s.id)}
              />
            ))}
          </div>

          {/* About Section */}
          <section id="about-section" className="mt-16 py-10 scroll-mt-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold tracking-widest uppercase mb-4">About Us</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                VỀ <span className="text-[#F59E0B]">ETHNIC ARCHIVE</span>
              </h2>
              <p className="text-base text-[#33302E]/70 dark:text-[#EAE6DF]/60 max-w-2xl mx-auto">
                Câu chuyện, giá trị và tầm nhìn của chúng tôi.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#F59E0B]">
                    Câu chuyện hình thành
                  </h3>
                  <p className="text-base leading-relaxed text-[#33302E]/80 dark:text-[#EAE6DF]/70">
                    <strong>Ethnic Archive</strong> ra đời từ mong muốn tạo ra một nền tảng tri thức, nơi người dùng có thể vừa giải trí, vừa cũng có kiến thức qua những câu hỏi thử thách. Đây không chỉ là một dự án, mà là một hành trình chính phục đỉnh cao tri thức.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#F59E0B]">
                    Tầm nhìn
                  </h3>
                  <p className="text-base leading-relaxed text-[#33302E]/80 dark:text-[#EAE6DF]/70">
                    Trở thành một trong những nền tảng tri thức phổ biến nhất tại Việt Nam, sau đó mở rộng ra quốc tế với nhiều phiên bản hấp dẫn.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#33302E]/10 dark:border-[#EAE6DF]/10 transition-all duration-500 group-hover:shadow-primary/30">
                  <img 
                    src="https://images.unsplash.com/photo-1551524164-687a55dd1126?auto=format&fit=crop&q=80&w=1000" 
                    className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700" 
                    alt="Ethnic Archive Game"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <button className="w-full bg-primary hover:bg-[#F59E0B] text-white font-bold py-4 px-8 rounded-xl text-lg transition-all hover:scale-[1.02] shadow-2xl hover:shadow-primary/50 flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined">play_circle</span>
                      Chơi Ngay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Development Roadmap Section */}
          <section id="development-section" className="mt-16 py-10 scroll-mt-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-[#10B981]/10 text-[#10B981] rounded-full text-xs font-bold tracking-widest uppercase mb-4">Roadmap</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                LỘ TRÌNH <span className="text-[#F59E0B]">PHÁT TRIỂN</span>
              </h2>
              <p className="text-base text-[#33302E]/70 dark:text-[#EAE6DF]/60 max-w-2xl mx-auto">
                Từ ý tưởng đến ngày ra mắt chính thức.
              </p>
            </div>

            <div className="max-w-3xl mx-auto relative">
              {/* Vertical line */}
              <div className="absolute left-[105px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#10B981] via-[#10B981] to-[#10B981] opacity-30"></div>

              <div className="space-y-8">
                {/* Milestone 1 */}
                <div className="flex gap-10 items-start relative">
                  <div className="text-[#F59E0B] font-bold text-sm min-w-[85px] text-right pt-1.5">
                    11/09/2025
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#10B981] border-4 border-[#F4F1EA] dark:border-[#1A1816] flex items-center justify-center z-10 flex-shrink-0 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-[#10B981]/50 cursor-pointer animate-pulse">
                    <span className="material-symbols-outlined text-white text-lg">lightbulb</span>
                  </div>
                  <div className="flex-1 pt-0.5">
                    <h3 className="text-xl font-bold mb-1.5">Ý tưởng</h3>
                    <p className="text-sm text-[#33302E]/70 dark:text-[#EAE6DF]/60">
                      Hình thành khái niệm "Ethnic Archive" & Phân tích Data.
                    </p>
                  </div>
                </div>

                {/* Milestone 2 */}
                <div className="flex gap-10 items-start relative">
                  <div className="text-[#F59E0B] font-bold text-sm min-w-[85px] text-right pt-1.5">
                    15/09/2025
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#10B981] border-4 border-[#F4F1EA] dark:border-[#1A1816] flex items-center justify-center z-10 flex-shrink-0 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-[#10B981]/50 cursor-pointer animate-pulse">
                    <span className="material-symbols-outlined text-white text-lg">draw</span>
                  </div>
                  <div className="flex-1 pt-0.5">
                    <h3 className="text-xl font-bold mb-1.5">Thiết kế</h3>
                    <p className="text-sm text-[#33302E]/70 dark:text-[#EAE6DF]/60">
                      Xây dựng luật chơi, giao diện và nhân vật.
                    </p>
                  </div>
                </div>

                {/* Milestone 3 */}
                <div className="flex gap-10 items-start relative">
                  <div className="text-[#F59E0B] font-bold text-sm min-w-[85px] text-right pt-1.5">
                    20/09/2025
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#10B981] border-4 border-[#F4F1EA] dark:border-[#1A1816] flex items-center justify-center z-10 flex-shrink-0 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-[#10B981]/50 cursor-pointer animate-pulse">
                    <span className="material-symbols-outlined text-white text-lg">science</span>
                  </div>
                  <div className="flex-1 pt-0.5">
                    <h3 className="text-xl font-bold mb-1.5">Thử nghiệm nội bộ</h3>
                    <p className="text-sm text-[#33302E]/70 dark:text-[#EAE6DF]/60">
                      Chơi thử trong nhóm nhỏ, cân bằng luật chơi.
                    </p>
                  </div>
                </div>

                {/* Milestone 4 */}
                <div className="flex gap-10 items-start relative">
                  <div className="text-[#F59E0B] font-bold text-sm min-w-[85px] text-right pt-1.5">
                    23/09/2025
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#10B981] border-4 border-[#F4F1EA] dark:border-[#1A1816] flex items-center justify-center z-10 flex-shrink-0 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-[#10B981]/50 cursor-pointer animate-pulse">
                    <span className="material-symbols-outlined text-white text-lg">group_add</span>
                  </div>
                  <div className="flex-1 pt-0.5">
                    <h3 className="text-xl font-bold mb-1.5">Bản Beta</h3>
                    <p className="text-sm text-[#33302E]/70 dark:text-[#EAE6DF]/60">
                      Mở đăng ký sớm cho cộng đồng bạn bè.
                    </p>
                  </div>
                </div>

                {/* Milestone 5 */}
                <div className="flex gap-10 items-start relative">
                  <div className="text-[#F59E0B] font-bold text-sm min-w-[85px] text-right pt-1.5">
                    01/10/2025
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#10B981] border-4 border-[#F4F1EA] dark:border-[#1A1816] flex items-center justify-center z-10 flex-shrink-0 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-[#10B981]/50 cursor-pointer animate-pulse">
                    <span className="material-symbols-outlined text-white text-lg">rocket_launch</span>
                  </div>
                  <div className="flex-1 pt-0.5">
                    <h3 className="text-xl font-bold mb-1.5">Ra mắt chính thức</h3>
                    <p className="text-sm text-[#33302E]/70 dark:text-[#EAE6DF]/60">
                      Phát hành bản hoàn chỉnh trên nền tảng Website.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mt-12 py-10">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-[#10B981]/10 text-[#10B981] rounded-full text-xs font-bold tracking-widest uppercase mb-4">Our Team</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Đội ngũ phát triển
              </h2>
              <p className="text-base text-[#33302E]/70 dark:text-[#EAE6DF]/60 max-w-3xl mx-auto leading-relaxed">
                Một nhóm trẻ đầy nhiệt huyết, đam mê sáng tạo và mong muốn đem lại trải nghiệm chơi game vừa vui vừa bổ ích.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Member 1 */}
              <div className="flex flex-col items-center text-center space-y-4 group">
                <div className="relative">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#10B981] shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-[#10B981]/30">
                    <img 
                      src="public/img/profile/NguyenNhatChuong.jpg" 
                      alt="Nguyễn Nhật Chương"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Nguyễn Nhật Chương</h3>
                  <p className="text-[#F59E0B] text-sm font-semibold">Project Lead / Full Stacks</p>
                </div>
              </div>

              {/* Member 2 */}
              <div className="flex flex-col items-center text-center space-y-4 group">
                <div className="relative">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#10B981] shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-[#10B981]/30">
                    <img 
                      src="public/img/profile/MaiHaiNam.jpg" 
                      alt="Mai Hải Nam"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Mai Hải Nam</h3>
                  <p className="text-[#F59E0B] text-sm font-semibold">Data Analyst / Back-End</p>
                </div>
              </div>

              {/* Member 3 */}
              <div className="flex flex-col items-center text-center space-y-4 group">
                <div className="relative">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#10B981] shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-[#10B981]/30">
                    <img 
                      src="public/img/profile/TruongTuanVu.jpg" 
                      alt="Trương Tuấn Vũ"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Trương Tuấn Vũ</h3>
                  <p className="text-[#F59E0B] text-sm font-semibold">UI/UX Designer / Event Analysis</p>
                </div>
              </div>

              {/* Member 4 */}
              <div className="flex flex-col items-center text-center space-y-4 group">
                <div className="relative">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#10B981] shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-[#10B981]/30">
                    <img 
                      src="public/img/profile/LeVietHoangHoangHiep.jpg"
                      alt="Lê Việt Hoàng Hiệp"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Lê Việt Hoàng Hiệp</h3>
                  <p className="text-[#F59E0B] text-sm font-semibold">Testing / Presentation Content</p>
                </div>
              </div>

              {/* Member 5 */}
              <div className="flex flex-col items-center text-center space-y-4 group">
                <div className="relative">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#10B981] shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-[#10B981]/30">
                    <img 
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" 
                      alt="Thành viên 5"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Tên thành viên 5</h3>
                  <p className="text-[#F59E0B] text-sm font-semibold">Vị trí / Chức vụ</p>
                </div>
              </div>

              {/* Member 6 */}
              <div className="flex flex-col items-center text-center space-y-4 group">
                <div className="relative">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#10B981] shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-[#10B981]/30">
                    <img 
                      src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=400" 
                      alt="Thành viên 6"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Tên thành viên 6</h3>
                  <p className="text-[#F59E0B] text-sm font-semibold">Vị trí / Chức vụ</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16 py-12 bg-gradient-to-br from-primary/5 via-primary/3 to-transparent rounded-3xl px-8 md:px-12 border border-primary/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                  <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase">Giá trị cốt lõi</span>
                  <h2 className="font-display text-4xl leading-tight">Mỗi hiện vật là một câu chuyện chưa kể</h2>
                  <p className="text-[#33302E]/70 dark:text-[#EAE6DF]/60 leading-relaxed text-lg">
                      Chúng tôi không chỉ lưu trữ dữ liệu, chúng tôi lưu giữ linh hồn của các dân tộc. Từ những đường kim mũi chỉ trên tà áo dài của người Mông đến những điệu múa xòe rộn rã của người Thái.
                  </p>
                  <div className="flex gap-4">
                     <div className="p-4 bg-primary/10 rounded-lg">
                        <span className="block text-2xl font-bold text-primary">54</span>
                        <span className="text-[10px] uppercase tracking-widest opacity-60">Dân tộc</span>
                     </div>
                     <div className="p-4 bg-primary/10 rounded-lg">
                        <span className="block text-2xl font-bold text-primary">1k+</span>
                        <span className="text-[10px] uppercase tracking-widest opacity-60">Di sản số</span>
                     </div>
                  </div>
              </div>
              <div className="relative rounded-lg overflow-hidden h-96 shadow-xl border border-primary/20">
                  <img 
                      src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=1000" 
                      className="w-full h-full object-cover" 
                      alt="Vietnamese Ethnic Craft"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background-dark/80 to-transparent"></div>
                  </div>
              </div>
          </section>
        </main>

        <Footer />
      </div>
    );
  }

  // Detail View
  const currentSection = SECTIONS.find(s => s.id === activeSectionId);
  return (
    <div className="min-h-screen bg-[#111111] text-[#EAE6DF] font-sans overflow-x-hidden">
      <DetailPage 
        sectionId={activeSectionId} 
        onBack={() => setActiveSectionId(null)}
        onNavigate={(id) => setActiveSectionId(id)}
      />
    </div>
  );
};

export default App;
