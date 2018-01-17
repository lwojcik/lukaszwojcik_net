import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <section className="page">
    <div className="container">
        <div className="row">
            <div className="col-md-3 text-center">
              <img src="img/foto.jpg" alt="My photo" class="img-thumbnail" itemprop="photo" />
            </div>
            <div className="col-md-9">
              <h1><span itemprop="name">Łukasz Wójcik</span></h1>
              <p><span itemprop="title">Web developer</span> based in <a href="https://goo.gl/maps/KS9TQ" title="Localization of Warsaw, Poland in Google Maps - opens in a new window" target="_blank" rel="noopener noreferrer"><span itemprop="locality">Warsaw</span>, <span class="country-name">Poland</span></a></p>
              <p><strong>E-mail:</strong> <a href="mailto:hello@lukaszwojcik.net" title="My email">hello@lukaszwojcik.net</a> <span class="separator">&#8226;</span> <Link to="/pgp" class="pgp" title="My PGP encryption key">PGP key</Link></p>
              <p><strong>Elsewhere:</strong> <a href="https://500px.com/lwojcik" target="_blank" rel="noopener noreferrer" title="My 500px photography selection - opens in a new window">500px</a> <span class="separator">&#8226;</span> <a href="https://crowdin.com/profile/lwojcik" target="_blank" rel="noopener noreferrer" title="My Crowdin translator profile - opens in a new window">Crowdin</a> <span class="separator">&#8226;</span> <a href="https://www.flickr.com/photos/lwojcik" target="_blank" rel="noopener noreferrer" title="My photography collection on Flickr - opens in a new window">Flickr</a> <span class="separator">&#8226;</span> <a href="https://github.com/lwojcik" target="_blank" rel="noopener noreferrer" title="My public code repositories on GitHub - opens in a new window">GitHub</a> <span class="separator">&#8226;</span> <a href="https://www.linkedin.com/in/lukaszwojcik" rel="noopener noreferrer" target="_blank" title="My LinkedIn résumé - opens in a new window">LinkedIn</a></p>
            </div>
        </div>
    </div>
  </section>
)

export default IndexPage
