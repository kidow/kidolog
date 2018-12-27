import React from 'react'
import './PostList.scss'
import { Post } from 'components/molecules'
// import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const PostList = ({ posts }) => {
  const postList = posts.map(item => (
    <Post
      key={item._id}
      title={item.title}
      markdown={item.markdown}
      createdAt={item.createdAt}
      id={item._id}
    />
  ))
  return <div className="post-list">{postList}</div>
}

PostList.propTypes = {
  posts: PropTypes.any // 미정,
}

export default PostList
