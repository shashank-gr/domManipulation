const imgContainer = document.querySelector(".img-container");
const img = document.querySelector("img");

const zoomImg = (e) => {
  // console.log(e.clientX - e.target.offsetLeft);
  // console.log(e.clientY - e.target.offsetTop);
  //co-ordinates of image
  const x = e.clientX - e.target.offsetLeft;
  const y = e.clientY - e.target.offsetTop;
  img.style.transformOrigin = `${x}px ${y}px`;
  img.style.transform = "scale(2)";
};

const backToOriginal = () => {
  img.style.transformOrigin = `centre centre`;
  img.style.transform = "scale(1)";
};
imgContainer.addEventListener("mousemove", zoomImg);
imgContainer.addEventListener("mouseleave", backToOriginal);
