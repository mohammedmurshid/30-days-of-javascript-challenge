// Task 03
const divElement = document.createElement("div");
const newDiv = document.getElementById("newDiv");
divElement.style.cssText =
  "margin: 5px; height: 100px; width: 100px; background-color: green";
// document.body.appendChild(divElement);
newDiv.appendChild(divElement);

// Task 04
const ul = document.getElementById("list");
const li = document.createElement("li");

li.innerHTML = "Dragon Fruit";
ul.appendChild(li);
