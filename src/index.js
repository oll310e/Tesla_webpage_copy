import "./style.css";
import { hoverEffect, removeHoverEffect } from "./header-hover";

const header = document.querySelector("header");
header.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("hoverItem")) {
    hoverEffect(e);
  }
});
const container = document.querySelector(".container");
header.addEventListener("mouseleave", (e) => {
  console.log(e.target);
  console.log("leave");
  //   removeHoverEffect();
});
