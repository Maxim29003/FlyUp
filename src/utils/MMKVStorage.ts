import { GameSettings } from '@appTypes/GameSettingsType';
import { GameResult } from '@appTypes/GameResultType';
import { createMMKV } from 'react-native-mmkv';

export const storage = createMMKV();

export const STORAGE_KEYS = {
  SETTINGS: 'settings',
  RESULT: 'result',
};

export const DEFAULT_SETTINGS: GameSettings = {
  speed: 500,
};

export const DEFAULT_RESULT: GameResult[] = [];
