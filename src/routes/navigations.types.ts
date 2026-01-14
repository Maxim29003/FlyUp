export enum SCREENS {
  MAIN = "MAIN",
  GAME = "GAME",
  RESULT = "RESULT",
  SETTINGS = "SETTINGS",
  RECORD = "RECORD",
  STATISTIC = "STATISTIC",
}

export type RootStackParamList = {
  [SCREENS.MAIN]: undefined;
  [SCREENS.GAME]: undefined;
  [SCREENS.RESULT]: undefined;
  [SCREENS.SETTINGS]: undefined;
  [SCREENS.RECORD]: undefined;
  [SCREENS.STATISTIC]: undefined;
}
