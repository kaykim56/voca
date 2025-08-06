export default function Tips() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 p-8">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8">
        <h1 className="text-3xl font-bold text-white mb-6">영어 학습 꿀팁</h1>
        
        <div className="text-gray-200 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-blue-300 mb-4">🚀 빠른 실력 향상을 위한 핵심 전략</h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-400/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-200 mb-4">1. 타이핑 속도와 정확성 향상</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-yellow-300 mb-2">속도 향상 방법:</h4>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>홈 포지션 유지하기</li>
                      <li>10분씩 매일 타이핑 연습</li>
                      <li>자주 사용하는 단어부터 숙달</li>
                      <li>리듬감 있게 타이핑하기</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-300 mb-2">정확성 향상 방법:</h4>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>속도보다 정확성 우선</li>
                      <li>틀린 글자 즉시 수정 연습</li>
                      <li>단어 전체를 보고 타이핑</li>
                      <li>근육 기억 형성하기</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-900/40 to-blue-900/40 border border-green-400/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-200 mb-4">2. 영단어 암기의 과학적 접근</h3>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-300 mb-2">🧠 기억의 3단계</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                      <div className="text-center">
                        <div className="text-3xl mb-2">👁️</div>
                        <h5 className="font-semibold">1. 시각적 인식</h5>
                        <p className="text-xs">단어를 눈으로 보고 인식</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl mb-2">🧠</div>
                        <h5 className="font-semibold">2. 의미 연결</h5>
                        <p className="text-xs">한글 뜻과 연결하여 이해</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl mb-2">✋</div>
                        <h5 className="font-semibold">3. 운동 기억</h5>
                        <p className="text-xs">타이핑으로 근육 기억 형성</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-300 mb-4">🎯 레벨별 공략법</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-green-300 mb-3">Level 1 완벽 공략</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>목표:</strong> 5개 단어 완성</p>
                    <p><strong>전략:</strong> 천천히 정확하게</p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>단어를 끝까지 읽고 타이핑</li>
                      <li>실수해도 당황하지 말기</li>
                      <li>한글 뜻 꼼꼼히 확인</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-900/30 border border-blue-500/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-blue-300 mb-3">Level 2+ 고급 전략</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>목표:</strong> 7개 단어 완성</p>
                    <p><strong>전략:</strong> 빠르고 정확하게</p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>깜박임 패턴 파악하기</li>
                      <li>예측 타이핑 연습</li>
                      <li>집중력 최대한 활용</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-900/30 border border-purple-500/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-purple-300 mb-3">고득점 비밀</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>핵심:</strong> 높은 위치에서 맞추기</p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>단어가 나타나자마자 빠르게 인식</li>
                      <li>화면 상단에서 타이핑 완료</li>
                      <li>연속 성공으로 콤보 점수 획득</li>
                      <li>레벨 보너스 최대한 활용</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-red-300 mb-3">실수 방지법</h3>
                  <div className="space-y-2 text-sm">
                    <ul className="list-disc ml-6 space-y-1">
                      <li>ESC키로 잘못 입력된 글자 지우기</li>
                      <li>비슷한 단어 구분하여 암기</li>
                      <li>타이핑 전 한 번 더 확인</li>
                      <li>생명력 관리 전략 수립</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-300 mb-4">📈 학습 효과 극대화</h2>
            <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-400/50 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-indigo-300 mb-3">🕐 최적 학습 시간</h3>
                  <ul className="text-sm space-y-1">
                    <li>• 아침: 집중력 최고</li>
                    <li>• 점심: 짧은 복습</li>
                    <li>• 저녁: 종합 정리</li>
                    <li>• 취침 전: 암기 효과 증대</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-300 mb-3">🎯 목표 설정법</h3>
                  <ul className="text-sm space-y-1">
                    <li>• 일일 목표: 50개 단어</li>
                    <li>• 주간 목표: 300개 단어</li>
                    <li>• 월간 목표: 1200개 단어</li>
                    <li>• 연간 목표: 15000개 단어</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-yellow-300 mb-3">📊 진척도 관리</h3>
                  <ul className="text-sm space-y-1">
                    <li>• 정확도 80% 이상 유지</li>
                    <li>• 레벨업 속도 기록</li>
                    <li>• 약한 단어 유형 파악</li>
                    <li>• 월별 실력 평가</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-300 mb-4">🔥 프로 게이머의 비밀</h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-orange-900/40 to-red-900/40 border border-orange-400/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-200 mb-4">고수들만 아는 숨겨진 팁</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-yellow-300 mb-2">⚡ 반응속도 향상</h4>
                    <ul className="text-sm space-y-1">
                      <li>• 주변 시야 활용하기</li>
                      <li>• 단어 패턴 미리 예측</li>
                      <li>• 키보드 블라인드 타이핑</li>
                      <li>• 손목 각도 최적화</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-300 mb-2">🧘 집중력 관리</h4>
                    <ul className="text-sm space-y-1">
                      <li>• 25분 집중 + 5분 휴식</li>
                      <li>• 배경 소음 차단</li>
                      <li>• 적절한 조명 설정</li>
                      <li>• 스트레칭으로 긴장 완화</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors mr-4"
          >
            지금 바로 연습하기
          </a>
          <a 
            href="/guides" 
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            학습 가이드 보기
          </a>
        </div>
      </div>
    </div>
  );
}