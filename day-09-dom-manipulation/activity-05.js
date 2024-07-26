// Task 09
const paragraphText = document.querySelector(".paragraph");
const changeContent = document.getElementById("changeContent");

const onButtonClick = () => {
  paragraphText.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate placeat excepturi neque iste soluta quibusdam eum laboriosam assumenda itaque qui repellendus natus sit, libero optio adipisci amet harum pariatur consequuntur aperiam, aut quos, corporis ullam nesciunt? Accusamus repudiandae cum consectetur quidem rerum necessitatibus reprehenderit ut provident consequatur quae, vel ab.";
};
changeContent.addEventListener("click", onButtonClick);

// Task 10
const box = document.getElementById("box");
const onMouseOver = () => {
  box.style.borderColor = "red";
  box.style.backgroundColor = "limegreen";
};
const onMouseLeave = () => {
  box.style.borderColor = "limegreen";
  box.style.backgroundColor = "red";
};

box.addEventListener("mouseover", onMouseOver);
box.addEventListener("mouseout", onMouseLeave);
