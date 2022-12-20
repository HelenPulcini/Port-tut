// reviews section

const reviews = [
    {
        id: 1,
        fname: "Leticia Hunter",
        job: "Web Developer",
        img: "/Project5/Images/person-1.png",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet incidunt corporis sed ill
        laborum libero, natus qui provident ducimus distinctio.`
    },
    {
        id: 2,
        fname: "Jeffery Romero",
        job: "Software engineer",
        img: "/Project5/Images/person-2.png",
        text: `Aut voluptatum voluptatem ut dicta magnam ab accusamus animi hic atque minima ut minima temporibus non accusamus recusandae qui mollitia odio. Eos repellat omnis sit aliquam eveniet in internos blanditiis id assumenda dolorem ex nihil consequatur.`
    },
    {
        id: 3,
        fname: "Ivy Garrison",
        job: "Project Manager",
        img: "/Project5/Images/person-3.png",
        text: `Qui expedita quia aut reprehenderit facilis non voluptatem consequatur! Ab beatae quaerat ut suscipit atque ut modi deleniti ut velit fugit qui necessitatibus modi.`
    },
    {
        id: 4,
        fname: "Ulises Holmes",
        job: "Web Designer",
        img: "/Project5/Images/person-4.png",
        text: `qui tempore commodi qui consequuntur distinctio ea minus nihil est optio labore. Qui reiciendis possimus ut galisum dolorem sed quisquam deserunt a molestiae suscipit et iusto saepe.`
    },
    {
        id: 5,
        fname: "Elise Gallegos",
        job: "UX designer",
        img: "/Project5/Images/person-5.png",
        text: `Ab beatae quaerat ut suscipit atque ut modi deleniti ut velit fugit qui necessitatibus modi.

        At ipsa fuga et quibusdam nesciunt cum voluptatem sunt aut quod eaque et sint fuga. Aut ipsa soluta et cupiditate quod et deserunt reiciendis.`
    }
]

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

document.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.fname;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);

});

prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);

});

randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson(currentItem);

});

// dropdown menu

const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".drop");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
        btns.forEach(function (btn) {
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        articles.forEach(function (article) {
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }

});

// navbar

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

/*navToggle.addEventListener("click", function () {   
if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");}
else {links.classList.add("show-links");}
});*/

//the above can be written in one line

navToggle.addEventListener("click", function () {
    
   links.classList.toggle("show-links");
    
    });
