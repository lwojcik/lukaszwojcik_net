(() => {
  const camera = () => {
    const transitionTime = 1000;

    const windowWidth = document.body.offsetWidth;
    const cardButton = document.querySelector("#card-button");
    const codeButton = document.querySelector("#code-button");
    const heroButton = document.querySelector("#hero-button");
    const moreButton = document.querySelector("#more-button");
    const buttons = [
      cardButton, codeButton, heroButton, moreButton,
    ];

    const card = document.querySelector("#card");
    const code = document.querySelector("#code");
    const hero = document.querySelector("#hero");
    const more = document.querySelector("#more");

    const restoreButtons = () => {
      buttons.forEach(button => button.classList.add("is-outlined"));
    }

    const camera = new CSSCamera("#space", {
      perspective: windowWidth / 2,
    });

    camera.focus(hero);
    camera.update(transitionTime);

    cardButton.onclick = () => {
      camera.focus(card);
      camera.update(transitionTime);
      restoreButtons();
      cardButton.classList.remove("is-outlined");
    }
    codeButton.onclick = () => {
      camera.focus(code);
      camera.update(transitionTime);
      restoreButtons();
      codeButton.classList.remove("is-outlined");
    }
    heroButton.onclick = () => {
      camera.focus(hero);
      camera.update(transitionTime);
      restoreButtons();
      heroButton.classList.remove("is-outlined");
    }
    moreButton.onclick = () => {
      camera.focus(more);
      camera.update(transitionTime);
      restoreButtons();
      moreButton.classList.remove("is-outlined");
    }
  }

  const start = () => {
    camera();
  }

  start();
})();
