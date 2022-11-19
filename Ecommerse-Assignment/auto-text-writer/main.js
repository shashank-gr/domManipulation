const text = "Hi All, check out my auto text writer feauture. !!!";
let index = 0;

const textWriter = () => {
  // document.querySelector("body").textContent = text.substring(0, index);//both method works
  document.querySelector("body").textContent = text.slice(0, index);

  index++;
  if (index > text.length) {
    index = 0;
  }
};

setInterval(textWriter, 125);
