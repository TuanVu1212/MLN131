
import React, { useEffect } from 'react';

interface DetailPageProps {
  sectionId: string;
  onBack: () => void;
  onNavigate: (id: string) => void;
}

const DetailPage: React.FC<DetailPageProps> = ({ sectionId, onBack, onNavigate }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [sectionId]);

  const renderSectionI = () => (
    <div className="animate-in fade-in duration-1000">
      {/* Header Nav */}
      <nav className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <button onClick={onBack} className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase opacity-60 hover:opacity-100 transition-opacity">
           <span className="material-symbols-outlined text-sm">arrow_back</span>
           QUAY LẠI TRANG CHỦ
        </button>
        <div className="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
           <span className="bg-primary/20 p-1.5 rounded shadow-lg border border-primary/20">
             <span className="material-symbols-outlined text-primary text-sm">account_balance</span>
           </span>
           <span className="font-display text-lg font-bold">ETHNIC ARCHIVE</span>
        </div>
        <button onClick={() => onNavigate('2')} className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase opacity-60 hover:opacity-100 transition-opacity hover:text-primary">
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
              <h1 className="font-display text-6xl md:text-8xl leading-tight mb-4">
                KHÁI QUÁT VỀ<br/>
                DÂN TỘC VÀ VĂN HÓA
              </h1>
              
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Section 01 */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <span className="font-display text-5xl text-primary">01.</span>
                <div>
                  <h2 className="text-3xl font-display font-bold">Khái niệm Dân tộc</h2>
                  <p className="text-white/50 text-sm mt-1">"Hồn cốt" của thực thể</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                Dân tộc không chỉ là ranh giới địa lý hay một thực thể kinh tế. Dân tộc là sự thống nhất của 4 yếu tố cơ bản:
                </p>
                  
                <div className="space-y-3">
                  {[
                    { icon: 'public', title: 'LÃNH THỔ', desc: 'Ranh giới địa lý là "thân xác" của dân tộc - nơi cộng đồng sinh sống và phát triển.' },
                    { icon: 'language', title: 'NGÔN NGỮ', desc: 'Công cụ giao tiếp và lưu giữ tri thức, tạo nên sự thống nhất trong cộng đồng.' },
                    { icon: 'account_balance', title: 'KINH TẾ', desc: 'Sự thống nhất về các quan hệ kinh tế, tạo nền tảng vật chất cho sự tồn tại.' },
                    { icon: 'favorite', title: 'TÂM LÝ / VĂN HÓA', desc: 'Văn hóa là "tâm hồn" - hệ điều hành tâm lý kết nối các thành viên dân tộc.' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-white/8 transition-all duration-300 cursor-default group">
                      <div className="bg-primary/10 p-2.5 rounded-lg text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300">
                        <span className="material-symbols-outlined">{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold tracking-widest text-primary mb-1.5 uppercase">{item.title}</h4>
                        <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-5 bg-primary/5 border border-primary/20 rounded-xl">
                  <p className="text-sm text-white/70 italic leading-relaxed">
                    💡 <span className="text-primary font-semibold">Vị trí của văn hóa:</span> Văn hóa không đứng ngoài dân tộc - nó chính là "hệ điều hành" tâm lý kết nối các thành viên. Nếu lãnh thổ là thân xác, thì văn hóa là tâm hồn.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Section 02 */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <span className="font-display text-5xl text-primary">02.</span>
                <h2 className="text-3xl font-display font-bold">Mối quan hệ biện chứng</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-white/50 text-sm leading-relaxed">
                  Trong thời kỳ quá độ lên CNXH, phát triển kinh tế mà đánh mất văn hóa chính là sự <span className="text-primary font-semibold">"phát triển què quặt"</span>. Văn hóa chính là <span className="text-primary font-semibold">Căn cước tinh thần</span> giúp một dân tộc tồn tại độc lập trên bản đồ thế giới.
                </p>
                
                <div className="bg-gradient-to-br from-forest/30 to-forest/10 p-8 rounded-2xl relative overflow-hidden group border border-primary/20 shadow-2xl">
                   <div className="absolute top-2 left-2 opacity-10 pointer-events-none">
                     <span className="material-symbols-outlined text-6xl text-primary font-bold">format_quote</span>
                   </div>
                   <p className="text-lg md:text-xl font-display italic text-white leading-snug relative z-10">
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
                  <h3 className="text-3xl font-display font-bold">Hai xu hướng khách quan</h3>
                  <p className="text-white/50 text-sm mt-2">Vũ điệu giữa "Bản sắc" và "Liên hiệp"</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shadow-lg flex-shrink-0">
                      <span className="material-symbols-outlined text-lg">shield</span>
                    </div>
                    <div>
                      <h4 className="text-base font-bold mb-2">Xu hướng 1: Khát vọng tự khẳng định</h4>
                      <p className="text-white/50 text-xs leading-relaxed mb-2">
                        Các dân tộc muốn tách ra để giữ gìn bản sắc riêng.
                      </p>
                    </div>
                  </div>
                  <div className="pl-13">
                    <p className="text-[11px] text-white/40 italic leading-relaxed">
                      <span className="text-primary">Ví dụ:</span> Cách người Tây Nguyên tinh chỉnh âm thanh chiếc Chiêng Mẹ để khẳng định "tôi là duy nhất".
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shadow-lg flex-shrink-0">
                      <span className="material-symbols-outlined text-lg">public</span>
                    </div>
                    <div>
                      <h4 className="text-base font-bold mb-2">Xu hướng 2: Sức hút của sự hòa hợp</h4>
                      <p className="text-white/50 text-xs leading-relaxed mb-2">
                        Nhu cầu hội nhập, xích lại gần nhau để cùng tiến bộ trong thời đại 4.0.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-xl">
                  <p className="text-base text-white/80 leading-relaxed">
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
                  <p className="text-white/50 text-sm mt-2">Bản tuyên ngôn công bằng</p>
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
                      <p className="text-white/50 text-sm leading-relaxed">
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
                      <p className="text-white/50 text-sm leading-relaxed">
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
            <span className="inline-block px-6 py-3 bg-primary/10 text-primary rounded-full text-base md:text-lg font-bold tracking-[0.2em]">PHẦN 2 • TÍNH TẤT YẾU</span>
            <h2 className="font-display text-5xl md:text-7xl leading-tight">
              "Hộ chiếu" <span className="text-primary">văn hóa</span>
            </h2>
            <p className="text-white/50 text-lg max-w-3xl mx-auto leading-relaxed">
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

              <div className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shadow-lg flex-shrink-0">
                    <span className="material-symbols-outlined text-xl">diversity_3</span>
                  </div>
                  <p className="text-white/70 text-base leading-relaxed pt-2">
                    Việt Nam là quốc gia đa dân tộc với truyền thống đoàn kết, nhưng trình độ phát triển không đồng đều. Sự chênh lệch này khiến văn hóa dân tộc thiểu số dễ bị tổn thương nhất trước làn sóng đô thị hóa. Bảo tồn văn hóa là nhiệm vụ chiến lược để xây dựng khối đại đoàn kết dân tộc bền vững.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Harsh Reality */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <span className="font-display text-5xl text-primary">02.</span>
                <div>
                  <h3 className="text-3xl font-display font-bold">Thực tiễn nghiệt ngã</h3>
                  <p className="text-white/50 text-sm mt-2">Cơn lốc của "Sự đồng hóa tự nguyện"</p>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-400 shadow-lg flex-shrink-0">
                    <span className="material-symbols-outlined text-xl">warning</span>
                  </div>
                  <p className="text-white/70 text-base leading-relaxed pt-2">
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
                    <p className="text-white/70 text-base leading-relaxed">
                      <span className="text-primary font-bold">Mất văn hóa là mất căn cước.</span> Ta có thể sống hiện đại, nhưng trái tim vẫn phải rung động trước giá trị truyền thống. Đó chính là <span className="text-primary font-bold">"tấm hộ chiếu"</span> để hội nhập mà không đánh mất chính mình.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 border-t border-white/10 text-center">
        <p className="text-white/40 text-sm">© 2024 Ethnic Archive. Bảo tồn bản sắc giữa dòng chảy hội nhập.</p>
      </footer>

    </div>
  );

  const renderSectionII = () => (
    <div className="animate-in fade-in duration-1000">
      <nav className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <button onClick={() => onNavigate('1')} className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase opacity-60 hover:opacity-100 transition-opacity hover:text-primary">
           <span className="material-symbols-outlined text-sm">arrow_back</span>
           QUAY LẠI: PHẦN I
        </button>
        <div className="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
          <span className="bg-primary/20 p-1.5 rounded shadow-lg border border-primary/20">
            <span className="material-symbols-outlined text-primary text-sm">account_balance</span>
          </span>
          <span className="font-display text-lg font-bold">ETHNIC ARCHIVE</span>
        </div>
        <button onClick={() => onNavigate('3')} className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase opacity-60 hover:opacity-100 transition-opacity hover:text-primary">
           TIẾP THEO: PHẦN III
           <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </nav>

      <section className="px-8 md:px-24 py-16 text-center mt-20">
        <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-[10px] uppercase mb-6 font-bold tracking-[0.3em]">LÝ LUẬN HỌC THUẬT</span>
        <h1 className="font-display text-5xl md:text-7xl mb-6 leading-tight">Phần II: CƠ SỞ LÝ LUẬN</h1>
        <p className="text-white/50 max-w-2xl mx-auto text-base leading-relaxed italic">
          "Phân tích hệ thống các quan điểm Marx-Lenin về vấn đề dân tộc và những quy luật phát triển tất yếu trong thời đại mới."
        </p>
      </section>

      <section className="px-8 md:px-24 py-12 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-16">
           <div className="flex items-center gap-4">
             <span className="font-display text-4xl text-primary">01.</span>
             <h2 className="text-3xl font-display font-bold">Hai xu hướng <br/> khách quan</h2>
           </div>

           <div className="grid grid-cols-1 gap-10">
             <div className="space-y-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300">
               <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shadow-lg">
                 <span className="material-symbols-outlined">diversity_3</span>
               </div>
               <h3 className="text-xl font-bold">1. Sự thức tỉnh ý thức dân tộc</h3>
               <p className="text-white/50 text-sm leading-relaxed">Cộng đồng dân tộc muốn tách ra để hình thành các quốc gia độc lập. Đây là kết quả của sự phát triển lực lượng sản xuất, sự trưởng thành về chính trị và mong muốn tự chủ về văn hóa, ngôn ngữ.</p>
               <ul className="text-[10px] tracking-widest text-primary/70 space-y-2 uppercase font-bold">
                 <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">trending_up</span> Khẳng định bản sắc riêng biệt</li>
                 <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">trending_up</span> Chống lại sự đồng hóa cưỡng ép</li>
               </ul>
             </div>

             <div className="space-y-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300">
               <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shadow-lg">
                 <span className="material-symbols-outlined">public</span>
               </div>
               <h3 className="text-xl font-bold">2. Sự liên hiệp các dân tộc</h3>
               <p className="text-white/50 text-sm leading-relaxed">Các dân tộc có xu hướng liên kết, xóa bỏ rào cản ngăn cách để hợp tác phát triển kinh tế, văn hóa. Đây là hệ quả của cuộc cách mạng khoa học kỹ thuật và sự quốc tế hóa đời sống xã hội.</p>
               <ul className="text-[10px] tracking-widest text-primary/70 space-y-2 uppercase font-bold">
                 <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">trending_up</span> Hợp tác đa phương bền vững</li>
                 <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">trending_up</span> Giao lưu văn hóa toàn cầu</li>
               </ul>
             </div>
           </div>
        </div>

        <div className="bg-gradient-to-br from-white/8 to-white/5 rounded-3xl p-10 border border-white/10 self-start shadow-2xl">
           <div className="flex items-center gap-4 mb-10">
             <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold">02</span>
             <h2 className="text-2xl font-display font-bold">Cương lĩnh Dân tộc của V.I. Lenin</h2>
           </div>

           <div className="space-y-8">
             {[
               { id: '02.1', title: 'Các dân tộc hoàn toàn bình đẳng', desc: 'Không có đặc quyền cho bất kỳ dân tộc nào. Mọi dân tộc dù lớn hay nhỏ, dù ở trình độ phát triển nào cũng đều có nghĩa vụ và quyền lợi ngang nhau.' },
               { id: '02.2', title: 'Các dân tộc được quyền tự quyết', desc: 'Quyền tự lựa chọn chế độ chính trị và con đường phát triển của mình. Đây là quyền làm chủ của mỗi dân tộc đối với vận mệnh của mình.' },
               { id: '02.3', title: 'Liên hiệp công nhân tất cả các dân tộc', desc: 'Yếu tố quyết định để giải quyết vấn đề dân tộc theo lập trường giai cấp công nhân. Phản ánh sự thống nhất giữa sự nghiệp giải phóng dân tộc và giải phóng giai cấp.' }
             ].map((item) => (
               <div key={item.id} className="group border-b border-white/10 pb-6 last:border-0 hover:border-primary/30 transition-colors">
                 <div className="flex justify-between items-start mb-3">
                   <h4 className="text-base font-bold group-hover:text-primary transition-colors">{item.title}</h4>
                   <span className="text-[10px] tracking-widest text-white/30 font-bold px-2 py-1 bg-white/5 rounded">{item.id}</span>
                 </div>
                 <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      <footer className="px-8 md:px-24 py-16 border-t border-white/5 mt-20">
         <div className="space-y-4 text-center">
            <div className="flex items-center justify-center gap-2 text-primary font-bold">
              <span className="material-symbols-outlined text-sm">nature_people</span>
              <span className="text-[10px] uppercase tracking-[0.3em]">Lưu trữ Văn hóa Dân tộc</span>
            </div>
            <div className="text-[9px] uppercase tracking-widest leading-loose text-white/40">
              ĐỀ TÀI NGHIÊN CỨU CẤP BỘ SỐ 842/KH-VN <br/>
              HỘI ĐỒNG BIÊN SOẠN: VIỆN KHOA HỌC XÃ HỘI VIỆT NAM <br/>
              BẢN QUYỀN © 2024. PHỤC VỤ MỤC ĐÍCH GIÁO DỤC PHI LỢI NHUẬN.
            </div>
         </div>
      </footer>
    </div>
  );

  const renderSectionIII = () => (
    <div className="animate-in fade-in duration-1000">
      <nav className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <button onClick={() => onNavigate('2')} className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase opacity-60 hover:opacity-100 transition-opacity hover:text-[#50C878]">
           <span className="material-symbols-outlined text-sm">arrow_back</span>
           QUAY LẠI: PHẦN II
        </button>
        <div className="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
          <div className="bg-primary/20 p-1.5 rounded shadow-lg border border-primary/20">
             <span className="material-symbols-outlined text-primary text-sm">account_balance</span>
          </div>
          <span className="font-display text-lg font-bold">ETHNIC ARCHIVE</span>
        </div>
        <button onClick={onBack} className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase opacity-60 hover:opacity-100 transition-opacity hover:text-[#50C878]">
           <span className="material-symbols-outlined text-sm">home</span>
           VỀ TRANG CHỦ
        </button>
      </nav>

      <section className="px-8 md:px-24 py-16 text-center space-y-6 mt-20">
        <span className="inline-block px-4 py-2 bg-[#50C878]/10 text-[#50C878] rounded-full font-bold tracking-[0.3em] text-[10px] uppercase">CHUYÊN ĐỀ NGHIÊN CỨU</span>
        <h1 className="font-display text-5xl md:text-7xl leading-tight">Phần III: <span className="italic font-light">Tính tất yếu</span> của việc bảo tồn</h1>
        <p className="text-white/50 max-w-3xl mx-auto text-base leading-relaxed">
           Khám phá mối liên hệ mật thiết giữa bản sắc truyền thống và sức ép của quá trình hiện đại hóa trong bối cảnh hội nhập toàn cầu.
        </p>
      </section>

      <section className="px-8 md:px-24 py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="group relative rounded-3xl overflow-hidden aspect-square md:aspect-auto md:h-[600px] border border-white/10 hover:border-[#50C878]/30 transition-all duration-500 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#A27B5C] to-[#2C3639] opacity-80"></div>
            <img src="https://images.unsplash.com/photo-1493246507139-91e8bef99c17?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-[3s]" alt="Context" />
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
               <span className="px-3 py-1.5 bg-[#50C878]/20 rounded-lg text-[10px] tracking-widest uppercase w-fit mb-4 border border-[#50C878]/30 backdrop-blur-md text-[#50C878] font-bold">Bản sắc nội tại</span>
               <h3 className="font-display text-3xl mb-6">Đặc điểm dân tộc tại Việt Nam</h3>
               <p className="text-white/70 leading-relaxed mb-8 text-sm">
                  Việt Nam là quốc gia đa dân tộc với 54 dân tộc anh em. Mỗi dân tộc mang trong mình một kho tàng di sản văn hóa riêng biệt từ ngôn ngữ, trang phục đến phong tục tập quán. Việc bảo tồn không chỉ là giữ gìn quá khứ, mà là duy trì tính đa dạng sinh học văn hóa, tạo nên sức mạnh nội sinh cho quốc gia.
               </p>
               <div className="space-y-3">
                 <div className="flex items-center gap-3 text-xs font-bold text-[#50C878]"><span className="material-symbols-outlined text-base">diversity_2</span> Sự gắn kết cộng đồng thông qua các thiết chế văn hóa làng bản truyền thống.</div>
                 <div className="flex items-center gap-3 text-xs font-bold text-[#50C878]"><span className="material-symbols-outlined text-base">temp_preferences_custom</span> Tri thức dân gian về y học, canh tác và bảo vệ môi trường sinh thái.</div>
               </div>
            </div>
         </div>

         <div className="group relative rounded-3xl overflow-hidden aspect-square md:aspect-auto md:h-[600px] border border-white/10 hover:border-red-500/30 transition-all duration-500 shadow-2xl">
            <div className="absolute inset-0 bg-[#111111]"></div>
            <div className="absolute inset-0 opacity-40">
               <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Pop Culture" />
            </div>
            <div className="absolute top-10 right-10 w-14 h-14 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5">
               <span className="material-symbols-outlined text-white/60">wb_sunny</span>
            </div>
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
               <span className="px-3 py-1.5 bg-red-500/20 rounded-lg text-[10px] tracking-widest uppercase w-fit mb-4 border border-red-500/30 backdrop-blur-md text-red-400 font-bold">Thách thức ngoại biên</span>
               <h3 className="font-display text-3xl mb-6">Cơn lốc văn hóa đại chúng (Pop Culture)</h3>
               <p className="text-white/70 leading-relaxed mb-8 text-sm">
                  Quá trình đô thị hóa và sự xâm nhập của văn hóa đại chúng toàn cầu đang tạo ra một "phễu lọc" san bằng các giá trị khác biệt. Giới trẻ dân tộc thiểu số đứng trước nguy cơ đánh mất gốc rễ khi tiếp xúc với các trào lưu giải trí, lối sống tiêu thụ hiện đại.
               </p>
               <div className="space-y-3">
                 <div className="flex items-center gap-3 text-xs font-bold text-white/50"><span className="material-symbols-outlined text-base">grid_view</span> Sự mai một của các ngôn ngữ mẹ đẻ trong giao tiếp hàng ngày.</div>
                 <div className="flex items-center gap-3 text-xs font-bold text-white/50"><span className="material-symbols-outlined text-base">travel_explore</span> Nguy cơ thương mại hóa quá mức các di sản phi vật thể phục vụ du lịch.</div>
               </div>
            </div>
         </div>
      </section>

      <section className="px-8 md:px-24 py-20">
         <div className="h-px bg-gradient-to-r from-transparent via-[#50C878]/30 to-transparent w-full mb-16"></div>
         <div className="text-center mb-12">
           <span className="inline-block px-4 py-2 bg-[#50C878]/10 text-[#50C878] rounded-full text-xs font-bold tracking-widest uppercase mb-4">Key Aspects</span>
           <h2 className="font-display text-4xl mb-4">Các phương diện bảo tồn trọng tâm</h2>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: 'VĂN HÓA VẬT THỂ', desc: 'Duy trì kiến trúc nhà sàn, trang phục thổ cẩm và các công cụ lao động đặc thù. Đây là biểu tượng hữu hình của sự tồn tại dân tộc.' },
             { title: 'VĂN HÓA PHI VẬT THỂ', desc: 'Bảo tồn các bài hát dân ca, điệu múa cổ truyền và nghi lễ cúng bái mang đậm tính nhân văn và tâm linh cộng đồng.' },
             { title: 'NGÔN NGỮ & CHỮ VIẾT', desc: 'Hệ thống hóa và truyền dạy ngôn ngữ dân tộc cho thế hệ kế cận, coi đây là "linh hồn" của mỗi cộng đồng bản sắc.' }
           ].map((item, i) => (
             <div key={i} className="space-y-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#50C878]/30 hover:bg-white/8 transition-all duration-300">
                <div className="w-12 h-1.5 bg-[#50C878] rounded-full shadow-lg shadow-[#50C878]/30"></div>
                <h4 className="font-bold tracking-widest uppercase text-sm">{item.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
             </div>
           ))}
         </div>
      </section>

      <footer className="px-8 md:px-24 py-16 border-t border-white/5 mt-20 text-center">
         <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 text-[#50C878] font-bold">
              <span className="material-symbols-outlined text-sm">nature_people</span>
              <span className="text-[10px] uppercase tracking-[0.3em]">Lưu trữ Văn hóa Dân tộc</span>
            </div>
            <div className="text-[9px] uppercase tracking-widest leading-loose text-white/40">
              ĐỀ TÀI NGHIÊN CỨU CẤP BỘ SỐ 842/KH-VN <br/>
              HỘI ĐỒNG BIÊN SOẠN: VIỆN KHOA HỌC XÃ HỘI VIỆT NAM <br/>
              BẢN QUYỀN © 2024. PHỤC VỤ MỤC ĐÍCH GIÁO DỤC PHI LỢI NHUẬN.
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
    <div className="min-h-screen">
      {getContent()}
      
      {/* Mini Branding Footer */}
      <div className="py-12 flex flex-col items-center gap-8 opacity-40 border-t border-white/5">
         <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">account_balance</span>
            <span className="font-display font-bold uppercase tracking-widest text-xs">Ethnic Archive</span>
         </div>
         <div className="text-[10px] tracking-[0.2em] uppercase">© 2024 Dự án bảo tồn văn hóa dân tộc. Tất cả quyền được bảo lưu.</div>
         <div className="flex gap-8">
            <span className="material-symbols-outlined cursor-pointer hover:text-primary">public</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-primary">share</span>
         </div>
      </div>
    </div>
  );
};

export default DetailPage;
