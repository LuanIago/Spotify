function nextSlide(e) {
  const regex = /^sect-.+$/;
  const arrowsArea = e.currentTarget.closest(".arrows");
  const arrowsClass = [...arrowsArea.classList].find((i) => regex.test(i));
  const slidersArea = document.querySelector(`.sliders.${arrowsClass}`);

  const slidersLength = slidersArea.children.length - 1;
  const slideWidth = 11.15; // value in rem
  const visibleSlides = 5; // number of cards visible at a time (adjust if necessary)
  const maxOffset = (slidersLength - visibleSlides) * slideWidth;

  // read the current displacement (transform) into rem → positive number
  const currentTransform = slidersArea.style.transform || "translateX(0rem)";
  let currentOffset =
    Math.abs(parseFloat(currentTransform.match(/-?\d+(\.\d+)?/))) || 0;

  // calculate new displacement
  if (currentOffset < maxOffset) {
    currentOffset += slideWidth;
  } else {
    currentOffset = 0;
  }

  slidersArea.style.transform = `translateX(-${currentOffset}rem)`;
  slidersArea.style.transition = "transform 0.4s ease";
}

function previousSlide(e) {
  const regex = /^sect-.+$/;
  const arrowsArea = e.currentTarget.closest(".arrows");
  const arrowsClass = [...arrowsArea.classList].find((i) => regex.test(i));
  const slidersArea = document.querySelector(`.sliders.${arrowsClass}`);

  const slidersLength = slidersArea.children.length - 1;
  const slideWidth = 11.15;
  const visibleSlides = 5;
  const maxOffset = (slidersLength - visibleSlides) * slideWidth;

  const currentTransform = slidersArea.style.transform || "translateX(0rem)";
  let currentOffset =
    Math.abs(parseFloat(currentTransform.match(/-?\d+(\.\d+)?/))) || 0;

  // return one position
  if (currentOffset > 0) {
    currentOffset -= slideWidth;
  } else {
    currentOffset = maxOffset;
  }

  slidersArea.style.transform = `translateX(-${currentOffset}rem)`;
  slidersArea.style.transition = "transform 0.4s ease";
}

// Add event to buttons
document.querySelectorAll(".arrow-left-bt").forEach((bt) => {
  bt.addEventListener("click", previousSlide);
});

document.querySelectorAll(".arrow-right-bt").forEach((bt) => {
  bt.addEventListener("click", nextSlide);
});

const trendSongsSliders = document.querySelector(".sliders.sect-trendSongs");

for (let i = 0; i < trendSongsData.length; i++) {
  const slideCard = document.querySelector(".slide-content").cloneNode(true);

  slideCard.querySelector("h2").innerHTML = trendSongsData[i].name;
  slideCard.querySelector("img").src = trendSongsData[i].image;
  slideCard.querySelector("p").innerHTML = trendSongsData[i].artists;
  slideCard.querySelector("p").classList.add("hv-under");
  slideCard.style.display = "block";

  trendSongsSliders.appendChild(slideCard);
}

const artistsSliders = document.querySelector(".sliders.sect-artists");

for (let i = 0; i < artistsData.length; i++) {
  const slideCard = document.querySelector(".slide-content").cloneNode(true);

  slideCard.querySelector("h2").innerHTML = artistsData[i].name;
  slideCard.querySelector("img").src = artistsData[i].image;
  slideCard.querySelector("img").classList.add("bd-circle");
  slideCard.style.display = "block";

  artistsSliders.appendChild(slideCard);
}

const albumsSliders = document.querySelector(".sliders.sect-albums");

for (let i = 0; i < albumsData.length; i++) {
  const slideCard = document.querySelector(".slide-content").cloneNode(true);

  slideCard.querySelector("h2").innerHTML = albumsData[i].name;
  slideCard.querySelector("img").src = albumsData[i].image;
  slideCard.querySelector("p").innerHTML = albumsData[i].artist;
  slideCard.querySelector("p").classList.add("hv-under");
  slideCard.style.display = "block";

  albumsSliders.appendChild(slideCard);
}
