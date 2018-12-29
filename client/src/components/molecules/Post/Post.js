import React from 'react'
import './Post.scss'
import moment from 'moment'
import 'moment/locale/ko'
import removeMd from 'remove-markdown'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Post = ({ title, markdown, createdAt, id, thumbnail, history }) => {
  return (
    <div className="post__container">
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        className="post__image"
        style={{
          backgroundImage: `url(${thumbnail})`
        }}
        onClick={() => history.push(`/post/${id}`)}
      >
        {thumbnail ? '' : '이미지가 없습니다'}
      </div>
      <div className="post__title">
        <Link to={`/post/${id}`} className="title__text">
          {title}
        </Link>
        <div className="title__date">{moment(createdAt).fromNow()}</div>
      </div>
      <div className="post__description">{removeMd(markdown.slice(0, 190))}...</div>
    </div>
  )
}

Post.propTypes = {
  title: PropTypes.string,
  markdown: PropTypes.string,
  createdAt: PropTypes.string
}

export default Post
