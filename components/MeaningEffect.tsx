'use client';

import React, { useEffect, useState } from 'react';
import { MeaningEffect as MeaningEffectType } from '@/types/rain-game';

interface MeaningEffectProps {
  effect: MeaningEffectType;
}

const MeaningEffect: React.FC<MeaningEffectProps> = ({ effect }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<'fadeIn' | 'show' | 'fadeOut'>('fadeIn');

  useEffect(() => {
    // 컴포넌트 마운트 시 페이드인 시작
    const fadeInTimer = setTimeout(() => {
      setIsVisible(true);
      setAnimationPhase('fadeIn');
    }, 50);

    // 1초 후 보여주기 단계
    const showTimer = setTimeout(() => {
      setAnimationPhase('show');
    }, 500);

    // 2.5초 후 페이드아웃 시작
    const fadeOutTimer = setTimeout(() => {
      setAnimationPhase('fadeOut');
    }, 2500);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(showTimer);
      clearTimeout(fadeOutTimer);
    };
  }, []);

  // 애니메이션 클래스 결정
  const getAnimationClasses = () => {
    switch (animationPhase) {
      case 'fadeIn':
        return 'opacity-100 scale-110 translate-y-0';
      case 'show':
        return 'opacity-100 scale-100 translate-y-0';
      case 'fadeOut':
        return 'opacity-0 scale-90 translate-y-2';
      default:
        return 'opacity-0 scale-90 translate-y-4';
    }
  };

  return (
    <div
      className={`absolute pointer-events-none z-50 transition-all duration-500 ease-out transform ${getAnimationClasses()}`}
      style={{
        left: `${effect.x}%`,
        top: `${effect.y}%`,
        transform: `translate(-50%, -50%) ${animationPhase === 'fadeIn' ? 'scale(1.1)' : animationPhase === 'fadeOut' ? 'scale(0.9)' : 'scale(1)'}`,
      }}
    >
      {/* 메인 이펙트 박스 */}
      <div 
        className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border-2 px-6 py-4 min-w-[200px]"
        style={{ 
          borderColor: effect.color,
          boxShadow: `0 0 30px ${effect.color}40, 0 10px 40px rgba(0,0,0,0.3)`
        }}
      >
        {/* 반짝이는 배경 효과 */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-20 animate-pulse"
          style={{ backgroundColor: effect.color }}
        />
        
        {/* 영단어 */}
        <div className="relative z-10 text-center mb-2">
          <div 
            className="text-lg font-bold"
            style={{ color: effect.color }}
          >
            {effect.word}
          </div>
        </div>
        
        {/* 한글 뜻 */}
        <div className="relative z-10 text-center">
          <div className="text-xl font-bold text-gray-800 mb-1">
            {effect.meaning}
          </div>
        </div>
        
        {/* 장식적 요소들 */}
        <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full animate-ping" 
             style={{ backgroundColor: effect.color }} />
        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full animate-ping delay-300" 
             style={{ backgroundColor: effect.color }} />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full animate-ping delay-700" 
             style={{ backgroundColor: effect.color }} />
        
        {/* 귀여운 곰 이미지 이펙트 */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <img 
            src="/bear-celebrate.png" 
            alt="celebrate" 
            className="w-12 h-12 object-contain drop-shadow-lg"
          />
        </div>
        
        {/* 반짝임 이펙트 */}
        <div className="absolute -top-8 right-2 text-xl animate-bounce delay-200">
          ✨
        </div>
      </div>
      
      {/* 추가 반짝임 효과 */}
      {animationPhase === 'fadeIn' && (
        <>
          <div 
            className="absolute top-0 left-0 w-full h-full rounded-2xl animate-ping"
            style={{ backgroundColor: effect.color, opacity: 0.3 }}
          />
          <div 
            className="absolute -top-4 -left-4 w-8 h-8 rounded-full animate-ping"
            style={{ backgroundColor: effect.color, opacity: 0.6 }}
          />
        </>
      )}
    </div>
  );
};

export default MeaningEffect;