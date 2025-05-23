const profilePic = document.getElementById("profile-pic");
const aboutPic = document.getElementById("about-pic");
const cards = document.querySelectorAll(".card");
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const card5 = document.getElementById("card5");
const card6 = document.getElementById("card6");
const card7 = document.getElementById("card7");
const card8 = document.getElementById("card8");
const songs = [
  "assets/track1.mp3",
  "assets/track2.mp3",
  "assets/track3.mp3",
  "assets/track4.mp3",
];

function toggleTheme() {
  document.body.classList.toggle("alt-theme");
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
  card1.classList.toggle("card-frame-1");
  card2.classList.toggle("card-frame-2");
  card3.classList.toggle("card-frame-3");
  card4.classList.toggle("card-frame-4");
  card5.classList.toggle("card-frame-5");
  card6.classList.toggle("card-frame-6");
  card7.classList.toggle("card-frame-7");
  card8.classList.toggle("card-frame-8");
}

function toggleMusic() {
  const music = document.getElementById("background-music");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

function changeSong() {
  const music = document.getElementById("background-music");
  const currentSong = music.getAttribute("src");
  let currentIndex = songs.indexOf(currentSong);
  let nextIndex = (currentIndex + 1) % songs.length;
  music.src = songs[nextIndex];
  music.play();
}
