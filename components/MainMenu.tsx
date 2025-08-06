'use client';

import { useState } from 'react';
import { GameSettings } from '@/types/game';

interface MainMenuProps {
  onStartGame: (settings: GameSettings) => void;
}

export default function MainMenu({ onStartGame }: MainMenuProps) {
  const [settings, setSettings] = useState<GameSettings>({
    mode: 'normal',
    timeLimit: 60,
    difficulty: 'easy',
    wordCount: 20,
  });

  const handleStartGame = () => {
    onStartGame(settings);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* 메인 타이틀 */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            ⌨️ 영단어 타자 게임
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            고등학생 필수 영단어로 타자 실력 향상하기
          </p>
          <p className="text-lg text-gray-400">
            재미있게 배우고, 빠르게 입력하세요!
          </p>
        </div>

        {/* 게임 설정 */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">🎮 게임 설정</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 게임 모드 */}
            <div className="space-y-3">
              <label className="block text-lg font-semibold text-white">게임 모드</label>
              <div className="space-y-2">
                <label className="flex items-center p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700/70 transition-colors cursor-pointer">
                  <input
                    type="radio"
                    name="mode"
                    value="normal"
                    checked={settings.mode === 'normal'}
                    onChange={(e) => setSettings({...settings, mode: e.target.value as 'normal' | 'timed'})}
                    className="w-4 h-4 text-blue-600 mr-3"
                  />
                  <div className="text-left">
                    <div className="text-white font-medium">일반 모드</div>
                    <div className="text-gray-400 text-sm">시간 제한 없이 모든 단어 완성</div>
                  </div>
                </label>
                
                <label className="flex items-center p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700/70 transition-colors cursor-pointer">
                  <input
                    type="radio"
                    name="mode"
                    value="timed"
                    checked={settings.mode === 'timed'}
                    onChange={(e) => setSettings({...settings, mode: e.target.value as 'normal' | 'timed'})}
                    className="w-4 h-4 text-blue-600 mr-3"
                  />
                  <div className="text-left">
                    <div className="text-white font-medium">타임 어택</div>
                    <div className="text-gray-400 text-sm">제한 시간 내 최대한 많은 단어</div>
                  </div>
                </label>
              </div>
            </div>

            {/* 난이도 */}
            <div className="space-y-3">
              <label className="block text-lg font-semibold text-white">난이도</label>
              <div className="space-y-2">
                <label className="flex items-center p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700/70 transition-colors cursor-pointer">
                  <input
                    type="radio"
                    name="difficulty"
                    value="easy"
                    checked={settings.difficulty === 'easy'}
                    onChange={(e) => setSettings({...settings, difficulty: e.target.value as 'easy' | 'medium' | 'hard'})}
                    className="w-4 h-4 text-green-600 mr-3"
                  />
                  <div className="text-left">
                    <div className="text-white font-medium">쉬움 (고1)</div>
                    <div className="text-green-400 text-sm">기본 영단어</div>
                  </div>
                </label>
                
                <label className="flex items-center p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700/70 transition-colors cursor-pointer">
                  <input
                    type="radio"
                    name="difficulty"
                    value="medium"
                    checked={settings.difficulty === 'medium'}
                    onChange={(e) => setSettings({...settings, difficulty: e.target.value as 'easy' | 'medium' | 'hard'})}
                    className="w-4 h-4 text-yellow-600 mr-3"
                  />
                  <div className="text-left">
                    <div className="text-white font-medium">보통 (고2)</div>
                    <div className="text-yellow-400 text-sm">중급 영단어</div>
                  </div>
                </label>
                
                <label className="flex items-center p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700/70 transition-colors cursor-pointer">
                  <input
                    type="radio"
                    name="difficulty"
                    value="hard"
                    checked={settings.difficulty === 'hard'}
                    onChange={(e) => setSettings({...settings, difficulty: e.target.value as 'easy' | 'medium' | 'hard'})}
                    className="w-4 h-4 text-red-600 mr-3"
                  />
                  <div className="text-left">
                    <div className="text-white font-medium">어려움 (고3)</div>
                    <div className="text-red-400 text-sm">고급 영단어</div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* 추가 설정 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* 단어 수 (일반 모드) */}
            {settings.mode === 'normal' && (
              <div className="space-y-3">
                <label className="block text-lg font-semibold text-white">단어 수</label>
                <select
                  value={settings.wordCount}
                  onChange={(e) => setSettings({...settings, wordCount: parseInt(e.target.value)})}
                  className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                >
                  <option value={10}>10개 (빠른 게임)</option>
                  <option value={20}>20개 (기본)</option>
                  <option value={30}>30개 (긴 게임)</option>
                  <option value={50}>50개 (도전)</option>
                </select>
              </div>
            )}

            {/* 제한 시간 (타임 어택) */}
            {settings.mode === 'timed' && (
              <div className="space-y-3">
                <label className="block text-lg font-semibold text-white">제한 시간</label>
                <select
                  value={settings.timeLimit}
                  onChange={(e) => setSettings({...settings, timeLimit: parseInt(e.target.value)})}
                  className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                >
                  <option value={30}>30초 (스프린트)</option>
                  <option value={60}>1분 (기본)</option>
                  <option value={180}>3분 (중간)</option>
                  <option value={300}>5분 (긴 게임)</option>
                </select>
              </div>
            )}
          </div>
        </div>

        {/* 시작 버튼 */}
        <button
          onClick={handleStartGame}
          className="px-16 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-2xl rounded-xl transition-all duration-200 transform hover:scale-105 shadow-2xl mb-8"
        >
          🚀 게임 시작하기
        </button>

        {/* 게임 설명 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-xl font-semibold text-blue-400 mb-2">속도 향상</h3>
            <p className="text-blue-200 text-sm">WPM(분당 단어수)를 측정하여 타자 속도를 개선하세요</p>
          </div>

          <div className="bg-green-900/30 border border-green-500/50 rounded-xl p-6">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-xl font-semibold text-green-400 mb-2">정확도 개선</h3>
            <p className="text-green-200 text-sm">오타를 줄이고 정확한 타이핑 습관을 기르세요</p>
          </div>

          <div className="bg-purple-900/30 border border-purple-500/50 rounded-xl p-6">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="text-xl font-semibold text-purple-400 mb-2">영단어 학습</h3>
            <p className="text-purple-200 text-sm">고등학생 필수 영단어를 자연스럽게 암기하세요</p>
          </div>
        </div>
      </div>
    </div>
  );
}