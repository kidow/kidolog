import React, { Component } from 'react'
import marked from 'marked'

class Marked extends Component {
  state = {
    html: ''
  }

  constructor(props) {
    super(props)
    const { markdown } = this.props
    this.state = {
      html: markdown ? marked(props.markdown, { breaks: true, sanitize: true }) : ''
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.markdown !== this.props.markdown) {
      this.renderMarkdown()
    }
  }

  renderMarkdown = () => {
    const { markdown } = this.props
    if (!markdown) {
      this.setState({ html: '' })
      return
    }
    this.setState({
      html: marked(markdown, {
        breaks: true,
        sanitize: true
      })
    })
  }

  render() {
    const { html } = this.state
    const markup = {
      __html: html
    }
    return <div className="marked" dangerouslySetInnerHTML={markup} />
  }
}

export default Marked
