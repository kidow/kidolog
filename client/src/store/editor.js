import { createAction, handleActions } from 'redux-actions'
import { Map } from 'immutable'

const ACTION = 'ACTION'

export const action = createAction(ACTION)

const initialState = Map({})

export default handleActions({}, initialState)
