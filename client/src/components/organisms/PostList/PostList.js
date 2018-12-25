import React from 'react'
import './PostList.scss'
import { Post } from 'components/molecules'
// import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

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

PostList.propTypes = {
  posts: PropTypes.any // 미정,
}

export default PostList
