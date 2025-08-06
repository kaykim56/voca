'use client';

import { GameStats } from '@/types/game';

interface GameResultProps {
  stats: GameStats;
  onRestart: () => void;
  onNewGame: () => void;
}

export default function GameResult({ stats, onRestart, onNewGame }: GameResultProps) {
  const getPerformanceLevel = (wpm: number, accuracy: number) => {
    if (wpm >= 60 && accuracy >= 95) return { level: '훌륭함!', color: 'text-green-400', bgColor: 'bg-green-900/30' };
    if (wpm >= 40 && accuracy >= 90) return { level: '좋음', color: 'text-blue-400', bgColor: 'bg-blue-900/30' };
    if (wpm >= 25 && accuracy >= 80) return { level: '보통', color: 'text-yellow-400', bgColor: 'bg-yellow-900/30' };
    return { level: '연습 필요', color: 'text-red-400', bgColor: 'bg-red-900/30' };
  };

  const performance = getPerformanceLevel(stats.wpm, stats.accuracy);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}분 ${secs}초`;
  };

  return (
    <div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white mb-4">🎉 게임 완료!</h2>
        <div className={`inline-block px-6 py-3 rounded-full ${performance.bgColor} border border-current`}>
          <span className={`text-xl font-semibold ${performance.color}`}>
            {performance.level}
          </span>
        </div>
      </div>

      {/* 주요 통계 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6 text-center">
          <div className="text-4xl font-bold text-blue-400 mb-2">{stats.wpm}</div>
          <div className="text-blue-300 font-medium">분당 단어 수 (WPM)</div>
          <div className="text-xs text-blue-200 mt-1">Words Per Minute</div>
        </div>

        <div className="bg-green-900/30 border border-green-500/50 rounded-xl p-6 text-center">
          <div className="text-4xl font-bold text-green-400 mb-2">{stats.accuracy}%</div>
          <div className="text-green-300 font-medium">정확도</div>
          <div className="text-xs text-green-200 mt-1">Accuracy</div>
        </div>
      </div>

      {/* 상세 통계 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-700/50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-white">{stats.correctWords}</div>
          <div className="text-sm text-gray-300">정답 단어</div>
        </div>

        <div className="bg-gray-700/50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-white">{stats.totalWords}</div>
          <div className="text-sm text-gray-300">총 단어</div>
        </div>

        <div className="bg-gray-700/50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-white">{stats.errors}</div>
          <div className="text-sm text-gray-300">오타 수</div>
        </div>

        <div className="bg-gray-700/50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-white">{formatTime(stats.timeElapsed)}</div>
          <div className="text-sm text-gray-300">소요 시간</div>
        </div>
      </div>

      {/* 추가 정보 */}
      <div className="bg-gray-700/30 rounded-lg p-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">정답 글자 수:</span>
            <span className="text-white font-medium">{stats.correctChars}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">총 글자 수:</span>
            <span className="text-white font-medium">{stats.totalChars}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">완료율:</span>
            <span className="text-white font-medium">
              {stats.totalWords > 0 ? Math.round((stats.correctWords / stats.totalWords) * 100) : 0}%
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">평균 글자/분:</span>
            <span className="text-white font-medium">{Math.round(stats.wpm * 5)}</span>
          </div>
        </div>
      </div>

      {/* 액션 버튼 */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onRestart}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <span>🔄</span>
          다시 시작
        </button>
        
        <button
          onClick={onNewGame}
          className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <span>🎮</span>
          새 게임
        </button>
      </div>

      {/* 개선 팁 */}
      <div className="mt-8 p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
        <h3 className="text-yellow-400 font-semibold mb-2">💡 실력 향상 팁</h3>
        <ul className="text-sm text-yellow-200 space-y-1">
          {stats.accuracy < 90 && <li>• 속도보다 정확도를 우선시하세요</li>}
          {stats.wpm < 30 && <li>• 키보드 자판 위치를 익히고 터치 타이핑을 연습하세요</li>}
          {stats.errors > 5 && <li>• 천천히 정확하게 입력하는 연습을 해보세요</li>}
          <li>• 꾸준한 연습이 가장 중요합니다</li>
        </ul>
      </div>
    </div>
  );
}