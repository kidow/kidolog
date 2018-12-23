import React from 'react'
import './EditorTemplate.scss'
import { Preview, IconButton } from 'components/molecules'
import { Input, Button, Icon } from 'components/atoms'
import { IoIosArrowDropleft, IoIosImage } from 'react-icons/io'
import MarkdownContainer from 'containers/molecules/MarkdownContainer'

const EditorTemplate = ({
  history,
  markdownStyle,
  previewStyle,
  separatorStyle,
  onSeparatorMouseDown,
  title,
  onChange
}) => {
  return (
    <div className="editor-template">
      <div className="editor__header">
        <div className="header__left">
          <Icon
            Name={IoIosArrowDropleft}
            size={35}
            className="back-icon"
            onClick={() => history.goBack()}
          />
          <Input
            name="title"
            value={title}
            onChange={onChange}
            placeholder="제목을 입력해주세요."
          />
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
        <div className="content__flex" style={markdownStyle}>
          <MarkdownContainer />
        </div>
        <div className="content__flex" style={previewStyle}>
          <Preview />
        </div>
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div
          className="content__separator"
          style={separatorStyle}
          onMouseDown={onSeparatorMouseDown}
        />
      </div>
    </div>
  )
}

export default EditorTemplate
