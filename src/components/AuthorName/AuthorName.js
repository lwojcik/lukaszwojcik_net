import React from 'react'

const attributes = {
  itemProp: 'name',
}

const AuthorName = ({ name }) => (
  <span {...attributes}>
    {name}
  </span>
);


export default AuthorName
