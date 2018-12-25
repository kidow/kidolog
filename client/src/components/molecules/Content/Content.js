import React from 'react'
import './Content.scss'
import { Tag } from 'components/atoms'
import moment from 'moment'
import Marked from '../Marked'
import PropTypes from 'prop-types'

const Content = ({ title, markdown, createdAt, tags }) => {
  return (
    <div className="content__container">
      <div className="content__title">
        Dan Abramov - 왜 super(props) 를 명시해 줘야 하는가?
      </div>
      <div className="content__date">2018년 12월 2일</div>
      <div className="content__body">
        {/* <Marked markdown={markdown}/> */}
        hooks가 최근에 핫하다고 들었다. 아이러니하지만 class 컴포넌트에 재밌는 사실을
        설명하기 위해 블로그를 시작한다. 리액트를 더 잘 사용하기 위해서 이것을 아는것은
        중요하지 않지만, 어떻게 동작하는지 깊이있게 파고드는 것을 좋아한다면, 재미있을
        것이다. 첫 번째 예시를 보자.
      </div>
      <div className="content__tags">
        <Tag to="/">#태그1</Tag>
        <Tag to="/">#태그2</Tag>
        <Tag to="/">#태그3</Tag>
      </div>
    </div>
  )
}

Content.propTypes = {
  title: PropTypes.string,
  markdown: PropTypes.string,
  createdAt: PropTypes.any, // 날짜 타입은 뭘할지 모르겠음,
  tags: PropTypes.arrayOf(PropTypes.string)
}

export default Content
