import React from 'react'
import { PageTemplate, ListTemplate } from 'components/templates'
import { PostList } from 'components/organisms'

const HomePage = () => {
  return (
    <PageTemplate>
      <ListTemplate>
        <PostList />
      </ListTemplate>
    </PageTemplate>
  )
}

export default HomePage
