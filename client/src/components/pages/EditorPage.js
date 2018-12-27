import React from 'react'
import { EditorTemplateContainer } from 'containers/templates'
import PropTypes from 'prop-types'

const EditorPage = ({ history, location }) => {
  return <EditorTemplateContainer history={history} location={location} />
}

EditorPage.propTypes = {
  history: PropTypes.object
}

export default EditorPage
