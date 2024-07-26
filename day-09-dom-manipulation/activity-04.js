// Task 07
// const anchorTag = document.createElement("a");
// anchorTag.setAttribute(
//   "href",
//   "https://images.pexels.com/photos/27275090/pexels-photo-27275090/free-photo-of-love.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
// );
// anchorTag.setAttribute("target", "_blank");

// document.body.appendChild(anchorTag);

// const linkImage = document.createElement("img");
// linkImage.setAttribute(
//   "src",
//   "https://images.pexels.com/photos/5750777/pexels-photo-5750777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
// );
// anchorTag.appendChild(linkImage);

const image = document.getElementById("image");
function changeImage() {
  image.setAttribute(
    "src",
    "https://images.pexels.com/photos/27275090/pexels-photo-27275090/free-photo-of-love.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );
}

const button = document.getElementById("changeImage");
button.addEventListener("click", changeImage);

// Task 08
const paragraph = document.querySelector(".paragraph");
const highlightButton = document.getElementById("highlightButton");

const highlightText = () => {
  paragraph.classList.add("highlight");
  highlightButton.innerHTML = "revert me";

  if (paragraph.classList.contains("highlight")) {
    highlightButton.addEventListener("click", revertText);
  }
};

function revertText() {
  paragraph.classList.remove("highlight");
  highlightButton.innerHTML = "highlight";
}

highlightButton.addEventListener("click", highlightText);
