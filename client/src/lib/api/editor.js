import axios from 'axios'

export const writePost = ({ title, markdown, tags }) =>
  axios.post('/posts', { title, markdown, tags })
