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
  render() {
    const { search } = this.props
    const { onChangeSearch } = this
    return <Search search={search} onChangeSearch={onChangeSearch} />
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
