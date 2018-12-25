import React from 'react'
import './Search.scss'
import Input from '../Input'
import PropTypes from 'prop-types'

const Search = ({ search, onChangeSearch }) => {
  return (
    <div className="search__container">
      <Input theme="search" placeholder="검색" value={search} onChange={onChangeSearch} />
    </div>
  )
}

Search.propTypes = {
  search: PropTypes.string
}

Search.defaultProps = {
  search: ''
}

export default Search
