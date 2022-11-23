export enum ActionType {
  LIGHT = 'light',
  DARK = 'dark',
}

export type ThemeType = {
  theme: ActionType.DARK | ActionType.LIGHT
}

export const defaultTheme: ThemeType = {
  theme: ActionType.DARK,
}

export type ContextType = {
  state: ThemeType
  dispatch: ThemeDispatchType
}

export type ThemeDispatchType = (action: ActionType) => void
