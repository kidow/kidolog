import axios from 'axios'

export const writePost = ({ title, markdown, tags }) =>
  axios.post('/prv/posts', { title, markdown, tags })
