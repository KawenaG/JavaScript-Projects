function validateForm() {
    var x=document.forms["exampleForm"]["email"].value;
    if (x == "")
    alert("Email must be filled out")
    return false;
}