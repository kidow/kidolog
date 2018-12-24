import React from 'react'
import './PostList.scss'
import { Post } from 'components/molecules'
// import { Link } from 'react-router-dom'

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default PostList
