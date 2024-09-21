let exit = document.querySelector(".search i");
let searchBox = document.querySelector(".search");
let searchIcon = document.querySelector("nav .right .seachIcon");
exit.addEventListener("click", () => {
    searchBox.style.display = "none";
})

searchIcon.addEventListener("click", () => {
    searchBox.style.display = "block";
})


let ham = document.querySelector(".hamburger");
let exit1 = document.querySelector(".hamburger .header .exit i");
let menu = document.querySelector("nav .right .menu");


exit1.addEventListener("click", () => {
    ham.style.display = "none"
})

menu.addEventListener("click", () => {
    if( ham.style.display != "block"){
        ham.style.display = "block"
    }else{
        ham.style.display = "none"
    }
})


let plus = document.querySelector(".hamburger .content .addmore");
let hidden = document.querySelector(".content .hidden");

plus.addEventListener("click", () => {
    if( hidden.style.display != "block"){
        hidden.style.display = "block"
    }else{
        hidden.style.display = "none"
    }
})


const marquee = document.querySelector('.marquee');

const cloneLogos = marquee.cloneNode(true);

marquee.appendChild(cloneLogos);

const marqueeWidth = marquee.scrollWidth;
const animationDuration = marqueeWidth / 50;

marquee.style.animation = `marquee-animation ${animationDuration}s linear infinite`;


let buttons = document.querySelectorAll(".page-4 .tab-buttons button");

function toggleActive(button){
    for (var i = 0; i < buttons.length; i++){
      buttons[i].classList.remove("active");
    }
    button.classList.add("active");
}


let activebtn = document.querySelector(".tab-buttons .active");
let designbtn = document.querySelector("#Desingbtn");
let developmentbtn = document.querySelector("#developmentbtn");



var activetTab = document.getElementById("active");
var designTab = document.getElementById("Desing");
var developmentTab = document.getElementById("development");

function toggleActive(button) {
    var buttons = document.getElementsByClassName("tab-buttons")[0].getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    button.classList.add("active");
}

function openall() {
    activetTab.style.display = "block";
    designTab.style.display = "none";
    developmentTab.style.display = "none";
}

function opendesign() {
    activetTab.style.display = "none";
    designTab.style.display = "block";
    developmentTab.style.display = "none";
}

function opendevelopment() {
    activetTab.style.display = "none";
    designTab.style.display = "none";
    developmentTab.style.display = "block";
}







let tl = gsap.timeline();
tl.from("nav .logo img,nav .text ,nav .right p, nav .right i ",{
    y:-100,
    duration:0.5 ,
    stagger:0.2,
    opacity:0
})


gsap.from(".page-1 .content-1",{
    opacity:0,
    scale:0.3,
    duration:1.2,
})



gsap.from(".page-2 .clients, .page-2 .marquee-container",{
    scale:0,
    duration:1,
    scrollTrigger:{
        trigger:"page-2",   
        scroller:"body",
        markers:false,
        start: "15% 50%",
        end: "50% 50%",
    }
})
gsap.from(".page-3 .left-1",{
    y:-130,
    opacity:0,
    duration:1.5,
    scrollTrigger:{
        trigger:"page-3",   
        scroller:"body",
        start: "21% 50%",
        end: "50% 50%",
    }
})
gsap.from(".page-3 .right-1",{
    y:130,
    opacity:0,
    duration:1.5,
    scrollTrigger:{
        trigger:"page-3 .right-1",   
        scroller:"body",
        start: "21% 50%",
        end: "50% 50%",
    }
})

gsap.from(".page-4 .header",{
    y:100,
    opacity:0,
    duration:1.3,
    scrollTrigger:{
        trigger:"page-4 ",   
        scroller:"body",
        start: "31% 50%",
        end: "50% 50%",
        
    }
})

gsap.from(".page-4 .tab-buttons",{
    y:100,
    opacity:0,
    duration:1.3,
    scrollTrigger:{
        trigger:"page-4 ",   
        scroller:"body",
        start: "33% 50%",
        end: "50% 50%",
    }
})
gsap.from(".page-4 .main-contentBox",{
    y:100,
    opacity:0,
    duration:1.3,
    scrollTrigger:{
        trigger:"page-4 ",   
        scroller:"body",
        start: "36% 50%",
        end: "50% 50%",
    }
})

gsap.from(".page-5 .header-2",{
    y:100,
    opacity:0,
    duration:1.3,
    scrollTrigger:{
        trigger:"page-5 ",   
        scroller:"body",
        start: "54% 50%",
        end: "60% 50%",
    }
})
gsap.from(".page-5 .services",{
    y:150,
    opacity:0,
    duration:.9,
    scrollTrigger:{
        trigger:"page-5 ",   
        scroller:"body",
        start: "55% 50%",
        end: "65% 50%",
    }
})
gsap.from(".page-6 .header-2",{
    y:100,
    opacity:0,
    duration:1.3,
    scrollTrigger:{
        trigger:"page-6 ",   
        scroller:"body",
        start: "65% 50%",
        end: "70% 50%",
    }
})
gsap.from(".page-6 .left",{
    x:-100,
    duration:1.2,
    opacity:0,
    scrollTrigger:{
        trigger:"page-6 ",   
        scroller:"body",
        start: "68% 50%",
        end: "70% 50%",
    }
})
gsap.from(".page-6 .right .box",{
    x:100,
    duration:1.2,
    opacity:0,
    stagger:.2,
    scrollTrigger:{
        trigger:"page-6 ",   
        scroller:"body",
        start: "68% 50%",
        end: "70% 50%",
    }
})


gsap.from(".page-7 .header-7",{
    y:100,
    opacity:0,
    duration:1.3,
    scrollTrigger:{
        trigger:"page-7 ",   
        scroller:"body",
        start: "75% 50%",
        end: "70% 50%",
    }
})
gsap.from(".page-7 .content-7 .circle-box, .page-7 button",{
    scale:0,
    opacity:0,
    duration:.8,
    scrollTrigger:{
        trigger:"page-7 ",   
        scroller:"body",
        start: "77% 50%",
        end: "70% 50%",
    }
})

gsap.from(".page-8 .header-2 .centre .left-3",{
    x:-50,
    opacity:0,
    duration:1.3,
    scrollTrigger:{
        trigger:"page-8",   
        scroller:"body",
        start: "87% 50%",
        end: "70% 50%", 
    }
})

gsap.from(".page-8 button",{
    x:50,
    opacity:0,
    duration:1.3,
    scrollTrigger:{
        trigger:"page-8 ",   
        scroller:"body",
        start: "87% 50%",
        end: "70% 50%", 
    }
})

gsap.from(".card-head .cards", {
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".card-head",   
        scroller: "body",
        start: "10% 50%",
        end: "100% 50%",
    }
})
