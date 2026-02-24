function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var correctUsername = "admin.teacher";
    var correctPassword = "record.only";

    if (username === correctUsername && password === correctPassword) {
        // Show message
        document.getElementById("message").innerHTML = "✅ Login Successful!";
        document.getElementById("message").style.color = "green";

        // Redirect to home.html after 1 second
        setTimeout(function() {
            window.location.href = "home.html";
        }, 1000); // 1000ms = 1 second
    } else {
        document.getElementById("message").innerHTML = "❌ Wrong Username or Password!";
        document.getElementById("message").style.color = "red";
    }
}