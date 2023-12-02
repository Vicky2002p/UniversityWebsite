function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;

    if (name == "" || email == "" || message == "") {
        alert("All fields must be filled out");
        return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("You must enter a valid email address");
        return false;
    }
    return true;
}
