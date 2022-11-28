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
  const wheelOutside = document.querySelector(".second-outside-wheel");
  const wheelInside = document.querySelector(".second-inside-wheel");
  const directionSection = document.querySelector(".direction-section");
  const blocks = document.querySelectorAll(".direction-block");
  const circle = document.querySelector(".circle");
  const titles = Array.from(document.querySelectorAll(".block-title"));
  const images = Array.from(document.querySelectorAll(".block-img"));
  const firstBlock = document.querySelector(".firstBlock");
  const secondBlock = document.querySelector(".secondBlock");
  const thirdBlock = document.querySelector(".thirdBlock");

  if(wheelContainer.getBoundingClientRect().top <= (window.innerHeight / 2)) {
    wheelOutside.classList.add("second-outside-animation");
    wheelInside.classList.add("second-inside-animation");
    directionSection.classList.add("animation");
    setTimeout(() => {
      blocks.forEach(e => {
        e.style.opacity = 1;
      })
      circle.style.zIndex = 98;
      setTimeout(() => {
        firstBlock.classList.add("animation");
        secondBlock.classList.add("animation");
        thirdBlock.classList.add("animation");
        for(let i = 0; i < titles.length; i++) {
          titles[i].style.opacity = 1;
          images[i].style.opacity = 1;
        }
      }, 500);
    }, 1500);
  }

  const article = document.querySelector(".direction-article");
  const articleBlock = document.querySelector(".article-block");
  let blocksArr = [firstBlock, secondBlock, thirdBlock];

  blocksArr.forEach(e => {
    e.addEventListener("click", () => {
      article.style.top = `${document.documentElement.scrollTop}px`;
      article.style.display = "block";
      document.documentElement.style.overflow = "hidden";
    })
  })

  article.addEventListener("click", (e) => {
    if(e.target === articleBlock) {
      return;
    } else {
      article.style.display = "none";
      document.documentElement.style.overflow = "auto";
    }
  })

})