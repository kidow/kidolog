import { createAction, handleActions } from 'redux-actions'
import { Map, fromJS, List } from 'immutable'
import { pender } from 'redux-pender'
import * as api from 'lib/api/list'

const GET_LIST = 'list/GET_LIST'
const NEXT_LIST = 'list/NEXT_LIST'
const SHOW_NEXT_LIST = 'list/SHOW_NEXT_LIST'

export const getList = createAction(GET_LIST, api.getList)
export const nextList = createAction(NEXT_LIST, api.nextList)
export const showNextList = createAction(SHOW_NEXT_LIST)

const initialState = Map({
  next: '',
  data: List(),
  nextData: List()
})

export default handleActions(
  {
    ...pender({
      type: GET_LIST,
      onSuccess: (state, action) => {
        const { next, data } = action.payload.data
        return state.set('next', next).set('data', fromJS(data))
      }
    }),
    ...pender({
      type: NEXT_LIST,
      onSuccess: (state, action) => {
        const { next, data } = action.payload.data
        return state.set('next', next).set('nextData', fromJS(data))
      }
    }),
    [SHOW_NEXT_LIST]: (state, action) => {
      const nextData = state.get('nextData')
      return state.update('data', data => data.concat(nextData)).set('nextData', List())
    }
  },
  initialState
)
