import React, { Component } from 'react'
import { Search } from 'components/atoms'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as listActions from 'store/list'

class SearchContainer extends Component {
  onChangeSearch = e => {
    const { ListActions } = this.props
    const { value } = e.target
    ListActions.changeSearch(value)
  }

  onSearch = () => {
    const { ListActions, search } = this.props
    try {
      if (search) {
        if (search[0] === '#') {
          ListActions.getList({ tag: search.slice(1) })
          return
        }
        ListActions.getList({ search })
      }
    } catch (e) {
      console.log(e)
    }
  }

  onKeyPress = e => {
    if (e.key === 'Enter') {
      this.onSearch()
    }
  }

  render() {
    const { search } = this.props
    const { onChangeSearch, onKeyPress } = this
    return (
      <Search search={search} onChangeSearch={onChangeSearch} onKeyPress={onKeyPress} />
    )
  }
}

export default connect(
  state => ({
    search: state.list.get('search')
  }),
  dispatch => ({
    ListActions: bindActionCreators(listActions, dispatch)
  })
)(SearchContainer)
