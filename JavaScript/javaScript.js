const hamburgerMenu = document.querySelector(".hamburgerMenu");
const openMenu = document.querySelector(".openMenu");

hamburgerMenu.addEventListener('click', function(){

    hamburgerMenu.classList.toggle("open");
    openMenu.classList.toggle("open");
    
});

const prdMenu = document.querySelector("#prd-menu");
const showPrd = document.querySelector(".hidden-product");

const cmpMenu = document.querySelector("#cmp-menu");
const showCmp = document.querySelector(".hidden-company");

const cncMenu = document.querySelector("#cnc-menu");
const showCnc = document.querySelector(".hidden-connect");

prdMenu.addEventListener('click', function () {
    showPrd.classList.toggle("show");
});

cmpMenu.addEventListener('click', function () {
    showCmp.classList.toggle("show");
    
});

cncMenu.addEventListener('click', function () {
    showCnc.classList.toggle("show");
    
});