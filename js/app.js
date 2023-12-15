let ce = document.getElementById("clickEvent");
let ce2 = document.getElementById("clickEvent2");

ce.onclick = function (e) {
  e.preventDefault();
  let tempo = ce.classList.toggle("demo6");
  console.log(tempo);
  if (tempo === true) {
    ce2.style.display = "block";
  } else {
    ce2.style.display = "none";
  }
};

let navSection = document.getElementById("_navbar_section");
let guest = document.getElementById("addGuest");
let navSection2 = document.getElementById("outerContainer");
let slideBar = document.getElementById("slideBar");
guest.addEventListener("click", e => {
  navSection.style.display = "none";
  navSection2.style.display = "block";
  slideBar.style.display = "none";
});

let caro = document.getElementById("carouselSection");
caro.addEventListener("click", e => {
  navSection.style.display = "block";
  navSection2.style.display = "none";
  slideBar.style.display = "block";
});
