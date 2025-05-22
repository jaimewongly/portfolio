const profilePic = document.getElementById("profile-pic");
const aboutPic = document.getElementById("about-pic");
const cards = document.querySelectorAll(".card");
const card3 = document.getElementById("card3");
const card7 = document.getElementById("card7");

function toggleTheme() {
  document.body.classList.toggle("alt-theme");
  toggleProfileImage();
  toggleAboutImage();
  toggleFrameEffect();
}

function toggleProfileImage() {
  const newSrc = getComputedStyle(document.body)
    .getPropertyValue("--profile-image")
    .replace(/["']/g, "")
    .trim();
  profilePic.src = newSrc;
}

function toggleAboutImage() {
  const newSrc = getComputedStyle(document.body)
    .getPropertyValue("--about-image")
    .replace(/["']/g, "")
    .trim();
  aboutPic.src = newSrc;
}

function toggleFrameEffect() {
  cards.forEach((card) => {
    card.classList.toggle("outer-frame");
  });
  card3.classList.toggle("card-frame-3");
  card7.classList.toggle("card-frame-7");
}
