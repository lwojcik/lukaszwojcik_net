import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col } from 'reactstrap';
import Helmet from 'react-helmet'

import config from '../../data/SiteConfig';
import Phrases from '../../data/Phrases';
import PGPKey from '../../data/PGPKey';

const PGPPage = () => (
  <section>
    <Helmet
    title={config.pgpPage.meta.title}
    meta={[
      { name: 'description', content: config.pgpPage.meta.title },
      { property: 'og:title', content: config.pgpPage.meta.title },
      { property: 'og:description', content: config.pgpPage.meta.description },
    ]}
    />
    <Container>
      <Row>
        <Col md="12" sm="12">
          <Link to='/'>← back to main page</Link>
          <h1>My PGP / GPG encryption key</h1>
          <p>Use the key below to send me an encrypted message.</p>
          <a className="key-link" href="pgp.asc" title="pgp.asc, 3.05 KB">Download my PGP key</a>
          <pre>{PGPKey.header}</pre>
          <pre>{PGPKey.body}</pre>
        </Col>
      </Row>
    </Container>
  </section>
)

export default PGPPage
