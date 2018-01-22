import React from 'react'
import Link from 'gatsby-link'

import foto from './foto.jpg';

const Photo = () => (
  <img src={foto} alt="My photo" className="img-thumbnail" itemprop="photo" />
)

export default Photo
