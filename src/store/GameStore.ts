import { makeAutoObservable } from 'mobx';
import {
  DEFAULT_RESULT,
  DEFAULT_SETTINGS,
  STORAGE_KEYS,
  storage,
} from '@utils/MMKVStorage';
import { GameSettings } from '@appTypes/GameSettingsType';
import { GameResult } from '@appTypes/GameResultType';
import uuid from 'react-native-uuid';

class GameStore {
  score = 0;

  isGameOver = false;

  speed = DEFAULT_SETTINGS.speed;

  results: GameResult[] = [...DEFAULT_RESULT];

  constructor() {
    makeAutoObservable(this);
    this.hydrateSettings();
    this.hydrateResults();
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
    this.saveSettings();
  }

  addResults(score: number) {
    const result: GameResult = {
      id: uuid.v4().toString(),
      date: new Date().toISOString(),
      score,
    };
    this.results = [...this.results, result];
    this.saveResults();
  }

  clearResults() {
    this.results = [...DEFAULT_RESULT];
    this.saveResults();
  }

  private hydrateSettings() {
    const raw = storage.getString(STORAGE_KEYS.SETTINGS);
    if (!raw) {
      this.speed = DEFAULT_SETTINGS.speed;
      return;
    }
    try {
      const parsed = JSON.parse(raw) as Partial<GameSettings>;
      this.speed =
        typeof parsed.speed === 'number'
          ? parsed.speed
          : DEFAULT_SETTINGS.speed;
    } catch {}
  }

  private saveSettings() {
    const data: GameSettings = {
      speed: this.speed,
    };
    storage.set(STORAGE_KEYS.SETTINGS, JSON.stringify(data));
  }

  private hydrateResults() {
    const raw = storage.getString(STORAGE_KEYS.RESULT);
    if (!raw) {
      this.results = [...DEFAULT_RESULT];
      return;
    }
    try {
      const parsed = JSON.parse(raw) as GameResult[];
      let didFixIds = false;
      const normalized = parsed.map(item => {
        if (item.id) return item;
        didFixIds = true;
        return { ...item, id: uuid.v4().toString() };
      });
      this.results = normalized;
      if (didFixIds) this.saveResults();
    } catch {
      this.results = [...DEFAULT_RESULT];
    }
  }

  private saveResults() {
    storage.set(STORAGE_KEYS.RESULT, JSON.stringify(this.results));
  }
}

export const gameStore = new GameStore();
