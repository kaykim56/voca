// 게임 관련 타입 정의
export interface GameStats {
  wpm: number;              // Words Per Minute
  accuracy: number;         // 정확도 (%)
  totalWords: number;       // 총 단어 수
  correctWords: number;     // 정답 단어 수
  totalChars: number;       // 총 글자 수
  correctChars: number;     // 정답 글자 수
  errors: number;           // 오타 수
  timeElapsed: number;      // 경과 시간 (초)
}

export interface GameState {
  isPlaying: boolean;
  isFinished: boolean;
  isPaused: boolean;
  mode: 'normal' | 'timed';
  timeLimit: number;        // 타임어택 모드 시간 제한 (초)
  timeRemaining: number;    // 남은 시간 (초)
  currentWordIndex: number;
  currentWord: string;
  userInput: string;
  words: string[];
  startTime: number | null;
  endTime: number | null;
  stats: GameStats;
}

export interface GameSettings {
  mode: 'normal' | 'timed';
  timeLimit: number;
  difficulty: 'easy' | 'medium' | 'hard';
  wordCount: number;
}

export interface TypingError {
  position: number;
  expected: string;
  actual: string;
}

export interface CharacterStatus {
  char: string;
  status: 'correct' | 'incorrect' | 'pending';
  index: number;
}