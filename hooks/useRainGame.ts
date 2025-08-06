'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { RainGameState, RainGameSettings, FallingWord, GameStats, MeaningEffect } from '@/types/rain-game';
import { getRandomWords } from '@/data/words';

const GAME_COLORS = [
  '#60A5FA', '#34D399', '#F87171', '#FBBF24', '#A78BFA', 
  '#FB7185', '#4ADE80', '#38BDF8', '#F472B6', '#22D3EE'
];

const initialState: RainGameState = {
  isPlaying: false,
  isGameOver: false,
  isPaused: false,
  fallingWords: [],
  currentInput: '',
  score: 0,
  lives: 10, // 생명력 10개로 변경
  level: 1,
  wordsCompleted: 0,
  wordsDropped: 0,
  gameSpeed: 1,
  spawnRate: 3000, // 3초마다 새 단어
  startTime: null,
  gameTime: 0,
  meaningEffects: [], // 한글 뜻 이펙트들
  showLevelUp: false, // 레벨업 표시
  levelUpEndTime: null, // 레벨업 종료 시간
};

export const useRainGame = (settings: RainGameSettings) => {
  const [gameState, setGameState] = useState<RainGameState>(initialState);
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);
  const spawnRef = useRef<NodeJS.Timeout | null>(null);
  const gameTimeRef = useRef<NodeJS.Timeout | null>(null);

  // 랜덤 위치 생성
  const getRandomX = () => Math.random() * 80 + 10; // 10% ~ 90% 범위

  // 새 단어 생성
  const spawnWord = useCallback(() => {
    // 레벨업 중에는 새 단어 생성 안함
    if (gameState.showLevelUp) return;
    
    const words = getRandomWords(1, settings.difficulty);
    if (words.length === 0) return;

    const word = words[0];
    const newWord: FallingWord = {
      id: `word-${Date.now()}-${Math.random()}`,
      word: word.word,
      meaning: word.meaning,
      x: getRandomX(),
      y: 0,
      speed: settings.fallSpeed * gameState.gameSpeed,
      isActive: true,
      color: GAME_COLORS[Math.floor(Math.random() * GAME_COLORS.length)],
    };

    setGameState(prev => ({
      ...prev,
      fallingWords: [...prev.fallingWords, newWord],
    }));
  }, [settings.difficulty, settings.fallSpeed, gameState.gameSpeed, gameState.showLevelUp]);

  // 게임 루프 (단어들이 떨어지는 애니메이션)
  const gameLoop = useCallback(() => {
    setGameState(prev => {
      if (!prev.isPlaying || prev.isPaused) return prev;

      // 레벨업 표시 종료 체크
      if (prev.showLevelUp && prev.levelUpEndTime && Date.now() >= prev.levelUpEndTime) {
        return {
          ...prev,
          showLevelUp: false,
          levelUpEndTime: null,
        };
      }

      // 레벨업 중에는 단어 떨어뜨리기 멈춤
      if (prev.showLevelUp) return prev;

      let livesLost = 0; // 이번 프레임에서 잃은 생명력
      let wordsDroppedCount = 0; // 이번 프레임에서 떨어진 단어 수

      const updatedWords = prev.fallingWords
        .map(word => ({
          ...word,
          y: word.y + word.speed * 0.5, // 0.5씩 떨어짐
        }))
        .filter(word => {
          // 땅에 떨어진 단어 처리
          if (word.y >= 95) {
            livesLost += 1; // 생명력 1개 감소
            wordsDroppedCount += 1; // 떨어진 단어 수 증가
            return false; // 단어 제거
          }
          return true;
        });

      // 새로운 생명력과 떨어진 단어 수 계산
      const newLives = Math.max(0, prev.lives - livesLost);
      const newWordsDropped = prev.wordsDropped + wordsDroppedCount;

      // 오래된 한글 뜻 이펙트 제거 (3초 후)
      const currentTime = Date.now();
      const filteredEffects = prev.meaningEffects.filter(
        effect => currentTime - effect.startTime < 3000
      );

      // 게임 오버 체크
      const isGameOver = newLives <= 0;

      return {
        ...prev,
        fallingWords: updatedWords,
        meaningEffects: filteredEffects,
        lives: newLives,
        wordsDropped: newWordsDropped,
        isGameOver: isGameOver,
        isPlaying: !isGameOver,
      };
    });
  }, []);

  // 입력 처리
  const handleInput = useCallback((input: string) => {
    if (!gameState.isPlaying) return;

    setGameState(prev => {
      // 입력과 일치하는 단어 찾기
      const matchingWordIndex = prev.fallingWords.findIndex(
        word => word.isActive && word.word.toLowerCase() === input.toLowerCase().trim()
      );

      if (matchingWordIndex !== -1) {
        // 일치하는 단어 제거 및 점수 증가
        const matchedWord = prev.fallingWords[matchingWordIndex];
        const newWords = prev.fallingWords.filter((_, index) => index !== matchingWordIndex);
        const pointsEarned = Math.floor((100 - matchedWord.y) * prev.level); // 높이에 따른 점수

        const newWordsCompleted = prev.wordsCompleted + 1;
        
        // 레벨별 필요 단어 수 계산
        const getRequiredWordsForLevel = (level: number): number => {
          if (level === 1) return 5; // Level 1: 5개
          return 5 + (level - 1) * 7; // Level 2부터: 5 + 7 + 7 + ... (누적)
        };
        
        // 현재 레벨 계산
        let newLevel = 1;
        let totalRequired = 0;
        while (totalRequired < newWordsCompleted) {
          totalRequired = getRequiredWordsForLevel(newLevel);
          if (newWordsCompleted >= totalRequired) {
            newLevel++;
          } else {
            break;
          }
        }
        newLevel--; // 마지막에 1 증가한 것 보정
        
        const newGameSpeed = 1 + (newLevel - 1) * 0.3; // 레벨당 30% 속도 증가
        
        // 레벨업 감지
        const isLevelUp = newLevel > prev.level;

        // 한글 뜻 이펙트 생성
        const meaningEffect: MeaningEffect = {
          id: `meaning-${Date.now()}-${Math.random()}`,
          word: matchedWord.word,
          meaning: matchedWord.meaning,
          x: matchedWord.x,
          y: matchedWord.y,
          startTime: Date.now(),
          color: matchedWord.color,
        };

        return {
          ...prev,
          fallingWords: newWords,
          currentInput: '',
          score: prev.score + pointsEarned,
          wordsCompleted: newWordsCompleted,
          level: newLevel,
          gameSpeed: newGameSpeed,
          spawnRate: Math.max(1000, 3000 - (newLevel - 1) * 200), // 레벨당 스폰 빨라짐
          meaningEffects: [...prev.meaningEffects, meaningEffect], // 한글 뜻 이펙트 추가
          showLevelUp: isLevelUp, // 레벨업 시 표시
          levelUpEndTime: isLevelUp ? Date.now() + 2500 : prev.levelUpEndTime, // 2.5초 후 종료
        };
      } else {
        // 일치하지 않으면 입력만 업데이트
        return {
          ...prev,
          currentInput: input,
        };
      }
    });
  }, [gameState.isPlaying]);

  // 게임 시작
  const startGame = useCallback(() => {
    setGameState(prev => ({
      ...initialState,
      isPlaying: true,
      startTime: Date.now(),
      lives: settings.initialLives,
      spawnRate: settings.spawnInterval,
    }));

    // 게임 루프 시작
    gameLoopRef.current = setInterval(gameLoop, 50); // 20fps

    // 단어 스폰 시작
    spawnRef.current = setInterval(spawnWord, settings.spawnInterval);

    // 게임 시간 업데이트
    gameTimeRef.current = setInterval(() => {
      setGameState(current => ({
        ...current,
        gameTime: current.startTime ? (Date.now() - current.startTime) / 1000 : 0,
      }));
    }, 100);
  }, [settings, gameLoop, spawnWord]);

  // 게임 정지/재개
  const togglePause = useCallback(() => {
    setGameState(prev => ({ ...prev, isPaused: !prev.isPaused }));
  }, []);

  // 게임 종료
  const endGame = useCallback(() => {
    setGameState(prev => ({ ...prev, isPlaying: false, isGameOver: true }));
    
    if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    if (spawnRef.current) clearInterval(spawnRef.current);
    if (gameTimeRef.current) clearInterval(gameTimeRef.current);
  }, []);

  // 게임 리셋
  const resetGame = useCallback(() => {
    if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    if (spawnRef.current) clearInterval(spawnRef.current);
    if (gameTimeRef.current) clearInterval(gameTimeRef.current);
    
    setGameState(initialState);
  }, []);

  // 통계 계산
  const getGameStats = useCallback((): GameStats => {
    const accuracy = gameState.wordsCompleted + gameState.wordsDropped > 0 
      ? (gameState.wordsCompleted / (gameState.wordsCompleted + gameState.wordsDropped)) * 100 
      : 0;
    
    const wordsPerMinute = gameState.gameTime > 0 
      ? (gameState.wordsCompleted / gameState.gameTime) * 60 
      : 0;

    return {
      score: gameState.score,
      accuracy: Math.round(accuracy),
      wordsPerMinute: Math.round(wordsPerMinute),
      totalWords: gameState.wordsCompleted + gameState.wordsDropped,
      correctWords: gameState.wordsCompleted,
      droppedWords: gameState.wordsDropped,
      gameTime: gameState.gameTime,
      level: gameState.level,
    };
  }, [gameState]);

  // 스폰 속도 업데이트
  useEffect(() => {
    if (spawnRef.current && gameState.isPlaying) {
      clearInterval(spawnRef.current);
      spawnRef.current = setInterval(spawnWord, gameState.spawnRate);
    }
  }, [gameState.spawnRate, gameState.isPlaying, spawnWord]);

  // 컴포넌트 언마운트 시 정리
  useEffect(() => {
    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
      if (spawnRef.current) clearInterval(spawnRef.current);
      if (gameTimeRef.current) clearInterval(gameTimeRef.current);
    };
  }, []);

  return {
    gameState,
    startGame,
    endGame,
    resetGame,
    togglePause,
    handleInput,
    getGameStats,
  };
};