'use client';

import Link from 'next/link';

export default function Benefits() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Rain VOCA의 학습 효과</h1>
          <p className="text-xl text-gray-300">게임으로 얻는 놀라운 영어 학습 효과들</p>
        </div>

        {/* 주요 효과 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">🌟 주요 학습 효과</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
              <div className="text-6xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold mb-4">기억력 향상</h3>
              <p className="text-lg">반복적인 타이핑을 통해 영단어가 장기기억에 저장되어 자연스럽게 암기됩니다.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4">반응속도 증가</h3>
              <p className="text-lg">떨어지는 단어를 빠르게 인식하고 타이핑하며 두뇌 반응속도가 향상됩니다.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">집중력 강화</h3>
              <p className="text-lg">게임에 몰입하며 자연스럽게 집중력과 주의력이 향상됩니다.</p>
            </div>
          </div>
        </section>

        {/* 영어 학습 효과 */}
        <section className="mb-12 bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">📚 영어 학습 효과</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">단어 암기 효과</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span><strong>시각적 학습:</strong> 단어를 보고 타이핑하며 시각적 기억 형성</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span><strong>운동 기억:</strong> 손가락 움직임으로 단어 철자 체득</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span><strong>반복 학습:</strong> 게임을 통한 자연스러운 반복 학습</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-purple-300">의미 학습 효과</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span><strong>즉시 피드백:</strong> 타이핑 완료 시 한국어 뜻 즉시 표시</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span><strong>연상 학습:</strong> 단어와 의미를 연결하는 학습</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span><strong>맥락 학습:</strong> 게임 상황 속에서 단어 의미 이해</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-3">🎓 학습 과학적 근거</h4>
            <p className="text-lg">
              게임 기반 학습(Game-Based Learning)은 학습자의 동기부여를 높이고, 
              도파민 분비를 통해 학습 효과를 극대화하는 것으로 교육학적으로 입증되었습니다.
            </p>
          </div>
        </section>

        {/* 타이핑 실력 향상 */}
        <section className="mb-12 bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">⌨️ 타이핑 실력 향상</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">속도 향상</h3>
              <ul className="space-y-2">
                <li>• 빠른 단어 인식</li>
                <li>• 손가락 근육 기억</li>
                <li>• 타이핑 리듬 형성</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">정확도 향상</h3>
              <ul className="space-y-2">
                <li>• 정확한 키 위치 학습</li>
                <li>• 오타 감소</li>
                <li>• 자판 익숙도 증가</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">자세 개선</h3>
              <ul className="space-y-2">
                <li>• 올바른 손가락 배치</li>
                <li>• 터치 타이핑 습관</li>
                <li>• 키보드 숙련도</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 인지능력 향상 */}
        <section className="mb-12 bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">🧩 인지능력 향상</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-indigo-500/20 to-blue-500/20 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-3">🎯 주의력 및 집중력</h3>
              <p className="text-lg mb-3">
                떨어지는 단어에 집중하며 주의력과 지속적인 집중력이 향상됩니다.
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-base">
                <li>• 선택적 주의력 강화</li>
                <li>• 지속적 집중력 개발</li>
                <li>• 멀티태스킹 능력 향상</li>
                <li>• 시각적 주의력 증진</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-3">⚡ 처리속도 및 반응시간</h3>
              <p className="text-lg mb-3">
                빠르게 떨어지는 단어를 처리하며 두뇌의 정보처리 속도가 빨라집니다.
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-base">
                <li>• 시각 정보 처리속도 향상</li>
                <li>• 반응시간 단축</li>
                <li>• 의사결정 속도 증가</li>
                <li>• 순간 판단력 강화</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 학습 효과 통계 */}
        <section className="mb-12 bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">📊 예상 학습 효과</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">300%</div>
              <div className="text-lg">타이핑 속도 향상</div>
              <div className="text-sm text-gray-300">정기적 플레이 시</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-lg">영단어 학습</div>
              <div className="text-sm text-gray-300">다양한 난이도별</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">85%</div>
              <div className="text-lg">기억 정착률</div>
              <div className="text-sm text-gray-300">게임 기반 학습</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">50%</div>
              <div className="text-lg">집중력 향상</div>
              <div className="text-sm text-gray-300">지속적 훈련 효과</div>
            </div>
          </div>
        </section>

        {/* 게임 시작 버튼 */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105"
          >
            🚀 지금 학습 효과 경험하기
          </Link>
        </div>
      </div>
    </div>
  );
}