import React from 'react'
import './PageTemplate.scss'
import { Header } from 'components/organisms'

const PageTemplate = ({ children }) => {
  return (
    <div className="page-template">
      <Header />
      {children}
    </div>
  )
}

export default PageTemplate
