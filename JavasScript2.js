// Scroll header marquee logo navbar heading Section Starts

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
});

