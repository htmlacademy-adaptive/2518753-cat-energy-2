var e=document.querySelector(".main-nav "),a=document.querySelector(".main-header__burger"),s=document.querySelector(".map__picture"),r=document.querySelector(".map__iframe"),n=document.querySelector(".main-header__burger");n.classList.remove("main-header__burger--nojs");e.classList.remove("main-nav--nojs");s.classList.remove("map__picture--nojs");r.classList.remove("map__iframe--nojs");a.addEventListener("click",()=>{e.classList.contains("main-nav--closed")?(e.classList.remove("main-nav--closed"),e.classList.add("main-nav--opened"),a.classList.add("main-header__burger--active")):(a.classList.remove("main-header__burger--active"),e.classList.add("main-nav--closed"),e.classList.remove("main-nav--opened"))});
