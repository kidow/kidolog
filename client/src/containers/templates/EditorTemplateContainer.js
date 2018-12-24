import React, { Component } from 'react'
import { EditorTemplate } from 'components/templates'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as editorActions from 'store/editor'

class EditorTemplateContainer extends Component {
  state = {
    leftPercentage: 0.5
  }

  componentDidMount() {
    const { EditorActions } = this.props
    EditorActions.initializeEditor()
  }

  onUploadClick = () => {
    const upload = document.createElement('input')
    upload.type = 'file'
    upload.onchange = e => {
      if (!upload.files) return
      const file = upload.files[0]
      this.uploadImage(file)
    }
    upload.click()
  }

  uploadImage = async file => {}

  onSubmit = async () => {
    const { title, markdown, tags, EditorActions, history } = this.props
    const post = {
      title,
      markdown,
      tags: tags === '' ? [] : [...new Set(tags.split(',').map(tag => tag.trim()))]
    }
    try {
      await EditorActions.writePost(post)
      history.push('/')
    } catch (e) {
      console.log(e)
    }
  }

  onMouseMove = e => {
    this.setState({
      leftPercentage: e.clientX / window.innerWidth
    })
  }

  onMouseUp = () => {
    document.body.removeEventListener('mousemove', this.onMouseMove)
    window.removeEventListener('mouseup', this.onMouseUp)
  }

  onSeparatorMouseDown = () => {
    document.body.addEventListener('mousemove', this.onMouseMove)
    window.addEventListener('mouseup', this.onMouseUp)
  }

  onChangeInput = e => {
    const { EditorActions } = this.props
    const { name, value } = e.target
    EditorActions.changeInput({ name, value })
  }

  render() {
    const { history, title } = this.props
    const { leftPercentage } = this.state
    const { onSeparatorMouseDown, onChangeInput, onSubmit, onUploadClick } = this
    const markdownStyle = { flex: leftPercentage }
    const previewStyle = { flex: 1 - leftPercentage }
    const separatorStyle = { left: `${leftPercentage * 100}%` }

    return (
      <EditorTemplate
        history={history}
        title={title}
        onChange={onChangeInput}
        onSeparatorMouseDown={onSeparatorMouseDown}
        onSubmit={onSubmit}
        onUploadClick={onUploadClick}
        markdownStyle={markdownStyle}
        previewStyle={previewStyle}
        separatorStyle={separatorStyle}
      />
    )
  }
}

export default connect(
  state => ({
    title: state.editor.get('title'),
    markdown: state.editor.get('markdown'),
    tags: state.editor.get('tags')
  }),
  dispatch => ({
    EditorActions: bindActionCreators(editorActions, dispatch)
  })
)(EditorTemplateContainer)
