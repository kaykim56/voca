'use client';

import { RainGameState } from '@/types/rain-game';

interface RainGameUIProps {
  gameState: RainGameState;
}

export default function RainGameUI({ gameState }: RainGameUIProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // 현재 레벨에서 필요한 단어 수 계산
  const getWordsNeededForCurrentLevel = () => {
    if (gameState.level === 1) return 5;
    return 7; // Level 2부터는 7개씩
  };

  // 현재 레벨에서의 진행도 계산
  const getCurrentLevelProgress = () => {
    if (gameState.level === 1) {
      return gameState.wordsCompleted; // 0~5
    } else {
      // Level 2부터는 이전 레벨들의 총합을 빼고 현재 레벨 진행도만 계산
      const previousLevelsTotal = 5 + (gameState.level - 2) * 7;
      return gameState.wordsCompleted - previousLevelsTotal; // 0~7
    }
  };

  return (
    <div className="absolute top-4 left-4 right-4 z-10">
      <div className="flex justify-between items-start">
        {/* 왼쪽 정보 */}
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">⭐</span>
              <span className="font-bold">{gameState.score}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-400">❤️</span>
              <span className="font-bold">{gameState.lives}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">📊</span>
              <span className="font-bold">Lv.{gameState.level}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-purple-400">🎯</span>
              <span className="font-bold">
                {getCurrentLevelProgress()}/{getWordsNeededForCurrentLevel()}
              </span>
            </div>
          </div>
        </div>

        {/* 중앙 정보 */}
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white text-center">
          <div className="text-lg font-bold">{formatTime(gameState.gameTime)}</div>
          <div className="text-sm opacity-80">경과 시간</div>
        </div>

        {/* 오른쪽 정보 */}
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white text-right">
          <div className="space-y-1">
            <div className="flex items-center gap-2 justify-end">
              <span className="font-bold">{gameState.wordsCompleted}</span>
              <span className="text-green-400">✅</span>
            </div>
            <div className="flex items-center gap-2 justify-end">
              <span className="font-bold">{gameState.wordsDropped}</span>
              <span className="text-red-400">💧</span>
            </div>
            <div className="flex items-center gap-2 justify-end">
              <span className="font-bold">{gameState.fallingWords.length}</span>
              <span className="text-blue-400">📝</span>
            </div>
          </div>
        </div>
      </div>

      {/* 레벨업 알림은 LevelUpEffect 컴포넌트에서 처리 */}

      {/* 게임 오버 또는 일시정지 오버레이 */}
      {(gameState.isGameOver || gameState.isPaused) && (
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8 text-center shadow-2xl">
            {gameState.isGameOver ? (
              <>
                <h2 className="text-3xl font-bold text-red-600 mb-4">💀 게임 오버!</h2>
                <div className="space-y-2 text-gray-700">
                  <p>최종 점수: <span className="font-bold text-yellow-600">{gameState.score}</span></p>
                  <p>완성한 단어: <span className="font-bold text-green-600">{gameState.wordsCompleted}</span></p>
                  <p>떨어뜨린 단어: <span className="font-bold text-red-600">{gameState.wordsDropped}</span></p>
                  <p>도달한 레벨: <span className="font-bold text-blue-600">{gameState.level}</span></p>
                  <p>플레이 시간: <span className="font-bold text-purple-600">{formatTime(gameState.gameTime)}</span></p>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-blue-600 mb-4">⏸️ 일시정지</h2>
                <p className="text-gray-600">게임이 일시정지되었습니다</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}