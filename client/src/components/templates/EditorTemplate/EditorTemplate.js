import React from 'react'
import './EditorTemplate.scss'
import { Input, Button, Icon, IconButton } from 'components/atoms'
import { IoIosArrowDropleft, IoIosImage } from 'react-icons/io'
import { MarkdownContainer, PreviewContainer } from 'containers/molecules'
import PropTypes from 'prop-types'

const EditorTemplate = ({
  history,
  markdownStyle,
  previewStyle,
  separatorStyle,
  onSeparatorMouseDown,
  title,
  onChange,
  onSubmit,
  onUploadClick,
  updateMode
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
          <div className="header__input">
            <Input
              name="title"
              value={title}
              onChange={onChange}
              placeholder="제목을 입력해주세요."
              autoFocus
              theme="editor"
            />
          </div>
        </div>
        <div className="header__right">
          <IconButton IconName={IoIosImage} size={25} onClick={onUploadClick}>
            업로드
          </IconButton>
          <div className="spacer" />
          <Button onClick={onSubmit}>{updateMode ? '수정' : '작성'}하기</Button>
        </div>
      </div>
      <div className="editor__content">
        <div className="content__flex" style={markdownStyle}>
          <MarkdownContainer />
        </div>
        <div className="content__flex" style={previewStyle}>
          <PreviewContainer />
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

EditorTemplate.propTypes = {
  history: PropTypes.object,
  markdownStyle: PropTypes.object,
  previewStyle: PropTypes.object,
  separatorStyle: PropTypes.object,
  onSeparatorMouseDown: PropTypes.func,
  title: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onUploadClick: PropTypes.func
}

export default EditorTemplate
