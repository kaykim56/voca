'use client';

import React, { useEffect, useState } from 'react';

interface GameOverEffectProps {
  isVisible: boolean;
  onRestart: () => void;
  onBackToMenu: () => void;
}

const GameOverEffect: React.FC<GameOverEffectProps> = ({ isVisible, onRestart, onBackToMenu }) => {
  const [animationPhase, setAnimationPhase] = useState<'enter' | 'show'>('enter');

  useEffect(() => {
    if (isVisible) {
      setAnimationPhase('enter');
      
      // 0.5초 후 보여주기 단계
      const showTimer = setTimeout(() => {
        setAnimationPhase('show');
      }, 500);

      return () => {
        clearTimeout(showTimer);
      };
    }
  }, [isVisible]);

  if (!isVisible) return null;

  // 애니메이션 클래스 결정
  const getAnimationClasses = () => {
    switch (animationPhase) {
      case 'enter':
        return 'opacity-0 scale-75';
      case 'show':
        return 'opacity-100 scale-100';
      default:
        return 'opacity-0 scale-75';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 흐린 검은색 배경 오버레이 */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      
      {/* 메인 게임 오버 이펙트 */}
      <div 
        className={`
          relative transform transition-all duration-500 ease-out
          ${getAnimationClasses()}
        `}
      >
        {/* Goodnight 모션 이미지 */}
        <div className="flex items-center justify-center">
          <img 
            src="/goodnight.gif" 
            alt="Game Over - Good Night" 
            className="max-w-md max-h-96 object-contain drop-shadow-2xl rounded-xl"
            style={{
              filter: 'none', // 이미지는 선명하게 유지
            }}
          />
        </div>
        
        {/* 게임 오버 텍스트 (이미지 하단) */}
        <div className="mt-8 text-center">
          <div className="text-4xl font-bold text-white drop-shadow-lg mb-4">
            😴 게임 종료
          </div>
          <div className="text-xl text-gray-300 drop-shadow-md mb-8">
            오늘도 수고하셨습니다
          </div>
          
          {/* 게임 오버 액션 버튼들 */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={onRestart}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              🔄 다시 시작
            </button>
            <button
              onClick={onBackToMenu}
              className="px-8 py-4 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              🏠 메인 메뉴
            </button>
          </div>
        </div>
        
        {/* 부드러운 빛 효과 */}
        <div className="absolute -inset-8 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-full pointer-events-none" />
      </div>
    </div>
  );
};

export default GameOverEffect;