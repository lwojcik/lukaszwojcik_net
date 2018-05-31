import React from 'react'

import ExternalLink from '../ExternalLink/ExternalLink'
import Separator from '../Separator/Separator'

const styles = {
  display: 'inline',
  listStyle: 'none',
  margin: '0',
  padding: '0',
}

const SocialLinks = ({ list, separator }) => {
  const linkList = list.map(function(link, index) {
    if (index === list.length - 1) {
      return (
        <li key={index} style={styles}>
          <ExternalLink to={link.url} title={link.title} newWindow={true}>
            {link.name}
          </ExternalLink>
        </li>
      );
    } else {
      return (
        <li key={index} style={styles}>
          <ExternalLink to={link.url} title={link.title} newWindow={link.newWindow}>
            {link.name}
          </ExternalLink>
          <Separator content={separator} />
        </li>
      )
    }
  });

  return (
    <div>
      <p style={{ fontWeight: 'bold', display: 'inline' }}>Elsewhere:{' '}</p>
      <ul style={styles}>
        {linkList}
      </ul>
    </div>
  );
};

export default SocialLinks
