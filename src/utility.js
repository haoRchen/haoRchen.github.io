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
