import React from 'react'
import './Preview.scss'
import Marked from '../Marked/Marked'
import PropTypes from 'prop-types'

const Preview = ({ title, markdown }) => {
  return (
    <div className="preview__container">
      <h1 className="preview__title">{title}</h1>
      <div>
        <Marked markdown={markdown} />
      </div>
    </div>
  )
}

Preview.propTypes = {
  title: PropTypes.string,
  markdown: PropTypes.string
}

export default Preview
