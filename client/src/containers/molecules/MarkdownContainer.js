import React, { Component } from 'react'
import { Markdown } from 'components/molecules'

import CodeMirror from 'codemirror'

import 'codemirror/mode/markdown/markdown'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'
import 'codemirror/mode/css/css'
import 'codemirror/mode/shell/shell'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'

class MarkdownContainer extends Component {
  editor = null

  codeMirror = null

  componentDidMount() {
    this.initializeEditor()
  }

  initializeEditor = () => {
    this.codeMirror = CodeMirror(this.editor, {
      mode: 'markdown',
      theme: 'monokai',
      lineNumbers: true,
      lineWrapping: true
    })
  }

  render() {
    const { editor } = this
    return <Markdown editor={editor} />
  }
}

export default MarkdownContainer
