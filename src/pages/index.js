import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col } from 'reactstrap';

import authorConfig from '../../data/Author';

import AuthorName from '../components/AuthorName/AuthorName';
import AuthorPhoto from '../components/AuthorPhoto/AuthorPhoto';
import AuthorTagLine from '../components/AuthorTagLine/AuthorTagLine';
import AuthorEmail from '../components/AuthorEmail/AuthorEmail';
import SocialLinks from '../components/SocialLinks/SocialLinks';


const IndexPage = () => (
  <Container>
    <Row>
      <Col md="3">
        <AuthorPhoto />
      </Col>
      <Col md="9">
        <AuthorName />
        <AuthorTagLine />
        <AuthorEmail />
        <SocialLinks />
      </Col>
      
        <div class="col-md-3 text-center">
          <img src="img/foto.jpg" alt="My photo" class="img-thumbnail" itemprop="photo" />
          </div>
          <div class="col-md-9">
            <h1>
              <span itemprop="name">Łukasz Wójcik</span>
            </h1>
            <p>
              <span itemprop="title">Web developer</span> based in <a href="https://goo.gl/maps/KS9TQ" title="Localization of Warsaw, Poland in Google Maps - opens in a new window" target="_blank" rel="noopener noreferrer"><span itemprop="locality">Warsaw</span>, <span class="country-name">Poland</span></a>
            </p>
            <p><strong>E-mail:</strong> <a href="/cdn-cgi/l/email-protection#4b232e2727240b273e202a38313c242128222065252e3f" title="My email"><span class="__cf_email__" data-cfemail="533b363f3f3c133f2638322029243c39303a387d3d3627">[email&#160;protected]</span></a> <span class="separator">&#8226;</span> <a href="/pgp" class="pgp" title="My PGP encryption key">PGP key</a></p>
            <p><strong>Elsewhere:</strong> <a href="https://12photos.eu" target="_blank" rel="noopener noreferrer" title="My personal photo gallery - opens in a new window">12photos</a> <span class="separator">&#8226;</span> <a href="https://500px.com/lwojcik" target="_blank" rel="noopener noreferrer" title="My 500px photography selection - opens in a new window">500px</a> <span class="separator">&#8226;</span> <a href="https://crowdin.com/profile/lwojcik" target="_blank" rel="noopener noreferrer" title="My Crowdin translator profile - opens in a new window">Crowdin</a> <span class="separator">&#8226;</span> <a href="https://github.com/lwojcik" target="_blank" rel="noopener noreferrer" title="My public code repositories on GitHub - opens in a new window">GitHub</a> <span class="separator">&#8226;</span> <a href="https://www.linkedin.com/in/lukaszwojcik" rel="noopener noreferrer" target="_blank" title="My LinkedIn résumé - opens in a new window">LinkedIn</a></p>
          </div>
    </Row>
  </Container>
)

export default IndexPage
