import React from 'react'
import { PageTemplate, ListTemplate } from 'components/templates'
import { SearchContainer } from 'containers/atoms'
import { PostListContainer } from 'containers/organisms'

const HomePage = () => {
  return (
    <PageTemplate>
      <ListTemplate>
        <SearchContainer />
        <PostListContainer />
      </ListTemplate>
    </PageTemplate>
  )
}

export default HomePage
