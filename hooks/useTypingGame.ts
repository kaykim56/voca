'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { GameState, GameStats, GameSettings, CharacterStatus } from '@/types/game';
import { getRandomWords } from '@/data/words';

const initialStats: GameStats = {
  wpm: 0,
  accuracy: 0,
  totalWords: 0,
  correctWords: 0,
  totalChars: 0,
  correctChars: 0,
  errors: 0,
  timeElapsed: 0,
};

const initialState: GameState = {
  isPlaying: false,
  isFinished: false,
  isPaused: false,
  mode: 'normal',
  timeLimit: 60,
  timeRemaining: 60,
  currentWordIndex: 0,
  currentWord: '',
  userInput: '',
  words: [],
  startTime: null,
  endTime: null,
  stats: initialStats,
};

export const useTypingGame = (settings: GameSettings) => {
  const [gameState, setGameState] = useState<GameState>(initialState);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // 게임 초기화
  const initializeGame = useCallback(() => {
    const words = getRandomWords(settings.wordCount, settings.difficulty).map(w => w.word);
    
    setGameState({
      ...initialState,
      mode: settings.mode,
      timeLimit: settings.timeLimit,
      timeRemaining: settings.timeLimit,
      words,
      currentWord: words[0] || '',
      stats: initialStats,
    });
  }, [settings]);

  // 게임 시작
  const startGame = useCallback(() => {
    const now = Date.now();
    setGameState(prev => ({
      ...prev,
      isPlaying: true,
      startTime: now,
    }));

    // 타임어택 모드인 경우 타이머 시작
    if (settings.mode === 'timed') {
      timerRef.current = setInterval(() => {
        setGameState(prev => {
          const newTimeRemaining = prev.timeRemaining - 1;
          if (newTimeRemaining <= 0) {
            return {
              ...prev,
              timeRemaining: 0,
              isPlaying: false,
              isFinished: true,
              endTime: Date.now(),
            };
          }
          return {
            ...prev,
            timeRemaining: newTimeRemaining,
          };
        });
      }, 1000);
    }
  }, [settings.mode]);

  // 게임 종료
  const endGame = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    setGameState(prev => ({
      ...prev,
      isPlaying: false,
      isFinished: true,
      endTime: Date.now(),
    }));
  }, []);

  // 통계 계산
  const calculateStats = useCallback((
    timeElapsed: number,
    totalChars: number,
    correctChars: number,
    totalWords: number,
    correctWords: number,
    errors: number
  ): GameStats => {
    const minutes = timeElapsed / 60;
    const wpm = minutes > 0 ? Math.round((correctChars / 5) / minutes) : 0;
    const accuracy = totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 0;

    return {
      wpm,
      accuracy,
      totalWords,
      correctWords,
      totalChars,
      correctChars,
      errors,
      timeElapsed,
    };
  }, []);

  // 사용자 입력 처리
  const handleInput = useCallback((input: string) => {
    if (!gameState.isPlaying) return;

    setGameState(prev => {
      const currentWord = prev.currentWord;
      const newInput = input;

      // 스페이스바나 엔터로 단어 완료
      if (input.endsWith(' ') || input.endsWith('\n')) {
        const wordInput = input.trim();
        const isCorrect = wordInput === currentWord;
        const nextIndex = prev.currentWordIndex + 1;
        
        // 통계 업데이트
        const newStats = {
          ...prev.stats,
          totalWords: prev.stats.totalWords + 1,
          correctWords: prev.stats.correctWords + (isCorrect ? 1 : 0),
          totalChars: prev.stats.totalChars + currentWord.length,
          correctChars: prev.stats.correctChars + (isCorrect ? currentWord.length : Math.max(0, currentWord.length - Math.abs(currentWord.length - wordInput.length))),
          errors: prev.stats.errors + (isCorrect ? 0 : 1),
        };

        // 게임 종료 조건 확인
        if (nextIndex >= prev.words.length) {
          const endTime = Date.now();
          const timeElapsed = prev.startTime ? (endTime - prev.startTime) / 1000 : 0;
          const finalStats = calculateStats(
            timeElapsed,
            newStats.totalChars,
            newStats.correctChars,
            newStats.totalWords,
            newStats.correctWords,
            newStats.errors
          );

          return {
            ...prev,
            userInput: '',
            isPlaying: false,
            isFinished: true,
            endTime,
            stats: finalStats,
          };
        }

        // 다음 단어로 진행
        return {
          ...prev,
          currentWordIndex: nextIndex,
          currentWord: prev.words[nextIndex],
          userInput: '',
          stats: newStats,
        };
      }

      // 실시간 통계 업데이트 (타이핑 중)
      const timeElapsed = prev.startTime ? (Date.now() - prev.startTime) / 1000 : 0;
      const currentStats = calculateStats(
        timeElapsed,
        prev.stats.totalChars + newInput.length,
        prev.stats.correctChars + newInput.split('').filter((char, index) => char === currentWord[index]).length,
        prev.stats.totalWords,
        prev.stats.correctWords,
        prev.stats.errors
      );

      return {
        ...prev,
        userInput: newInput,
        stats: currentStats,
      };
    });
  }, [gameState.isPlaying, calculateStats]);

  // 현재 단어의 글자별 상태 계산
  const getCharacterStatuses = useCallback((): CharacterStatus[] => {
    const currentWord = gameState.currentWord;
    const userInput = gameState.userInput;
    
    return currentWord.split('').map((char, index) => {
      let status: 'correct' | 'incorrect' | 'pending' = 'pending';
      
      if (index < userInput.length) {
        status = userInput[index] === char ? 'correct' : 'incorrect';
      }
      
      return {
        char,
        status,
        index,
      };
    });
  }, [gameState.currentWord, gameState.userInput]);

  // 게임 리셋
  const resetGame = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    initializeGame();
  }, [initializeGame]);

  // 컴포넌트 언마운트 시 타이머 정리
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  // 설정 변경 시 게임 초기화
  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  return {
    gameState,
    startGame,
    endGame,
    resetGame,
    handleInput,
    getCharacterStatuses,
  };
};