gsap.register.Plugin(ScrollTrigger);
import ScrollTrigger, { Trigger } from '../src/ScrollTrigger'

((document, window) => {

function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  ctx.font = "48px";
  ctx.fillText("SK", 10, 50);
}
draw();

 })(document, window)
