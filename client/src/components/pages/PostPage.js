import React from 'react'
import { PostTemplate } from 'components/templates'
import { Content } from 'components/molecules'
import { Logo } from 'components/atoms'
import PropTypes from 'prop-types'

const PostPage = ({ match }) => {
  const { id } = match.params
  return (
    <PostTemplate>
      <Logo big />
      <Content id={id} />
    </PostTemplate>
  )
}

PostPage.propTypes = {
  match: PropTypes.object
}

export default PostPage
