import { makeAutoObservable } from 'mobx';
import { DEFAULT_RESULT, DEFAULT_SETTINGS, storage } from '@utils/MMKVStorage';
import { GameResult } from '@appTypes/GameResultType';
import uuid from 'react-native-uuid';
import { makePersistable } from 'mobx-persist-store';

class GameStore {
  score = 0;

  isGameOver = false;

  speed = DEFAULT_SETTINGS.speed;

  results: GameResult[] = [...DEFAULT_RESULT];

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'GameStore',
      properties: ['score', 'isGameOver', 'speed', 'results'],
      storage: {
        getItem: async (key: string): Promise<string | null> => {
          const value = storage.getString(key);
          return value ?? null;
        },

        setItem: async (key: string, value: string): Promise<void> => {
          storage.set(key, value);
        },

        removeItem: async (key: string): Promise<void> => {
          storage.remove(key);
        },
      },
    });
  }

  increment() {
    this.score += 1;
  }

  gameOver() {
    this.isGameOver = true;
    this.addResults(this.score);
  }

  reset() {
    this.score = 0;
    this.isGameOver = false;
  }

  setSpeed(speed: number) {
    this.speed = speed;
  }

  addResults(score: number) {
    const result: GameResult = {
      id: uuid.v4().toString(),
      date: new Date().toISOString(),
      score,
    };
    this.results = [...this.results, result];
  }

  clearResults() {
    this.results = [...DEFAULT_RESULT];
  }
}

export const gameStore = new GameStore();
