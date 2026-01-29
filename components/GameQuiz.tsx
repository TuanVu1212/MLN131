import React, { useState } from 'react';

interface Answer {
  content: string;
  correct: boolean;
}

interface Question {
  type: string;
  content: string;
  answers: Answer[];
  explanation: string;
}

interface GameQuizProps {
  onBackToHome?: () => void;
}

const GameQuiz: React.FC<GameQuizProps> = ({ onBackToHome }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [showFormatGuide, setShowFormatGuide] = useState(false);

  const handleFileRead = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const jsonData = JSON.parse(content);
        
        // Check if it's an array or single question
        const questionsArray = Array.isArray(jsonData) ? jsonData : [jsonData];
        setQuestions(questionsArray);
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setShowExplanation(false);
        setScore(0);
        setShowResult(false);
      } catch (error) {
        alert('Lỗi: Không thể đọc file JSON. Vui lòng kiểm tra định dạng!');
      }
    };
    reader.readAsText(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type === 'application/json') {
      handleFileRead(file);
    } else {
      alert('Vui lòng chọn file JSON!');
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileRead(file);
    }
  };

  const handleAnswerSelect = (index: number) => {
    if (!showExplanation) {
      setSelectedAnswer(index);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = currentQuestion.answers[selectedAnswer].correct;
    
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setShowResult(false);
    setQuestions([]);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const answerLabels = ['A', 'B', 'C', 'D'];

  if (showResult) {
    const percentage = (score / questions.length) * 100;
    const isExcellent = percentage >= 80;
    const isGood = percentage >= 60;
    
    return (
      <div className="min-h-screen bg-[#1A1A1A] py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#2A2A2A] rounded-xl p-8 md:p-10 border border-[#3A3A3A]">
            <div className="text-center">
              {/* Trophy Icon */}
              <div className="mb-6 inline-block">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center text-5xl ${
                  isExcellent ? 'bg-[#D4AF37]' :
                  isGood ? 'bg-[#10B981]' :
                  'bg-[#6B7280]'
                }`}>
                  {isExcellent ? '🏆' : isGood ? '⭐' : '🎖️'}
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-3 text-white">
                {isExcellent ? 'XUẤT SẮC!' : isGood ? 'TỐT LẮM!' : 'HOÀN THÀNH!'}
              </h2>
              
              <p className="text-gray-400 text-base mb-8">
                {isExcellent ? 'Bạn thật tuyệt vời! 🎉' : 
                 isGood ? 'Bạn đã làm rất tốt! 👏' : 
                 'Hãy cố gắng hơn nữa nhé! 💪'}
              </p>

              <div className="my-8">
                {/* Score Display */}
                <div className="bg-[#1A1A1A] rounded-xl p-8 border border-[#3A3A3A]">
                  <div className="text-6xl font-bold text-white mb-2">
                    {score}/{questions.length}
                  </div>
                  <div className="text-xl text-gray-400">
                    Điểm số: {percentage.toFixed(1)}%
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-6 w-full bg-[#3A3A3A] rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-3 rounded-full transition-all duration-1000 ${
                        isExcellent ? 'bg-[#D4AF37]' :
                        isGood ? 'bg-[#10B981]' :
                        'bg-[#6B7280]'
                      }`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-3 mt-8">
                <button
                  onClick={handleRestart}
                  className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-semibold py-3 px-6 rounded-lg text-base transition-all duration-200"
                >
                  🔄 Làm lại bài kiểm tra
                </button>
                <button
                  onClick={onBackToHome || (() => window.location.reload())}
                  className="w-full bg-[#3A3A3A] hover:bg-[#4A4A4A] text-white font-semibold py-3 px-6 rounded-lg text-base transition-all duration-200"
                >
                  ← Về trang chủ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-[#1A2332] py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white">
              GAME <span className="text-[#F59E0B]">QUIZ</span>
            </h1>
            <p className="text-[#9CA3AF] text-base">
              Kiểm tra sự am hiểu của bạn về thế giới Xã Hội Chủ Nghĩa
            </p>
          </div>

          {/* Upload Area */}
          <div className="bg-[#1F2937]/50 rounded-xl p-6 md:p-8 border border-[#374151]/50">
            <h2 className="text-base text-[#9CA3AF] mb-5 text-center">
              Tải lên một tệp JSON để bắt đầu bài kiểm tra:
            </h2>

            {/* Inner Box */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`bg-[#1A2332] rounded-lg p-7 border transition-all duration-300 ${
                isDragging
                  ? 'border-[#10B981] bg-[#10B981]/5'
                  : 'border-[#2A3744]'
              }`}
            >
              <div className="space-y-4 text-center">
                <h3 className="text-lg font-semibold text-white">
                  Tải lên bộ đề có sẵn
                </h3>
                <p className="text-[#9CA3AF] text-sm max-w-xl mx-auto leading-relaxed">
                  Sử dụng bộ câu hỏi của riêng bạn bằng cách tải lên một tệp JSON theo định dạng cho trước.
                </p>

                <div className="pt-1">
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept=".json"
                      onChange={handleFileInput}
                      className="hidden"
                    />
                    <span className="inline-block bg-[#10B981] hover:bg-[#059669] text-white font-semibold py-2.5 px-7 rounded-lg text-sm transition-all duration-200">
                      Chọn tệp JSON
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Format Guide */}
            <div className="mt-5">
              <button
                onClick={() => setShowFormatGuide(!showFormatGuide)}
                className="flex items-center gap-2 text-[#9CA3AF] hover:text-[#D1D5DB] transition-colors text-sm"
              >
                <span className={`transition-transform duration-200 text-xs ${showFormatGuide ? 'rotate-90' : ''}`}>
                  ▶
                </span>
                Xem định dạng tệp JSON yêu cầu
              </button>

              {showFormatGuide && (
                <div className="mt-4 bg-[#111827] rounded-lg p-5 border border-[#2A3744]">
                  <pre className="text-[#10B981] text-xs overflow-x-auto">
{`{
  "type": "singlechoice",
  "content": "Câu hỏi của bạn?",
  "answers": [
    { "content": "Đáp án A", "correct": false },
    { "content": "Đáp án B", "correct": false },
    { "content": "Đáp án C", "correct": true },
    { "content": "Đáp án D", "correct": false }
  ],
  "explanation": "Giải thích đáp án đúng"
}`}
                  </pre>
                  <p className="text-[#9CA3AF] text-xs mt-3">
                    Bạn có thể tải lên một mảng các câu hỏi: <code className="text-[#10B981] bg-[#1A2332] px-2 py-0.5 rounded text-xs">[{'{...}'}, {'{...}'}]</code>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1A1A1A] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-5 bg-[#2A2A2A] rounded-lg p-4 border border-[#3A3A3A]">
          <div className="flex justify-between items-center mb-2.5">
            <div className="flex items-center gap-2 text-white">
              <span className="text-lg">📝</span>
              <span className="font-medium text-base">Câu hỏi {currentQuestionIndex + 1}/{questions.length}</span>
            </div>
            <div className="flex items-center gap-2 bg-[#3A3A3A] px-3 py-1.5 rounded-md">
              <span className="text-[#F59E0B] text-base">⭐</span>
              <span className="text-white font-medium text-base">{score} điểm</span>
            </div>
          </div>
          <div className="w-full bg-[#1A1A1A] rounded-full h-2 overflow-hidden">
            <div
              className="bg-[#EF4444] h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-[#2A2A2A] rounded-lg p-6 border border-[#3A3A3A]">
          <div className="mb-5">
            <span className="inline-block px-3 py-1 bg-[#3A3A3A] text-[#D4AF37] rounded-full text-xs font-semibold border border-[#4A4A4A] mb-3">
              CÂU HỎI {currentQuestionIndex + 1}
            </span>
            <h2 className="text-xl font-medium text-white leading-relaxed">
              {currentQuestion.content}
            </h2>
          </div>

          {/* Answers */}
          <div className="space-y-2.5 mb-5">
            {currentQuestion.answers.map((answer, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = answer.correct;
              const showCorrectness = showExplanation;

              let buttonClass = 'bg-[#3A3A3A] hover:bg-[#4A4A4A] border-[#4A4A4A]';
              
              if (isSelected && !showCorrectness) {
                buttonClass = 'bg-[#D4AF37]/20 border-[#D4AF37]';
              }
              
              if (showCorrectness) {
                if (isCorrect) {
                  buttonClass = 'bg-[#10B981]/20 border-[#10B981]';
                } else if (isSelected && !isCorrect) {
                  buttonClass = 'bg-red-500/20 border-red-500';
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                  className={`w-full text-left p-3.5 rounded-md border transition-all duration-200 ${buttonClass} ${
                    !showExplanation ? 'hover:border-[#5A5A5A] cursor-pointer' : 'cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 text-white font-medium text-base w-6">
                      {answerLabels[index]}
                    </span>
                    <span className="flex-1 text-white text-base leading-relaxed">{answer.content}</span>
                    {showCorrectness && isCorrect && (
                      <span className="text-[#10B981] text-xl">✓</span>
                    )}
                    {showCorrectness && isSelected && !isCorrect && (
                      <span className="text-red-500 text-xl">✗</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className="bg-[#1A3A2A] border border-[#10B981]/30 rounded-md p-4 mb-5">
              <div className="flex items-start gap-2.5">
                <span className="text-[#10B981] text-lg flex-shrink-0">💡</span>
                <div className="flex-1">
                  <h3 className="font-medium text-[#10B981] mb-1.5 text-sm">Giải thích:</h3>
                  <p className="text-white text-sm leading-relaxed">{currentQuestion.explanation}</p>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2.5">
            {!showExplanation ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className={`flex-1 font-medium py-3 px-6 rounded-md text-base transition-all duration-200 ${
                  selectedAnswer === null
                    ? 'bg-[#3A3A3A] text-gray-500 cursor-not-allowed'
                    : 'bg-[#10B981] hover:bg-[#059669] text-white'
                }`}
              >
                Xác nhận đáp án
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="flex-1 bg-[#10B981] hover:bg-[#059669] text-white font-medium py-3 px-6 rounded-md text-base transition-all duration-200"
              >
                {currentQuestionIndex < questions.length - 1 ? 'Câu tiếp theo →' : 'Xem kết quả 🏆'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameQuiz;
