import React from 'react'
import Link from 'gatsby-link'

import MailLink from '../MailLink/MailLink'

const AuthorEmail = ({ prefix, email, title }) => (
  <span>
    <strong style={{ paddingRight: '5px' }}>{prefix}:</strong>
    {' '}
    <MailLink to={email} title={title}>
      {email}
    </MailLink>
  </span>
)

export default AuthorEmail
