'use client';

export default function RainGameBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 하늘 배경 */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-blue-300 to-blue-200">
        {/* 구름들 */}
        <div className="absolute top-10 left-10 w-20 h-12 bg-white rounded-full opacity-80 animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-10 bg-white rounded-full opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-5 left-1/3 w-24 h-14 bg-white rounded-full opacity-60 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-16 right-1/3 w-18 h-11 bg-white rounded-full opacity-75 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* 추가 구름들 */}
        <div className="absolute top-8 left-2/3 w-22 h-13 bg-white rounded-full opacity-65 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-24 left-1/4 w-14 h-9 bg-white rounded-full opacity-70 animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        
        {/* 배경 빛 효과 */}
        <div className="absolute top-6 right-10 w-32 h-32 bg-yellow-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* 중간 전환 영역 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-600 via-green-400 to-transparent"></div>

      {/* 땅 배경 */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-green-800 via-green-700 to-green-600">
        {/* 잔디 효과 */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-green-900 opacity-50"></div>
        
        {/* 작은 나무나 꽃들 */}
        <div className="absolute bottom-3 left-10 w-2 h-6 bg-green-900 rounded-t-full"></div>
        <div className="absolute bottom-3 left-20 w-2 h-4 bg-green-900 rounded-t-full"></div>
        <div className="absolute bottom-3 right-10 w-2 h-5 bg-green-900 rounded-t-full"></div>
        <div className="absolute bottom-3 right-30 w-2 h-7 bg-green-900 rounded-t-full"></div>
        <div className="absolute bottom-3 left-1/3 w-2 h-4 bg-green-900 rounded-t-full"></div>
        <div className="absolute bottom-3 right-1/3 w-2 h-6 bg-green-900 rounded-t-full"></div>
        
        {/* 작은 꽃들 */}
        <div className="absolute bottom-5 left-16 w-1 h-1 bg-red-400 rounded-full"></div>
        <div className="absolute bottom-6 left-24 w-1 h-1 bg-yellow-400 rounded-full"></div>
        <div className="absolute bottom-4 right-16 w-1 h-1 bg-pink-400 rounded-full"></div>
        <div className="absolute bottom-7 right-24 w-1 h-1 bg-purple-400 rounded-full"></div>
      </div>

      {/* 위험 지역 표시 (땅 근처) */}
      <div className="absolute bottom-20 left-0 right-0 h-1 bg-red-500 opacity-30 animate-pulse"></div>
      <div className="absolute bottom-16 left-0 right-0 h-0.5 bg-yellow-500 opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    </div>
  );
}