import React from 'react'
import './Preview.scss'
import Marked from '../Marked/Marked'

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

export default Preview
