'use client';

import { CharacterStatus } from '@/types/game';

interface WordDisplayProps {
  characters: CharacterStatus[];
  currentInput: string;
}

export default function WordDisplay({ characters, currentInput }: WordDisplayProps) {
  return (
    <div className="text-center mb-8">
      <div className="text-4xl md:text-6xl font-mono font-bold tracking-wider p-8 bg-gray-900 rounded-xl shadow-2xl border-2 border-gray-700">
        {characters.map((char, index) => (
          <span
            key={index}
            className={`transition-all duration-150 ${
              char.status === 'correct'
                ? 'text-green-400 bg-green-900/30'
                : char.status === 'incorrect'
                ? 'text-red-400 bg-red-900/30'
                : 'text-gray-300'
            } ${
              index === currentInput.length ? 'bg-blue-500/50 animate-pulse' : ''
            }`}
          >
            {char.char}
          </span>
        ))}
      </div>
    </div>
  );
}