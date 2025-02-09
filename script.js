function flip() {
    document.getElementById('flipCard').classList.toggle('flipped');
}
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}


document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.querySelector(".login");
    const signupBtn = document.querySelector(".signup");
    

    // Debugging: Ensure buttons are correctly found
    console.log("Signup Button Found:", signupBtn);

    // Login Button Event
    if (loginBtn) {
        loginBtn.addEventListener("click", function () {
            const username = document.querySelector(".login-container input[type='text']").value;
            const password = document.querySelector(".login-container input[type='password']").value;

            if (username === "" || password === "") {
                alert("Please enter username and password.");
            } else {
                alert("Login successful!");
            }
        });
    }

    
   
    // Signup Button Event
    if (signupBtn) {
        signupBtn.addEventListener("click", function () {
            const username = document.querySelector(".signup-container input[placeholder='Username']").value;
            const email = document.querySelector(".signup-container input[placeholder='Email']").value;
            const mobile = document.querySelector(".signup-container input[placeholder='Mobile number']").value;
            const password = document.querySelector(".signup-container input[placeholder='Password']").value;

            if (username === "" || email === "" || mobile === "" || password === "") {
                alert("Please fill in all fields.");
            } else {
                alert("Signup successful!");
            }
        });
    } else {
        console.error("Signup button not found!");
    }
});
