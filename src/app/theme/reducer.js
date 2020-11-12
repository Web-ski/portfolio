import types from './types'

const initialTheme = {
  theme: 'lightTheme'
}

const themeReducer = (state = initialTheme, action) => {

  switch (action.type) {
    case types.DARK_THEME_ON:
      return {
        ...state, theme: 'darkTheme'
      }
    case types.DARK_THEME_OFF:
      return {
        ...state, theme: 'lightTheme'
      }
    default:
      return state
  }
}

export default themeReducer;