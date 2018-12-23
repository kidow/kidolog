import React from 'react'
import './Preview.scss'

const Preview = ({ title, markdown }) => {
  return (
    <div className="preview__container">
      <h1 className="preview__title">{title}</h1>
      <div>{markdown}</div>
    </div>
  )
}

export default Preview
