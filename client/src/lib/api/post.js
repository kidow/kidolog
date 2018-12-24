import axios from 'axios'

export const getPost = id => axios.get(`/posts/${id}`)
export const updatePost = ({ id, title, markdown, tags }) =>
  axios.patch(`/posts/${id}`, { title, markdown, tags })
export const removePost = id => axios.delete(`/posts/${id}`)
