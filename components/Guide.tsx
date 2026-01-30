import React from 'react';

interface GuideProps {
  isDarkMode?: boolean;
}

const Guide: React.FC<GuideProps> = ({ isDarkMode = true }) => {
  const boxTypes = [
    {
      id: 1,
      title: "Ô Thường",
      color: "bg-gray-700",
      description: "Người chơi sẽ bốc thăm câu hỏi, người chơi sẽ có 60 giây để trả lời câu hỏi từ một trong 03 phần.",
      rules: [
        "Trả lời đúng: Tăng 1 bậc (↑ Bậc 01 TT) HTL",
        "Trả lời sai: Thụt 1 bậc (↓ Bậc 01 TT) HTL"
      ]
    },
    {
      id: 2,
      title: "Ô Plus",
      color: "bg-green-600",
      description: "Người chơi sẽ bốc thăm câu hỏi trong các ô bậc khác.",
      rules: [
        "Trả lời đúng: Tăng 2 bậc (↑ Bậc 02 TT) HTL",
        "Trả lời sai: Lùi về 1 ô (↓ Ô số 1) (Trừ Bậc 01)"
      ]
    },
    {
      id: 3,
      title: "Ô Minus Thì",
      color: "bg-red-600",
      badge: "Chỉ áp dụng khi thắng",
      description: "Người chơi sẽ quay số để rút câu hỏi cho đội đối phương, nếu trả lời được sẽ gọt số ô đi.",
      rules: [
        "Trả lời đúng đội khác: Dừng lại",
        "Trả lời sai đội khác: ↑ (Bậc 02 TT)",
        "Trả lời sai đội mình: Thụt 1 ô (↓ Ô số 1)"
      ]
    },
    {
      id: 4,
      title: "Ô Tác Dụng",
      color: "bg-blue-600",
      badge: "Chỉ áp dụng khi thắng",
      description: "Người chơi sẽ chọn phần hỏi đối thủ một câu hỏi bất kỳ từ 03 đề (C, QĐ, CS, D/QD, SD, ...); nếu đúng thì sẽ rút ở nơi đối thủ đang ở lại dừng, tỉ lệ thu hồi đối xứng ở X cùng với nơi đối thủ dừng lại trong bảng tỉ lệ kèm ngược lại.",
      rules: []
    },
    {
      id: 5,
      title: "Ô Giảm Tự",
      color: "bg-purple-600",
      badge: "Chỉ áp dụng khi thắng",
      description: "Người chơi rút một đề từ đập cải 18 đề tập 03 (C/QĐ, CS, SD, D/QD) để trả lời. Giải tự A, B, C hoặc D.",
      rules: [
        "Trả lời đúng: Nhảy về ô trước đó Bậc (↑ 03 ô)",
        "Trả lời sai: Thụt về ô trước khi bạn nhảy (↓ 01 ô)"
      ]
    },
    {
      id: 6,
      title: "Ô Cơ Hội !!!",
      color: "bg-yellow-600",
      badge: "Chỉ áp dụng khi thắng",
      description: "Là ô có sự may rủi trong trò chơi!!! Có cả 2 sự có lợi nhưng cũng có thể sẽ bất lợi cho bạn trong trò chơi. Ví dụ: Về lại ô xuất phát (-3) (-2), ô (0), ô (+2), ô (+3), ô (+5), ô (+7).",
      rules: [
        "Nếu càng về ô xuất phát: Ô đội ta thu lùi chậm 1 ô (↓ 01 ô).",
        "Nếu cộng từ ô ở X, cộng tiếp vào (từ ô +1 (X+ 0), (+2), (+3), (+4), (+5)) (QĐ, SD, D/QD), (QĐC, CSC, ...)"
      ]
    },
    {
      id: 7,
      title: "Ô Quyết Tử Thần",
      color: "bg-red-800",
      badge: "Chỉ áp dụng khi thắng",
      description: "Mật chữ áp cuối trong lượt nối mỗi khi xét ô cờ phải từ mỗi ô này, vỡ về trước 5 nấc đi ở sẽ đề ở phía áp là ván sự sống còn trong trò chơi này.",
      rules: []
    },
    {
      id: 8,
      title: "Ô Đặc Biệt ⭐",
      color: "bg-indigo-600",
      badge: "Chưa công bố 🤐",
      description: "Được tính thành Cuộc Thưởng Đã Thắm Rỡ: 2000 (X) và các ô Phần mở đặc khác của ngày.",
      rules: [
        "Phương thức tính Thì: Phương (100+200) nộm 200+50 năm +250 (và di quy phần cuối đặc cuối ngày theo) +200+50",
        "Phương thức tính Ra Bờ-Xâp đến sinh: -1000+350 (tổ hợp) cuối đổi tổng 250+10",
                "Bước lúc đầu được Ảnh: Phủ mảnh cuộc 500+rơi tọa 500 và vào tiên cấp theo và tân 2000"
      ]
    }
  ];

  const supportSection = {
    title: "Hỗ Trợ Trả Lời",
    description: "Người chơi sẽ có trợ giúp được hỗ trợ khi hỏi khi cần dùng để có CC, QĐ, SS, ...",
    rules: [
      "Cạnh (P): Phá đồ Tă: Từ 1 ô (= 50 XP)",
      "Trợ giúp người thỏa: QĐ, SS - ghi 1 ô (= 1 ô, 100 - XP)"
    ]
  };

  const conditionSection = {
    title: "Điều Kiện Thưa",
    description: "Nấp NT Lẻ người chơi được phụng về ô mình đang ở = -2000 SP, người lại lại bị ô tài được nhật về thì người Nấp người lại được là cuối trên, không người người lẻ lập lại số tới đã đổ đầu người chơi với các phát ở về tài.",
    rules: []
  };

  const distributionData = [
    { label: "Ô Thường (Xá số)", percentage: "25%", count: 10 },
    { label: "Ô Plus (+)", percentage: "18%", count: 7 },
    { label: "Ô Màu Thì (-)", percentage: "12%", count: 5 },
    { label: "Ô Tác Dụng (↓4)", percentage: "8%", count: 3 },
    { label: "Ô Giảm Tự (A)", percentage: "10%", count: 4 },
    { label: "Ô Cơ Hội (!!)", percentage: "15%", count: 6 },
    { label: "Ô Quyết Tử thần (☠)", percentage: "7%", count: 3 },
    { label: "Ô Đặc Biệt (⭐)", percentage: "5%", count: 2 }
  ];

  return (
    <div className={`min-h-screen py-20 px-6 transition-colors duration-500 ${
      isDarkMode ? 'bg-[#0F172A] text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 mb-6 bg-primary/10 border border-primary/30 rounded-full">
            <span className="text-primary font-semibold tracking-widest text-xs uppercase">Game Rules</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>LUẬT CHƠI </span>
            <span className="text-[#F59E0B]">CULTURAL CHESS</span>
          </h1>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Hướng dẫn chi tiết các loại ô và cách chơi dành cho người chơi mới
          </p>
        </div>

        {/* Các Loại Ô & Chức Năng */}
        <div className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Các Loại Ô & Chức Năng
          </h2>
          
          <div className="space-y-6">
            {boxTypes.map((box, index) => (
              <div 
                key={box.id}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 hover:scale-[1.02] ${
                  isDarkMode 
                    ? 'bg-[#1E293B] border-gray-700 hover:border-primary/50' 
                    : 'bg-white border-gray-300 hover:border-primary shadow-lg'
                }`}
              >
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${box.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                      {box.id}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className={`text-xl font-bold ${
                          isDarkMode ? 'text-[#F59E0B]' : 'text-[#D97706]'
                        }`}>
                          {index + 1}. {box.title}
                        </h3>
                        {box.badge && (
                          <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                            {box.badge}
                          </span>
                        )}
                      </div>
                      <p className={`text-sm leading-relaxed mb-3 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {box.description}
                      </p>
                      {box.rules.length > 0 && (
                        <ul className="space-y-2">
                          {box.rules.map((rule, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span className={`text-sm ${
                                isDarkMode ? 'text-gray-400' : 'text-gray-600'
                              }`}>
                                {rule}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hỗ Trợ & Điều Kiện Chơi */}
        <div className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Hỗ Trợ & Điều Kiện Chơi
          </h2>

          <div className="space-y-6">
            {/* Hỗ Trợ Trả Lời */}
            <div className={`rounded-2xl border p-6 ${
              isDarkMode 
                ? 'bg-[#1E293B] border-gray-700' 
                : 'bg-white border-gray-300 shadow-lg'
            }`}>
              <h3 className={`text-xl font-bold mb-3 ${
                isDarkMode ? 'text-[#F59E0B]' : 'text-[#D97706]'
              }`}>
                {supportSection.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-3 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {supportSection.description}
              </p>
              <ul className="space-y-2">
                {supportSection.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {rule}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Điều Kiện Thưa */}
            <div className={`rounded-2xl border p-6 ${
              isDarkMode 
                ? 'bg-[#1E293B] border-gray-700' 
                : 'bg-white border-gray-300 shadow-lg'
            }`}>
              <h3 className={`text-xl font-bold mb-3 ${
                isDarkMode ? 'text-[#F59E0B]' : 'text-[#D97706]'
              }`}>
                {conditionSection.title}
              </h3>
              <p className={`text-sm leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {conditionSection.description}
              </p>
            </div>
          </div>
        </div>

        {/* Dự Xuất Phần Số Ô */}
        <div className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Dự Xuất Phần Số Ô (40 ô)
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {distributionData.map((item, index) => (
              <div 
                key={index}
                className={`rounded-xl border p-6 text-center transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-[#1E293B] border-gray-700 hover:border-primary/50' 
                    : 'bg-white border-gray-300 hover:border-primary shadow-lg'
                }`}
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {item.percentage}
                </div>
                <div className={`text-sm font-semibold mb-1 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {item.label}
                </div>
                <div className={`text-xs ${
                  isDarkMode ? 'text-gray-500' : 'text-gray-500'
                }`}>
                  ({item.count} ô)
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className={`rounded-2xl border p-6 text-center ${
          isDarkMode 
            ? 'bg-primary/5 border-primary/20' 
            : 'bg-amber-50 border-amber-200'
        }`}>
          <p className={`text-sm ${
            isDarkMode ? 'text-primary' : 'text-amber-700'
          }`}>
            💡 <strong>Lưu ý:</strong> Các quy tắc có thể được điều chỉnh trong quá trình chơi để đảm bảo tính công bằng và hấp dẫn của trò chơi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Guide;
