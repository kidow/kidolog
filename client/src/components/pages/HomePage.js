import React from 'react'
import { PageTemplate, ListTemplate } from 'components/templates'
import { PostList } from 'components/organisms'
import { SearchContainer } from 'containers/atoms'

const HomePage = () => {
  return (
    <PageTemplate>
      <ListTemplate>
        <SearchContainer />
        <PostList />
      </ListTemplate>
    </PageTemplate>
  )
}

export default HomePage
