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

