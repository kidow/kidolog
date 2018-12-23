import React from 'react'
import './Markdown.scss'
import { Input } from 'components/atoms'

const Markdown = () => {
  return (
    <div className="markdown__container">
      <div className="markdown__code-editor" />
      <div className="markdown__tags">
        <div className="markdown__description">태그</div>
        <Input name="tags" placeholder="태그를 입력하세요 (쉼표로 구분)" />
      </div>
    </div>
  )
}

export default Markdown
