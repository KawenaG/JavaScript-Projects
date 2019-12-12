function Guessing_function() {
    var text;
    var myNumber = document.getElementById("myInput").value;

    switch(myNumber) {
        case "one":
        text = "Close, but that's not quite it.";
        break;
        case "two":
        text = "Correct! How'd you know?";
        break;
        case "three":
        text = "Close, but that's not quite it.";
        break;
        case "four":
        text = "nope, that's too high.";
        break;
        case "five":
        text = "nope, that's too high.";
        break;
        default:
        text = "Please enter a valid number 1 through 5."
    }
    document.getElementById("guess").innerHTML = text;
}