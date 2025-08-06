export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 p-8">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8">
        <h1 className="text-3xl font-bold text-white mb-6">VOCA Rain 소개</h1>
        
        <div className="text-gray-200 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">🌧️ 게임 소개</h2>
            <p>VOCA Rain은 하늘에서 비처럼 떨어지는 영단어를 빠르게 타이핑하여 제거하는 교육용 게임입니다. 
            재미있는 게임을 통해 자연스럽게 영어 단어를 학습할 수 있습니다.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">🎯 게임 특징</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>5단계 난이도:</strong> 초보자부터 전문가까지 모든 수준 지원</li>
              <li><strong>레벨 시스템:</strong> Level 1은 5개, Level 2부터는 7개 단어 완성으로 레벨업</li>
              <li><strong>시각적 효과:</strong> Level 2부터 단어 깜박임으로 난이도 증가</li>
              <li><strong>실시간 피드백:</strong> 정답 시 한글 뜻과 축하 이미지 표시</li>
              <li><strong>생명 시스템:</strong> 난이도별 차등화된 생명력</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">🎮 게임 방법</h2>
            <ol className="list-decimal ml-6 space-y-2">
              <li>원하는 난이도(1-5단계)를 선택합니다</li>
              <li>하늘에서 떨어지는 영단어를 확인합니다</li>
              <li>단어가 땅에 떨어지기 전에 정확히 타이핑합니다</li>
              <li>정답을 맞추면 점수와 한글 뜻을 확인할 수 있습니다</li>
              <li>ESC키로 일시정지하고 메뉴로 돌아갈 수 있습니다</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">🏆 점수 시스템</h2>
            <p>높은 위치에서 단어를 맞출수록 더 높은 점수를 획득할 수 있습니다. 
            레벨이 올라갈수록 점수 배율도 증가합니다.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">📱 기술 스택</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Next.js 15 + React 18</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Vercel 배포</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">👨‍💻 개발자</h2>
            <p>Kay Kim이 개발한 교육용 영단어 학습 게임입니다.</p>
            <p className="mt-2">문의: kaykim56@example.com</p>
          </section>

          <section>
            <p className="text-sm text-gray-400">버전: 1.0.0 | 출시일: 2025년 1월</p>
          </section>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            게임 시작하기
          </a>
        </div>
      </div>
    </div>
  );
}