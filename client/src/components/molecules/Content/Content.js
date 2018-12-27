import React from 'react'
import './Content.scss'
import { Tag } from 'components/atoms'
import moment from 'moment'
import Marked from '../Marked'
import PropTypes from 'prop-types'

const Content = ({ title, markdown, createdAt, tags }) => {
  const tagsList = Array.isArray(tags)
    ? tags.map(tag => (
        <Tag key={tag} to={`/tag/${tag}`}>
          {tag}
        </Tag>
      ))
    : []
  return (
    <div className="content__container">
      <div className="content__title">{title}</div>
      <div className="content__date">{moment(createdAt).format('ll')}</div>
      <div className="content__body">
        <Marked markdown={markdown} />
      </div>
      <div className="content__tags">{tagsList}</div>
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
