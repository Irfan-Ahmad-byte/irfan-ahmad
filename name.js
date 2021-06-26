
var screenwidth = screen.width;
var homebtn = document.getElementById("home-btn");
var btnwidth = homebtn.offsetWidth;
var screenhalf = screenwidth/2;
var btnhalf = btnwidth/2;
var marginleft = screenhalf - btnhalf;

homebtn.style.marginLeft = marginleft + "px";

var coll = document.getElementsByClassName("title");
var i;
for (i=0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.display == "block") {
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}
	});
}