const button = document.querySelector(".button");
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");

function callBack(entries) {
  console.log(entries);
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add("visible");
  //       button.classList.add("button-float");
  //     }
  //     else {
  //       entry.target.classList.remove("visible");
  //       button.classList.remove("button-float");
  //     }
  //   });
}
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1,
};

const observer = new IntersectionObserver(callBack, options);
observer.observe(img1);
