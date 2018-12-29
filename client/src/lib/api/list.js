import axios from 'axios'

export const getList = tags => axios.get(`/posts/${tags ? `?tags=${tags}` : ''}`)
export const nextList = url => axios.get(url)
export const tagList = tag => axios.get(`/posts/tag=${tag}`)
