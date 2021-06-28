// left margin of home btn
// var screenwidth = screen.width;
// var homebtn = document.getElementById("home-btn");
// var btnwidth = homebtn.offsetWidth;
// var screenhalf = screenwidth/2;
// var btnhalf = btnwidth/2;
// var marginleft = screenhalf - btnhalf + 50;

// homebtn.style.marginLeft = marginleft + "px";

// test functions
// function moreClick () {
// 	var sec = document.getElementsByClassName("nav-link");
// 	var sec1 = document.getElementById("about-sec");	
// 	alert(sec[6].offsetTop);
// 	alert(sec1.offsetTop);
// 	alert(window.pageYOffset);
// 	alert(document.documentElement.scrollHeight);
// }


// change svg fill color when background matches the fill
// var bgcolor = document.getElementById("about-sec").style.backgroundColor;
// var svgs = document.getElementsByClassName("hover-svg");
// var docheight = document.documentElement.scrollHeight;
// do {
// 	for (i=0; i < svgs.length; i++) {
// 		// height of the svg
// 		var svgheight = svgs[i].offsetTop;
// 		// height of about section
// 		var aboutheight = document.getElementById("about-sec").offsetTop;
// 		// scroll position
// 		var scrlheight = window.pageYOffset;
// 		// height of about section from top
// 		var hight = aboutheight - scrlheight;
// 		// height of next section
// 		var nexthight = document.getElementById("works").offsetTop;
// 		// change color if same
// 		var fill = svgs[i].style.fill;
// 		if (hight <= svgheight && hight > 0) {
// 				if (fill == bgcolor) {
// 					svgs[i].style.fill = '#DC2B1C';
// 			};
// 		} else {
// 			svgs[i].style.fill = fill;
// 		};

// 	};
// } while (scrlheight < docheight);

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
	} else {
		fs2.style.transform = "rotate(0deg)";
	}
	if (rot1 == "none" || rot1 == "matrix(1, 0, 0, 1, 0, 0)") {
		fs1.style.transform = "rotate(-45deg)";
	} else {
		fs1.style.transform = "rotate(0deg)";
	}
	if (rot3 == "none" || rot3 == "matrix(1, 0, 0, 1, 0, 0)") {
		fs3.style.transform = "rotate(45deg)";
	} else {
		fs3.style.transform = "rotate(0deg)";
	}		
	// alert(rot2 + rot1 + rot3);

});


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