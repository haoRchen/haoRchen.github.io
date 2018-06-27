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

// export function GetFontAwesomeTechIcon(iconName) {
//   switch (iconName) {
//     case "angular": {

//     }
//     break;
//     case "vue": {

//     }
//     break;
//     case "javascript": {

//     }
//     break;
//     case "css": {

//     }
//     break;
//     case "html": {

//     }
//     break;
//     case "bulma": {
//     }
//     break;
//     case "node": {

//     }
//     break;
//     case "react": {

//     }
//     break;
//     case "c++": {

//     }
//     break;
//     case "c#": {

//     }
//     break;
//     case "mongo": {

//     }
//     break;
//     default: {

//     }
//     break;
//   }
// }
