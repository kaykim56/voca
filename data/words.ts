// 고등학생 필수 영단어 데이터베이스
export interface Word {
  id: number;
  word: string;
  meaning: string;
  level: 'easy' | 'medium' | 'hard';
  grade: '고1' | '고2' | '고3';
}

export const ENGLISH_WORDS: Word[] = [
  // 쉬운 단어 (고1)
  { id: 1, word: "about", meaning: "~에 대해", level: "easy", grade: "고1" },
  { id: 2, word: "above", meaning: "~위에", level: "easy", grade: "고1" },
  { id: 3, word: "accept", meaning: "받아들이다", level: "easy", grade: "고1" },
  { id: 4, word: "account", meaning: "계정, 설명", level: "easy", grade: "고1" },
  { id: 5, word: "across", meaning: "~를 가로질러", level: "easy", grade: "고1" },
  { id: 6, word: "action", meaning: "행동", level: "easy", grade: "고1" },
  { id: 7, word: "active", meaning: "활동적인", level: "easy", grade: "고1" },
  { id: 8, word: "activity", meaning: "활동", level: "easy", grade: "고1" },
  { id: 9, word: "actually", meaning: "실제로", level: "easy", grade: "고1" },
  { id: 10, word: "address", meaning: "주소", level: "easy", grade: "고1" },
  { id: 11, word: "advance", meaning: "발전하다", level: "easy", grade: "고1" },
  { id: 12, word: "advantage", meaning: "이점", level: "easy", grade: "고1" },
  { id: 13, word: "advice", meaning: "조언", level: "easy", grade: "고1" },
  { id: 14, word: "after", meaning: "~후에", level: "easy", grade: "고1" },
  { id: 15, word: "again", meaning: "다시", level: "easy", grade: "고1" },
  { id: 16, word: "against", meaning: "~에 반대하여", level: "easy", grade: "고1" },
  { id: 17, word: "agree", meaning: "동의하다", level: "easy", grade: "고1" },
  { id: 18, word: "ahead", meaning: "앞으로", level: "easy", grade: "고1" },
  { id: 19, word: "almost", meaning: "거의", level: "easy", grade: "고1" },
  { id: 20, word: "alone", meaning: "혼자", level: "easy", grade: "고1" },
  
  // 중간 단어 (고2)
  { id: 21, word: "although", meaning: "비록 ~이지만", level: "medium", grade: "고2" },
  { id: 22, word: "among", meaning: "~사이에", level: "medium", grade: "고2" },
  { id: 23, word: "analysis", meaning: "분석", level: "medium", grade: "고2" },
  { id: 24, word: "ancient", meaning: "고대의", level: "medium", grade: "고2" },
  { id: 25, word: "announce", meaning: "발표하다", level: "medium", grade: "고2" },
  { id: 26, word: "anxiety", meaning: "불안", level: "medium", grade: "고2" },
  { id: 27, word: "appear", meaning: "나타나다", level: "medium", grade: "고2" },
  { id: 28, word: "approach", meaning: "접근하다", level: "medium", grade: "고2" },
  { id: 29, word: "appropriate", meaning: "적절한", level: "medium", grade: "고2" },
  { id: 30, word: "argument", meaning: "논쟁", level: "medium", grade: "고2" },
  { id: 31, word: "arrange", meaning: "정리하다", level: "medium", grade: "고2" },
  { id: 32, word: "article", meaning: "기사", level: "medium", grade: "고2" },
  { id: 33, word: "assume", meaning: "가정하다", level: "medium", grade: "고2" },
  { id: 34, word: "attempt", meaning: "시도하다", level: "medium", grade: "고2" },
  { id: 35, word: "attention", meaning: "주의", level: "medium", grade: "고2" },
  { id: 36, word: "attitude", meaning: "태도", level: "medium", grade: "고2" },
  { id: 37, word: "attract", meaning: "끌어당기다", level: "medium", grade: "고2" },
  { id: 38, word: "available", meaning: "이용 가능한", level: "medium", grade: "고2" },
  { id: 39, word: "avoid", meaning: "피하다", level: "medium", grade: "고2" },
  { id: 40, word: "aware", meaning: "알고 있는", level: "medium", grade: "고2" },
  
  // 어려운 단어 (고3)
  { id: 41, word: "background", meaning: "배경", level: "hard", grade: "고3" },
  { id: 42, word: "benefit", meaning: "혜택", level: "hard", grade: "고3" },
  { id: 43, word: "circumstance", meaning: "상황", level: "hard", grade: "고3" },
  { id: 44, word: "communication", meaning: "의사소통", level: "hard", grade: "고3" },
  { id: 45, word: "community", meaning: "공동체", level: "hard", grade: "고3" },
  { id: 46, word: "competition", meaning: "경쟁", level: "hard", grade: "고3" },
  { id: 47, word: "concentrate", meaning: "집중하다", level: "hard", grade: "고3" },
  { id: 48, word: "conclusion", meaning: "결론", level: "hard", grade: "고3" },
  { id: 49, word: "condition", meaning: "조건", level: "hard", grade: "고3" },
  { id: 50, word: "conference", meaning: "회의", level: "hard", grade: "고3" },
  { id: 51, word: "confidence", meaning: "자신감", level: "hard", grade: "고3" },
  { id: 52, word: "connection", meaning: "연결", level: "hard", grade: "고3" },
  { id: 53, word: "consequence", meaning: "결과", level: "hard", grade: "고3" },
  { id: 54, word: "consideration", meaning: "고려", level: "hard", grade: "고3" },
  { id: 55, word: "constitution", meaning: "헌법", level: "hard", grade: "고3" },
  { id: 56, word: "construction", meaning: "건설", level: "hard", grade: "고3" },
  { id: 57, word: "contemporary", meaning: "현대의", level: "hard", grade: "고3" },
  { id: 58, word: "conversation", meaning: "대화", level: "hard", grade: "고3" },
  { id: 59, word: "cooperation", meaning: "협력", level: "hard", grade: "고3" },
  { id: 60, word: "correspondent", meaning: "특파원", level: "hard", grade: "고3" },
  
  // 추가 단어들 (더 많은 데이터)
  { id: 61, word: "culture", meaning: "문화", level: "easy", grade: "고1" },
  { id: 62, word: "current", meaning: "현재의", level: "easy", grade: "고1" },
  { id: 63, word: "customer", meaning: "고객", level: "easy", grade: "고1" },
  { id: 64, word: "danger", meaning: "위험", level: "easy", grade: "고1" },
  { id: 65, word: "decision", meaning: "결정", level: "easy", grade: "고1" },
  { id: 66, word: "depend", meaning: "의존하다", level: "easy", grade: "고1" },
  { id: 67, word: "design", meaning: "설계하다", level: "easy", grade: "고1" },
  { id: 68, word: "develop", meaning: "발전시키다", level: "easy", grade: "고1" },
  { id: 69, word: "difference", meaning: "차이", level: "easy", grade: "고1" },
  { id: 70, word: "difficult", meaning: "어려운", level: "easy", grade: "고1" },
  { id: 71, word: "direction", meaning: "방향", level: "easy", grade: "고1" },
  { id: 72, word: "discover", meaning: "발견하다", level: "easy", grade: "고1" },
  { id: 73, word: "discuss", meaning: "논의하다", level: "easy", grade: "고1" },
  { id: 74, word: "distance", meaning: "거리", level: "easy", grade: "고1" },
  { id: 75, word: "division", meaning: "분할", level: "easy", grade: "고1" },
  { id: 76, word: "document", meaning: "문서", level: "easy", grade: "고1" },
  { id: 77, word: "during", meaning: "~동안", level: "easy", grade: "고1" },
  { id: 78, word: "economy", meaning: "경제", level: "easy", grade: "고1" },
  { id: 79, word: "education", meaning: "교육", level: "easy", grade: "고1" },
  { id: 80, word: "effect", meaning: "효과", level: "easy", grade: "고1" },
  
  { id: 81, word: "element", meaning: "요소", level: "medium", grade: "고2" },
  { id: 82, word: "energy", meaning: "에너지", level: "medium", grade: "고2" },
  { id: 83, word: "environment", meaning: "환경", level: "medium", grade: "고2" },
  { id: 84, word: "equipment", meaning: "장비", level: "medium", grade: "고2" },
  { id: 85, word: "especially", meaning: "특히", level: "medium", grade: "고2" },
  { id: 86, word: "establish", meaning: "설립하다", level: "medium", grade: "고2" },
  { id: 87, word: "estimate", meaning: "추정하다", level: "medium", grade: "고2" },
  { id: 88, word: "evidence", meaning: "증거", level: "medium", grade: "고2" },
  { id: 89, word: "examine", meaning: "검사하다", level: "medium", grade: "고2" },
  { id: 90, word: "example", meaning: "예", level: "medium", grade: "고2" },
  { id: 91, word: "exchange", meaning: "교환하다", level: "medium", grade: "고2" },
  { id: 92, word: "exercise", meaning: "운동", level: "medium", grade: "고2" },
  { id: 93, word: "existence", meaning: "존재", level: "medium", grade: "고2" },
  { id: 94, word: "experience", meaning: "경험", level: "medium", grade: "고2" },
  { id: 95, word: "experiment", meaning: "실험", level: "medium", grade: "고2" },
  { id: 96, word: "explain", meaning: "설명하다", level: "medium", grade: "고2" },
  { id: 97, word: "express", meaning: "표현하다", level: "medium", grade: "고2" },
  { id: 98, word: "extension", meaning: "확장", level: "medium", grade: "고2" },
  { id: 99, word: "facility", meaning: "시설", level: "medium", grade: "고2" },
  { id: 100, word: "failure", meaning: "실패", level: "medium", grade: "고2" }
];

// 난이도별 단어 필터링 함수
export const getWordsByLevel = (level: 'easy' | 'medium' | 'hard') => {
  return ENGLISH_WORDS.filter(word => word.level === level);
};

// 학년별 단어 필터링 함수
export const getWordsByGrade = (grade: '고1' | '고2' | '고3') => {
  return ENGLISH_WORDS.filter(word => word.grade === grade);
};

// 랜덤 단어 선택 함수
export const getRandomWords = (count: number = 10, level?: 'easy' | 'medium' | 'hard') => {
  const wordsPool = level ? getWordsByLevel(level) : ENGLISH_WORDS;
  const shuffled = [...wordsPool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};