import React from 'react'
import Link from 'gatsby-link'

const style = {
  fontWeight: '900',
}

const spanAttribs = {
  itemProp: 'name',
}

const AuthorName = (props) => (
  <span {...spanAttribs} style={style}>
    {props.name}
  </span>
);


export default AuthorName
