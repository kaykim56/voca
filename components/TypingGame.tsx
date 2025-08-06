'use client';

import { useState } from 'react';
import { GameSettings } from '@/types/game';
import { useTypingGame } from '@/hooks/useTypingGame';
import WordDisplay from './WordDisplay';
import TypingInput from './TypingInput';
import GameStats from './GameStats';
import GameResult from './GameResult';

interface TypingGameProps {
  onBackToMenu: () => void;
}

export default function TypingGame({ onBackToMenu }: TypingGameProps) {
  const [settings] = useState<GameSettings>({
    mode: 'normal',
    timeLimit: 60,
    difficulty: 'easy',
    wordCount: 20,
  });

  const {
    gameState,
    startGame,
    resetGame,
    handleInput,
    getCharacterStatuses,
  } = useTypingGame(settings);

  const handleRestart = () => {
    resetGame();
  };

  const handleNewGame = () => {
    resetGame();
    onBackToMenu();
  };

  // 게임 시작 전 화면
  if (!gameState.isPlaying && !gameState.isFinished) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            🚀 영단어 타자 게임
          </h1>
          
          <div className="space-y-4 mb-8 text-left">
            <div className="bg-gray-700/50 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">게임 설정</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>모드:</span>
                  <span className="text-blue-400">{settings.mode === 'normal' ? '일반 모드' : '타임 어택'}</span>
                </div>
                <div className="flex justify-between">
                  <span>난이도:</span>
                  <span className="text-green-400">
                    {settings.difficulty === 'easy' ? '쉬움 (고1)' : settings.difficulty === 'medium' ? '보통 (고2)' : '어려움 (고3)'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>단어 수:</span>
                  <span className="text-yellow-400">{settings.wordCount}개</span>
                </div>
                {settings.mode === 'timed' && (
                  <div className="flex justify-between">
                    <span>제한 시간:</span>
                    <span className="text-red-400">{settings.timeLimit}초</span>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-blue-900/30 border border-blue-500/50 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">게임 방법</h3>
              <ul className="text-sm text-blue-200 space-y-1">
                <li>• 화면에 표시된 영단어를 정확히 입력하세요</li>
                <li>• 단어 입력 후 <kbd className="px-1 bg-gray-600 rounded">Space</kbd> 또는 <kbd className="px-1 bg-gray-600 rounded">Enter</kbd>를 누르세요</li>
                <li>• 정확도와 속도를 모두 고려한 점수가 산출됩니다</li>
                <li>• 오타는 빨간색으로 표시됩니다</li>
              </ul>
            </div>
          </div>

          <button
            onClick={startGame}
            className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-xl rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            🎮 게임 시작
          </button>

          <button
            onClick={onBackToMenu}
            className="ml-4 px-8 py-4 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-xl transition-colors duration-200"
          >
            ← 메뉴로
          </button>
        </div>
      </div>
    );
  }

  // 게임 결과 화면
  if (gameState.isFinished) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-4">
        <GameResult
          stats={gameState.stats}
          onRestart={handleRestart}
          onNewGame={handleNewGame}
        />
      </div>
    );
  }

  // 게임 진행 화면
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4">
      <div className="max-w-6xl mx-auto py-8">
        {/* 헤더 */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            영단어 타자 게임
          </h1>
          <div className="text-gray-400">
            {gameState.currentWordIndex + 1} / {gameState.words.length}
          </div>
        </div>

        {/* 게임 통계 */}
        <GameStats stats={gameState.stats} gameState={gameState} />

        {/* 진행률 바 */}
        <div className="mb-8">
          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
              style={{
                width: `${((gameState.currentWordIndex) / gameState.words.length) * 100}%`
              }}
            />
          </div>
          <div className="text-center text-sm text-gray-400 mt-2">
            진행률: {Math.round(((gameState.currentWordIndex) / gameState.words.length) * 100)}%
          </div>
        </div>

        {/* 단어 표시 */}
        <WordDisplay
          characters={getCharacterStatuses()}
          currentInput={gameState.userInput}
        />

        {/* 입력 필드 */}
        <TypingInput
          value={gameState.userInput}
          onChange={handleInput}
          disabled={!gameState.isPlaying}
          placeholder="단어를 입력하세요..."
        />

        {/* 하단 정보 */}
        <div className="text-center mt-8 text-gray-400">
          <p>현재 단어: <span className="text-white font-semibold">{gameState.currentWord}</span></p>
          {gameState.mode === 'timed' && (
            <p className="mt-2 text-orange-400">
              ⏰ 남은 시간: <span className="font-bold">{Math.floor(gameState.timeRemaining / 60)}:{(gameState.timeRemaining % 60).toString().padStart(2, '0')}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}