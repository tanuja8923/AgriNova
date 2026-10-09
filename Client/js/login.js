document.addEventListener("DOMContentLoaded", () => {

    // ================= ROLE SELECTION =================

    const roleCards = document.querySelectorAll(".role-card");
    const loginBtn = document.querySelector(".login-btn");
    const loginForm = document.querySelector("form");

    let selectedRole = "farmer";


    // Default Farmer
    roleCards.forEach(card => {

        card.addEventListener("click", () => {

            // Remove active from all
            roleCards.forEach(item => {
                item.classList.remove("active");
            });

            // Selected card active
            card.classList.add("active");

            // Get role
            selectedRole = card.dataset.role;

            console.log("Selected Role:", selectedRole);


            // Change LOGIN button
            if (selectedRole === "farmer") {

                loginBtn.innerHTML =
                    'Login as Farmer <i class="fa-solid fa-arrow-right"></i>';

            }

            else if (selectedRole === "industry") {

                loginBtn.innerHTML =
                    'Login as Industry <i class="fa-solid fa-arrow-right"></i>';

            }

            else if (selectedRole === "transporter") {

                loginBtn.innerHTML =
                    'Login as Transporter <i class="fa-solid fa-arrow-right"></i>';

            }

        });

    });



    // ================= LOGIN =================

    if (loginForm) {

        loginForm.addEventListener("submit", (event) => {

            event.preventDefault();


            // Save login session
            sessionStorage.setItem(
                "agrinovaLoggedIn",
                "true"
            );

            sessionStorage.setItem(
                "agrinovaRole",
                selectedRole
            );


            console.log("Login Successful");
            console.log("Role:", selectedRole);


            // ================= FARMER =================

            if (selectedRole === "farmer") {

                window.location.href =
                    "farmer-dashboard.html";

            }


            // ================= INDUSTRY =================

            else if (selectedRole === "industry") {

                window.location.href =
                    "industry-dashboard.html";

            }


            // ================= TRANSPORTER =================

            else if (selectedRole === "transporter") {

                window.location.href =
                    "transport-dashboard.html";

            }

        });

    }



    // ================= PASSWORD SHOW / HIDE =================

    const passwordInput =
        document.querySelector('input[type="password"]');

    const passwordToggle =
        document.querySelector(".password-toggle");


    if (passwordToggle && passwordInput) {

        passwordToggle.addEventListener("click", () => {

            if (passwordInput.type === "password") {

                passwordInput.type = "text";

                passwordToggle.innerHTML =
                    '<i class="fa-solid fa-eye-slash"></i>';

            }

            else {

                passwordInput.type = "password";

                passwordToggle.innerHTML =
                    '<i class="fa-solid fa-eye"></i>';

            }

        });

    }



    // ================= DEMO ACCOUNT =================

    const demoBtn =
        document.querySelector(".demo-btn");


    if (demoBtn) {

        demoBtn.addEventListener("click", () => {

            const emailInput =
                document.querySelector('input[type="email"]');

            const passInput =
                document.querySelector('input[type="password"]');


            if (emailInput) {
                emailInput.value =
                    "demo@agrinova.com";
            }


            if (passInput) {
                passInput.value =
                    "demo123";
            }

        });

    }

});