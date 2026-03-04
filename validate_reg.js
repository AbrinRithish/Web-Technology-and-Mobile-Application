function validateForm() {

    let fname = document.regForm.fname.value;
    let lname = document.regForm.lname.value;
    let email = document.regForm.email.value;
    let mobile = document.regForm.mobile.value;
    let github = document.regForm.github.value;
    let resume = document.regForm.resume.value;
    let address = document.regForm.address.value;
    let terms = document.regForm.terms.checked;

    let namePattern = /^[A-Za-z]+$/;
    if (!namePattern.test(fname)) {
        alert("First Name must contain only alphabets");
        return false;
    }

    if (!namePattern.test(lname)) {
        alert("Last Name must contain only alphabets");
        return false;
    }

    let emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailPattern.test(email)) {
        alert("Email must be a valid @gmail.com address");
        return false;
    }

    let mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
        alert("Mobile Number must contain exactly 10 digits");
        return false;
    }

    if (!github.startsWith("https://github.com/")) {
        alert("Enter a valid GitHub Profile link");
        return false;
    }

    if (resume === "") {
        alert("Please upload your Resume");
        return false;
    }

    if (address.trim() === "") {
        alert("Address cannot be empty");
        return false;
    }

    if (!terms) {
        alert("Please agree to the Terms & Conditions");
        return false;
    }

    alert("Registration Successful!");
    return true;
}