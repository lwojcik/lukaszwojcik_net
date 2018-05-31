import React from 'react'

import ExternalLink from '../ExternalLink/ExternalLink'

import './DownloadButton.css';

const DownloadButton = ({ list, separator }) => {
  return (
    <a className="downloadButton" href="pgp.asc" title="pgp.asc, 3.05 KB">Download my PGP key</a>
  );
};

export default DownloadButton
