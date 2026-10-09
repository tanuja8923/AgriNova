// =========================================================
// AGRINOVA — BEST UTILIZATION
// Frontend Only — Phase 1
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    // =====================================================
    // ELEMENTS
    // =====================================================

    const continueBtn = document.querySelector(".continue-btn");
    const optionCards = document.querySelectorAll(".option-card");
    const recommendationCard =
        document.querySelector(".recommended-card");

    const backLink = document.querySelector(".back-link");


    // =====================================================
    // DEMO DATA
    // =====================================================

    const utilizationData = {

        wasteType: "Rice Straw",

        quantity: 2000,

        location: "Agra",

        quality: "Dry / Low Moisture",

        recommended: {
            name: "Biomass Energy",
            match: 94,
            distance: 12,
            demand: "High Demand",
            netValue: 4200
        },

        alternatives: [
            {
                name: "Paper Processing",
                rank: 2,
                distance: 26,
                netValue: 3500
            },

            {
                name: "Organic Compost",
                rank: 3,
                distance: 18,
                netValue: 3600
            }
        ]

    };


    // =====================================================
    // CONSOLE CHECK
    // =====================================================

    console.log("======================================");
    console.log("AgriNova — Best Utilization Loaded");
    console.log("======================================");

    console.log("Waste:", utilizationData.wasteType);
    console.log(
        "Quantity:",
        utilizationData.quantity + " kg"
    );
    console.log("Location:", utilizationData.location);
    console.log(
        "Recommended:",
        utilizationData.recommended.name
    );
    console.log(
        "Estimated Net Value:",
        "₹" + utilizationData.recommended.netValue
    );


    // =====================================================
    // RECOMMENDATION CARD
    // =====================================================

    if (recommendationCard) {

        recommendationCard.addEventListener("click", () => {

            console.log(
                "Selected Best Utilization:",
                utilizationData.recommended.name
            );

        });

    }


    // =====================================================
    // ALTERNATIVE OPTION CARDS
    // =====================================================

    optionCards.forEach((card, index) => {

        card.addEventListener("click", () => {

            const option =
                utilizationData.alternatives[index];

            if (!option) return;

            console.log(
                "Alternative selected:",
                option.name
            );


            // Remove previous selection

            optionCards.forEach((item) => {
                item.classList.remove("selected");
            });


            // Select current card

            card.classList.add("selected");


            // Value animation

            const value =
                card.querySelector(".option-value strong");

            if (value) {

                value.style.transition = "0.2s ease";

                value.style.transform = "scale(1.08)";

                setTimeout(() => {

                    value.style.transform = "scale(1)";

                }, 200);

            }

        });


        // Keyboard support

        card.setAttribute("tabindex", "0");

        card.addEventListener("keydown", (event) => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                card.click();

            }

        });

    });


    // =====================================================
    // BACK TO WASTE ANALYSIS
    // =====================================================

    if (backLink) {

        backLink.addEventListener("click", () => {

            console.log(
                "Returning to Waste Analysis..."
            );

            // HTML href will handle navigation

        });

    }


    // =====================================================
    // CONTINUE TO NET VALUE
    // =====================================================

    if (continueBtn) {

        continueBtn.addEventListener("click", (event) => {

            event.preventDefault();

            console.log(
                "Opening Net Value Analysis..."
            );


            /*
             * Phase 1:
             * Frontend navigation only.
             *
             * No backend / database / API.
             */

            window.location.href =
                "net-value-analysis.html";

        });

    }


    // =====================================================
    // MATCH SCORE ANIMATION
    // =====================================================

    const matchScore =
        document.querySelector(".match-score");

    if (matchScore) {

        let currentScore = 0;

        const targetScore =
            utilizationData.recommended.match;

        const duration = 900;

        const intervalTime = 15;

        const increment =
            targetScore /
            (duration / intervalTime);


        const scoreAnimation = setInterval(() => {

            currentScore += increment;


            if (currentScore >= targetScore) {

                currentScore = targetScore;

                clearInterval(scoreAnimation);

            }


            matchScore.textContent =
                Math.round(currentScore) + "% Match";

        }, intervalTime);

    }


    // =====================================================
    // PAGE READY
    // =====================================================

    console.log(
        "Best Utilization page is ready."
    );

});