(() => {
  const transitionTime = 1000;
  const windowWidth = document.body.offsetWidth;

  const camera = new CSSCamera("#space", {
    perspective: windowWidth / 2,
  });

  const suffix = ' – Łukasz Wójcik';

  const sections = [
    {
      name: 'main',
      title: 'Łukasz Wójcik – web developer',
    },
    {
      name: 'about',
      title: 'About me' + suffix,
    },
    {
      name: 'software',
      title: 'Software' + suffix,
    },
    {
      name: 'writing',
      title: 'Writing' + suffix,
    },
    {
      name: 'photography',
      title: 'Photography' + suffix,
    },
    {
      name: 'contact',
      title: 'Contact' + suffix,
    },
  ];

  const getSectionNames = () =>
    sections.map(section => section.name);

  const getSectionName = (url) =>
    url === '/'
      ? 'main'
      : url.split('/')[1];

  const getSectionUrl = (sectionName) =>
    sectionName === 'main' || !sectionName
      ? '/'
      : '/' + sectionName + '/';

  const setPageTitle = (sectionName) => {
    const pageTitle = sections.filter(section =>
      section.name === sectionName)[0].title;
    document.title = pageTitle;
  }

  const pushToHistory = (sectionName) => {
    const url = getSectionUrl(sectionName);
    if(history && typeof history.pushState === 'function') {
      history.pushState({ section: sectionName }, sectionName, url);
    }
  }

  const jumpTo = (sectionName) => {
    const section = document.querySelector('#section-'+sectionName);
    camera.focus(section);
    camera.update(transitionTime);
  }

  const switchSelection = (sectionName) => {
    const selectedItem = document.querySelector('menu a.selected');
    if (selectedItem) {
      selectedItem.classList.remove('selected');
    }
    document.querySelector('menu a#button-'+sectionName).classList.add('selected');
  }

  const launchCamera = () => {
    const buttonNames = getSectionNames();
    const sectionName = getSectionName(window.location.pathname);

    jumpTo(sectionName);

    buttonNames.map(buttonName => {
      document.querySelector("#button-"+buttonName).onclick = (event) => {
        event.preventDefault();
        setPageTitle(buttonName);
        pushToHistory(buttonName);
        switchSelection(buttonName);
        jumpTo(buttonName);
      };
    })
  }

  window.onpopstate = function(event) {
    if (event.state && event.state.section) {
      const sectionName = event.state.section;
      setPageTitle(sectionName);
      jumpTo(sectionName);
    }
  }

  const start = () => {
    launchCamera();
  }

  start();
})();
