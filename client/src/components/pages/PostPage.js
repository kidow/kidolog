import React from 'react'
import { PostTemplate } from 'components/templates'
import { Content } from 'components/molecules'
import { Logo } from 'components/atoms'

const PostPage = () => {
  return (
    <PostTemplate>
      <Logo big />
      <Content />
    </PostTemplate>
  )
}

export default PostPage
