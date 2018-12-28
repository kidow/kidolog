import React, { Component } from 'react'
import { EditorTemplate } from 'components/templates'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as editorActions from 'store/editor'
import * as postActions from 'store/post'

import queryString from 'query-string'

class EditorTemplateContainer extends Component {
  state = {
    leftPercentage: 0.5
  }

  componentDidMount() {
    const { EditorActions, logged, history, location } = this.props
    const { id } = queryString.parse(location.search)
    if (!logged) {
      history.push('/')
      return
    }
    EditorActions.initializeEditor()
    if (id) {
      EditorActions.getPost(id)
    }
  }

  onUploadClick = () => {
    // const upload = document.createElement('input')
    // upload.type = 'file'
    // upload.onchange = e => {
    //   if (!upload.files) return
    //   const file = upload.files[0]
    //   console.log(file)
    //   this.uploadImage(file)
    // }
    // upload.click()
    const formData = new FormData()
    const upload = document.createElement('input')
    upload.type = 'file'
    upload.accept = 'image/*'
    upload.onchange = () => {
      if (!upload.files) return
      const file = upload.files[0]
      formData.append('img', file)
      this.uploadImage(formData)
    }
    upload.click()
  }

  uploadImage = async formData => {
    const { EditorActions } = this.props
    try {
      await EditorActions.imageUpload(formData)
    } catch (e) {
      console.log(e)
    }
  }

  onSubmit = async () => {
    const {
      title,
      markdown,
      tags,
      EditorActions,
      history,
      location,
      PostActions
    } = this.props
    const post = {
      title,
      markdown,
      tags: tags === '' ? [] : [...new Set(tags.split(',').map(tag => tag.trim()))]
    }
    try {
      const { id } = queryString.parse(location.search)
      if (id) {
        await PostActions.updatePost({ id, ...post })
        history.push('/')
        return
      }
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
    const { history, title, location } = this.props
    const { leftPercentage } = this.state
    const { onSeparatorMouseDown, onChangeInput, onSubmit, onUploadClick } = this
    const markdownStyle = { flex: leftPercentage }
    const previewStyle = { flex: 1 - leftPercentage }
    const separatorStyle = { left: `${leftPercentage * 100}%` }
    const { id } = queryString.parse(location.search)
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
        updateMode={!!id}
      />
    )
  }
}

export default connect(
  state => ({
    title: state.editor.get('title'),
    markdown: state.editor.get('markdown'),
    tags: state.editor.get('tags'),
    logged: state.auth.get('logged')
  }),
  dispatch => ({
    EditorActions: bindActionCreators(editorActions, dispatch),
    PostActions: bindActionCreators(postActions, dispatch)
  })
)(EditorTemplateContainer)
