function btnClick () {
	document.getElementById("home").style.display = "none";
	var about = document.getElementById("about-sec");
	about.scrollIntoView();
	about.style.display = "block";
	about.style.position = "absolute";
	about.style.top = "0%";
	about.style.left = "0%";
	var nav = document.getElementById("navigation-left");
	nav.style.position = "absolute";
	// nav.style.transform = "translateY(20vw)"
	nav.style.float = "left"
	var nav1 = document.getElementById("navigation-right");
	// nav1.style.position = "absolute";
	nav1.style.float = "left"
	// nav1.style.transform = "translateY(20vw)"
}

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