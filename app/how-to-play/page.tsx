'use client';

import Link from 'next/link';

export default function HowToPlay() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Rain VOCA 게임 방법</h1>
          <p className="text-xl text-gray-300">영단어 타이핑 게임의 완벽한 플레이 가이드</p>
        </div>

        {/* 게임 소개 */}
        <section className="mb-12 bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">🌧️ Rain VOCA란?</h2>
          <p className="text-lg leading-relaxed mb-4">
            Rain VOCA는 하늘에서 비처럼 떨어지는 영단어를 빠르게 타이핑하여 제거하는 교육용 게임입니다. 
            재미있는 게임을 통해 자연스럽게 영어 단어를 학습하고 타이핑 실력을 향상시킬 수 있습니다.
          </p>
          <p className="text-lg leading-relaxed">
            게임은 5단계의 난이도로 구성되어 있어 초보자부터 전문가까지 모든 수준의 학습자가 즐길 수 있습니다.
          </p>
        </section>

        {/* 게임 규칙 */}
        <section className="mb-12 bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">📋 기본 게임 규칙</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">🎯 목표</h3>
              <ul className="space-y-2 text-lg">
                <li>• 하늘에서 떨어지는 영단어를 정확히 타이핑</li>
                <li>• 단어가 땅에 떨어지기 전에 입력 완료</li>
                <li>• 높은 점수 달성 및 레벨업</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-red-300">❤️ 생명력</h3>
              <ul className="space-y-2 text-lg">
                <li>• 시작 시 생명력 10개</li>
                <li>• 단어를 놓치면 생명력 1개 차감</li>
                <li>• 생명력이 0이 되면 게임 종료</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 레벨 시스템 */}
        <section className="mb-12 bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">⭐ 레벨업 시스템</h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-4 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">레벨 1 → 레벨 2</h4>
              <p>5개의 단어를 정확히 입력하면 레벨업!</p>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">레벨 2 이상</h4>
              <p>각 레벨마다 7개의 단어를 정확히 입력하면 다음 레벨로!</p>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-4 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">레벨 2부터 특별 기능</h4>
              <p>단어가 깜박이기 시작하여 난이도가 증가합니다!</p>
            </div>
          </div>
        </section>

        {/* 난이도 설명 */}
        <section className="mb-12 bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">🎮 난이도 선택</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-500/20 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-3">1-2단계</h3>
              <h4 className="text-lg font-semibold mb-2">초보자 · 기초</h4>
              <p>천천히 떨어지는 기본 단어들로 영어 학습을 시작하세요.</p>
            </div>
            <div className="bg-yellow-500/20 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-3">3단계</h3>
              <h4 className="text-lg font-semibold mb-2">중급</h4>
              <p>적당한 속도로 실력 향상을 위한 도전적인 플레이.</p>
            </div>
            <div className="bg-red-500/20 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-3">4-5단계</h3>
              <h4 className="text-lg font-semibold mb-2">고급 · 전문가</h4>
              <p>빠른 속도와 어려운 단어로 최고 수준의 도전.</p>
            </div>
          </div>
        </section>

        {/* 조작법 */}
        <section className="mb-12 bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">⌨️ 조작법</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-purple-300">기본 조작</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center">
                  <span className="bg-gray-700 px-3 py-1 rounded mr-3 font-mono">키보드</span>
                  영단어 타이핑
                </li>
                <li className="flex items-center">
                  <span className="bg-gray-700 px-3 py-1 rounded mr-3 font-mono">Enter</span>
                  단어 입력 완료
                </li>
                <li className="flex items-center">
                  <span className="bg-gray-700 px-3 py-1 rounded mr-3 font-mono">ESC</span>
                  게임 일시정지
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-orange-300">게임 중 기능</h3>
              <ul className="space-y-3 text-lg">
                <li>• 정확한 타이핑으로 단어 제거</li>
                <li>• 한국어 뜻이 이펙트로 표시</li>
                <li>• 곰돌이 축하 애니메이션</li>
                <li>• 레벨업 시 성공 모션</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 학습 효과 */}
        <section className="mb-12 bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">📚 학습 효과</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-green-300">영어 실력 향상</h3>
              <ul className="space-y-2 text-lg">
                <li>• 영단어 철자 암기</li>
                <li>• 한국어 뜻 학습</li>
                <li>• 반복 학습을 통한 기억력 강화</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">타이핑 실력 향상</h3>
              <ul className="space-y-2 text-lg">
                <li>• 타이핑 속도 증가</li>
                <li>• 정확도 향상</li>
                <li>• 키보드 숙련도 개선</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 게임 시작 버튼 */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105"
          >
            🎮 지금 게임 시작하기
          </Link>
        </div>
      </div>
    </div>
  );
}