import React from 'react'
import './Post.scss'
import moment from 'moment'
import removeMd from 'remove-markdown'
import PropTypes from 'prop-types'

const Post = ({ title, markdown, createdAt, image }) => {
  return (
    <div className="post__container">
      <div className="post__image">이미지가 없습니다</div>
      <div className="post__title">
        <div className="title__text">그동안의 개발을 하면서 느꼈던 점들</div>
        <div className="title__date">2018-12-23</div>
      </div>
      <div className="post__description">desc</div>
    </div>
  )
}

Post.propTypes = {
  title: PropTypes.string,
  image: PropTypes.any, // 아직 미정
  markdown: PropTypes.string,
  createdAt: PropTypes.any // 미정
}

export default Post
