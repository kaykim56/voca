'use client';

import React from 'react';

interface GameOverEffectProps {
  isVisible: boolean;
  onRestart: () => void;
  onBackToMenu: () => void;
  gameStats?: {
    score: number;
    level: number;
    correctWords: number;
    accuracy: number;
  };
}

const GameOverEffect: React.FC<GameOverEffectProps> = ({ isVisible, onRestart, onBackToMenu, gameStats }) => {
  if (!isVisible) return null;

  const stats = gameStats || {
    score: 0,
    level: 1,
    correctWords: 0,
    accuracy: 0
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70">
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 text-center">
        {/* 기본 게임 오버 텍스트 */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">😴 게임 종료</h2>
        
        {/* 점수 정보 */}
        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <div className="text-2xl font-bold text-blue-600 mb-2">🏆 결과</div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-gray-600">점수:</span>
              <div className="font-bold text-lg">{stats.score.toLocaleString()}점</div>
            </div>
            <div>
              <span className="text-gray-600">레벨:</span>
              <div className="font-bold text-lg">Level {stats.level}</div>
            </div>
            <div>
              <span className="text-gray-600">완성:</span>
              <div className="font-bold text-lg">{stats.correctWords}개</div>
            </div>
            <div>
              <span className="text-gray-600">정확도:</span>
              <div className="font-bold text-lg">{stats.accuracy}%</div>
            </div>
          </div>
        </div>

        {/* 버튼들 */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={onRestart}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
          >
            🔄 다시 시작
          </button>
          <button
            onClick={onBackToMenu}
            className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
          >
            🏠 메인 메뉴
          </button>
        </div>
        
        <p className="text-gray-600 mt-4 text-sm">수고하셨습니다!</p>
      </div>
    </div>
  );
};

export default GameOverEffect;