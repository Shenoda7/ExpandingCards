const panels = document.querySelectorAll(".panel");

for (let i = 0; i < panels.length; ++i) {
  panels[i].addEventListener("click", function () {
    if (!panels[i].classList.contains("active")) removeActiveClasses(); //if doesn't contain an active class then it's a new div which never got clicked before

    //if the active is there --> remove it, if the active is not there --> add it
    panels[i].classList.toggle("active");
  });
}

function removeActiveClasses() {
  for (let i = 0; i < panels.length; ++i) {
    if (panels[i].classList[1] === "active") {
      panels[i].classList.remove("active");
    }
  }
}
