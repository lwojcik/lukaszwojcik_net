(() => {
  const kitteh = () => {
    document.querySelector('.section-main img').src = "/images/photo2.jpg";
  }

  const konami = () => {
    const easter_egg = new Konami();
    easter_egg.code = kitteh;
    easter_egg.load();
  };
  const start = () => {
    konami();
  }

  start();
})();
