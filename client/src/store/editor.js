import { createAction, handleActions } from 'redux-actions'
import { Map } from 'immutable'

const INTIALIZE_EDITOR = 'editor/INITIALIZE_EDITOR'
const CHANGE_INPUT = 'editor/CHANGE_INPUT'

export const initializeEditor = createAction(INTIALIZE_EDITOR)
export const changeInput = createAction(CHANGE_INPUT)

const initialState = Map({
  title: '',
  markdown: '',
  tags: ''
})

export default handleActions(
  {
    [INTIALIZE_EDITOR]: (state, action) => initialState,
    [CHANGE_INPUT]: (state, action) => {
      const { name, value } = action.payload
      return state.set(name, value)
    }
  },
  initialState
)
