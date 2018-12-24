import axios from 'axios'

export const getList = () => axios.get('/posts')
export const nextList = url => axios.get(url)
