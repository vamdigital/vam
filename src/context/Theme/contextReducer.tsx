import { ActionType, ThemeType, defaultTheme } from './type'

export const contextReducer = (
  state: ThemeType = defaultTheme,
  action: ActionType
): ThemeType => {
  switch (action) {
    case ActionType.LIGHT:
      return {
        theme: ActionType.LIGHT,
      }

    case ActionType.DARK:
      return {
        theme: ActionType.DARK,
      }

    default:
      return state
  }
}
