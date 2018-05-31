import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col } from 'reactstrap';
import Helmet from 'react-helmet'

import Author from '../../data/AuthorConfig';
import SiteConfig from '../../data/SiteConfig';
import Phrases from '../../data/Phrases';
import SharedMetaTags from '../../data/SharedMetaTags';
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
      { property: 'og:url', content: SiteConfig.siteUrl },
    ].concat(SharedMetaTags.meta)}
    link={SharedMetaTags.link}
    />
    <Container>
      <Row>
        <Col md="3" sm="12">
          <AuthorPhoto imgSrc={Author.photo.imgSrc} imgAlt={Author.photo.imgAlt} />
        </Col>
        <Col md="9" sm="12">
          <h1>
            <AuthorName name={Author.name} />
          </h1>
          <p>
            <AuthorTagLine
              occupation={Author.occupation}
              locationPrefix={Phrases.index.locationPrefix}
              location={Author.location}
            />
          </p>
          <p>
            <AuthorEmail
              prefix={Phrases.index.emailPrefix}
              email={Author.email}
              title={SiteConfig.indexPage.emailTitle}
            />
            <Separator content={Phrases.global.separator} />
            <Link
              to={SiteConfig.indexPage.pgpPageUrl}
              title={SiteConfig.indexPage.pgpPageTitle}
              style={{ display: 'inline-block' }}
            >
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
