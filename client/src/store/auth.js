import { createAction, handleActions } from 'redux-actions'
import { Map } from 'immutable'
import { pender } from 'redux-pender'
import * as api from 'lib/api/auth'

const CHANGE_PASSWORD = 'auth/CHANGE_PASSWORD'
const LOGIN = 'auth/LOGIN'
const CHECK = 'auth/CHECK'

export const changePassword = createAction(CHANGE_PASSWORD)
export const login = createAction(LOGIN, api.login)
export const check = createAction(CHECK, api.check)

const initialState = Map({
  password: '',
  logged: false
})

export default handleActions(
  {
    [CHANGE_PASSWORD]: (state, action) => {
      const { value } = action.payload
      return state.set('password', value)
    },
    ...pender({
      type: LOGIN,
      onSuccess: (state, action) => {
        return state.set('logged', true)
      }
    }),
    ...pender({
      type: CHECK,
      onSuccess: (state, action) => {
        const { logged } = action.payload.data
        return state.set('logged', logged)
      }
    })
  },
  initialState
)
