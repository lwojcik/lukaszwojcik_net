import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col } from 'reactstrap';
import Helmet from 'react-helmet'

import config from '../../data/SiteConfig';
import Phrases from '../../data/Phrases';
import PGPKey from '../../data/PGPKey';

import DownloadButton from '../components/DownloadButton/DownloadButton'

const styles = {
  h1: {
    margin: '2rem 0',
  },
  p: {
    margin: '2rem 0',
  },
  pgpKeyBody: {
    marginTop: '2rem',
  }
}

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
          <Link to='/'>{Phrases.pgp.backToIndex}</Link>
          <h1 style={styles.h1}>{Phrases.pgp.title}</h1>
          <p style={styles.p}>{Phrases.pgp.text}</p>
          <DownloadButton
            url={Phrases.pgp.downloadBtn.url}
            text={Phrases.pgp.downloadBtn.text}
          />
          <pre>{PGPKey.header}</pre>
          <pre style={styles.pgpKeyBody}>{PGPKey.body}</pre>
        </Col>
      </Row>
    </Container>
  </section>
)

export default PGPPage
