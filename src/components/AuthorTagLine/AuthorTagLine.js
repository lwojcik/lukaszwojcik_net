import React from 'react'

import ExternalLink from '../ExternalLink/ExternalLink'

const occupationItemProps = {
  itemProp: 'title',
}

const AuthorTagLine = (props) => (
  <span>
    <span {...occupationItemProps}>
      {props.occupation}
    </span>
    {' '}
    {props.locationPrefix}
    {' '}
    <ExternalLink
      to={props.location.url}
      newWindow={props.location.newWindow}
      title={props.location.title}
    >
      {props.location.name}
    </ExternalLink>
  </span>
);

export default AuthorTagLine
