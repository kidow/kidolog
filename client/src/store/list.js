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
  posts: List(),
  nextPosts: List()
})

export default handleActions(
  {
    ...pender({
      type: GET_LIST,
      onSuccess: (state, action) => {
        const { next, posts } = action.payload.data
        return state.set('next', next).set('posts', fromJS(posts))
      }
    }),
    ...pender({
      type: NEXT_LIST,
      onSuccess: (state, action) => {
        const { next, posts } = action.payload.data
        return state.set('next', next).set('nextPosts', fromJS(posts))
      }
    }),
    [SHOW_NEXT_LIST]: (state, action) => {
      const nextPosts = state.get('nextPosts')
      return state
        .update('posts', post => post.concat(nextPosts))
        .set('nextPosts', List())
    }
  },
  initialState
)
