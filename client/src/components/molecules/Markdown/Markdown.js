import React, { Component } from 'react'
import './Markdown.scss'
import { Input } from 'components/atoms'

import CodeMirror from 'codemirror'

import 'codemirror/mode/markdown/markdown'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'
import 'codemirror/mode/css/css'
import 'codemirror/mode/shell/shell'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'

class Markdown extends Component {
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
    return (
      <div className="markdown__container">
        <div className="markdown__code-editor" ref={ref => (this.editor = ref)} />
        <div className="markdown__tags">
          <div className="markdown__description">태그</div>
          <Input name="tags" placeholder="태그를 입력하세요 (쉼표로 구분)" />
        </div>
      </div>
    )
  }
}

export default Markdown
