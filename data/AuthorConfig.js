import photo from './photo.jpg';

const AuthorConfig = {
  name: 'Łukasz Wójcik',
  occupation: 'Web developer',
  location: {
    name: 'Warsaw, Poland',
    url: 'https://goo.gl/maps/KS9TQ',
    title: 'Localization of Warsaw, Poland in Google Maps',
    newWindow: true,
  },
  photo: {
    imgSrc: photo,
    imgAlt: 'My photo',
    imgWidth: 200,
    imgHeight: 200,
  },
  email: 'lwojcik@lukem.net',
};

export default AuthorConfig;
