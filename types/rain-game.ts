// 비 내리는 영단어 게임 타입 정의
export interface FallingWord {
  id: string;
  word: string;
  meaning: string;
  x: number;              // 가로 위치
  y: number;              // 세로 위치 (0이 하늘, 100이 땅)
  speed: number;          // 떨어지는 속도
  isActive: boolean;      // 활성 상태
  color: string;          // 단어 색상
}

// 한글 뜻 이펙트 타입
export interface MeaningEffect {
  id: string;
  word: string;
  meaning: string;
  x: number;              // 표시될 가로 위치
  y: number;              // 표시될 세로 위치
  startTime: number;      // 시작 시간
  color: string;          // 이펙트 색상
}

export interface RainGameState {
  isPlaying: boolean;
  isGameOver: boolean;
  isPaused: boolean;
  fallingWords: FallingWord[];
  currentInput: string;
  score: number;
  lives: number;
  level: number;
  wordsCompleted: number;
  wordsDropped: number;
  gameSpeed: number;      // 게임 속도 (레벨에 따라 증가)
  spawnRate: number;      // 새 단어 생성 빈도
  startTime: number | null;
  gameTime: number;       // 게임 진행 시간
  meaningEffects: MeaningEffect[];  // 한글 뜻 이펙트들
  showLevelUp: boolean;   // 레벨업 표시 여부
  levelUpEndTime: number | null; // 레벨업 표시 종료 시간
}

export interface RainGameSettings {
  difficulty: 'easy' | 'medium' | 'hard';
  initialLives: number;
  fallSpeed: number;      // 기본 떨어지는 속도
  spawnInterval: number;  // 새 단어 생성 간격 (ms)
  wordLength: 'short' | 'medium' | 'long' | 'mixed';
}

export interface GameStats {
  score: number;
  accuracy: number;       // 정확도
  wordsPerMinute: number; // 분당 단어 수
  totalWords: number;
  correctWords: number;
  droppedWords: number;
  gameTime: number;
  level: number;
}