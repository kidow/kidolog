import React from 'react'
import './EditorTemplate.scss'
import { Markdown, Preview } from 'components/molecules'
import { Input, Button } from 'components/atoms'

const EditorTemplate = () => {
  return (
    <div className="editor-template">
      <div className="editor__header">
        <div className="header__left">
          <div>icons</div>
          <Input />
        </div>
        <div className="header__right">
          <Button>업로드</Button>
          <Button>작성하기</Button>
        </div>
      </div>
      <div className="editor__content">
        <Markdown />
        <Preview />
      </div>
    </div>
  )
}

export default EditorTemplate
