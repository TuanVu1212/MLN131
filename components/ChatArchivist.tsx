
import React, { useState, useRef, useEffect } from 'react';
import { startArchivistChat } from '../geminiService';
import { ChatMessage } from '../types';

const ChatArchivist: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Chào bạn, tôi là Cố vấn Lưu trữ. Bạn muốn tìm hiểu về trang phục, lễ hội hay phong tục của dân tộc nào?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatInstance = useRef<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setLoading(true);

    try {
      if (!chatInstance.current) {
        chatInstance.current = startArchivistChat(
          "Bạn là một chuyên gia về văn hóa 54 dân tộc Việt Nam. Hãy trả lời các câu hỏi một cách trang trọng, chính xác và có chiều sâu. Sử dụng công cụ tìm kiếm nếu cần thông tin cập nhật."
        );
      }

      const response = await chatInstance.current.sendMessage({ message: userText });
      setMessages(prev => [...prev, { role: 'model', text: response.text }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Tôi xin lỗi, kết nối tới thư viện bị gián đoạn. Hãy thử lại." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-28 right-8 z-[60] p-4 rounded-full bg-forest text-primary shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group border border-primary/20"
      >
        <span className="material-symbols-outlined">forum</span>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-xs font-bold uppercase tracking-widest">
          Hỏi Cố Vấn
        </span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[110] md:inset-auto md:bottom-28 md:right-8 md:w-[450px] md:h-[600px] flex flex-col bg-[#F4F1EA] dark:bg-[#1A1816] border border-primary/30 rounded-lg shadow-2xl overflow-hidden animate-in slide-in-from-right-10">
          <div className="p-4 bg-forest flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">auto_awesome</span>
              <span className="font-display font-bold text-white uppercase tracking-widest text-sm">Cố vấn Lưu trữ</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-pattern opacity-90">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-lg text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-primary text-background-dark font-medium' 
                    : 'bg-white dark:bg-[#24221F] border border-primary/10'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-[#24221F] p-4 rounded-lg flex gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white dark:bg-[#24221F] border-t border-primary/10">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Hỏi về bản sắc văn hóa..."
                className="flex-1 bg-transparent border-primary/20 rounded focus:ring-primary focus:border-primary text-sm"
              />
              <button 
                onClick={handleSend}
                disabled={loading}
                className="bg-primary text-background-dark p-2 rounded hover:opacity-90 transition-opacity"
              >
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatArchivist;
