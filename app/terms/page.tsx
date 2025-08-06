export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 p-8">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8">
        <h1 className="text-3xl font-bold text-white mb-6">이용약관</h1>
        
        <div className="text-gray-200 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">1. 서비스 이용</h2>
            <p>VOCA Rain은 무료로 제공되는 영단어 학습 게임입니다. 사용자는 별도의 회원가입 없이 게임을 이용할 수 있습니다.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">2. 사용자의 의무</h2>
            <ul className="list-disc ml-6">
              <li>서비스를 올바른 목적으로 사용해야 합니다</li>
              <li>다른 사용자나 서비스에 피해를 주는 행위를 해서는 안 됩니다</li>
              <li>저작권 등 지적재산권을 존중해야 합니다</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">3. 서비스 제공자의 권리와 의무</h2>
            <p>서비스 제공자는 안정적인 서비스 제공을 위해 노력하며, 필요시 서비스를 개선하거나 변경할 수 있습니다.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">4. 광고</h2>
            <p>본 서비스는 Google AdSense를 통해 광고를 표시합니다. 광고 수익은 서비스 운영 및 개선에 사용됩니다.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">5. 면책조항</h2>
            <p>서비스는 "있는 그대로" 제공되며, 서비스 이용으로 인한 손해에 대해 법적 책임을 지지 않습니다.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">6. 약관의 변경</h2>
            <p>본 약관은 필요에 따라 변경될 수 있으며, 변경된 약관은 웹사이트에 게시됩니다.</p>
          </section>

          <section>
            <p className="text-sm text-gray-400">최종 업데이트: 2025년 1월 6일</p>
          </section>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            게임으로 돌아가기
          </a>
        </div>
      </div>
    </div>
  );
}