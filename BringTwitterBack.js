'use strict'
/* BringTwitterBack(); */
var x0 = 0; var x0rx = 0; var x0ry = 0; var x0rs = 0;
var x0c = 0;
const x0t = document.getElementById("Xing0");
const x0s = document.getElementById("x0");
const ixBwStylist = document.getElementById("ixBw").style;

function BringTwitterBack0() {
	x0 += 1; x0c += 1; x0rs = x0 * 5;
  if (x0c === 12) {
    x0t.textContent = "Twitter";
  } else if (x0c === 24) {
    /* for (let x0tmp1 = 0; x0tmp1 < 7; x0tmp1++) {
      x0t.textContent.slice(0, (x0t.textContent.length - 1));
    } */
    x0t.textContent = "X";
    x0c = 0;
  }
}

setInterval(runbt, 5);

function runbt() {
  x0rx = Math.floor(Math.random() * (x0rs * 2 + 1)) - (x0rs + 1);
  x0ry = Math.floor(Math.random() * (x0rs * 2 + 1)) - (x0rs + 1);
  x0rs -= x0rs / 25;
  // x0s.style.transform = "translate(" + x0rx + "px, " + x0ry + "px)";
  document.getElementById("ixBw").style.transform = "translate(" + x0rx + "px, " + x0ry + "px)";
}