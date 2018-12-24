import React, { Component } from 'react'
import { Post } from 'components/molecules'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as postActions from 'store/post'

class PostContainer extends Component {
  initialize = async () => {
    const { PostActions, id } = this.props
    try {
      await PostActions.getPost(id)
    } catch (e) {
      console.log(e)
    }
  }

  componentDidMount() {
    this.initialize()
  }

  render() {
    const { loading, post } = this.props
    const { title, markdown, createdAt, tags } = post.toJS()
    if (loading) return null
    return <Post title={title} markdown={markdown} createdAt={createdAt} tags={tags} />
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
)(PostContainer)
