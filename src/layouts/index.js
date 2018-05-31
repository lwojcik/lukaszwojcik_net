import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const sectionAttributes = {
  itemScope: 'true',
  itemType: 'http://data-vocabulary.org/Person',
}

const style = {
  fontFamily: 'Lato, Arial, Helvetica, sans-serif',
  marginTop: '2rem',
  marginBottom: '2rem',
}

const Layout = ({ children, data }) => (
  <section {...sectionAttributes} style={style}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { property: 'og:title', content: data.site.siteMetadata.title },
        { property: 'og:description', content: data.site.siteMetadata.description },
      ]}
    />
    {children()}
  </section>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query MetaElementsQuery {
    site {
      siteMetadata {
        title,
        description
      }
    }
  }
`
