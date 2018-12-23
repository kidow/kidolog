import React from 'react'
import './PageTemplate.scss'
import { Header, Footer } from 'components/organisms'

const PageTemplate = ({ children }) => {
  return (
    <div className="page-template">
      <Header />
      <div className="main-content">{children}</div>
      <Footer />
    </div>
  )
}

export default PageTemplate
