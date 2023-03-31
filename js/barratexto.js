var text = ["COLECCIÓN ZALORBLACK DISPONIBLE", "ENVÍOS GRATIS A TODO CHILE A PARTIR DE $80.000"];
var counter = 0;
var elem = document.getElementById("text-change");
setInterval(change, 3000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}
