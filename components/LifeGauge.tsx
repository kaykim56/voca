'use client';

import React from 'react';

interface LifeGaugeProps {
  currentLives: number;
  maxLives: number;
}

const LifeGauge: React.FC<LifeGaugeProps> = ({ currentLives, maxLives }) => {
  const lostLives = maxLives - currentLives;

  // 생명력 비율에 따른 색상 계산
  const getLifeColor = () => {
    const ratio = currentLives / maxLives;
    if (ratio > 0.6) return 'text-green-500'; // 초록색
    if (ratio > 0.3) return 'text-yellow-500'; // 노란색
    return 'text-red-500'; // 빨간색
  };

  // 배경 게이지 색상
  const getBackgroundColor = () => {
    const ratio = currentLives / maxLives;
    if (ratio > 0.6) return 'bg-green-500'; // 초록색
    if (ratio > 0.3) return 'bg-yellow-500'; // 노란색
    return 'bg-red-500'; // 빨간색
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* 생명력 바 게이지 */}
      <div className="mb-3">
        <div className="flex justify-between items-center mb-1">
          <span className="text-white/90 text-sm font-semibold">생명력</span>
          <span className={`text-sm font-bold ${getLifeColor()}`}>
            {currentLives}/{maxLives}
          </span>
        </div>
        
        {/* 게이지 바 */}
        <div className="w-full bg-gray-700/70 rounded-full h-3 overflow-hidden">
          <div 
            className={`h-full transition-all duration-300 ease-out ${getBackgroundColor()}`}
            style={{ width: `${(currentLives / maxLives) * 100}%` }}
          >
            {/* 반짝임 효과 */}
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
          </div>
        </div>
      </div>

      {/* 위험 경고 */}
      {currentLives <= 3 && currentLives > 0 && (
        <div className="mt-3 text-center">
          <div className="text-red-400 text-sm font-semibold animate-pulse">
            ⚠️ 생명력이 부족합니다!
          </div>
        </div>
      )}

      {/* 게임 오버 경고 */}
      {currentLives === 1 && (
        <div className="mt-2 text-center">
          <div className="text-red-500 text-sm font-bold animate-bounce">
            💀 마지막 생명력!
          </div>
        </div>
      )}
    </div>
  );
};

export default LifeGauge;