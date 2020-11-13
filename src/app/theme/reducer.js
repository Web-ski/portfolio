import types from './types'

const initialTheme = {
  theme: 'lightTheme'
}

const themeReducer = (state = initialTheme, action) => {

  switch (action.type) {
    case types.THEME_TOGGLE:
      return {
        ...state, theme: action.item
      }
    default:
      return state
  }
}

export default themeReducer;