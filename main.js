document.addEventListener("DOMContentLoaded", function() {
  var backgroundnum = Math.floor(Math.random() * 9) + 1;
  var background = "./imge/background/" + backgroundnum + ".jpg";
        
  var firstSticky = document.getElementById("FirstSticky");
  firstSticky.style.backgroundImage = "url('" + background + "')";
})

var dialog = document.getElementById("dialog");
dialog.style.display ="none";
function hjyan(){
    $('.dia').fadeIn();
		dialog.style.display ="block";
	}
    function toziru(){
		dialog.style.display ="none";
        $('.dia').fadeOut();
    }
function otu(){
  alert("作成中です。");
}

/* BringTwitterBack(); */
var x0 = 0; var x0rx = 0; var x0ry = 0; var x0rs = 0;
var x0t = document.getElementById("x0").textContent;
var x0s = document.getElementById("x0").style;
function BringTwitterBack0() {
	x0 += 1; x0rs = x0 * 2;
	x0rx = Math.floor(Math.random() * (x0rs * 2 + 1) - (x0rs + 1);
	x0ry = Math.floor(Math.random() * (x0rs * 2 + 1) - (x0rs + 1);
}
