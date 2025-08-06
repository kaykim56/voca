'use client';

import { FallingWord as WordType } from '@/types/rain-game';

interface FallingWordProps {
  word: WordType;
  isHighlighted?: boolean;
}

export default function FallingWord({ word, isHighlighted }: FallingWordProps) {
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
      <div className={`text-lg md:text-xl font-bold font-mono px-3 py-1 rounded-lg shadow-lg ${
        isHighlighted 
          ? 'bg-yellow-400 text-black border-2 border-yellow-600' 
          : 'bg-gray-800/80 text-white border border-gray-600'
      }`}>
        {word.word}
      </div>
      
      {/* 단어 뜻 (작게 표시) */}
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