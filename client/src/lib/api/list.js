import axios from 'axios'
import queryString from 'query-string'

export const getList = tags =>
  axios.get(`/posts${tags ? `?${queryString.stringify({ tags })}` : ''}`)
export const nextList = url => axios.get(url)
export const tagList = tag => axios.get(`/posts/tag=${tag}`)
