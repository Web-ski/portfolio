import types from './types'

const checked = item => ({
  type: types.DARK_THEME_ON,
  item
});

const unchecked = item => ({
  type: types.DARK_THEME_OFF,
  item
});

export default { 
  checked, 
  unchecked
}