import React from 'react'
import { EditorTemplateContainer } from 'containers/templates'
import PropTypes from 'prop-types'

const EditorPage = ({ history }) => {
  return <EditorTemplateContainer history={history} />
}

EditorPage.propTypes = {
  history: PropTypes.object
}

export default EditorPage
