import "./style.css";
import { hoverEffect, removeHoverEffect } from "./header-hover";
import { changeScrollLocation } from "./textOver-fade";

const html = document.querySelector("html");
const header = document.querySelector("header");

window.addEventListener("scroll", (e) => {
  changeScrollLocation(html.scrollTop);
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
