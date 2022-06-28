const button = document.querySelector(".phoneButton");
const navbar = document.querySelector(".navbar");
const imgButton = document.querySelector(".btnAppearImg");
const graySpace = document.querySelector(".clickMobileOption");

let hidden = true;

button.addEventListener("click", () => {
  const height = document.body.scrollHeight;

  if (hidden === true) {
    imgButton.setAttribute("src", "../images/icon-close-menu.svg");
    navbar.style.height = `${height}px`;
    graySpace.style.height = `${height}px`;
    graySpace.style.display = "block";
    navbar.style.display = "flex";
    navbar.style.animation = "appearMenu 0.6s ease-out forwards";

    hidden = false;
  } else {
    imgButton.setAttribute("src", "../images/icon-menu.svg");
    graySpace.style.display = "none";
    navbar.style.animation = "disappearMenu 0.6s ease-out forwards";

    setTimeout(() => {
      navbar.style.display = "none";
    }, 500);

    hidden = true;
  }
});

window.addEventListener("resize", () => {
  const widthWindow = window.innerWidth;
  const height = document.body.scrollHeight;

  if (widthWindow > 900) {
    navbar.style.animation = "";
    navbar.style.display = "flex";
    navbar.style.height = "auto";
    graySpace.style.display = "none";
  } else {
    if (hidden === true) {
      navbar.style.display = "none";
      graySpace.style.display = "none";
    } else {
      navbar.style.display = "flex";
      navbar.style.transform = "translateX(0)"
      graySpace.style.display = "block";
    }
  }
});
