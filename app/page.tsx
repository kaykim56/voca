'use client';

import { useState, useEffect } from 'react';
import RainTypingGame from '@/components/RainTypingGame';
import AdSense from '@/components/AdSense';
import { getHighScore, formatScore } from '@/utils/scoreUtils';

type AppState = 'menu' | 'playing';

export default function Home() {
  const [appState, setAppState] = useState<AppState>('menu');
  const [selectedDifficulty, setSelectedDifficulty] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [highScore, setHighScore] = useState<number>(0);

  const handleStartGame = () => {
    setAppState('playing');
  };

  const handleBackToMenu = () => {
    setAppState('menu');
    // 메뉴로 돌아올 때 최고 점수 업데이트
    setHighScore(getHighScore());
  };

  // 컴포넌트 마운트 시 최고 점수 로드
  useEffect(() => {
    setHighScore(getHighScore());
  }, []);

  const getDifficultyInfo = (level: number) => {
    switch(level) {
      case 1: return { name: '초보자', color: 'text-green-400', desc: '천천히 떨어지는 기초 단어' };
      case 2: return { name: '기초', color: 'text-blue-400', desc: '기본 단어들이 떨어집니다' };
      case 3: return { name: '중급', color: 'text-yellow-400', desc: '실력 향상을 위한 도전' };
      case 4: return { name: '고급', color: 'text-orange-400', desc: '도전적인 플레이' };
      case 5: return { name: '전문가', color: 'text-red-400', desc: '최고 난이도' };
      default: return { name: '초보자', color: 'text-green-400', desc: '천천히 떨어지는 기초 단어' };
    }
  };

  // 파티클 효과를 위한 useEffect
  useEffect(() => {
    if (appState !== 'menu') return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'fixed w-1 h-1 bg-white/60 rounded-full pointer-events-none animate-pulse';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 3 + 's';
      
      document.body.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.remove();
        }
      }, 3000);
    };

    const interval = setInterval(createParticle, 2000);
    return () => clearInterval(interval);
  }, [appState]);

  if (appState === 'menu') {
  return (
      <div className="min-h-screen relative overflow-x-hidden">
        {/* 그라데이션 배경 */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-700 to-indigo-800"></div>
        
        {/* 떠다니는 배경 단어들 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute animate-float-1 text-white/10 text-4xl font-bold" style={{left: '10%', animationDelay: '0s'}}>LEARN</div>
          <div className="absolute animate-float-2 text-white/10 text-4xl font-bold" style={{left: '30%', animationDelay: '3s'}}>STUDY</div>
          <div className="absolute animate-float-3 text-white/10 text-4xl font-bold" style={{left: '50%', animationDelay: '6s'}}>WORDS</div>
          <div className="absolute animate-float-4 text-white/10 text-4xl font-bold" style={{left: '70%', animationDelay: '9s'}}>ENGLISH</div>
          <div className="absolute animate-float-5 text-white/10 text-4xl font-bold" style={{left: '90%', animationDelay: '12s'}}>FUN</div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto p-5">
          {/* 헤더 섹션 */}
          <div className="text-center mb-16 pt-10">
            <div className="mb-8 h-32 flex items-center justify-center">
              <div className="flex gap-2 animate-bounce">
                <span className="text-5xl font-black bg-gradient-to-r from-red-400 via-yellow-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse" style={{animationDelay: '0s'}}>V</span>
                <span className="text-5xl font-black bg-gradient-to-r from-red-400 via-yellow-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse" style={{animationDelay: '0.1s'}}>O</span>
                <span className="text-5xl font-black bg-gradient-to-r from-red-400 via-yellow-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse" style={{animationDelay: '0.2s'}}>C</span>
                <span className="text-5xl font-black bg-gradient-to-r from-red-400 via-yellow-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse" style={{animationDelay: '0.3s'}}>A</span>
                <span className="text-5xl font-black bg-gradient-to-r from-red-400 via-yellow-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse" style={{animationDelay: '0.4s'}}>B</span>
                <span className="text-5xl font-black bg-gradient-to-r from-red-400 via-yellow-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse" style={{animationDelay: '0.5s'}}>U</span>
                <span className="text-5xl font-black bg-gradient-to-r from-red-400 via-yellow-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse" style={{animationDelay: '0.6s'}}>L</span>
                <span className="text-5xl font-black bg-gradient-to-r from-red-400 via-yellow-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse" style={{animationDelay: '0.7s'}}>A</span>
                <span className="text-5xl font-black bg-gradient-to-r from-red-400 via-yellow-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse" style={{animationDelay: '0.8s'}}>R</span>
                <span className="text-5xl font-black bg-gradient-to-r from-red-400 via-yellow-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse" style={{animationDelay: '0.9s'}}>Y</span>
              </div>
            </div>
            <h1 className="text-6xl font-black text-white mb-4 text-shadow-lg bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Rain VOCA</h1>
            <p className="text-xl text-white/90 mb-3 font-light">하늘에서 떨어지는 영단어를 빠르게 타이핑하세요!</p>
            <p className="text-lg text-white/70 font-light mb-4">단어가 땅에 떨어지기 전에 입력해야 합니다!</p>
            
            {/* 최고 점수 표시 */}
            {highScore > 0 && (
              <div className="bg-black/20 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20 mb-4 inline-block">
                <div className="flex items-center gap-2 text-yellow-400">
                  <span className="text-xl">🏆</span>
                  <span className="text-lg font-bold">최고 점수: {formatScore(highScore)}점</span>
                </div>
              </div>
            )}
          </div>

          {/* 게임 모드 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center transition-all duration-500 cursor-pointer hover:transform hover:-translate-y-3 hover:bg-white/15 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="text-6xl mb-5 block">☁️</span>
              <h3 className="text-2xl font-bold text-white mb-4">비처럼 떨어지는 단어</h3>
              <p className="text-white/80 leading-relaxed">하늘에서 영단어들이 비처럼 떨어집니다</p>
            </div>
            <div className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center transition-all duration-500 cursor-pointer hover:transform hover:-translate-y-3 hover:bg-white/15 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="text-6xl mb-5 block animate-pulse">⚡</span>
              <h3 className="text-2xl font-bold text-white mb-4">빠른 타이핑</h3>
              <p className="text-white/80 leading-relaxed">단어가 땅에 떨어지기 전에 빠르게 입력하세요</p>
            </div>
            <div className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center transition-all duration-500 cursor-pointer hover:transform hover:-translate-y-3 hover:bg-white/15 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="text-6xl mb-5 block animate-bounce">🎯</span>
              <h3 className="text-2xl font-bold text-white mb-4">레벨업 시스템</h3>
              <p className="text-white/80 leading-relaxed">레벨이 올라갈수록 더 빨라지고 어려워집니다</p>
            </div>
          </div>

          {/* 난이도 선택 */}
          <div className="bg-black/20 backdrop-blur-xl rounded-3xl p-10 mb-10 border border-white/10">
            <h2 className="text-3xl font-bold text-white text-center mb-8 flex items-center justify-center gap-3">
              <span className="animate-spin">🎯</span> 난이도 선택
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {[1, 2, 3, 4, 5].map((level) => {
                const info = getDifficultyInfo(level);
                return (
                  <button
                    key={level}
                    onClick={() => setSelectedDifficulty(level as 1 | 2 | 3 | 4 | 5)}
                    className={`group p-5 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden ${
                      selectedDifficulty === level
                        ? 'border-green-400 bg-gradient-to-br from-green-500 to-green-600 transform scale-110 shadow-xl'
                        : 'border-white/30 bg-white/10 hover:bg-white/20 hover:transform hover:-translate-y-1'
                    }`}
                  >
                    <div className="text-4xl font-black text-white mb-2">{level}</div>
                    <div className={`text-base font-bold mb-1 ${selectedDifficulty === level ? 'text-white' : info.color}`}>{info.name}</div>
                    <div className="text-sm text-white/80">{info.desc}</div>
                  </button>
                );
              })}
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-green-400">
                선택된 난이도: {selectedDifficulty}단계 ({getDifficultyInfo(selectedDifficulty).name})
              </div>
            </div>
          </div>

          {/* 게임 시작 버튼 */}
          <div className="text-center mb-12">
            <button
              onClick={handleStartGame}
              className="group relative inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-red-500 to-orange-500 text-white text-2xl font-black rounded-full transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="text-3xl">🎮</span> 게임 시작하기
            </button>
          </div>

          {/* 게임 규칙 */}
          <div className="bg-black/20 backdrop-blur-xl rounded-3xl p-10 border border-white/10">
            <h2 className="text-3xl font-bold text-white text-center mb-8 flex items-center justify-center gap-3">
              <span>🎮</span> 게임 규칙
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <span>✅</span> 목표
                </h3>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 font-bold">✦</span>
                    <span>떨어지는 영단어를 타이핑으로 제거</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 font-bold">✦</span>
                    <span>단어가 땅에 떨어지면 생명 차감</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 font-bold">✦</span>
                    <span>높은 점수를 달성해보세요</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <span>⚡</span> 점수 시스템
                </h3>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 font-bold">✦</span>
                    <span>높은 위치에서 맞출수록 높은 점수</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 font-bold">✦</span>
                    <span>10개 완성시마다 레벨업</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 font-bold">✦</span>
                    <span>레벨업시 속도 증가</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* AdSense 배너 광고 */}
          <div className="mt-8 flex justify-center">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-600/50">
              <AdSense 
                adSlot="1234567890"
                adFormat="auto"
                style={{ display: 'block', minHeight: '100px', minWidth: '300px' }}
                className="mx-auto"
              />
            </div>
          </div>

          {/* 푸터 링크 */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60 mb-4">
              <a href="/how-to-play" className="hover:text-blue-400 transition-colors">🎮 게임 방법</a>
              <a href="/benefits" className="hover:text-blue-400 transition-colors">🌟 학습 효과</a>
              <a href="/guides" className="hover:text-blue-400 transition-colors">📚 학습 가이드</a>
              <a href="/tips" className="hover:text-blue-400 transition-colors">💡 학습 팁</a>
              <a href="/vocabulary" className="hover:text-blue-400 transition-colors">📖 영단어 사전</a>
              <a href="/about" className="hover:text-blue-400 transition-colors">ℹ️ 게임 소개</a>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-white/40">
              <a href="/privacy" className="hover:text-gray-300 transition-colors">개인정보처리방침</a>
              <a href="/terms" className="hover:text-gray-300 transition-colors">이용약관</a>
            </div>
            <div className="text-center mt-4 text-xs text-white/40">
              © 2025 Rain VOCA. All rights reserved. | 영어 학습의 새로운 경험
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (appState === 'playing') {
    return <RainTypingGame onBackToMenu={handleBackToMenu} difficultyLevel={selectedDifficulty} />;
  }

  // 폴백
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 flex items-center justify-center">
      <div className="text-white text-xl">로딩 중...</div>
    </div>
  );
}