import React from 'react'

import ExternalLink from '../ExternalLink/ExternalLink'
import Separator from '../Separator/Separator'

const styles = {
  display: 'inline',
  listStyle: 'none',
  margin: '0',
  padding: '0',
}

const SocialLinks = ({ list }) => {
  const linkList = list.map(function(link, index) {
    if (index === list.length - 1) {
      return (
        <li key={index} style={styles}>
          <ExternalLink to={link.url}>
            {link.name}
          </ExternalLink>
        </li>
      );
    } else {
      return (
        <li key={index} style={styles}>
          <ExternalLink to={link.url}>
            {link.name}
          </ExternalLink>
          <Separator />
        </li>
      )
    }
  });

  return ( 
    <ul style={styles}>
      {linkList}
    </ul>
  );
};

export default SocialLinks
