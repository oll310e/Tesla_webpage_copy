import "./style.css";
import { hoverEffect, removeHoverEffect } from "./header-hover";
import { changeScrollLocation, changeTextOver } from "./textOver-fade";

const html = document.querySelector("html");
const header = document.querySelector("header");
const menuBtn = document.querySelector("#menu_btn");
const menu = document.querySelector(".menu");
const exitMenu = document.querySelector("#exit_menu_part");

window.addEventListener("scroll", (e) => {
  changeScrollLocation(html.scrollTop);
  changeTextOver(html.scrollTop);
});

header.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("hoverItem")) {
    hoverEffect(e);
  }
});

header.addEventListener("mouseleave", (e) => {
  console.log(e.target);
  console.log("leave");
  //   removeHoverEffect();
});

menuBtn.addEventListener("click", function () {
  menu.classList.add("is-active");
});

exitMenu.addEventListener("click", () => {
  menu.classList.remove("is-active");
});
