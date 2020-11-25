/* Courtesy of 30 seconds of code: https://www.30secondsofcode.org/js/s/debounce*/
const debounce = (fn, ms = 0) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

const nextFrame = (frame) => {
  const frame1 = "../assets/img/info/me.gif"
  const frame2 = "../assets/img/info/blackandwhite3.png"
  const frame3 = "../assets/img/info/mainframe.jpg"
  switch (frame) {
    case frame1: return frame2
    case frame2: return frame3
    case frame3: return frame1
    default: return frame1
  }
} 

window.addEventListener(
  "mousemove",
  debounce(() => {
    animateGif()
  }, 250)
); 

function animateGif() {
  const frame = $(".animated").attr("src");
  $(".animated").attr("src", nextFrame(frame));
}
