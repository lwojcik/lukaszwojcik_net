import React from 'react';

import Helmet from 'react-helmet'

const styles = {
  textAlign: 'center',
}

const NotFoundPage = () => (
  <div style={styles}>
    <Helmet title='Error 404 - Page not found' />
    <h1>ERROR 404</h1>
    <p>This page doesn't exist.</p>
    <a href="/">Jump to main page &rarr;</a>
  </div>
)

export default NotFoundPage
