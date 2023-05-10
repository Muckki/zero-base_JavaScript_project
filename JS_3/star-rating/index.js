// do something!
const lastLink = document.querySelector("link:last-of-type");
lastLink.insertAdjacentHTML(
  "afterend",
  `<link rel="stylesheet" href="./star-rating/style.css"></link>
  <link href="./star-rating/theme.css" rel="stylesheet" />`
);

const StarRating = ($container) => {
  const container = $container;
  const get = (target) => container.querySelectorAll(target);

  container.innerHTML = '<div class="star-rating-container"></div>';
  const src = get(".star-rating-container");
  src.forEach(($container) => {
    const dMr = container.dataset.maxRating;

    for (let i = 1; i <= Number(dMr); i++) {
      $container.innerHTML += `<i class="icon-bxs-star"></i>`;
    }

    const stars = get("i");
    stars.forEach((star, index) => {
      star.addEventListener("mouseover", () => {
        for (let i = 0; i <= index; i++) {
          stars[i].classList.add("hovered");
        }
      });
      star.addEventListener("mouseout", () => {
        stars.forEach((star) => star.classList.remove("hovered"));
      });
      stars.forEach((star, index) => {
        star.addEventListener("click", () => {
          stars.forEach((star, i) => {
            if (i <= index) {
              star.classList.add("selected");
            } else {
              star.classList.remove("selected");
            }
          });
          const rating = index + 1;
          const event = new CustomEvent("rating-change", { detail: rating });
          container.dispatchEvent(event);
        });
      });
    });
  });
};
export default StarRating;
