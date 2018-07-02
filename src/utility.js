export function ScrollTop() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}

export function Selected(selectedElement) {
  var currentSelection = document.getElementsByClassName("selected");
  currentSelection[0].className = currentSelection[0].className.replace(
    " selected",
    ""
  );
  selectedElement.className += " selected";
}

/*
angular ---- fab fa-angular
javascript ---- fab fa-js
vuejs ----- fab fa-vuejs
nodejs ----- fab fa-node-js
html ----- fab fa-html5
react ----- fab fa-react
css ----- fab fa-css3
microsoft
*/
