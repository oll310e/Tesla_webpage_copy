export function hoverEffect(e) {
  let rect = e.target.getBoundingClientRect();
  moveHoverEffect(rect);
}

let hover = document.createElement("div");
hover.classList.add("hoverBar");
let container = document.querySelector(".container");
container.appendChild(hover);

function moveHoverEffect(rect) {
  let width = rect.right - rect.left;
  hover.style = `opacity: 0.25; left: ${rect.left - 10}px; top: ${
    rect.top - 4
  }px; z-index: 9999; background-color: black; position: absolute; width: ${
    width + 20
  }px; height: 25px;`;
}

export function removeHoverEffect() {
  hover.style = "display: hidden";
}
