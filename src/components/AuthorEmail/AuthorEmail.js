import React from 'react'
import Link from 'gatsby-link'

import MailLink from '../MailLink/MailLink'

const AuthorEmail = (props) => (
  <span>
    <strong>{props.prefix}:</strong>
    {' '}
    <MailLink to={props.email} title={props.title}>
      {props.email}
    </MailLink>
  </span>
)

export default AuthorEmail
