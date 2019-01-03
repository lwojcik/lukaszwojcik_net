import Author from './AuthorConfig';

const SharedMetaTags = {
  meta: [
    {
      property: 'og:image',
      content: Author.photo.imgSrc,
    },
    {
      property: 'og:image:width',
      content: Author.photo.imgWidth,
    },
    {
      property: 'og:image:height',
      content: Author.photo.imgHeight,
    },
    {
      name: 'msapplication-TileColor',
      color: '#000000',
    },
    {
      name: 'theme-color',
      color: '#000000',
    },
  ],
  link: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'mainfest',
      href: '/site.webmanifest',
    },
    {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
      color: '#000000',
    },
  ],
}

export default SharedMetaTags;
