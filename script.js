const themeToggleButton = document.getElementById("theme-toggle");
const profilePic = document.getElementById("profile-pic");
const aboutPic = document.getElementById("about-pic");

function toggleTheme() {
  document.body.classList.toggle("alt-theme");
  toggleProfileImage();
  toggleAboutImage();
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
