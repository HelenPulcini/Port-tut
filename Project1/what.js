let brightness = 100;
let contrast = 100;
let saturate = 100;
let greyscale = 0;
let opacity = 100;
let sepia = 0;

const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");
const pic3 = document.getElementById("pic3");
const pic4 = document.getElementById("pic4");
const pic5 = document.getElementById("pic5");
const pic6 = document.getElementById("pic6");

const slider1 = document.getElementById("slider1");
const value1 = document.getElementById("slider1value");
const slider2 = document.getElementById("slider2");
const value2 = document.getElementById("slider2value");
const slider3 = document.getElementById("slider3");
const value3 = document.getElementById("slider3value");
const slider4 = document.getElementById("slider4");
const value4 = document.getElementById("slider4value");
const slider5 = document.getElementById("slider5");
const value5 = document.getElementById("slider5value");
const slider6 = document.getElementById("slider6");
const value6 = document.getElementById("slider6value");

slider1.addEventListener("input", function() {
	value1.innerHTML = slider1.value + "%";
	brightness = slider1.value;
    pic1.style.filter = "brightness(" + brightness + "%)";
});


slider2.addEventListener("input", function() {
	value2.innerHTML = slider2.value + "%";
	contrast = slider2.value;
    pic2.style.filter = "contrast(" + contrast + "%)";
});


slider3.addEventListener("input", function() {
	value3.innerHTML = slider3.value + "%";
	greyscale = slider3.value;
    pic3.style.filter = "grayscale(" + greyscale + "%)";
});


slider4.addEventListener("input", function() {
	value4.innerHTML = slider4.value + "%";
	sepia = slider4.value;
    pic4.style.filter = "sepia(" + sepia + "%)";
});


slider5.addEventListener("input", function() {
	value5.innerHTML = slider5.value + "%";
	opacity = slider5.value;
    pic5.style.filter = "opacity(" + opacity + "%)";
});


slider6.addEventListener("input", function() {
	value6.innerHTML = slider6.value + "%";
	saturate = slider6.value;
    pic6.style.filter = "saturate(" + saturate + "%)";
});


// function satFilter() {
//     pic6.style.filter = "saturate(" + saturate + "%)";
// }
// slider6.addEventListener("input", function() {
// 	value6.innerHTML = slider6.value + "%";
// 	saturate = slider6.value;
// 	satFilter();
// });