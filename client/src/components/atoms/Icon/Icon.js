import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ Name, ...rest }) => {
  return <Name {...rest} />
}

Icon.propTypes = {
  Name: PropTypes.func
}

Icon.defaultProps = {
  Name: () => null
}

export default Icon
