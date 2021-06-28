// menu toggler button
var menu = document.getElementById("menu-toggle");
menu.addEventListener("click", function() {
	this.classList.toggle("active");
	var fs1 =document.getElementById("fs-1");
	var fs2 =document.getElementById("fs-2");
	var fs3 =document.getElementById("fs-3");

	var st1 = window.getComputedStyle(fs1);
	var st2 = window.getComputedStyle(fs2);
	var st3 = window.getComputedStyle(fs3);
	
	var rot1 = st1.getPropertyValue("transform");
	var rot2 = st2.getPropertyValue("transform");
	var rot3 = st3.getPropertyValue("transform");

	if (rot2 == "none" || rot2 == "matrix(1, 0, 0, 1, 0, 0)") {
		fs2.style.transform = "rotate(90deg)";
		fs2.style.marginLeft = "15px";
	} else {
		fs2.style.transform = "rotate(0deg)";
		fs2.style.marginLeft = "0px";
	}
	if (rot1 == "none" || rot1 == "matrix(1, 0, 0, 1, 0, 0)") {
		fs1.style.transform = "rotate(-25deg)";
		fs1.style.marginLeft = "2px";
	} else {
		fs1.style.transform = "rotate(0deg)";
		fs1.style.marginLeft = "0px";
	}
	if (rot3 == "none" || rot3 == "matrix(1, 0, 0, 1, 0, 0)") {
		fs3.style.transform = "rotate(25deg)";
		fs3.style.marginLeft = "2px";
	} else {
		fs3.style.transform = "rotate(0deg)";
		fs3.style.marginLeft = "0px";
	}		
	
	let navElement = this.nextElementSibling;
	if (navElement.style.display == "block") {
		navElement.style.display = "none";
	} else {
		navElement.style.display = "block";
	}

});

// project viewer
var projects = document.getElementsByClassName("proj-title");
var i;
for (i=0; i < projects.length; i++) {
	projects[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.display == "block") {
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}
	});
}