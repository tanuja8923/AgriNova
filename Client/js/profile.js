// =========================================================
// AGRINOVA - PROFILE PAGE
// Frontend Only - Phase 1
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("AgriNova Profile loaded successfully.");


    // =====================================================
    // DEMO PROFILE DATA
    // =====================================================

    const profileData = {
        name: "Tanuja",
        role: "Farmer",
        phone: "+91 98XXXXXX00",
        email: "farmer@agrinova.com",
        location: "Agra, Uttar Pradesh",

        farmLocation: "Agra Region",
        farmSize: "5 Acres",
        primaryCrop: "Rice",
        commonWaste: "Rice Straw",

        language: "en",
        notifications: true,
        voiceAssistance: true
    };


    console.log("Profile Data:", profileData);


    // =====================================================
    // EDIT PROFILE
    // =====================================================

    const editProfileBtn =
        document.getElementById("editProfileBtn");

    if (editProfileBtn) {

        editProfileBtn.addEventListener("click", () => {

            console.log("Edit Profile clicked.");

            alert(
                "Edit Profile\n\n" +
                "Personal information editing will be connected " +
                "with the backend in the next phase."
            );

        });

    }


    // =====================================================
    // UPDATE FARM DETAILS
    // =====================================================

    const editFarmBtn =
        document.getElementById("editFarmBtn");

    if (editFarmBtn) {

        editFarmBtn.addEventListener("click", () => {

            console.log("Update Farm Details clicked.");

            alert(
                "Farm Details\n\n" +
                "Farm size, crop and waste information can be " +
                "updated here.\n\n" +
                "Backend integration will be added in the next phase."
            );

        });

    }


    // =====================================================
    // LANGUAGE SELECTION
    // =====================================================

    const languageSelect =
        document.getElementById("languageSelect");

    if (languageSelect) {

        // Set current language
        languageSelect.value = profileData.language;


        languageSelect.addEventListener("change", () => {

            profileData.language =
                languageSelect.value;

            if (profileData.language === "hi") {

                console.log("Language changed to Hindi.");

                alert(
                    "Language preference updated to हिन्दी.\n\n" +
                    "Full bilingual interface will be connected " +
                    "in the next phase."
                );

            } else {

                console.log("Language changed to English.");

                alert(
                    "Language preference updated to English."
                );

            }

        });

    }


    // =====================================================
    // NOTIFICATION TOGGLE
    // =====================================================

    const notificationToggle =
        document.getElementById("notificationToggle");

    if (notificationToggle) {

        notificationToggle.checked =
            profileData.notifications;


        notificationToggle.addEventListener("change", () => {

            profileData.notifications =
                notificationToggle.checked;

            if (profileData.notifications) {

                console.log("Notifications enabled.");

                alert(
                    "Notifications enabled 🔔"
                );

            } else {

                console.log("Notifications disabled.");

                alert(
                    "Notifications disabled."
                );

            }

        });

    }


    // =====================================================
    // VOICE ASSISTANCE TOGGLE
    // =====================================================

    const voiceToggle =
        document.getElementById("voiceToggle");

    if (voiceToggle) {

        voiceToggle.checked =
            profileData.voiceAssistance;


        voiceToggle.addEventListener("change", () => {

            profileData.voiceAssistance =
                voiceToggle.checked;

            if (profileData.voiceAssistance) {

                console.log("Voice assistance enabled.");

                alert(
                    "Voice Assistance enabled 🎙️\n\n" +
                    "You can use voice-first waste submission."
                );

            } else {

                console.log("Voice assistance disabled.");

                alert(
                    "Voice Assistance disabled."
                );

            }

        });

    }


    // =====================================================
    // SECURITY SETTINGS
    // =====================================================

    const securityBtn =
        document.getElementById("securityBtn");

    if (securityBtn) {

        securityBtn.addEventListener("click", () => {

            console.log("Security Settings clicked.");

            alert(
                "Account Security 🔐\n\n" +
                "Password change, authentication and account " +
                "security settings will be connected in the next phase."
            );

        });

    }


    // =====================================================
    // PROFILE OVERVIEW INTERACTION
    // =====================================================

    const profileAvatar =
        document.querySelector(".profile-avatar-large");

    if (profileAvatar) {

        profileAvatar.setAttribute("tabindex", "0");

        profileAvatar.addEventListener("click", () => {

            console.log("Profile avatar clicked.");

        });

        profileAvatar.addEventListener("keydown", (event) => {

            if (event.key === "Enter" ||
                event.key === " ") {

                event.preventDefault();

                profileAvatar.click();

            }

        });

    }


    // =====================================================
    // ACTIVITY STAT LOGGING
    // =====================================================

    const activityStats =
        document.querySelectorAll(".activity-stat");

    activityStats.forEach((stat) => {

        stat.addEventListener("click", () => {

            const value =
                stat.querySelector("strong");

            const label =
                stat.querySelector("span");

            if (value && label) {

                console.log(
                    "Activity:",
                    label.textContent.trim(),
                    "Value:",
                    value.textContent.trim()
                );

            }

        });

    });


    // =====================================================
    // PROFILE VALIDATION
    // =====================================================

    const requiredProfileFields = [
        profileData.name,
        profileData.role,
        profileData.location
    ];

    const profileValid =
        requiredProfileFields.every(
            (field) => field && field.trim() !== ""
        );


    if (profileValid) {

        console.log(
            "Profile validation successful."
        );

    } else {

        console.warn(
            "Some profile information is missing."
        );

    }


    // =====================================================
    // PAGE ENTRY ANIMATION
    // =====================================================

    const cards =
        document.querySelectorAll(
            ".profile-card, .security-card, .profile-note"
        );

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(12px)";

        setTimeout(() => {

            card.style.transition =
                "opacity 0.45s ease, transform 0.45s ease";

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, 100 + index * 80);

    });


    // =====================================================
    // FINAL LOG
    // =====================================================

    console.log(
        "AgriNova Profile module initialized successfully."
    );

});