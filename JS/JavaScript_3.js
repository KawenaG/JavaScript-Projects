function displayType(character) {
    var characterType = character.getAttribute("data-character-type")
    alert("The best " + characterType + " can be found at " + character.innerHTML);
}