import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ Name, ...rest }) => {
  return <Name {...rest} />
}

Icon.propTypes = {
  Name: PropTypes.element
}

Icon.defaultProps = {
  Name: React.createElement('svg')
}

export default Icon
