import React from 'react'
import PropTypes from 'prop-types'

const attribs = {
  'aria-hidden': 'true',
  role: 'presentation'
}

const Separator = ({ content }) => (
  <span {...attribs}>{' '}{content}{' '}</span>
)

Separator.propTypes = {
  content: PropTypes.string,
}

Separator.defaultProps = {
  content: '•',
}

export default Separator
