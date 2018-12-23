import React from 'react'
import './EditorTemplate.scss'
import { Markdown, Preview, IconButton } from 'components/molecules'
import { Input, Button } from 'components/atoms'
import { IoIosArrowDropleft, IoIosImage } from 'react-icons/io'

const EditorTemplate = ({ history }) => {
  return (
    <div className="editor-template">
      <div className="editor__header">
        <div className="header__left">
          <IoIosArrowDropleft
            size={35}
            className="back-icon"
            onClick={() => history.goBack()}
          />
          <Input placeholder="제목을 입력해주세요." />
        </div>
        <div className="header__right">
          <IconButton IconName={IoIosImage} size={25}>
            업로드
          </IconButton>
          <div className="spacer" />
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
