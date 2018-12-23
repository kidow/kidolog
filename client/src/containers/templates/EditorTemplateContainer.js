import React, { Component } from 'react'
import { EditorTemplate } from 'components/templates'

class EditorTemplateContainer extends Component {
  render() {
    const { history } = this.props
    return <EditorTemplate history={history} />
  }
}

export default EditorTemplateContainer
