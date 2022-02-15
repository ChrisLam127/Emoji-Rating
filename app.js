const starsEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".far");

const colors = ["crimson", "orange", "aqua", "lightgreen", "teal"];

updateRating(0);

starsEl.forEach((star, index) => {
  star.addEventListener("click", function (event) {
    updateRating(index);
  });
});

function updateRating(index) {
  starsEl.forEach((starEl, idx) => {
    if (idx < index + 1) {
      starEl.classList.add("active");
    } else {
      starEl.classList.remove("active");
    }
  });

  emojisEl.forEach((emoji) => {
    emoji.style.transform = `translateX(-${50 * index}px)`;
    emoji.style.color = colors[index];
  });
}
