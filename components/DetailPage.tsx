
import React, { useEffect } from 'react';

interface DetailPageProps {
  sectionId: string;
  onBack: () => void;
  onNavigate: (id: string) => void;
  isDarkMode?: boolean;
}

const DetailPage: React.FC<DetailPageProps> = ({ sectionId, onBack, onNavigate, isDarkMode = true }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [sectionId]);

  const renderSectionI = () => (
    <div className="animate-in fade-in duration-1000">
      {/* Header Nav */}
      <nav className={`fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 backdrop-blur-md border-b transition-colors duration-500 ${
        isDarkMode 
          ? 'bg-black/80 border-white/10' 
          : 'bg-white/90 border-gray-200'
      }`}>
        <button onClick={onBack} className={`flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase opacity-60 hover:opacity-100 transition-opacity ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
           <span className="material-symbols-outlined text-sm">arrow_back</span>
           QUAY LẠI TRANG CHỦ
        </button>
        <div className="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
           <span className="bg-primary/20 p-1.5 rounded shadow-lg border border-primary/20">
             <span className="material-symbols-outlined text-primary text-sm">account_balance</span>
           </span>
           <span className={`font-display text-lg font-bold ${
             isDarkMode ? 'text-white' : 'text-gray-900'
           }`}>CULTURAL PRESERVATION</span>
        </div>
        <button onClick={() => onNavigate('2')} className={`flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase opacity-60 hover:opacity-100 transition-opacity hover:text-primary ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
           TIẾP THEO: PHẦN II
           <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </nav>

      {/* Main Hero */}
      <section className="px-8 md:px-24 py-24 mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="mb-10 text-center">
              <span className="inline-block px-6 py-3 bg-primary/10 text-primary rounded-full text-base md:text-lg font-bold tracking-[0.2em] mb-8">PHẦN MỞ ĐẦU</span>
              <h1 className={`font-display text-6xl md:text-8xl leading-tight mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                KHÁI QUÁT VỀ<br/>
                DÂN TỘC VÀ VĂN HÓA
              </h1>
              
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Section 01 */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <span className={`font-display text-5xl ${
                  isDarkMode ? 'text-primary' : 'text-amber-600'
                }`}>01.</span>
                <div>
                  <h2 className={`text-3xl font-display font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Khái niệm Dân tộc</h2>
                  <p className={`text-sm mt-1 ${
                    isDarkMode ? 'text-white/50' : 'text-gray-600'
                  }`}>"Hồn cốt" của thực thể</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className={`text-sm leading-relaxed mb-4 ${
                  isDarkMode ? 'text-white/50' : 'text-gray-600'
                }`}>
                Dân tộc không chỉ là ranh giới địa lý hay một thực thể kinh tế. Dân tộc là sự thống nhất của 4 yếu tố cơ bản:
                </p>
                  
                <div className="space-y-3">
                  {[
                    { icon: 'public', title: 'LÃNH THỔ', desc: 'Ranh giới địa lý là "thân xác" của dân tộc - nơi cộng đồng sinh sống và phát triển.' },
                    { icon: 'language', title: 'NGÔN NGỮ', desc: 'Công cụ giao tiếp và lưu giữ tri thức, tạo nên sự thống nhất trong cộng đồng.' },
                    { icon: 'account_balance', title: 'KINH TẾ', desc: 'Sự thống nhất về các quan hệ kinh tế, tạo nền tảng vật chất cho sự tồn tại.' },
                    { icon: 'favorite', title: 'TÂM LÝ / VĂN HÓA', desc: 'Văn hóa là "tâm hồn" - hệ điều hành tâm lý kết nối các thành viên dân tộc.' }
                  ].map((item, i) => (
                    <div key={i} className={`flex items-start gap-4 p-5 rounded-xl border transition-all duration-300 cursor-default group ${
                      isDarkMode 
                        ? 'bg-white/5 border-white/5 hover:border-primary/30 hover:bg-white/8' 
                        : 'bg-gray-100 border-gray-200 hover:border-primary/30 hover:bg-gray-200'
                    }`}>
                      <div className="bg-primary/10 p-2.5 rounded-lg text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300">
                        <span className="material-symbols-outlined">{item.icon}</span>
                      </div>
                      <div>
                        <h4 className={`text-xs font-bold tracking-widest mb-1.5 uppercase ${
                          isDarkMode ? 'text-primary' : 'text-amber-600'
                        }`}>{item.title}</h4>
                        <p className={`text-sm leading-relaxed ${
                          isDarkMode ? 'text-white/50' : 'text-gray-700'
                        }`}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={`mt-6 p-5 border border-primary/20 rounded-xl ${
                  isDarkMode ? 'bg-primary/5' : 'bg-primary/10'
                }`}>
                  <p className={`text-sm italic leading-relaxed ${
                    isDarkMode ? 'text-white/70' : 'text-gray-700'
                  }`}>
                    💡 <span className={`font-semibold ${
                      isDarkMode ? 'text-primary' : 'text-amber-700'
                    }`}>Vị trí của văn hóa:</span> Văn hóa không đứng ngoài dân tộc - nó chính là "hệ điều hành" tâm lý kết nối các thành viên. Nếu lãnh thổ là thân xác, thì văn hóa là tâm hồn.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Section 02 */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <span className={`font-display text-5xl ${
                  isDarkMode ? 'text-primary' : 'text-amber-600'
                }`}>02.</span>
                <h2 className={`text-3xl font-display font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Mối quan hệ biện chứng</h2>
              </div>
              
              <div className="space-y-6">
                <p className={`text-sm leading-relaxed ${
                  isDarkMode ? 'text-white/50' : 'text-gray-600'
                }`}>
                  Trong thời kỳ quá độ lên CNXH, phát triển kinh tế mà đánh mất văn hóa chính là sự <span className={`font-semibold ${
                        isDarkMode ? 'text-primary' : 'text-amber-700'
                      }`}>"phát triển què quặt"</span>. Văn hóa chính là <span className={`font-semibold ${
                        isDarkMode ? 'text-primary' : 'text-amber-700'
                      }`}>Căn cước tinh thần</span> giúp một dân tộc tồn tại độc lập trên bản đồ thế giới.
                </p>
                
                <div className={`p-8 rounded-2xl relative overflow-hidden group border border-primary/20 shadow-2xl ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-forest/30 to-forest/10' 
                    : 'bg-gradient-to-br from-primary/10 to-primary/5'
                }`}>
                  <div className="absolute top-2 left-2 opacity-10 pointer-events-none">
                    <span className="material-symbols-outlined text-6xl text-primary font-bold">format_quote</span>
                  </div>
                  <p className={`text-lg md:text-xl font-display italic leading-snug relative z-10 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                     "Văn hóa là căn cước của dân tộc. Một dân tộc mất đi bản sắc văn hóa của mình cũng chính là lúc dân tộc đó không còn tồn tại với tư cách một cộng đồng độc lập."
                   </p>
                   <div className="h-0.5 w-16 bg-primary/50 mt-6 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 1: Theoretical Foundation */}
      <section className="px-8 md:px-24 py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            <span className="inline-block px-6 py-3 bg-primary/10 text-primary rounded-full text-base md:text-lg font-bold tracking-[0.2em]">PHẦN 1 • CƠ SỞ LÝ LUẬN</span>
            <h2 className="font-display text-5xl md:text-7xl leading-tight">
              Những cột trụ của <br/>sự <span className="text-primary">tồn tại</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Two Trends */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <span className="font-display text-5xl text-primary">01.</span>
                <div>
                <h3 className={`text-3xl font-display font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Hai xu hướng khách quan</h3>
                <p className={`text-sm mt-2 ${
                  isDarkMode ? 'text-white/50' : 'text-gray-600'
                }`}>Vũ điệu giữa "Bản sắc" và "Liên hiệp"</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className={`p-5 rounded-2xl border transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-white/5 border-white/10 hover:border-primary/30' 
                  : 'bg-white border-gray-400 hover:border-amber-500 shadow-lg'
              }`}>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shadow-lg flex-shrink-0">
                      <span className="material-symbols-outlined text-lg">shield</span>
                    </div>
                    <div>
                      <h4 className={`text-base font-bold mb-2 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>Xu hướng 1: Khát vọng tự khẳng định</h4>
                      <p className={`text-xs leading-relaxed mb-2 ${
                        isDarkMode ? 'text-white/50' : 'text-gray-700'
                      }`}>
                        Các dân tộc muốn tách ra để giữ gìn bản sắc riêng.
                      </p>
                    </div>
                  </div>
                  <div className="pl-13">
                    <p className={`text-[11px] italic leading-relaxed ${
                      isDarkMode ? 'text-white/40' : 'text-gray-500'
                    }`}>
                      <span className={`${
                        isDarkMode ? 'text-primary' : 'text-amber-700'
                      }`}>Ví dụ:</span> Cách người Tây Nguyên tinh chỉnh âm thanh chiếc Chiêng Mẹ để khẳng định "tôi là duy nhất".
                    </p>
                  </div>
                </div>

                <div className={`p-5 rounded-2xl border transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-white/5 border-white/10 hover:border-primary/30' 
                  : 'bg-white border-gray-400 hover:border-amber-500 shadow-lg'
              }`}>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shadow-lg flex-shrink-0">
                      <span className="material-symbols-outlined text-lg">public</span>
                    </div>
                    <div>
                      <h4 className="text-base font-bold mb-2">Xu hướng 2: Sức hút của sự hòa hợp</h4>
                      <p className={`text-xs leading-relaxed mb-2 ${
                        isDarkMode ? 'text-white/50' : 'text-gray-700'
                      }`}>
                        Nhu cầu hội nhập, xích lại gần nhau để cùng tiến bộ trong thời đại 4.0.
                      </p>
                    </div>
                  </div>
                </div>

              <div className="p-8 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-xl">
                <p className={`text-base leading-relaxed ${
                  isDarkMode ? 'text-white/80' : 'text-gray-900'
                }`}>
                    <span className="text-primary font-bold text-lg">➜ Kết luận:</span> Bảo tồn Cồng chiêng chính là điểm giao thoa: Chúng ta hội nhập (xu hướng 2) nhưng không được để hòa tan (xu hướng 1).
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Lenin's Program */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <span className="font-display text-5xl text-primary">02.</span>
                <div>
                  <h3 className="text-3xl font-display font-bold">Cương lĩnh dân tộc của V.I. Lênin</h3>
                  <p className={`text-sm mt-2 ${
                    isDarkMode ? 'text-white/50' : 'text-gray-600'
                  }`}>Bản tuyên ngôn công bằng</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                      <span className="material-symbols-outlined text-sm">balance</span>
                    </div>
                    <div>
                      <h4 className="text-base font-bold mb-2 text-primary">Bình đẳng dân tộc</h4>
                      <p className={`text-sm leading-relaxed ${
                        isDarkMode ? 'text-white/50' : 'text-gray-700'
                      }`}>
                        Không có nền văn hóa nào là "thượng đẳng" hay "hạ đẳng". Văn hóa Tây Nguyên có giá trị ngang hàng với bất kỳ nền văn hóa nào khác.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                      <span className="material-symbols-outlined text-sm">how_to_vote</span>
                    </div>
                    <div>
                      <h4 className="text-base font-bold mb-2 text-primary">Quyền tự quyết</h4>
                      <p className={`text-sm leading-relaxed ${
                        isDarkMode ? 'text-white/50' : 'text-gray-700'
                      }`}>
                        Tôn trọng quyền của người DTTS trong việc bảo giữ di sản chính là tôn trọng nhân phẩm dân tộc.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-8 bg-gradient-to-br from-forest/30 to-forest/10 rounded-2xl border border-primary/20">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary text-4xl">verified</span>
                    <div>
                      <p className="text-base text-white/80 leading-relaxed italic">
                        Cương lĩnh này khẳng định: Mọi dân tộc đều có quyền được tôn trọng và phát triển bản sắc văn hóa riêng của mình.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 2: Necessity of Preservation */}
      <section className="px-8 md:px-24 py-24 border-t border-white/10 bg-gradient-to-b from-transparent to-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            <span className="inline-block px-6 py-3 bg-primary/10 text-primary rounded-full text-base md:text-lg font-bold tracking-[0.2em]">PHẦN 2 • TÍNH TẤT YẾU CỦA VIỆC BẢO TỒN</span>
            <h2 className="font-display text-5xl md:text-7xl leading-tight">
              "Hộ chiếu" <span className="text-primary">văn hóa</span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-white/50' : 'text-gray-600'
            }`}>
              Bảo tồn văn hóa không chỉ là nhiệm vụ - đó là sự tồn vong của dân tộc trong làn sóng toàn cầu hóa.
            </p>
          </div>

          <div className="space-y-16">
            {/* Section 1: Characteristics of Vietnamese Ethnic Groups */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <span className="font-display text-5xl text-primary">01.</span>
                <div>
                  <h3 className="text-3xl font-display font-bold">Đặc điểm dân tộc Việt Nam - Bức tranh ghép hình rực rỡ</h3>
                </div>
              </div>

                <div className={`p-8 rounded-2xl border ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/10' 
                    : 'bg-white border-gray-400 shadow-lg'
                }`}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shadow-lg flex-shrink-0">
                    <span className="material-symbols-outlined text-xl">diversity_3</span>
                  </div>
                  <p className={`text-base leading-relaxed pt-2 ${
                    isDarkMode ? 'text-white/70' : 'text-gray-700'
                  }`}>
                    Việt Nam là quốc gia đa dân tộc với truyền thống đoàn kết, nhưng trình độ phát triển không đồng đều. Sự chênh lệch này khiến văn hóa dân tộc thiểu số dễ bị tổn thương nhất trước làn sóng đô thị hóa. Bảo tồn văn hóa là nhiệm vụ chiến lược để xây dựng khối đại đoàn kết dân tộc bền vững.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Harsh Reality */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <span className={`font-display text-5xl ${
                  isDarkMode ? 'text-primary' : 'text-amber-600'
                }`}>02.</span>
                <div>
                  <h3 className={`text-3xl font-display font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Thực tiễn nghiệt ngã</h3>
                  <p className={`text-sm mt-2 ${
                    isDarkMode ? 'text-white/50' : 'text-gray-600'
                  }`}>Cơn lốc của "Sự đồng hóa tự nguyện"</p>
                </div>
              </div>

              <div className={`p-8 rounded-2xl border mb-8 ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/10' 
                  : 'bg-gradient-to-br from-gray-100 to-gray-50 border-gray-200'
              }`}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-400 shadow-lg flex-shrink-0">
                    <span className="material-symbols-outlined text-xl">warning</span>
                  </div>
                  <p className={`text-base leading-relaxed pt-2 ${
                    isDarkMode ? 'text-white/70' : 'text-gray-700'
                  }`}>
                    Trong thời kỳ hội nhập, văn hóa dân tộc thiểu số đang đối mặt với nguy cơ mai một không phải bởi sự ép buộc, mà bởi sự đồng hóa tự nguyện. Hội nhập mang đến tiện nghi, công nghệ và âm nhạc đại chúng, nhưng đồng thời làm thu hẹp không gian văn hóa truyền thống như nhà rông, nhà dài, khiến tiếng cồng chiêng dần xa rời đời sống của thế hệ trẻ.
                  </p>
                </div>
              </div>

              {/* Message */}
              <div className="p-8 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shadow-lg flex-shrink-0">
                    <span className="material-symbols-outlined text-xl">lightbulb</span>
                  </div>
                  <div className="pt-2">
                    <h4 className="text-lg font-bold mb-3 text-primary">Thông điệp</h4>
                    <p className={`text-base leading-relaxed ${
                      isDarkMode ? 'text-white/70' : 'text-gray-700'
                    }`}>
                          <span className={`font-bold ${
                            isDarkMode ? 'text-primary' : 'text-amber-700'
                          }`}>Mất văn hóa là mất căn cước.</span> Ta có thể sống hiện đại, nhưng trái tim vẫn phải rung động trước giá trị truyền thống. Đó chính là <span className={`font-bold ${
                        isDarkMode ? 'text-primary' : 'text-amber-700'
                      }`}>"tấm hộ chiếu"</span> để hội nhập mà không đánh mất chính mình.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`px-8 py-16 border-t ${
        isDarkMode ? 'border-white/10' : 'border-gray-200'
      }`}>
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <div className="bg-primary/20 p-1.5 rounded shadow-lg border border-primary/20">
              <span className="material-symbols-outlined text-primary text-sm">account_balance</span>
            </div>
            <span className={`font-display text-lg font-bold tracking-widest uppercase ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Cultural Preservation</span>
          </div>
          <p className={`text-[10px] tracking-[0.2em] uppercase ${
            isDarkMode ? 'text-white/40' : 'text-gray-500'
          }`}>
            © 2026 Dự án bảo tồn văn hóa dân tộc. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex gap-6 justify-center">
            <span className={`material-symbols-outlined cursor-pointer hover:text-primary transition-colors ${
              isDarkMode ? 'text-white/40' : 'text-gray-500'
            }`}>public</span>
            <span className={`material-symbols-outlined cursor-pointer hover:text-primary transition-colors ${
              isDarkMode ? 'text-white/40' : 'text-gray-500'
            }`}>share</span>
          </div>
        </div>
      </footer>

    </div>
  );

  const renderSectionII = () => (
    <div className="animate-in fade-in duration-1000">
      <nav className={`fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 backdrop-blur-md border-b transition-colors duration-500 ${
        isDarkMode ? 'bg-black/80 border-white/10' : 'bg-white/90 border-gray-200'
      }`}>
        <button onClick={() => onNavigate('1')} className={`flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase opacity-60 hover:opacity-100 transition-opacity hover:text-primary ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
           <span className="material-symbols-outlined text-sm">arrow_back</span>
           QUAY LẠI: PHẦN I
        </button>
        <div className="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
          <span className="bg-primary/20 p-1.5 rounded shadow-lg border border-primary/20">
            <span className="material-symbols-outlined text-primary text-sm">account_balance</span>
          </span>
          <span className={`font-display text-lg font-bold ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>CULTURAL PRESERVATION</span>
        </div>
        <button onClick={() => onNavigate('3')} className={`flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase opacity-60 hover:opacity-100 transition-opacity hover:text-primary ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
           TIẾP THEO: PHẦN III
           <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </nav>

      {/* Main Hero */}
      <section className="px-8 md:px-24 py-24 mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="mb-10 text-center">
              
              <h1 className="font-display text-6xl md:text-8xl leading-tight mb-4">
              MỘT SỐ NỀN VĂN HÓA KHÁC Ở VIỆT NAM
              </h1>
              <p className={`text-lg mt-6 max-w-4xl mx-auto ${
                isDarkMode ? 'text-white/50' : 'text-gray-600'
              }`}>
                Khám phá sự đa dạng văn hóa qua các di sản tiêu biểu từ Bắc đến Nam
              </p>
            </div>
          </div>

          <div className="space-y-16">
            {/* Section 01: Xòe Thái */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <span className={`font-display text-5xl ${
                  isDarkMode ? 'text-primary' : 'text-amber-600'
                }`}>01.</span>
                <div>
                  <h3 className={`text-3xl font-display font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Nghệ thuật Xòe Thái</h3>
                  <p className={`text-sm mt-2 ${
                    isDarkMode ? 'text-white/50' : 'text-gray-600'
                  }`}>Đại diện miền núi phía Bắc</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: Cards */}
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shadow-lg flex-shrink-0">
                        <span className="material-symbols-outlined text-lg">groups</span>
                      </div>
                      <div className="pt-1">
                        <h4 className="text-base font-bold mb-2 text-primary">Góc nhìn lý thuyết</h4>
                        <p className={`text-sm leading-relaxed ${
                          isDarkMode ? 'text-white/70' : 'text-gray-800'
                        }`}>
                          Đây là minh chứng cho <span className={`font-bold ${
                            isDarkMode ? 'text-primary' : 'text-amber-700'
                          }`}>"Khối đại đoàn kết"</span>. Trong vòng xòe, không có sự phân biệt giàu nghèo hay địa vị, mọi người đều nắm tay nhau. Vòng xòe hoa biểu trưng cho sự gắn kết.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-2xl">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shadow-lg flex-shrink-0">
                        <span className="material-symbols-outlined text-lg">lightbulb</span>
                      </div>
                      <div className="pt-1">
                        <h4 className="text-base font-bold mb-2 text-primary">Thông điệp bảo tồn</h4>
                        <p className={`text-sm leading-relaxed ${
                          isDarkMode ? 'text-white/70' : 'text-gray-800'
                        }`}>
                          Từ một điệu múa bản địa, Xòe Thái đã trở thành <span className={`font-bold ${
                            isDarkMode ? 'text-primary' : 'text-amber-700'
                          }`}>Di sản UNESCO</span>. Điều này cho thấy khi ta biết tận dụng <span className={`font-bold ${
                            isDarkMode ? 'text-primary' : 'text-amber-700'
                          }`}>"Sức mạnh mềm"</span>, văn hóa dân tộc sẽ trở thành cầu nối để Việt Nam hội nhập với thế giới.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Image */}
                <div className="rounded-2xl overflow-hidden border border-white/10 h-full min-h-[400px]">
                  <img 
                    src="/Img/profile/xoe-Thai.jpg" 
                    alt="Xòe Thái dance" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Section 02: Ok Om Bok */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <span className={`font-display text-5xl ${
                  isDarkMode ? 'text-primary' : 'text-amber-600'
                }`}>02.</span>
                <div>
                  <h3 className={`text-3xl font-display font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Lễ hội Ok Om Bok & Đua ghe Ngo</h3>
                  <p className={`text-sm mt-2 ${
                    isDarkMode ? 'text-white/50' : 'text-gray-600'
                  }`}>Đại diện vùng Nam Bộ</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: Cards */}
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shadow-lg flex-shrink-0">
                        <span className="material-symbols-outlined text-lg">celebration</span>
                      </div>
                      <div className="pt-1">
                        <h4 className="text-base font-bold mb-2 text-primary">Góc nhìn lý thuyết</h4>
                        <p className={`text-sm leading-relaxed ${
                          isDarkMode ? 'text-white/70' : 'text-gray-800'
                        }`}>
                          Thể hiện sự <span className={`font-bold ${
                            isDarkMode ? 'text-primary' : 'text-amber-700'
                          }`}>"Bình đẳng và tôn trọng tín ngưỡng"</span>. Đảng và Nhà nước luôn tạo điều kiện để đồng bào Khmer duy trì lễ hội cúng Trăng, bảo tồn tiếng nói và chữ viết riêng ngay tại trường học.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-2xl">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shadow-lg flex-shrink-0">
                        <span className="material-symbols-outlined text-lg">lightbulb</span>
                      </div>
                      <div className="pt-1">
                        <h4 className="text-base font-bold mb-2 text-primary">Thông điệp bảo tồn</h4>
                        <p className={`text-sm leading-relaxed ${
                          isDarkMode ? 'text-white/70' : 'text-gray-800'
                        }`}>
                          Bảo tồn không phải là giữ nguyên trong bảo tàng, mà là làm cho nó <span className={`font-bold ${
                            isDarkMode ? 'text-primary' : 'text-amber-700'
                          }`}>"sống"</span> trong đời sống hiện đại. Đua ghe Ngo giờ đây là một sự kiện thể thao - du lịch lớn, giúp phát triển kinh tế vùng DTTS.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Image */}
                <div className="rounded-2xl overflow-hidden border border-white/10 h-full min-h-[400px]">
                  <img 
                    src="/Img/profile/Ok Om Bok.jpg" 
                    alt="Đua ghe Ngo" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Section 03: Ka-tê */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <span className="font-display text-5xl text-primary">03.</span>
                <div>
                <h3 className={`text-3xl font-display font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Lễ hội Ka-tê</h3>
                <p className={`text-sm mt-2 ${
                  isDarkMode ? 'text-white/50' : 'text-gray-600'
                }`}>Người Chăm - Ninh Thuận, Bình Thuận</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: Cards */}
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shadow-lg flex-shrink-0">
                        <span className="material-symbols-outlined text-lg">castle</span>
                      </div>
                      <div className="pt-1">
                        <h4 className="text-base font-bold mb-2 text-primary">Góc nhìn lý thuyết</h4>
                        <p className={`text-sm leading-relaxed ${
                          isDarkMode ? 'text-white/70' : 'text-gray-800'
                        }`}>
                          Đây là minh chứng cho chính sách <span className={`font-bold ${
                            isDarkMode ? 'text-primary' : 'text-amber-700'
                          }`}>"Tự quyết và tự do tín ngưỡng"</span>. Nhà nước không chỉ bảo tồn di tích tháp Chàm mà còn tạo điều kiện để người dân tổ chức lễ hội lớn nhất của họ, thể hiện sự tôn trọng tối đa đối với tâm lý và truyền thống dân tộc.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-2xl">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shadow-lg flex-shrink-0">
                        <span className="material-symbols-outlined text-lg">lightbulb</span>
                      </div>
                      <div className="pt-1">
                        <h4 className="text-base font-bold mb-2 text-primary">Thông điệp bảo tồn</h4>
                        <p className={`text-sm leading-relaxed ${
                          isDarkMode ? 'text-white/70' : 'text-gray-800'
                        }`}>
                          Văn hóa Chăm là sự kết hợp giữa di sản vật thể (tháp cổ) và phi vật thể (lễ hội). Việc giữ gìn này giúp Việt Nam khẳng định sự <span className={`font-bold ${
                            isDarkMode ? 'text-primary' : 'text-amber-700'
                          }`}>"Thống nhất trong đa dạng"</span>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Image */}
                <div className="rounded-2xl overflow-hidden border border-white/10 h-full min-h-[400px]">
                  <img 
                    src="/Img/profile/le-hoi-kate.jpg" 
                    alt="Lễ hội Ka-tê" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className={`px-8 py-16 border-t ${
        isDarkMode ? 'border-white/10' : 'border-gray-200'
      }`}>
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <div className="bg-primary/20 p-1.5 rounded shadow-lg border border-primary/20">
              <span className="material-symbols-outlined text-primary text-sm">account_balance</span>
            </div>
            <span className={`font-display text-lg font-bold tracking-widest uppercase ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Cultural Preservation</span>
          </div>
          <p className={`text-[10px] tracking-[0.2em] uppercase ${
            isDarkMode ? 'text-white/40' : 'text-gray-500'
          }`}>
            © 2026 Dự án bảo tồn văn hóa dân tộc. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex gap-6 justify-center">
            <span className={`material-symbols-outlined cursor-pointer hover:text-primary transition-colors ${
              isDarkMode ? 'text-white/40' : 'text-gray-500'
            }`}>public</span>
            <span className={`material-symbols-outlined cursor-pointer hover:text-primary transition-colors ${
              isDarkMode ? 'text-white/40' : 'text-gray-500'
            }`}>share</span>
          </div>
        </div>
      </footer>
    </div>
  );

  const renderSectionIII = () => (
    <div className="animate-in fade-in duration-1000">
      <nav className={`fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 backdrop-blur-md border-b transition-colors duration-500 ${
        isDarkMode ? 'bg-black/80 border-white/10' : 'bg-white/90 border-gray-200'
      }`}>
        <button onClick={() => onNavigate('2')} className={`flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase opacity-60 hover:opacity-100 transition-opacity hover:text-primary ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
           <span className="material-symbols-outlined text-sm">arrow_back</span>
           QUAY LẠI: PHẦN II
        </button>
        <div className="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
          <div className="bg-primary/20 p-1.5 rounded shadow-lg border border-primary/20">
             <span className="material-symbols-outlined text-primary text-sm">account_balance</span>
          </div>
          <span className={`font-display text-lg font-bold ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>CULTURAL PRESERVATION</span>
        </div>
        <button onClick={onBack} className={`flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase opacity-60 hover:opacity-100 transition-opacity hover:text-primary ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
           <span className="material-symbols-outlined text-sm">home</span>
           VỀ TRANG CHỦ
        </button>
      </nav>

      {/* Main Hero */}
      <section className="px-8 md:px-24 py-24 mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="mb-10 text-center">
              <span className="inline-block px-6 py-3 bg-primary/10 text-primary rounded-full text-base md:text-lg font-bold tracking-[0.2em] mb-8">ĐẶC ĐIỂM DÂN TỘC</span>
              <h1 className={`font-display text-6xl md:text-8xl leading-tight mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                DÂN TỘC THIỂU SỐ<br/>
                Ở VIỆT NAM
              </h1>
              <p className={`text-lg mt-6 max-w-4xl mx-auto ${
                isDarkMode ? 'text-white/50' : 'text-gray-600'
              }`}>
                Việt Nam là quốc gia thống nhất của 54 dân tộc anh em. Vấn đề dân tộc luôn là nội dung chiến lược trong sự nghiệp cách mạng của Đảng ta.
              </p>
            </div>
          </div>

          <div className="space-y-16">
            {/* Section 01: Đặc điểm */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <span className={`font-display text-5xl ${
                  isDarkMode ? 'text-primary' : 'text-amber-600'
                }`}>01.</span>
                <div>
                  <h3 className={`text-3xl font-display font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Đặc điểm dân tộc thiểu số</h3>
                  <p className={`text-sm mt-2 ${
                    isDarkMode ? 'text-white/50' : 'text-gray-600'
                  }`}>Bức tranh tổng quan</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: Content */}
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shadow-lg flex-shrink-0">
                        <span className="material-symbols-outlined text-lg">diversity_3</span>
                      </div>
                      <div className="pt-1">
                        <h4 className="text-base font-bold mb-2 text-primary">Việt Nam - Quốc gia thống nhất 54 dân tộc</h4>
                        <p className={`text-sm leading-relaxed ${
                          isDarkMode ? 'text-white/70' : 'text-gray-800'
                        }`}>
                          Việt Nam là một quốc gia thống nhất của 54 dân tộc anh em. Vấn đề dân tộc luôn là một <span className={`font-bold ${
                        isDarkMode ? 'text-primary' : 'text-amber-700'
                      }`}>nội dung chiến lược</span> trong sự nghiệp cách mạng của Đảng ta.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shadow-lg flex-shrink-0">
                        <span className="material-symbols-outlined text-lg">location_on</span>
                      </div>
                      <div className="pt-1">
                        <h4 className="text-base font-bold mb-2 text-primary">Cư trú xen kẽ</h4>
                        <p className={`text-sm leading-relaxed ${
                          isDarkMode ? 'text-white/70' : 'text-gray-800'
                        }`}>
                          Các dân tộc ở Việt Nam có sự cư trú xen kẽ, nhưng đặc biệt là đồng bào dân tộc thiểu số (DTTS) thường sinh sống ở những <span className={`font-bold ${
                        isDarkMode ? 'text-primary' : 'text-amber-700'
                      }`}>vị trí chiến lược quan trọng về an ninh quốc phòng</span>.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shadow-lg flex-shrink-0">
                        <span className="material-symbols-outlined text-lg">trending_up</span>
                      </div>
                      <div className="pt-1">
                        <h4 className="text-base font-bold mb-2 text-primary">Chênh lệch phát triển</h4>
                        <p className={`text-sm leading-relaxed ${
                          isDarkMode ? 'text-white/70' : 'text-gray-800'
                        }`}>
                          Dù còn tồn tại sự chênh lệch về trình độ phát triển kinh tế - xã hội, nhưng điểm sáng lớn nhất chính là <span className={`font-bold ${
                        isDarkMode ? 'text-primary' : 'text-amber-700'
                      }`}>truyền thống đoàn kết lâu đời</span>.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shadow-lg flex-shrink-0">
                        <span className="material-symbols-outlined text-lg">star</span>
                      </div>
                      <div className="pt-1">
                        <h4 className="text-base font-bold mb-2 text-primary">Bản sắc đa dạng</h4>
                        <p className={`text-sm leading-relaxed ${
                          isDarkMode ? 'text-white/70' : 'text-gray-800'
                        }`}>
                          Mỗi dân tộc mang một bản sắc riêng, góp phần tạo nên sự phong phú cho nền văn hóa Việt Nam thống nhất. Chính những đặc điểm này đòi hỏi Đảng và Nhà nước phải có <span className={`font-bold ${
                        isDarkMode ? 'text-primary' : 'text-amber-700'
                      }`}>chính sách đặc thù, toàn diện</span>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Image */}
                <img 
                  src="/Img/profile/54-dan-toc-vn.jpg" 
                  alt="54 dân tộc Việt Nam" 
                  className="w-full h-auto block rounded-2xl"
                />
              </div>
            </div>

            {/* Section 02: Quan điểm và chính sách */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <span className={`font-display text-5xl ${
                  isDarkMode ? 'text-primary' : 'text-amber-600'
                }`}>02.</span>
                <div>
                  <h3 className={`text-3xl font-display font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Quan điểm và chính sách của Đảng</h3>
                  <p className={`text-sm mt-2 ${
                    isDarkMode ? 'text-white/50' : 'text-gray-600'
                  }`}>Chuyển mình mạnh mẽ</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shadow-lg flex-shrink-0">
                      <span className="material-symbols-outlined text-xl">policy</span>
                    </div>
                    <div className="pt-2">
                      <h4 className="text-lg font-bold mb-3 text-primary">Chiến lược đại hội XII</h4>
                      <p className={`text-base leading-relaxed mb-4 ${
                        isDarkMode ? 'text-white/70' : 'text-gray-800'
                      }`}>
                        Đại hội XII xác định <span className={`font-bold ${
                        isDarkMode ? 'text-primary' : 'text-amber-700'
                      }`}>đoàn kết dân tộc là vấn đề chiến lược</span>. Chúng ta chuyển hẳn từ tư duy 'bao cấp' sang <span className={`font-bold ${
                        isDarkMode ? 'text-primary' : 'text-amber-700'
                      }`}>'bình đẳng, cùng phát triển'</span> trên 5 trụ cột toàn diện:
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                        {['Chính trị', 'Kinh tế', 'Văn hóa', 'Xã hội', 'Quốc phòng'].map((item, i) => (
                          <div key={i} className="px-3 py-2 bg-primary/10 text-primary rounded-lg text-xs font-bold text-center">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shadow-lg flex-shrink-0">
                      <span className="material-symbols-outlined text-xl">trending_up</span>
                    </div>
                    <div className="pt-2">
                      <h4 className="text-lg font-bold mb-3 text-primary">Điểm đột phá</h4>
                      <p className={`text-base leading-relaxed ${
                        isDarkMode ? 'text-white/70' : 'text-gray-800'
                      }`}>
                        Tư duy coi <span className={`font-bold ${
                        isDarkMode ? 'text-primary' : 'text-amber-700'
                      }`}>văn hóa là nguồn lực kinh tế</span> chứ không phải gánh nặng ngân sách. Với nguyên tắc <span className={`font-bold ${
                        isDarkMode ? 'text-primary' : 'text-amber-700'
                      }`}>"Văn hóa còn thì dân tộc còn"</span>, đây là lá chắn an ninh mềm trong kỷ nguyên số. Cụ thể hóa bằng <span className={`font-bold ${
                        isDarkMode ? 'text-primary' : 'text-amber-700'
                      }`}>Chương trình 1719</span>, Nhà nước tập trung phát triển du lịch để người dân sống được bằng văn hóa, hướng tới đóng góp 7% GDP.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shadow-lg flex-shrink-0">
                      <span className="material-symbols-outlined text-xl">groups</span>
                    </div>
                    <div className="pt-2">
                      <h4 className="text-lg font-bold mb-3 text-primary">Sự đồng lòng của 4 bên</h4>
                      <p className={`text-sm leading-relaxed mb-4 ${
                        isDarkMode ? 'text-white/70' : 'text-gray-800'
                      }`}>
                        Để thành công, cần sự đồng lòng:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          { icon: 'person', label: 'Cán bộ phải hiểu' },
                          { icon: 'elderly', label: 'Già làng phải giữ hồn cốt' },
                          { icon: 'rocket_launch', label: 'Thanh niên phải số hóa, khởi nghiệp' },
                          { icon: 'travel_explore', label: 'Du khách phải tôn trọng bản sắc' }
                        ].map((item, i) => (
                          <div key={i} className={`flex items-center gap-3 p-3 rounded-lg ${
                            isDarkMode ? 'bg-white/5' : 'bg-gray-100'
                          }`}>
                            <span className={`material-symbols-outlined text-lg ${
                              isDarkMode ? 'text-primary' : 'text-amber-600'
                            }`}>{item.icon}</span>
                            <span className={`text-sm ${
                              isDarkMode ? 'text-white/70' : 'text-gray-800'
                            }`}>{item.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Kết luận */}
            <div className="p-8 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shadow-lg flex-shrink-0">
                  <span className="material-symbols-outlined text-xl">lightbulb</span>
                </div>
                <div className="pt-2">
                  <h4 className="text-lg font-bold mb-3 text-primary">Kết luận</h4>
                  <p className={`text-base leading-relaxed ${
                    isDarkMode ? 'text-white/70' : 'text-gray-800'
                  }`}>
                    Chính sách dân tộc của Việt Nam đang chuyển mình mạnh mẽ, từ hỗ trợ đơn thuần sang <span className={`font-bold ${
                        isDarkMode ? 'text-primary' : 'text-amber-700'
                      }`}>kích hoạt nội lực phát triển</span>. Đoàn kết dân tộc và phát huy bản sắc văn hóa không chỉ là nhiệm vụ chính trị mà còn là <span className={`font-bold ${
                        isDarkMode ? 'text-primary' : 'text-amber-700'
                      }`}>động lực kinh tế quan trọng</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className={`px-8 py-16 border-t ${
        isDarkMode ? 'border-white/10' : 'border-gray-200'
      }`}>
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <div className="bg-primary/20 p-1.5 rounded shadow-lg border border-primary/20">
              <span className="material-symbols-outlined text-primary text-sm">account_balance</span>
            </div>
            <span className={`font-display text-lg font-bold tracking-widest uppercase ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Cultural Preservation</span>
          </div>
          <p className={`text-[10px] tracking-[0.2em] uppercase ${
            isDarkMode ? 'text-white/40' : 'text-gray-500'
          }`}>
            © 2026 Dự án bảo tồn văn hóa dân tộc. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex gap-6 justify-center">
            <span className={`material-symbols-outlined cursor-pointer hover:text-primary transition-colors ${
              isDarkMode ? 'text-white/40' : 'text-gray-500'
            }`}>public</span>
            <span className={`material-symbols-outlined cursor-pointer hover:text-primary transition-colors ${
              isDarkMode ? 'text-white/40' : 'text-gray-500'
            }`}>share</span>
          </div>
        </div>
      </footer>
    </div>
  );

  const getContent = () => {
    switch(sectionId) {
      case '1': return renderSectionI();
      case '2': return renderSectionII();
      case '3': return renderSectionIII();
      default: return null;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDarkMode ? 'bg-[#111111] text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      {getContent()}
    </div>
  );
};

export default DetailPage;
