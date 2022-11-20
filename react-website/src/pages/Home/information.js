window.addEventListener("scroll", () => {
  const info = document.querySelector(".information-section");
  const chess = document.querySelector(".chess");
  const bulb = document.querySelector(".bulb");

  if(info.getBoundingClientRect().top <= (window.innerHeight / 10 * 1)) {
    info.classList.add("animation");
    chess.classList.add("animation");
    bulb.classList.add("animation");
  }

  const wheelContainer = document.querySelector(".second-animation");
  const wheel = document.querySelector(".second-wheel");
  const directionSection = document.querySelector(".direction-section");
  const line = document.querySelectorAll(".direction-line");

  if(wheelContainer.getBoundingClientRect().top <= (window.innerHeight - wheelContainer.clientHeight)) {
    wheel.classList.add("second-animation");
    directionSection.classList.add("animation");
    setTimeout(() => {
      line.forEach(element => {
        element.classList.add("animation");
      })
    }, 2000);
  }
})