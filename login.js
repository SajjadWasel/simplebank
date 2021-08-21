document.getElementById("login-btn").addEventListener("click", function () {
    const userEmail = document.getElementById("user-email");
    const userPassword = document.getElementById("user-password");
    const valildation = document.getElementById("validation");

    if (userEmail.value == "abc@gmail.com" && userPassword.value == "abc2021") {
        window.location.href = "banking.html";
    }

    else if (userEmail.value == "" && userPassword.value == "") {
        valildation.innerText = "please enter a valid email and password.";
    }

    else {
        valildation.innerText = "Wrong email or password.";
    }

})

