import React, { Component } from 'react'
import { Content } from 'components/molecules'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as postActions from 'store/post'

class ContentContainer extends Component {
  componentDidMount() {
    this.initialize()
  }

  initialize = async () => {
    const { PostActions, id } = this.props
    try {
      await PostActions.getPost(id)
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { loading, post } = this.props
    const { title, markdown, createdAt, tags } = post.toJS()
    if (loading) return null
    return <Content title={title} markdown={markdown} createdAt={createdAt} tags={tags} />
  }
}

export default connect(
  state => ({
    post: state.post.get('post'),
    loading: state.pender.pending['post/GET_POST']
  }),
  dispatch => ({
    PostActions: bindActionCreators(postActions, dispatch)
  })
)(ContentContainer)
