'use client';

import { useEffect, useRef } from 'react';

interface TypingInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
  placeholder?: string;
}

export default function TypingInput({ value, onChange, disabled, placeholder }: TypingInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!disabled && inputRef.current) {
      inputRef.current.focus();
    }
  }, [disabled]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 백스페이스와 일반 입력만 허용
    if (e.key === 'Backspace' || e.key === 'Delete') {
      return;
    }
    
    // 스페이스나 엔터로 단어 완료
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      onChange(value + ' ');
      return;
    }
    
    // 영문자와 일부 특수문자만 허용
    if (!/^[a-zA-Z]$/.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        placeholder={placeholder || "단어를 입력하세요..."}
        className="w-full px-6 py-4 text-2xl font-mono bg-gray-800 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        autoComplete="off"
        spellCheck={false}
      />
      <div className="text-center mt-2 text-sm text-gray-400">
        단어를 입력한 후 <kbd className="px-2 py-1 bg-gray-700 rounded">Space</kbd> 또는 <kbd className="px-2 py-1 bg-gray-700 rounded">Enter</kbd>를 누르세요
      </div>
    </div>
  );
}