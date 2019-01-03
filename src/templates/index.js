import React from 'react'
import PropTypes from 'prop-types'

import '../scss/gatstrap.scss'
import './common.css'

const Layout = ({ children }) => <div className="mainSection">{children()}</div>

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
