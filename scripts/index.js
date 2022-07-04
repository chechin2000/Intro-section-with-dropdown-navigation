const feature = document.querySelector(".features-menu");
const featureOptions = document.querySelector(".feature-options");
const featureimg = document.getElementById("featureImg");

const company = document.querySelector(".company-menu");
const companyOptions = document.querySelector(".company-options");
const companyImg = document.getElementById("companyImg");

let featureActive = false;
let companyActive = false;

const showOptions = (btn, blockOptions, img, active) => {
  btn.addEventListener("click", () => {
    const widthWindow = window.innerWidth;
    const positionValue = widthWindow > 900 ? "absolute" : "relative";
    if (active === false) {
      blockOptions.style.display = "block";
      blockOptions.style.position = positionValue;
      img.setAttribute("src", "images/icon-arrow-up.svg");
      active = true;
    } else {
      blockOptions.style.display = "none";
      img.setAttribute("src", "images/icon-arrow-down.svg");
      active = false;
    }
  });
};

showOptions(feature, featureOptions, featureimg, featureActive);
showOptions(company, companyOptions, companyImg, companyActive);
