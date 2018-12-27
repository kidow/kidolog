import React, { Component } from 'react'
import { PostList } from 'components/organisms'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as listActions from 'store/list'
import { Spinner } from 'components/atoms'

class PostListContainer extends Component {
  prev = null

  componentDidMount() {
    this.getList()
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  getList = async () => {
    const { ListActions, tag, next } = this.props
    try {
      await ListActions.getList(tag)
      if (next) {
        await ListActions.nextList(next)
      }
    } catch (e) {
      console.log(e)
    }
  }

  getNext = async () => {
    const { ListActions, next } = this.props
    ListActions.showNextList()
    if (next === this.prev || !next) return
    this.prev = next
    try {
      await ListActions.nextList(next)
    } catch (e) {
      console.log(e)
    }
  }

  onScroll = () => {
    const { nextPosts } = this.props
    if (nextPosts.size === 0) return

    const { innerWidth } = window
    const { scrollHeight } = document.body
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop

    if (scrollHeight - innerWidth - scrollTop < 100) {
      this.getNext()
    }
  }
  render() {
    const { posts, loading } = this.props
    if (loading) return <Spinner />
    return <PostList posts={posts.toJS()} />
  }
}

export default connect(
  state => ({
    posts: state.list.get('posts'),
    next: state.list.get('next'),
    nextPosts: state.list.get('nextPosts'),
    loading: state.pender.pending['list/GET_LIST']
  }),
  dispatch => ({
    ListActions: bindActionCreators(listActions, dispatch)
  })
)(PostListContainer)
