import React from 'react'
import './Search.scss'
import Input from '../Input'

const Search = ({ search, onChangeSearch }) => {
  return (
    <div className="search__container">
      <Input theme="search" placeholder="검색" value={search} onChange={onChangeSearch} />
    </div>
  )
}

export default Search
