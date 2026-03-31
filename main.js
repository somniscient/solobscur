((document, window) => {

function snapDivs() {
    const fixedDiv = document.querySelector('.fixed');
    const contentWrapper = document.querySelector('.sticky-wrapper');

    if (fixedDiv && contentWrapper) {
        // Get the fixed div's height
        const fixedHeight = fixedDiv.offsetHeight;

        // Apply margin/padding to the content wrapper to avoid overlap
        contentWrapper.style.paddingTop = `${fixedHeight}px`;

        // If you need the relative div to align with a specific edge
        // You can get the fixed div's distance from the left/right/top/bottom
        const fixedTop = fixedDiv.getBoundingClientRect().top;
        const fixedRight = fixedDiv.getBoundingClientRect().right;

        // ... and set the relative-div's position property dynamically
    }
}



// Run on load and window resize
window.addEventListener('load', snapDivs);
window.addEventListener('resize', snapDivs);
  
function draw() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.font = "60px sans-serif";
  ctx.fillText("SK", 10, 50);
}
draw();

 })(document, window)
