"use strict";
const btnicon = document.querySelector(".inner-icon-mobi");
const btnlist = document.querySelector(".khovai");
const btnicon2 = document.querySelector(".fa-solid");
const body = document.querySelector("body");
let show = false;

btnicon.addEventListener("click", function () {
  if (show) {
    btnlist.classList.remove("display");
    show = false;
  } else {
    btnlist.classList.add("display");
    show = true;
  }
});
let show1 = false;
const btnava = document.querySelector(".avatar");
const btnprofile = document.querySelector(".profile");
btnava.addEventListener("click", function () {
  if (show1) {
    btnprofile.classList.add("hidden");
    show1 = false;
  } else {
    btnprofile.classList.remove("hidden");
    show1 = true;
  }
});

let show2 = false;
const btngta = document.querySelector(".show-info");

const btncmt21 = document.querySelector(".cmt2-1");
btncmt21.addEventListener("click", function () {
  if (show2) {
    btngta.classList.remove("display");
    show2 = false;
  } else {
    btngta.classList.add("display");
    show2 = true;
  }
});
let show3 = false;
const btnmine = document.querySelector(".show-mine");
const btncmt51 = document.querySelector(".cmt5-1");

btncmt51.addEventListener("click", function () {
  if (show3) {
    btnmine.classList.remove("display");
    show3 = false;
  } else {
    btnmine.classList.add("display");
    show3 = true;
  }
});
let show4 = false;
const btnshop = document.querySelector("iframe");
const btncmt22 = document.querySelector(".cmt2-2");

btncmt22.addEventListener("click", function () {
  if (show4) {
    btnshop.classList.remove("display");
    show4 = false;
  } else {
    btnshop.classList.add("display");
    show4 = true;
  }
});

const btnscreenshots = document.querySelector(".screenshots");
const btnall = document.querySelector(".all");
const btnartwork = document.querySelector(".artwork");
const btnvideos = document.querySelector(".videos");

const btnscreenshot = document.querySelector(".screenshot");
const btnal = document.querySelector(".al");
const btnartwor = document.querySelector(".artwor");
const btnvideo = document.querySelector(".video");
const event0 = [btnscreenshot, btnal, btnartwor, btnvideo];
const event1 = [btnscreenshots, btnall, btnartwork, btnvideos];
function handle(e) {
  e.classList.remove("hidden");
  for (let i = 0; i < 4; i++) {
    event1[i].classList.add("hidden");
    event0[i].style.color = "#fff";
  }
}
event0.forEach((ev, i) => {
  ev.addEventListener("click", function () {
    handle(ev);
    event1[i].classList.remove("hidden");
    event0[i].style.color = "#5599c0";
  });
});
