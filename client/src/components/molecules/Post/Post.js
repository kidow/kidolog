import React from 'react'
import './Post.scss'

const Post = () => {
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

export default Post
