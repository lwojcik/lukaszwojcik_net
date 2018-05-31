import React from 'react'

import Phrases from '../../../data/Phrases';

const ExternalLink = ({ to, title, newWindow, children }) => {
  const isTargetBlank = newWindow === true;
  const targetBlank = isTargetBlank ? { target: '_blank' } : ''
  const linkTitle = isTargetBlank ? `${title}${Phrases.global.newWindowTitleSuffix}` : title; 

  const linkAttributes = {
    rel: 'noopener noreferrer',
  }

  return (
    <a
      href={to}
      title={linkTitle}
      {...targetBlank}
      {...linkAttributes}
    >
      {children}
    </a>
  );
};

export default ExternalLink
