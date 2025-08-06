'use client';

import React, { useEffect, useState } from 'react';
import AdSense from './AdSense';

interface LevelUpEffectProps {
  level: number;
  isVisible: boolean;
}

const LevelUpEffect: React.FC<LevelUpEffectProps> = ({ level, isVisible }) => {
  const [animationPhase, setAnimationPhase] = useState<'enter' | 'show' | 'exit'>('enter');

  useEffect(() => {
    if (isVisible) {
      setAnimationPhase('enter');
      
      // 0.2초 후 보여주기 단계
      const showTimer = setTimeout(() => {
        setAnimationPhase('show');
      }, 200);

      // 2.2초 후 사라지기 시작 (실제 보여주는 시간 2초 확보)
      const exitTimer = setTimeout(() => {
        setAnimationPhase('exit');
      }, 2200);

      return () => {
        clearTimeout(showTimer);
        clearTimeout(exitTimer);
      };
    }
  }, [isVisible]);

  if (!isVisible) return null;

  // 애니메이션 클래스 결정
  const getAnimationClasses = () => {
    switch (animationPhase) {
      case 'enter':
        return 'opacity-0 scale-50 translate-y-8';
      case 'show':
        return 'opacity-100 scale-100 translate-y-0';
      case 'exit':
        return 'opacity-0 scale-110 translate-y-[-8px]';
      default:
        return 'opacity-0 scale-50';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      {/* 흐린 배경 오버레이 */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      
      {/* 메인 레벨업 이펙트 */}
      <div 
        className={`
          relative transform transition-all duration-300 ease-out 
          ${getAnimationClasses()}
        `}
      >
        {/* Success 모션 이미지 */}
        <div className="flex items-center justify-center mb-6">
          <img 
            src="/success.gif" 
            alt="Level Up Success" 
            className="max-w-sm max-h-80 object-contain drop-shadow-2xl rounded-xl"
            style={{
              filter: 'none', // 이미지는 선명하게 유지
            }}
          />
        </div>
        
        {/* 레벨업 텍스트 */}
        <div className="text-center">
          <div className="text-5xl font-bold text-white drop-shadow-lg mb-4 tracking-wider">
            🎉 LEVEL UP! 🎉
          </div>
          
          {/* 레벨 번호 */}
          <div className="text-6xl font-bold text-yellow-400 drop-shadow-lg mb-2">
            LEVEL {level}
          </div>
          
          {/* 축하 메시지 */}
          <div className="text-xl text-gray-200 drop-shadow-md mb-6">
            축하합니다! 다음 단계로 진입합니다!
          </div>
          
          {/* AdSense 가로형 배너 광고 */}
          <div className="flex justify-center">
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-2 border border-gray-500/30 max-w-2xl w-full">
              <AdSense 
                adSlot="1122334455"
                adFormat="banner"
                style={{ display: 'block', width: '100%', height: '90px' }}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
        
        {/* 부드러운 빛 효과 */}
        <div className="absolute -inset-12 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent rounded-full pointer-events-none" />
        
        {/* 주변 반짝임 효과들 */}
        {animationPhase === 'show' && (
          <>
            <div className="absolute -top-16 left-1/4 text-3xl animate-ping">
              ⭐
            </div>
            <div className="absolute -top-16 right-1/4 text-3xl animate-ping delay-200">
              ✨
            </div>
            <div className="absolute -bottom-8 left-1/3 text-2xl animate-bounce delay-400">
              🌟
            </div>
            <div className="absolute -bottom-8 right-1/3 text-2xl animate-bounce delay-600">
              💫
            </div>
            <div className="absolute top-1/4 -left-16 text-2xl animate-ping delay-300">
              🎊
            </div>
            <div className="absolute top-1/4 -right-16 text-2xl animate-ping delay-500">
              🎈
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LevelUpEffect;