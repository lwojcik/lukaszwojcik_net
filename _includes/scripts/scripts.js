(() => {
  const transitionTime = 1000;

  const windowWidth = document.body.offsetWidth;

  const camera = new CSSCamera("#space", {
    perspective: windowWidth / 2,
  });

  const jumpTo = (name) => {
    const button = document.querySelector("#button-"+name);
    const section = document.querySelector("#section-"+name);
    console.log(section);
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

    jumpTo('main');

    buttonNames.map(name => {
      document.querySelector("#button-"+name).onclick = () => {
        jumpTo(name);
      };
    })
  }

  const start = () => {
    launchCamera();
  }

  start();
})();
