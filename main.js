((document, window) => {

function draw() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.font = "3.0em";
  ctx.fillText("SK", 10, 50);
}
draw();

 })(document, window)
