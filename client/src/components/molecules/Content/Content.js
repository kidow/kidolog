import React from 'react'
import './Content.scss'
import { Tag, Button } from 'components/atoms'
import moment from 'moment'
import 'moment/locale/ko'
import Marked from '../Marked'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import removeMd from 'remove-markdown'

const Content = ({ title, markdown, createdAt, tags, logged, onUpdate, onRemove }) => {
  const tagsList = Array.isArray(tags)
    ? tags.map(tag => (
        <Tag key={tag} to={`/tag/${tag}`}>
          {tag}
        </Tag>
      ))
    : []
  return (
    <div className="content__container">
      {markdown && (
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={removeMd(markdown).slice(0, 190)} />
        </Helmet>
      )}
      <div className="content__title">{title}</div>
      {logged && (
        <div className="content__buttons">
          <Button onClick={onUpdate}>수정</Button>
          <Button onClick={onRemove}>삭제</Button>
        </div>
      )}
      <div className="content__date">{moment(createdAt).format('lll')}</div>
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
  createdAt: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string)
}

export default Content
