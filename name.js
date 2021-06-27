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