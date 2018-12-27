import React from 'react'
import './PageTemplate.scss'
import { Footer } from 'components/organisms'
import PropTypes from 'prop-types'
import HeaderContainer from 'containers/organisms/HeaderContainer'

const PageTemplate = ({ children }) => {
  return (
    <div className="page-template">
      <HeaderContainer />
      {children}
      <Footer />
    </div>
  )
}

PageTemplate.propTypes = {
  children: PropTypes.node
}

export default PageTemplate
