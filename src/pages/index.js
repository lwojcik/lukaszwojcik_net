import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col } from 'reactstrap';
import Helmet from 'react-helmet'

import author from '../../data/author';
import SiteConfig from '../../data/SiteConfig';
import Phrases from '../../data/Phrases';
import SocialLinksList from '../../data/SocialLinksList';

import AuthorName from '../components/AuthorName/AuthorName';
import AuthorPhoto from '../components/AuthorPhoto/AuthorPhoto';
import AuthorTagLine from '../components/AuthorTagLine/AuthorTagLine';
import AuthorEmail from '../components/AuthorEmail/AuthorEmail';
import Separator from '../components/Separator/Separator'
import SocialLinks from '../components/SocialLinks/SocialLinks';

const sectionAttributes = {
  itemScope: 'true',
  itemType: 'http://data-vocabulary.org/Person',
}

const IndexPage = ({ data }) => (
  <section {...sectionAttributes}>
    <Helmet
    title={data.site.siteMetadata.title}
    meta={[
      { name: 'description', content: data.site.siteMetadata.description },
      { property: 'og:title', content: data.site.siteMetadata.title },
      { property: 'og:description', content: data.site.siteMetadata.description },
    ]}
    />
    <Container>
      <Row>
        <Col md="3" sm="12">
          <AuthorPhoto imgSrc={author.photo.imgSrc} imgAlt={author.photo.imgAlt} />
        </Col>
        <Col md="9" sm="12">
          <h1>
            <AuthorName name={author.name} />
          </h1>
          <p>
            <AuthorTagLine
              occupation={author.occupation}
              locationPrefix={Phrases.index.locationPrefix}
              location={author.location}
            />
          </p>
          <p>
            <AuthorEmail prefix={Phrases.index.emailPrefix} email={author.email} title={SiteConfig.indexPage.emailTitle} />
            <Separator content={Phrases.global.separator} />
            <Link to={SiteConfig.indexPage.pgpPageUrl} title={SiteConfig.indexPage.pgpPageTitle} style={{ display: 'inline-block' }}>
              {Phrases.index.pgpLinkText}
            </Link>
          </p>
          <SocialLinks list={SocialLinksList} separator={Phrases.global.separator} />
        </Col>
      </Row>
    </Container>
  </section>
)

export default IndexPage

export const query = graphql`
  query MetaElementsQuery {
    site {
      siteMetadata {
        title,
        description
      }
    }
  }
`
