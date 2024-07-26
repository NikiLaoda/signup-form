function checkPass() {
    let password = document.querySelector("#pass-word");
    let confirmPass = document.querySelector("#confirm-password");

    if (password.value !== confirmPass.value) alert("Passwords are not equal!");
}