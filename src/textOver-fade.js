export function changeScrollLocation(scrollLocation) {
  const textOver = document.querySelector(".Textover");
  let opacityValue = Math.abs(
    1 - 2 * ((scrollLocation / window.innerHeight) % 1)
  );
  textOver.style = `opacity:${opacityValue}`;
}
