import React from 'react'
import PropTypes from 'prop-types'

const Separator = ({ content }) => (
  <span>{' '}{content}{' '}</span>
)

Separator.propTypes = {
  content: PropTypes.string,
}

Separator.defaultProps = {
  content: '•',
}

export default Separator
