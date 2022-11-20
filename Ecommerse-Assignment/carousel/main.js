const imgContainer = document.querySelector(".img-container");
const imgs = document.querySelectorAll("img");
let idx = 0;

const loopThroughImg = () => {
  const length = imgs.length;

  if (idx > length - 1) {
    idx = 0;
  }
  imgContainer.style.transform = `translateX(-${idx * 500}px)`;
  idx++;
};

setInterval(loopThroughImg, 2000);
