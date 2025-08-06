'use client';

import { GameStats as Stats, GameState } from '@/types/game';

interface GameStatsProps {
  stats: Stats;
  gameState: GameState;
}

export default function GameStats({ stats, gameState }: GameStatsProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {/* WPM */}
      <div className="bg-blue-900/30 border border-blue-500/50 rounded-lg p-4 text-center">
        <div className="text-2xl md:text-3xl font-bold text-blue-400">
          {stats.wpm}
        </div>
        <div className="text-sm text-blue-300">WPM</div>
      </div>

      {/* 정확도 */}
      <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-4 text-center">
        <div className="text-2xl md:text-3xl font-bold text-green-400">
          {stats.accuracy}%
        </div>
        <div className="text-sm text-green-300">정확도</div>
      </div>

      {/* 단어 수 */}
      <div className="bg-purple-900/30 border border-purple-500/50 rounded-lg p-4 text-center">
        <div className="text-2xl md:text-3xl font-bold text-purple-400">
          {stats.correctWords}/{stats.totalWords}
        </div>
        <div className="text-sm text-purple-300">단어</div>
      </div>

      {/* 시간 */}
      <div className="bg-orange-900/30 border border-orange-500/50 rounded-lg p-4 text-center">
        <div className="text-2xl md:text-3xl font-bold text-orange-400">
          {gameState.mode === 'timed' ? formatTime(gameState.timeRemaining) : formatTime(Math.floor(stats.timeElapsed))}
        </div>
        <div className="text-sm text-orange-300">
          {gameState.mode === 'timed' ? '남은 시간' : '경과 시간'}
        </div>
      </div>
    </div>
  );
}