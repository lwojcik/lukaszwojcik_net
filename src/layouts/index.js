import React from 'react'
import PropTypes from 'prop-types'

import 'bootstrap/dist/css/bootstrap.min.css'

import './common.css'

const sectionAttributes = {
  itemScope: 'true',
  itemType: 'http://data-vocabulary.org/Person',
}

const style = {
  fontFamily: 'Lato, Arial, Helvetica, sans-serif',
  marginTop: '2rem',
  marginBottom: '2rem',
}

const Layout = ({ children }) => (
  <div style={style}>
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
