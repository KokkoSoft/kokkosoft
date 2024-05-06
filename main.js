document.addEventListener("DOMContentLoaded", function() {
  var backgroundnum = Math.floor(Math.random() * 11) + 1;
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

var wIw = window.innerWidth();
function isVerticalMobileStyleRequired() {
  if (wIw < 400) {
    document.getElementById("iMSR0").textContent = "KokkoSoftは、\r\n学生のみで構成されたITグループです。";
  } else {
    document.getElementById("iMSR0").textContent = "KokkoSoftは、学生のみで構成されたITグループです。";
  }
}

setInterval(isVerticalMobileStyleRequired, 10);
