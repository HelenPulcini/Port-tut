let brightness = 100;
let contrast = 100;
let saturate = 100;
let greyscale = 0;
let opacity = 100;
let sepia = 0;
let invert = 0;
let huerotate = 0;

const customPic = document.getElementById("custom-pic")
const resetCust = document.getElementById("reset-cust");
const resetAll = document.getElementById("reset-all");

const reset1 = document.getElementById("reset1");
const reset2 = document.getElementById("reset2");
const reset3 = document.getElementById("reset3");
const reset4 = document.getElementById("reset4");
const reset5 = document.getElementById("reset5");
const reset6 = document.getElementById("reset6");
const reset7 = document.getElementById("reset7");
const reset8 = document.getElementById("reset8");


const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");
const pic3 = document.getElementById("pic3");
const pic4 = document.getElementById("pic4");
const pic5 = document.getElementById("pic5");
const pic6 = document.getElementById("pic6");
const pic7 = document.getElementById("pic7");
const pic8 = document.getElementById("pic8");


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
const slider7 = document.getElementById("slider7");
const value7 = document.getElementById("slider7value");
const slider8 = document.getElementById("slider8");
const value8 = document.getElementById("slider8value");

const sliderB = document.getElementById("sliderB");
const valueB = document.getElementById("sliderBvalue");
const sliderC = document.getElementById("sliderC");
const valueC = document.getElementById("sliderCvalue");
const sliderG = document.getElementById("sliderG");
const valueG = document.getElementById("sliderGvalue");
const sliderS = document.getElementById("sliderS");
const valueS = document.getElementById("sliderSvalue");
const sliderO = document.getElementById("sliderO");
const valueO = document.getElementById("sliderOvalue");
const sliderT = document.getElementById("sliderT");
const valueT = document.getElementById("sliderTvalue");
const sliderH = document.getElementById("sliderH");
const valueH = document.getElementById("sliderHvalue");
const sliderI = document.getElementById("sliderI");
const valueI = document.getElementById("sliderIvalue");


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

slider7.addEventListener("input", function() {
	value7.innerHTML = slider7.value + " deg";
	huerotate = slider7.value;
    pic7.style.filter = "hue-rotate(" + huerotate + "deg)";
});

slider8.addEventListener("input", function() {
	value8.innerHTML = slider8.value + "%";
	invert = slider8.value;
    pic8.style.filter = "invert(" + invert + "%)";
});




sliderB.addEventListener("input", function() {
	valueB.innerHTML = sliderB.value + "%";
	brightness = sliderB.value;
    customPic.style.filter = "brightness(" + brightness + "%)";
});


sliderC.addEventListener("input", function() {
	valueC.innerHTML = sliderC.value + "%";
	contrast = sliderC.value;
    customPic.style.filter = "contrast(" + contrast + "%)";
});


sliderG.addEventListener("input", function() {
	valueG.innerHTML = sliderG.value + "%";
	greyscale = sliderG.value;
    customPic.style.filter = "grayscale(" + greyscale + "%)";
});


sliderS.addEventListener("input", function() {
	valueS.innerHTML = sliderS.value + "%";
	sepia = sliderS.value;
    customPic.style.filter = "sepia(" + sepia + "%)";
});


sliderO.addEventListener("input", function() {
	valueO.innerHTML = sliderO.value + "%";
	opacity = sliderO.value;
    customPic.style.filter = "opacity(" + opacity + "%)";
});


sliderT.addEventListener("input", function() {
	valueT.innerHTML = sliderT.value + "%";
	saturate = sliderT.value;
    customPic.style.filter = "saturate(" + saturate + "%)";
});

sliderH.addEventListener("input", function() {
	valueH.innerHTML = sliderH.value + " deg";
	huerotate = sliderH.value;
    customPic.style.filter = "hue-rotate(" + huerotate + "deg)";
});

sliderI.addEventListener("input", function() {
	valueI.innerHTML = sliderI.value + "%";
	invert = sliderI.value;
    customPic.style.filter = "invert(" + invert + "%)";
});

const el = document.querySelector("#page");
const link = el.querySelector("img");

function setLink() {
 const input = document.querySelector("input");
 link.setAttribute("src", input.value);
}

function clearLink() {
	const input = document.querySelector("input");
	input.value = ""
}

resetCust.addEventListener("click", function() {
	brightness = 100;
	sliderB.value = 100;
	valueB.innerHTML = sliderB.value + "%";

	contrast = 100;
	sliderC.value = 100;
	valueC.innerHTML = sliderC.value + "%";

	greyscale = 0;
	sliderG.value = 0;
	valueG.innerHTML = sliderG.value + "%";
	
	sepia = 0;
	sliderS.value = 0;
	valueS.innerHTML = sliderS.value + "%";

	opacity = 100;
	sliderO.value = 0;
	valueO.innerHTML = 100 - sliderO.value + "%";

	saturate = 100;
	sliderT.value = 100;
	valueT.innerHTML = sliderT.value + "%";

	huerotate = 0;
	sliderH.value = 0;
	valueH.innerHTML = sliderH.value + "deg";

	invert = 0;
	sliderI.value = 0;
	valueI.innerHTML = sliderI.value + "%";

	updateFilters();
});

function updateFilters() {
	customPic.style.filter =
"brightness(" +
		brightness +
		"%) contrast(" +
		contrast +
		"%) saturate(" +
		saturate +
		"%) grayscale(" +
		greyscale +
		"%) invert(" +
		invert +
		"%) hue-rotate(" +
		huerotate +
		"deg) opacity(" +
		opacity +
		"%) sepia(" +
		sepia + "%)"
}


reset1.addEventListener("click", function() {
		brightness = 100;
		slider1.value = 100;
		value1.innerHTML = slider1.value + "%";
        pic1.style.filter = "brightness(" + brightness + "%)";
	});

	reset2.addEventListener("click", function() {
	    contrast = 100;
	    slider2.value = 100;
	    value2.innerHTML = slider2.value + "%";
	pic2.style.filter = "contrast(" + contrast + "%)";});

	reset3.addEventListener("click", function() {
	    greyscale = 0;
	    slider3.value = 0;
	    value3.innerHTML = slider3.value + "%";
	pic3.style.filter = "grayscale(" + greyscale + "%)";});

	reset4.addEventListener("click", function() {
	    sepia = 0;
	    slider4.value = 0;
	    value4.innerHTML = slider4.value + "%";
	pic4.style.filter = "sepia(" + sepia + "%)";});

	reset5.addEventListener("click", function() {
		opacity = 100;
		slider5.value = 0;
		value5.innerHTML = 100 - slider5.value + "%";
	pic5.style.filter = "opacity(" + opacity + "%)";});

	reset6.addEventListener("click", function() {
		saturate = 100;
		slider6.value = 100;
		value6.innerHTML = slider6.value + "%";
	pic6.style.filter = "saturate(" + saturate + "%)";});

	reset7.addEventListener("click", function() {
		huerotate = 0;
		slider7.value = 0;
		value7.innerHTML = slider7.value + "deg";
	pic7.style.filter = "hue-rotate(" + huerotate + "deg)";});

	reset8.addEventListener("click", function() {
	    invert = 0;
	    slider8.value = 0;
	    value8.innerHTML = slider8.value + "%";
	pic8.style.filter = "invert(" + invert + "%)";});



/*this is for a single reset button that resets all 8 pics at once*/

resetAll.addEventListener("click", function() {
	brightness = 100;
	slider1.value = 100;
	value1.innerHTML = slider1.value + "%";

	contrast = 100;
	slider2.value = 100;
	value2.innerHTML = slider2.value + "%";

	greyscale = 0;
	slider3.value = 0;
	value3.innerHTML = slider3.value + "%";
	
	sepia = 0;
	slider4.value = 0;
	value4.innerHTML = slider4.value + "%";

	opacity = 100;
	slider5.value = 0;
	value5.innerHTML = 100 - slider5.value + "%";

	saturate = 100;
	slider6.value = 100;
	value6.innerHTML = slider6.value + "%";

	huerotate = 0;
	slider7.value = 0;
	value7.innerHTML = slider7.value + "deg";

	invert = 0;
	slider8.value = 0;
	value8.innerHTML = slider8.value + "%";

	updateSingleFilters();
});

function updateSingleFilters() {
	pic1.style.filter = "brightness(" + brightness + "%)";
	pic2.style.filter = "contrast(" + contrast + "%)";
	pic3.style.filter = "grayscale(" + greyscale + "%)";
	pic4.style.filter = "sepia(" + sepia + "%)";
	pic5.style.filter = "opacity(" + opacity + "%)";
	pic6.style.filter = "saturate(" + saturate + "%)";
	pic7.style.filter = "hue-rotate(" + huerotate + "deg)";
	pic8.style.filter = "invert(" + invert + "%)";
}