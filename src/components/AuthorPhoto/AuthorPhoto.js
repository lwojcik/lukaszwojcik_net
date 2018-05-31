import React from 'react'
import Link from 'gatsby-link'

const style = {
  display: 'block',
  margin: '0 auto',
  padding: '.25rem',
  backgroundColor: '#fff',
  border: '1px solid #dee2e6',
  borderRadius: '.25rem',
  maxWidth: '100%',
  height: 'auto',
}

const attributes = {
  itemProp: 'photo'
}

const AuthorPhoto = ({ imgSrc, imgAlt }) => (
  <img {...attributes} style={style} src={imgSrc} alt={imgAlt} />
)

export default AuthorPhoto
