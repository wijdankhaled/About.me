window.onscroll = function() {myFunction()};

// Get the header
let header = document.getElementById("myHeader");

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
// -----------------------------------------
// const $ = s => document.querySelectorAll(s)
// const on = (ev, el, cb) =>
//   el.addEventListener(ev, e => cb(e, el))
// $('a').forEach(el =>
//   on('click', el, e => e.preventDefault())
// )