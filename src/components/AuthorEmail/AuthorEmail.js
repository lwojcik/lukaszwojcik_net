import React from 'react'

import MailLink from '../MailLink/MailLink'

const AuthorEmail = ({ prefix, email, title }) => (
  <span>
    <strong style={{ fontWeight: '900', paddingRight: '5px' }}>{prefix}:</strong>
    {' '}
    <MailLink to={email} title={title}>
      {email}
    </MailLink>
  </span>
)

export default AuthorEmail
