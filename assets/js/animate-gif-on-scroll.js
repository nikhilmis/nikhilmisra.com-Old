/* Courtesy of 30 seconds of code: https://www.30secondsofcode.org/js/s/debounce*/
const debounce = (fn, ms = 0) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

window.addEventListener(
  "mousemove",
  debounce(() => {
    animateGif()
  }, 250)
); 

function animateGif() {
  /* Switch to next frame of gif */
  $(".animated").attr("src", "../assets/img/info/me.gif");
}
