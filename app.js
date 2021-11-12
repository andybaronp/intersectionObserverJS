const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");

function callBack(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1,
};

const observer = new IntersectionObserver(callBack, options);
observer.observe(img1);
observer.observe(img2);
