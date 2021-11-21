var bodyClass = document.querySelector("body");
var switchBtn = document.getElementById("switch");
switchBtn.addEventListener("click", () => {
  if (bodyClass.classList.contains("light")) {
    console.log(bodyClass.className);
    bodyClass.className = "dark";
  } else {
    bodyClass.className = "light";
  }
});
