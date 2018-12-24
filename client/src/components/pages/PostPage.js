import React from 'react'
import { PostTemplate } from 'components/templates'
import { Content } from 'components/molecules'
import { Logo } from 'components/atoms'

const PostPage = ({ match }) => {
  const { id } = match.params
  return (
    <PostTemplate>
      <Logo big />
      <Content id={id} />
    </PostTemplate>
  )
}

export default PostPage
