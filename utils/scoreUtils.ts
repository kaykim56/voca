// 점수 관리 유틸리티
export interface ScoreRecord {
  score: number;
  level: number;
  wordsCompleted: number;
  accuracy: number;
  date: string;
  timestamp: number;
}

const SCORE_STORAGE_KEY = 'voca-game-scores';
const MAX_SCORES = 10;

// 점수 저장
export const saveScore = (scoreData: Omit<ScoreRecord, 'date' | 'timestamp'>): number => {
  // 클라이언트 환경에서만 실행
  if (typeof window === 'undefined') {
    return 1;
  }
  
  try {
    const existingScores = getScores();
    
    const newScore: ScoreRecord = {
      ...scoreData,
      date: new Date().toLocaleDateString('ko-KR'),
      timestamp: Date.now()
    };
    
    // 새 점수 추가
    const updatedScores = [...existingScores, newScore];
    
    // 점수순으로 정렬 (높은 점수부터)
    updatedScores.sort((a, b) => b.score - a.score);
    
    // 최대 10개까지만 유지
    const limitedScores = updatedScores.slice(0, MAX_SCORES);
    
    // 로컬 스토리지에 저장
    localStorage.setItem(SCORE_STORAGE_KEY, JSON.stringify(limitedScores));
    
    // 현재 점수의 순위 반환 (1-based)
    const currentRank = limitedScores.findIndex(score => 
      score.timestamp === newScore.timestamp
    ) + 1;
    
    return currentRank;
  } catch (error) {
    console.error('점수 저장 중 오류:', error);
    return 1; // 기본값
  }
};

// 저장된 점수들 가져오기
export const getScores = (): ScoreRecord[] => {
  // 클라이언트 환경에서만 실행
  if (typeof window === 'undefined') {
    return [];
  }
  
  try {
    const stored = localStorage.getItem(SCORE_STORAGE_KEY);
    if (!stored) return [];
    
    const scores = JSON.parse(stored) as ScoreRecord[];
    return scores.sort((a, b) => b.score - a.score); // 높은 점수부터
  } catch (error) {
    console.error('점수 불러오기 중 오류:', error);
    return [];
  }
};

// 최고 점수 가져오기
export const getHighScore = (): number => {
  const scores = getScores();
  return scores.length > 0 ? scores[0].score : 0;
};

// 점수 초기화
export const clearScores = (): void => {
  // 클라이언트 환경에서만 실행
  if (typeof window === 'undefined') {
    return;
  }
  
  try {
    localStorage.removeItem(SCORE_STORAGE_KEY);
  } catch (error) {
    console.error('점수 초기화 중 오류:', error);
  }
};

// 점수 포맷팅
export const formatScore = (score: number): string => {
  return score.toLocaleString('ko-KR');
};

// 순위 텍스트 생성
export const getRankText = (rank: number): string => {
  if (rank === 1) return '🥇 1등';
  if (rank === 2) return '🥈 2등';
  if (rank === 3) return '🥉 3등';
  return `🏅 ${rank}등`;
};