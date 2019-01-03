const SiteConfig = {
  siteUrl: 'https://www.lukaszwojcik.net',
  metaElements: {
    title: 'Łukasz Wójcik – web developer',
    description: 'Web developer from Poland. Homepage, other projects, contact details.',
  },
  pathPrefix: "/",
  indexPage: {
    emailTitle: 'My email',
    pgpPageUrl: '/pgp',
    pgpPageTitle: 'My PGP / GPG encryption key',
  },
  pgpPage: {
    meta: {
      title: 'My PGP key - Łukasz Wójcik',
      description: 'Download and use my PGP key to send me an encrypted message.',
    },
  },
}

module.exports = SiteConfig;
