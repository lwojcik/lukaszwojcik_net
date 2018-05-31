import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col } from 'reactstrap';

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


const IndexPage = () => (
  <Container>
    <Row>
      <Col md="3">
        <AuthorPhoto imgSrc={author.photo.imgSrc} imgAlt={author.photo.imgAlt} />
      </Col>
      <Col md="9">
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
          <AuthorEmail prefix={Phrases.index.emailPrefix} email={author.email} />
          <Separator content={Phrases.global.separator} />
          <Link to={SiteConfig.pgpPage.url} title={SiteConfig.pgpPage.title}>
            {Phrases.index.pgpLinkText}
          </Link>
        </p>
        <SocialLinks list={SocialLinksList} separator={Phrases.global.separator} />
      </Col>
    </Row>
  </Container>
)

export default IndexPage
