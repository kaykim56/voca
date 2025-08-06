'use client';

import { useState, useEffect } from 'react';
import { FallingWord as WordType } from '@/types/rain-game';

interface FallingWordProps {
  word: WordType;
  isHighlighted?: boolean;
  gameLevel?: number; // 게임 레벨 추가
}

export default function FallingWord({ word, isHighlighted, gameLevel = 1 }: FallingWordProps) {
  const [isVisible, setIsVisible] = useState(true);

  // 레벨 2 이상에서 깜박임 효과
  useEffect(() => {
    if (gameLevel >= 2) {
      const blinkInterval = setInterval(() => {
        setIsVisible(prev => !prev);
      }, 500); // 0.5초마다 깜박임

      return () => clearInterval(blinkInterval);
    } else {
      setIsVisible(true); // 레벨 1에서는 항상 보임
    }
  }, [gameLevel]);
  return (
    <div
      className={`absolute transform -translate-x-1/2 transition-all duration-100 ${
        isHighlighted ? 'scale-110 animate-pulse' : ''
      }`}
      style={{
        left: `${word.x}%`,
        top: `${word.y}%`,
        color: word.color,
      }}
    >
      <div className={`text-lg md:text-xl font-bold font-mono px-3 py-1 rounded-lg shadow-lg transition-opacity duration-150 ${
        isHighlighted 
          ? 'bg-yellow-400 text-black border-2 border-yellow-600' 
          : 'bg-gray-800/80 text-white border border-gray-600'
      } ${
        gameLevel >= 2 && !isVisible ? 'opacity-10' : 'opacity-100'
      }`}>
        {word.word}
      </div>
      
      {/* 단어 뜻 (작게 표시) - 항상 보임 */}
      <div className={`text-xs text-center mt-1 px-2 py-0.5 rounded ${
        isHighlighted 
          ? 'bg-yellow-200 text-black' 
          : 'bg-gray-700/70 text-gray-300'
      }`}>
        {word.meaning}
      </div>
    </div>
  );
}