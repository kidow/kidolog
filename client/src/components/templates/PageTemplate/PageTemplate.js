import React from 'react'
import './PageTemplate.scss'
import { Header, Footer } from 'components/organisms'
import PropTypes from 'prop-types'

const PageTemplate = ({ children }) => {
  return (
    <div className="page-template">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

PageTemplate.propTypes = {
  children: PropTypes.node
}

export default PageTemplate
