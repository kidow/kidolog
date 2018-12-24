import React from 'react'
import './Search.scss'
import Input from '../Input'

const Search = () => {
  return (
    <div className="search__container">
      <Input theme="search" placeholder="검색" />
    </div>
  )
}

export default Search
