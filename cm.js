function getText() {
  var inputId = document.getElementById("inp").value;

  var liElement = document.getElementById("a" + inputId);

  var outputElement = document.getElementById("texteId");

  if (liElement) {
    outputElement.innerHTML = "Phrase extraite : " + liElement.textContent;
  } else {
    outputElement.innerHTML = "Aucun élément trouvé avec cet ID.";
  }
}
