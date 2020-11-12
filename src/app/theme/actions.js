import types from './types'

const toggler = item => ({
  type: types.THEME_TOGGLE,
  item
});

export default { 
  toggler
}