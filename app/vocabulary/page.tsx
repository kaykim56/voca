export default function Vocabulary() {
  const vocabularyLevels = [
    {
      level: "초급 (Level 1-2)",
      description: "기초 영단어 500개",
      words: [
        { word: "apple", meaning: "사과", example: "I eat an apple every day." },
        { word: "book", meaning: "책", example: "She is reading a book." },
        { word: "cat", meaning: "고양이", example: "The cat is sleeping." },
        { word: "dog", meaning: "개", example: "My dog likes to play." },
        { word: "house", meaning: "집", example: "We live in a big house." },
        { word: "water", meaning: "물", example: "I drink water when I'm thirsty." },
        { word: "food", meaning: "음식", example: "Korean food is delicious." },
        { word: "time", meaning: "시간", example: "What time is it now?" },
        { word: "school", meaning: "학교", example: "Children go to school to learn." },
        { word: "friend", meaning: "친구", example: "She is my best friend." }
      ]
    },
    {
      level: "중급 (Level 3-4)",
      description: "실용 영단어 800개",
      words: [
        { word: "beautiful", meaning: "아름다운", example: "The sunset is beautiful." },
        { word: "important", meaning: "중요한", example: "Education is very important." },
        { word: "different", meaning: "다른", example: "We have different opinions." },
        { word: "available", meaning: "이용 가능한", example: "The service is available 24/7." },
        { word: "necessary", meaning: "필요한", example: "Sleep is necessary for health." },
        { word: "develop", meaning: "개발하다", example: "They develop new software." },
        { word: "increase", meaning: "증가하다", example: "Prices continue to increase." },
        { word: "provide", meaning: "제공하다", example: "We provide excellent service." },
        { word: "include", meaning: "포함하다", example: "The price includes tax." },
        { word: "continue", meaning: "계속하다", example: "Please continue your work." }
      ]
    },
    {
      level: "고급 (Level 5+)",
      description: "고급 영단어 1000개+",
      words: [
        { word: "sophisticated", meaning: "정교한", example: "It's a sophisticated system." },
        { word: "comprehensive", meaning: "포괄적인", example: "We need a comprehensive plan." },
        { word: "demonstrate", meaning: "증명하다", example: "The data demonstrates the trend." },
        { word: "significant", meaning: "중요한", example: "There was a significant change." },
        { word: "contemporary", meaning: "현대의", example: "Contemporary art is fascinating." },
        { word: "fundamental", meaning: "기본적인", example: "These are fundamental principles." },
        { word: "implementation", meaning: "실행", example: "The implementation was successful." },
        { word: "revolutionary", meaning: "혁명적인", example: "It was a revolutionary idea." },
        { word: "sophisticated", meaning: "세련된", example: "She has sophisticated taste." },
        { word: "unprecedented", meaning: "전례 없는", example: "This is an unprecedented situation." }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 p-8">
      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8">
        <h1 className="text-3xl font-bold text-white mb-6">영단어 사전</h1>
        <p className="text-gray-300 mb-8">VOCA Rain에서 사용되는 영단어들을 레벨별로 정리했습니다. 
        게임을 하기 전에 미리 학습하거나, 게임 후 복습용으로 활용하세요.</p>
        
        <div className="space-y-8">
          {vocabularyLevels.map((levelData, levelIndex) => (
            <section key={levelIndex}>
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-blue-300 mb-2">{levelData.level}</h2>
                <p className="text-gray-400">{levelData.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {levelData.words.map((wordData, wordIndex) => (
                  <div key={wordIndex} className="bg-gray-800/50 border border-gray-600/50 rounded-lg p-4 hover:bg-gray-700/50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-white">{wordData.word}</h3>
                      <span className="text-yellow-400 text-sm font-semibold">{wordData.meaning}</span>
                    </div>
                    <div className="text-gray-300 text-sm">
                      <p className="italic">"{wordData.example}"</p>
                    </div>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-xs text-gray-500">발음: /{wordData.word}/</span>
                      <button className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded transition-colors">
                        연습하기
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all">
                  {levelData.level} 단어 더 보기
                </button>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-400/50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-indigo-200 mb-4">📚 단어 학습 통계</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">2,300+</div>
              <div className="text-sm text-gray-400">총 단어 수</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">500</div>
              <div className="text-sm text-gray-400">초급 단어</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">800</div>
              <div className="text-sm text-gray-400">중급 단어</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">1,000+</div>
              <div className="text-sm text-gray-400">고급 단어</div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-yellow-900/30 border border-yellow-500/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-200 mb-3">💡 효과적인 단어 학습법</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-green-300 mb-2">게임 전 준비</h4>
              <ul className="list-disc ml-6 space-y-1 text-gray-300">
                <li>해당 레벨 단어 미리 읽어보기</li>
                <li>발음과 뜻 확인하기</li>
                <li>예문으로 문맥 이해하기</li>
                <li>비슷한 단어들 구분하기</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-300 mb-2">게임 후 복습</h4>
              <ul className="list-disc ml-6 space-y-1 text-gray-300">
                <li>틀린 단어 다시 확인하기</li>
                <li>새로 배운 단어 정리하기</li>
                <li>예문 만들어보기</li>
                <li>일주일 후 재복습하기</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold rounded-lg transition-all mr-4"
          >
            🎮 게임으로 연습하기
          </a>
          <a 
            href="/guides" 
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-lg transition-all"
          >
            📖 학습 가이드 보기
          </a>
        </div>
      </div>
    </div>
  );
}