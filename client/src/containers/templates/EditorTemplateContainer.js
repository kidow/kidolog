import React, { Component } from 'react'
import { EditorTemplate } from 'components/templates'

class EditorTemplateContainer extends Component {
  state = {
    leftPercentage: 0.5
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

  render() {
    const { history } = this.props
    const { leftPercentage } = this.state
    const { onSeparatorMouseDown } = this
    const markdownStyle = { flex: leftPercentage }
    const previewStyle = { flex: 1 - leftPercentage }
    const separatorStyle = { left: `${leftPercentage * 100}%` }

    return (
      <EditorTemplate
        history={history}
        onSeparatorMouseDown={onSeparatorMouseDown}
        markdownStyle={markdownStyle}
        previewStyle={previewStyle}
        separatorStyle={separatorStyle}
      />
    )
  }
}

export default EditorTemplateContainer
