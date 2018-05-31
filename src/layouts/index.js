import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'typeface-lato'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const Layout = ({ children, data }) => (
  <section className="page">
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
