import React, { Component } from 'react'
import marked from 'marked'

import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-bash.min.js'
import 'prismjs/components/prism-javascript.min.js'
import 'prismjs/components/prism-jsx.min.js'
import 'prismjs/components/prism-css.min.js'

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
    if (prevState.html !== this.state.html) {
      Prism.highlightAll()
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
