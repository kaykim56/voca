export default function Guides() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 p-8">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8">
        <h1 className="text-3xl font-bold text-white mb-6">영단어 학습 가이드</h1>
        
        <div className="text-gray-200 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-blue-300 mb-4">🎯 효과적인 영단어 암기법</h2>
            <div className="space-y-4">
              <div className="bg-blue-900/30 border border-blue-500/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-200 mb-3">1. 반복 학습의 중요성</h3>
                <p>영단어를 효과적으로 암기하려면 일정한 간격으로 반복 학습하는 것이 중요합니다. 
                VOCA Rain 게임은 이러한 반복 학습 원리를 게임화하여 자연스럽게 단어를 반복 노출시킵니다.</p>
                <ul className="list-disc ml-6 mt-3 space-y-1">
                  <li>첫 번째 학습 후 1일 뒤 복습</li>
                  <li>두 번째 복습 후 3일 뒤 재복습</li>
                  <li>세 번째 복습 후 7일 뒤 최종 확인</li>
                </ul>
              </div>

              <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-200 mb-3">2. 문맥을 통한 학습</h3>
                <p>단순한 단어 암기보다는 문맥 속에서 단어를 이해하는 것이 효과적입니다. 
                게임에서 단어를 맞췄을 때 나타나는 한글 뜻과 함께 실제 사용 예시를 떠올려보세요.</p>
                <div className="mt-3 bg-gray-800/50 p-4 rounded">
                  <p className="text-yellow-300 font-mono">예시: "Apple" → 사과 → "I eat an apple every day."</p>
                </div>
              </div>

              <div className="bg-purple-900/30 border border-purple-500/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-200 mb-3">3. 시각적 연상법</h3>
                <p>단어와 이미지를 연결하여 기억하는 방법입니다. VOCA Rain에서 곰 이미지가 나타나는 것처럼, 
                각 단어마다 특별한 이미지나 상황을 연상해보세요.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-300 mb-4">🎮 게임을 활용한 학습 전략</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-300 mb-3">초보자 전략</h3>
                <ul className="space-y-2 text-sm">
                  <li>• 난이도 1-2단계로 시작</li>
                  <li>• 틀린 단어는 별도로 메모</li>
                  <li>• 하루 10-15분씩 꾸준히</li>
                  <li>• 레벨 1 목표: 5개 단어 완성</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-300 mb-3">고급자 전략</h3>
                <ul className="space-y-2 text-sm">
                  <li>• 난이도 4-5단계 도전</li>
                  <li>• 깜박임 모드에서 집중력 향상</li>
                  <li>• 높은 점수 달성 목표</li>
                  <li>• 레벨 2+: 7개씩 빠르게 완성</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-300 mb-4">📚 추천 학습 방법</h2>
            <div className="space-y-4">
              <div className="bg-indigo-900/30 border border-indigo-500/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-indigo-200 mb-3">일일 학습 계획</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="text-center">
                    <div className="text-2xl mb-2">🌅</div>
                    <h4 className="font-semibold">아침 (10분)</h4>
                    <p className="text-sm">새로운 단어 학습</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🌞</div>
                    <h4 className="font-semibold">점심 (5분)</h4>
                    <p className="text-sm">빠른 복습 게임</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🌙</div>
                    <h4 className="font-semibold">저녁 (15분)</h4>
                    <p className="text-sm">종합 복습 및 도전</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-300 mb-4">💡 학습 팁</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-300 mb-3">✅ 효과적인 방법</h3>
                <ul className="space-y-2 text-sm">
                  <li>• 규칙적인 학습 시간 설정</li>
                  <li>• 틀린 단어 별도 정리</li>
                  <li>• 게임 후 단어 복습</li>
                  <li>• 점진적인 난이도 증가</li>
                  <li>• 성취감을 느낄 수 있는 목표 설정</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-300 mb-3">❌ 피해야 할 방법</h3>
                <ul className="space-y-2 text-sm">
                  <li>• 한 번에 너무 많은 단어 학습</li>
                  <li>• 불규칙한 학습 패턴</li>
                  <li>• 틀린 단어 그냥 넘어가기</li>
                  <li>• 너무 높은 난이도로 시작</li>
                  <li>• 장시간 연속 게임으로 인한 피로</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors mr-4"
          >
            게임 시작하기
          </a>
          <a 
            href="/tips" 
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            더 많은 팁 보기
          </a>
        </div>
      </div>
    </div>
  );
}