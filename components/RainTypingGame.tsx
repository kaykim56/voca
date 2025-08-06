'use client';

import { useState, useEffect, useRef } from 'react';
import { RainGameSettings } from '@/types/rain-game';
import { useRainGame } from '@/hooks/useRainGame';
import RainGameBackground from './RainGameBackground';
import RainGameUI from './RainGameUI';
import FallingWord from './FallingWord';
import MeaningEffect from './MeaningEffect';
import LifeGauge from './LifeGauge';
import LevelUpEffect from './LevelUpEffect';
import GameOverEffect from './GameOverEffect';
import AdSense from './AdSense';

interface RainTypingGameProps {
  onBackToMenu: () => void;
  difficultyLevel: 1 | 2 | 3 | 4 | 5;
}

export default function RainTypingGame({ onBackToMenu, difficultyLevel }: RainTypingGameProps) {
  const [settings] = useState<RainGameSettings>({
    difficulty: difficultyLevel <= 2 ? 'easy' : difficultyLevel <= 4 ? 'medium' : 'hard',
    difficultyLevel: difficultyLevel,
    initialLives: Math.max(5, 15 - difficultyLevel * 2), // 난이도별 생명력 (13,11,9,7,5)
    fallSpeed: 0.5 + (difficultyLevel * 0.3), // 난이도별 속도
    spawnInterval: Math.max(1500, 4000 - difficultyLevel * 500), // 난이도별 생성 간격
    wordLength: 'mixed',
  });

  const {
    gameState,
    startGame,
    endGame,
    resetGame,
    togglePause,
    handleInput,
    getGameStats,
  } = useRainGame(settings);

  const inputRef = useRef<HTMLInputElement>(null);

  // 키보드 포커스 유지
  useEffect(() => {
    if (gameState.isPlaying && inputRef.current) {
      inputRef.current.focus();
    }
  }, [gameState.isPlaying]);

  // 입력 처리
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInput(e.target.value);
  };

  // 키보드 이벤트 처리
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value.trim()) {
      handleInput(e.currentTarget.value);
    }
    if (e.key === 'Escape') {
      // 입력창에 텍스트가 있으면 지우기, 없으면 일시정지
      if (gameState.currentInput.trim()) {
        handleInput(''); // 입력 텍스트 지우기
      } else {
        togglePause(); // 일시정지/재개
      }
    }
  };

  // 현재 입력과 일치하는 단어 찾기 (하이라이트용)
  const getHighlightedWord = () => {
    if (!gameState.currentInput.trim()) return null;
    return gameState.fallingWords.find(
      word => word.word.toLowerCase().startsWith(gameState.currentInput.toLowerCase())
    );
  };

  const highlightedWord = getHighlightedWord();

  // 게임 시작 전 화면
  if (!gameState.isPlaying && !gameState.isGameOver) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-400 via-blue-300 to-green-400 flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            🌧️ 영단어 비 게임
          </h1>
          
          <div className="space-y-4 mb-8 text-left">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">🎮 게임 방법</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• 하늘에서 영단어가 비처럼 떨어집니다</li>
                <li>• 단어가 땅에 떨어지기 전에 타이핑하세요</li>
                <li>• 정확히 입력하면 단어가 사라지고 점수를 얻습니다</li>
                <li>• 단어가 땅에 떨어지면 생명이 1개씩 줄어듭니다</li>
                <li>• 생명이 모두 소진되면 게임 오버입니다</li>
                <li>• 레벨이 올라갈수록 더 빨라집니다!</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-800 mb-2">⚡ 게임 설정</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-green-700">
                <div className="flex justify-between">
                  <span>난이도:</span>
                  <span className="font-semibold">
                    {settings.difficulty === 'easy' ? '쉬움 🟢' : 
                     settings.difficulty === 'medium' ? '보통 🟡' : '어려움 🔴'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>생명:</span>
                  <span className="font-semibold">{settings.initialLives}개 ❤️</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">🎯 팁</h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• 높은 위치에서 맞출수록 더 많은 점수!</li>
                <li>• <kbd className="px-1 bg-gray-200 rounded">ESC</kbd> 키로 일시정지</li>
                <li>• 입력창에 글자를 입력하면 일치하는 단어가 하이라이트됩니다</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={startGame}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold text-xl rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              🚀 게임 시작
            </button>
            
            <button
              onClick={onBackToMenu}
              className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-xl transition-colors duration-200"
            >
              ← 메뉴로
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 메인 게임 화면
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 배경 */}
      <RainGameBackground />
      
      {/* UI 오버레이 */}
      <RainGameUI gameState={gameState} />

      {/* 게임 중 사이드바 광고 */}
      <div className="absolute top-4 right-4 z-30">
        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-2 border border-gray-500/30 max-w-xs">
          <AdSense 
            adSlot="1357924680"
            adFormat="auto"
            style={{ display: 'block', minHeight: '60px', minWidth: '200px' }}
            className="mx-auto"
          />
        </div>
      </div>

      {/* ESC로 일시정지했을 때만 메뉴 돌아가기 버튼 */}
      {gameState.isPaused && !gameState.isGameOver && (
        <div className="absolute top-20 right-4 z-40">
          <button
            onClick={onBackToMenu}
            className="px-4 py-2 bg-sky-500/80 hover:bg-sky-600/90 text-white font-semibold rounded-lg transition-all duration-200 backdrop-blur-sm border border-sky-400/50 transform hover:scale-105 shadow-lg"
          >
            🏠 메뉴로
          </button>
        </div>
      )}

      {/* 떨어지는 단어들 */}
      <div className="absolute inset-0">
        {gameState.fallingWords.map(word => (
          <FallingWord
            key={word.id}
            word={word}
            isHighlighted={highlightedWord?.id === word.id}
            gameLevel={gameState.level}
          />
        ))}
      </div>

      {/* 한글 뜻 이펙트들 */}
      <div className="absolute inset-0 pointer-events-none">
        {gameState.meaningEffects.map(effect => (
          <MeaningEffect
            key={effect.id}
            effect={effect}
          />
        ))}
      </div>

      {/* 입력창 */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4">
        <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4">
          <input
            ref={inputRef}
            type="text"
            value={gameState.currentInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="영단어를 입력하세요..."
            className="w-full px-4 py-3 text-xl font-mono bg-white/90 border-2 border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            disabled={!gameState.isPlaying || gameState.isPaused}
            autoComplete="off"
            spellCheck={false}
          />
          <div className="text-center mt-2 text-white/80 text-sm">
            <kbd className="px-2 py-1 bg-gray-600 rounded text-xs">Enter</kbd>로 입력 완료 | 
            <kbd className="px-2 py-1 bg-gray-600 rounded text-xs ml-2">ESC</kbd>로 텍스트 지우기/일시정지
          </div>
        </div>
      </div>

      {/* 생명력 게이지 */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4">
        <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3">
          <LifeGauge 
            currentLives={gameState.lives}
            maxLives={settings.initialLives}
          />
        </div>
      </div>

      {/* 일시정지 시 재개 버튼 */}
      {gameState.isPaused && !gameState.isGameOver && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={togglePause}
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors duration-200 shadow-lg"
          >
            ▶️ 게임 재개
          </button>
        </div>
      )}

      {/* 레벨업 이펙트 */}
      <LevelUpEffect 
        level={gameState.level}
        isVisible={gameState.showLevelUp}
      />

      {/* 게임 오버 이펙트 */}
      <GameOverEffect 
        isVisible={gameState.isGameOver}
        onRestart={resetGame}
        onBackToMenu={onBackToMenu}
      />
    </div>
  );
}