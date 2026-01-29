
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
      <section className="px-8 md:px-24 py-12 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-[10px] uppercase mb-6 font-bold tracking-[0.3em]">CHƯƠNG I • CƠ SỞ LÝ LUẬN</span>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mb-6">
              Phần I: Khái quát về <br/>
              <span className="text-primary italic font-light">Dân tộc và Văn hóa</span>
            </h1>
            <p className="text-lg text-white/60 max-w-lg mb-12 leading-relaxed">
              Khám phá những nền tảng tri thức về sự hình thành cộng đồng và bản sắc văn hóa trong dòng chảy lịch sử dân tộc.
            </p>

            <div className="space-y-6">
              <h2 className="text-2xl font-display mb-6">01. Quan niệm về dân tộc từ góc độ <span className="text-primary italic font-serif">Chủ nghĩa xã hội khoa học</span></h2>
              <p className="text-white/50 mb-8 leading-relaxed">
                Dân tộc là một cộng đồng người ổn định được hình thành trong lịch sử trên cơ sở những mối liên hệ chặt chẽ về kinh tế, lãnh thổ, ngôn ngữ, văn hóa và tâm lý dân tộc...
              </p>
              
              <div className="space-y-3">
                {[
                  { icon: 'public', title: 'LÃNH THỔ & KINH TẾ', desc: 'Cộng đồng về địa giới và sự thống nhất các quan hệ kinh tế.' },
                  { icon: 'language', title: 'NGÔN NGỮ CHUNG', desc: 'Sự thống nhất về tiếng nói dùng làm công cụ giao tiếp xã hội.' },
                  { icon: 'groups', title: 'TÂM LÝ & BẢN SẮC', desc: 'Đặc điểm tâm lý và di sản văn hóa đặc thù riêng biệt.' }
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
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 relative h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <img src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" alt="Ethnic" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-lg border border-white/10">
                <span className="text-[10px] tracking-widest uppercase text-white/70">Nếp sống cộng đồng vùng cao Việt Nam</span>
              </div>
            </div>
            <div className="h-48 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
               <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Nature" />
            </div>
            <div className="h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center p-8 border border-primary/20 shadow-lg">
               <div className="opacity-60"><span className="material-symbols-outlined text-primary text-6xl">spa</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Relation Section */}
      <section className="px-8 md:px-24 py-24 border-t border-white/10">
         <div className="text-center max-w-4xl mx-auto space-y-10">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold tracking-[0.3em]">02</span>
            <h2 className="font-display text-4xl md:text-6xl leading-tight">Mối quan hệ biện chứng giữa <br/> Dân tộc và Văn hóa</h2>
            <p className="text-white/50 text-base leading-relaxed">
              Văn hóa là linh hồn của dân tộc, là tấm gương phản chiếu hành trình lịch sử và tâm thế của một cộng đồng. Mối quan hệ này mang tính hữu cơ: Dân tộc là chủ thể sáng tạo văn hóa, đồng thời văn hóa là dấu hiệu nhận diện đặc trưng nhất.
            </p>
            
            <div className="bg-gradient-to-br from-forest/30 to-forest/10 p-12 md:p-16 rounded-3xl relative overflow-hidden group border border-primary/20 shadow-2xl">
               <div className="absolute top-4 left-4 opacity-10 pointer-events-none">
                 <span className="material-symbols-outlined text-8xl text-primary font-bold">format_quote</span>
               </div>
               <p className="text-xl md:text-3xl font-display italic text-white leading-snug relative z-10">
                 "Văn hóa là căn cước của dân tộc. Một dân tộc mất đi bản sắc văn hóa của mình cũng chính là lúc dân tộc đó không còn tồn tại với tư cách một cộng đồng độc lập."
               </p>
               <div className="h-1 w-20 bg-primary/50 mx-auto mt-10 rounded-full"></div>
            </div>
         </div>
      </section>

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
