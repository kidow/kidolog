import React from 'react'
import { PostTemplate } from 'components/templates'
import { Logo } from 'components/atoms'
import PropTypes from 'prop-types'
import { ContentContainer } from 'containers/molecules'

const PostPage = ({ match, history }) => {
  const { id } = match.params
  return (
    <PostTemplate>
      <Logo theme="post" />
      <ContentContainer id={id} history={history} />
    </PostTemplate>
  )
}

PostPage.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object
}

export default PostPage
