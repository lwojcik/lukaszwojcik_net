(() => {
  const transitionTime = 1000;
  const windowWidth = document.body.offsetWidth;

  const camera = new CSSCamera("#space", {
    perspective: windowWidth / 2,
  });

  const getSectionName = (url) => {
    return url === '/'
      ? 'main'
      : url.split('/')[1];
  }

  const getSectionUrl = (name) => {
    return name === 'main'
      ? '/'
      : '/' + name + '/';
  }

  const pushToHistory = (name) => {
    const url = getSectionUrl(name);
    if(typeof history.pushState === 'function') {
      history.pushState({ section: name }, name, url);
    }
  }

  const jumpTo = (name) => {
    const section = document.querySelector("#section-"+name);
    camera.focus(section);
    camera.update(transitionTime);
  }

  const launchCamera = () => {
    const buttonNames = [
      'main',
      'about',
      'software',
      'writing',
      'photography',
      'contact'
    ];

    const sectionName = getSectionName(window.location.pathname);
    jumpTo(sectionName);

    buttonNames.map(name => {
      document.querySelector("#button-"+name).onclick = (event) => {
        event.preventDefault();
        pushToHistory(name);
        jumpTo(name);
      };
    })
  }

  window.onpopstate = function(event) {
    if (event.state && event.state.section) {
      jumpTo(event.state.section);
    }
  }

  const start = () => {
    launchCamera();
  }

  start();
})();
