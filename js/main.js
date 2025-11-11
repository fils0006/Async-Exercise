document.addEventListener("DOMContentLoaded", init);

function init() {
  document.body.addEventListener("click", doSomething);
  console.log("DOM fully loaded");
}

function doSomething() {
  console.log("Body clicked");
}
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task completed!");
  }, 2000);
});
p.then((result) => {});

document.body.style.backgroundColor = "yellow";
const button = document.getElementById("changeColor");

function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}
button.addEventListener("click", () => {
  changeBackgroundColor("blue");
});
