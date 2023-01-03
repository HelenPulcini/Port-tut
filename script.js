const skillItems = document.querySelectorAll("section.skills .skill");

skillItems.forEach(skill => {
    skill.querySelector(".head").addEventListener("click", () => {
        skill.querySelector(".items").classList.toggle("show-items");
    })
})

const slide = document.querySelector('.slide');

window.onclick = function(event) {
  if (event.target == slide) {
    slide.style.display = "none";
  }
}

const thanks = document.querySelector('.thanks');

thanks.addEventListener("click", function () {
    slide.style.display = "block";
})

const close = document.querySelector('.close');

close.addEventListener("click", function () {
    slide.style.display = "none";
})


function rotate(id) {
    let element = document.getElementById(id);
    let textNode = element.childNodes[0];
    let text = textNode.data;

    let int = setInterval(display, 100);

    function display() {
        text = text.slice(1, text.length) + text[0]; //text substring or text slice will do - slice deals with negative indexes substring treats them as 0 but this doesn't matter here
        //text = text[text.length - 1] + text.substring(0, text.length - 1); you can decide the direction -left or right- by moving the first or the last letter to the end or to the front of the slice
        textNode.data = text; //this takes the new sliced string and displays it
    };
  
}