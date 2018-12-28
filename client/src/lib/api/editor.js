import axios from 'axios'

export const writePost = ({ title, markdown, tags }) =>
  axios.post('/prv/posts', { title, markdown, tags })
export const getPost = id => axios.get(`/posts/${id}`)
export const imageUpload = formData => axios.post('/prv/posts/image', formData)
export const thumbnailUpload = file => axios.post('/prv/posts/thumbnail', { file })
