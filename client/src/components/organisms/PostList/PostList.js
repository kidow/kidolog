import React from 'react'
import './PostList.scss'
import { Post } from 'components/molecules'
import PropTypes from 'prop-types'

const PostList = ({ posts, history }) => {
  const postList = posts.map(item => (
    <Post
      key={item._id}
      title={item.title}
      markdown={item.markdown}
      createdAt={item.createdAt}
      thumbnail={item.thumbnail}
      id={item._id}
      history={history}
    />
  ))
  return <div className="post-list">{postList}</div>
}

PostList.propTypes = {
  posts: PropTypes.array,
  history: PropTypes.object
}

export default PostList
