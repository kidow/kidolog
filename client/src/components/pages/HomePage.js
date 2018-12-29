import React from 'react'
import { PageTemplate, ListTemplate } from 'components/templates'
import { SearchContainer } from 'containers/atoms'
import { PostListContainer } from 'containers/organisms'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

const HomePage = ({ match, history }) => {
  const { tag } = match.params
  return (
    <PageTemplate>
      <Helmet>
        <title>Kidolog</title>
      </Helmet>
      <ListTemplate>
        <SearchContainer />
        <PostListContainer tag={tag} history={history} />
      </ListTemplate>
    </PageTemplate>
  )
}

HomePage.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object
}

export default HomePage
