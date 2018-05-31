import React from 'react'
import PropTypes from 'prop-types'

const attribs = {
  'aria-hidden': 'true',
  role: 'presentation'
}

const styles = {
  margin: '0 8px'
}

const Separator = ({ content }) => (
  <span {...attribs} style={styles}>{content}</span>
)

Separator.propTypes = {
  content: PropTypes.string,
}

Separator.defaultProps = {
  content: '•',
}

export default Separator
