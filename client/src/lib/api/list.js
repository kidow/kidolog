import axios from 'axios'

export const getList = (tags, search) =>
  axios.get(`/posts/${tags ? `?tags=${tags}` : ''}${search ? `?search=${search}` : ''}`)
export const nextList = url => axios.get(url)
export const tagList = tag => axios.get(`/posts/tag=${tag}`)
