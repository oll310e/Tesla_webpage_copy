// export default function scrollToNearestPicture(yCurrent) {
//   yCurrent = window.pageYOffset;
//   let pictureHeight = window.innerHeight;

//   let closestPicture = 0;

//   const backgroundPictures = document.querySelectorAll("img");
//   backgroundPictures.length;

//   for (let i = 0; i <= backgroundPictures.length; i++) {
//     if (
//       Math.abs(i * pictureHeight - yCurrent) <=
//       Math.abs(closestPicture - yCurrent)
//     ) {
//       closestPicture = i * pictureHeight;
//     }
//   }

//   window.scrollTo(0, closestPicture);
//   console.log("scroll");
// }

// document.onmousemove = function (e) {
//   let x = e.pageX;
//   let y = e.pageY;
//   console.log("x:", x, "y:", y);
// };

// let numOfPicture = 7;
// console.log(window.innerHeight);
