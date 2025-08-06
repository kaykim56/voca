'use client';

import { useState } from 'react';
import RainTypingGame from '@/components/RainTypingGame';

type AppState = 'menu' | 'playing';

export default function Home() {
  const [appState, setAppState] = useState<AppState>('menu');

  const handleStartGame = () => {
    setAppState('playing');
  };

  const handleBackToMenu = () => {
    setAppState('menu');
  };

  if (appState === 'menu') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 flex items-center justify-center p-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* 메인 타이틀 */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
              🌧️ 영단어 비 게임
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-2">
              하늘에서 떨어지는 영단어를 빠르게 타이핑하세요!
            </p>
            <p className="text-lg text-gray-400">
              단어가 땅에 떨어지기 전에 입력해야 합니다!
            </p>
          </div>

          {/* 게임 특징 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6">
              <div className="text-4xl mb-3">🌧️</div>
              <h3 className="text-xl font-semibold text-blue-400 mb-2">비처럼 떨어지는 단어</h3>
              <p className="text-blue-200 text-sm">하늘에서 영단어들이 비처럼 떨어집니다</p>
            </div>

            <div className="bg-green-900/30 border border-green-500/50 rounded-xl p-6">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-semibold text-green-400 mb-2">빠른 타이핑</h3>
              <p className="text-green-200 text-sm">단어가 땅에 떨어지기 전에 빠르게 입력하세요</p>
            </div>

            <div className="bg-purple-900/30 border border-purple-500/50 rounded-xl p-6">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl font-semibold text-purple-400 mb-2">레벨업 시스템</h3>
              <p className="text-purple-200 text-sm">레벨이 올라갈수록 더 빨라지고 어려워집니다</p>
            </div>
          </div>

          {/* 시작 버튼 */}
          <button
            onClick={handleStartGame}
            className="px-16 py-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold text-2xl rounded-xl transition-all duration-200 transform hover:scale-105 shadow-2xl"
          >
            🚀 게임 시작하기
          </button>

          {/* 게임 설명 */}
          <div className="mt-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">🎮 게임 규칙</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div className="text-left">
                <h4 className="font-semibold text-blue-400 mb-2">✅ 목표</h4>
                <ul className="space-y-1">
                  <li>• 떨어지는 영단어를 타이핑으로 제거</li>
                  <li>• 단어가 땅에 떨어지면 생명 차감</li>
                  <li>• 높은 점수와 레벨 달성</li>
                </ul>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-green-400 mb-2">🎯 점수 시스템</h4>
                <ul className="space-y-1">
                  <li>• 높은 위치에서 맞출수록 높은 점수</li>
                  <li>• 10개 완성시마다 레벨업</li>
                  <li>• 레벨업시 속도 증가</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (appState === 'playing') {
    return <RainTypingGame onBackToMenu={handleBackToMenu} />;
  }

  // 폴백
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 flex items-center justify-center">
      <div className="text-white text-xl">로딩 중...</div>
    </div>
  );
}
