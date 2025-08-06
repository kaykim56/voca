export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 p-8">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8">
        <h1 className="text-3xl font-bold text-white mb-6">개인정보 처리방침</h1>
        
        <div className="text-gray-200 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">1. 개인정보의 처리 목적</h2>
            <p>VOCA Rain은 다음의 목적을 위하여 개인정보를 처리합니다:</p>
            <ul className="list-disc ml-6 mt-2">
              <li>게임 서비스 제공</li>
              <li>광고 서비스 제공 (Google AdSense)</li>
              <li>서비스 개선 및 통계 분석</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">2. 처리하는 개인정보 항목</h2>
            <p>본 웹사이트는 별도의 회원가입 없이 이용 가능하며, 다음의 정보가 자동으로 수집될 수 있습니다:</p>
            <ul className="list-disc ml-6 mt-2">
              <li>접속 IP 주소</li>
              <li>쿠키 정보</li>
              <li>접속 로그 정보</li>
              <li>게임 플레이 통계</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">3. Google AdSense</h2>
            <p>본 사이트는 Google AdSense를 사용하여 광고를 제공합니다. Google은 쿠키를 사용하여 사용자의 관심사에 기반한 광고를 제공할 수 있습니다.</p>
            <p className="mt-2">사용자는 Google 광고 설정에서 개인화된 광고를 비활성화할 수 있습니다.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">4. 개인정보의 보유 및 이용기간</h2>
            <p>수집된 정보는 서비스 제공 목적 달성 시까지 보유되며, 법령에 따른 보존 의무가 있는 경우 해당 기간 동안 보관됩니다.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">5. 문의처</h2>
            <p>개인정보 처리에 관한 문의는 아래 연락처로 해주시기 바랍니다:</p>
            <p className="mt-2">이메일: kaykim56@example.com</p>
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