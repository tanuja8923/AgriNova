/* =========================================================
   AGRINOVA - SMART MATCHING
   Frontend Demo JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("AgriNova Smart Matching loaded.");

    /* =====================================================
       DEMO MATCH DATA
    ===================================================== */

    const matchData = [
        {
            batch: "AGRI-2026-00125",
            waste: "Rice Straw",
            location: "Agra",
            quantity: "2,000 kg",
            distance: "12 km",
            quality: "Dry",
            score: 94
        },
        {
            batch: "AGRI-2026-00131",
            waste: "Rice Straw",
            location: "Bharatpur",
            quantity: "4,500 kg",
            distance: "28 km",
            quality: "Dry",
            score: 88
        },
        {
            batch: "AGRI-2026-00144",
            waste: "Wheat Straw",
            location: "Mathura",
            quantity: "3,200 kg",
            distance: "34 km",
            quality: "Moderate",
            score: 81
        }
    ];

    console.table(matchData);


    /* =====================================================
       MATCH BUTTONS
    ===================================================== */

    const matchButtons = document.querySelectorAll(".match-action");

    matchButtons.forEach((button, index) => {

        button.addEventListener("click", () => {

            const row = button.closest("tr");

            if (!row) return;

            /* Already matched */
            if (button.classList.contains("matched")) {

                button.classList.remove("matched");

                button.innerHTML =
                    `<i class="fa-solid fa-link"></i> Match`;

                row.classList.remove("best-match");

                console.log(
                    "Match removed:",
                    matchData[index]?.batch || "Unknown batch"
                );

                return;
            }


            /* Match selected */
            button.classList.add("matched");

            button.innerHTML =
                `<i class="fa-solid fa-check"></i> Matched`;

            row.classList.add("best-match");

            console.log(
                "Supply matched:",
                matchData[index]?.batch || "Unknown batch"
            );


            /* Update status */
            const statusText =
                document.querySelector(".matching-status strong");

            const statusSubText =
                document.querySelector(".matching-status span");

            if (statusText) {
                statusText.textContent = "Supply Matched";
            }

            if (statusSubText) {
                statusSubText.textContent =
                    "Selected supply is ready for procurement";
            }

        });

    });


    /* =====================================================
       TABLE ROW CLICK
    ===================================================== */

    const tableRows =
        document.querySelectorAll(".matching-table tbody tr");

    tableRows.forEach((row) => {

        row.addEventListener("click", (event) => {

            /* Don't trigger when clicking button */
            if (event.target.closest(".match-action")) {
                return;
            }

            tableRows.forEach((item) => {
                item.classList.remove("best-match");
            });

            row.classList.add("best-match");

            const batch =
                row.querySelector(".batch-cell strong");

            if (batch) {
                console.log(
                    "Selected batch:",
                    batch.textContent.trim()
                );
            }

        });

    });


    /* =====================================================
       MATCH SCORE ANIMATION
    ===================================================== */

    const scoreBars =
        document.querySelectorAll(".score-bar span");

    scoreBars.forEach((bar) => {

        const finalWidth = bar.style.width;

        bar.style.width = "0";

        setTimeout(() => {
            bar.style.width = finalWidth;
        }, 300);

    });


    /* =====================================================
       SUMMARY CARD INTERACTION
    ===================================================== */

    const summaryCards =
        document.querySelectorAll(".summary-card");

    summaryCards.forEach((card) => {

        card.addEventListener("click", () => {

            const value =
                card.querySelector("strong");

            const label =
                card.querySelector("span");

            if (value && label) {

                console.log(
                    "Summary selected:",
                    label.textContent.trim(),
                    value.textContent.trim()
                );

            }

        });

    });


    /* =====================================================
       REQUIREMENT ITEMS
    ===================================================== */

    const requirementItems =
        document.querySelectorAll(".requirement-item");

    requirementItems.forEach((item) => {

        item.addEventListener("click", () => {

            const value =
                item.querySelector("strong");

            const label =
                item.querySelector("span");

            if (value && label) {

                console.log(
                    "Requirement:",
                    label.textContent.trim(),
                    value.textContent.trim()
                );

            }

        });

    });


    /* =====================================================
       FACTOR CARDS
    ===================================================== */

    const factorCards =
        document.querySelectorAll(".factor-card");

    factorCards.forEach((card) => {

        card.addEventListener("click", () => {

            const title =
                card.querySelector("strong");

            if (title) {
                console.log(
                    "Matching factor:",
                    title.textContent.trim()
                );
            }

        });

    });


    /* =====================================================
       CTA
    ===================================================== */

    const continueBtn =
        document.querySelector(".matching-cta a");

    if (continueBtn) {

        continueBtn.addEventListener("click", (event) => {

            const href =
                continueBtn.getAttribute("href");

            console.log(
                "Continuing from Smart Matching:",
                href
            );

            /*
              If next module exists, normal <a> navigation
              will work automatically.
            */

        });

    }


    /* =====================================================
       BACK LINK
    ===================================================== */

    const backLink =
        document.querySelector(".back-link");

    if (backLink) {

        backLink.addEventListener("click", () => {

            console.log(
                "Returning to previous module..."
            );

        });

    }


    /* =====================================================
       INITIAL STATUS
    ===================================================== */

    const statusText =
        document.querySelector(".matching-status strong");

    if (statusText) {

        console.log(
            "Current matching status:",
            statusText.textContent.trim()
        );

    }


    /* =====================================================
       DEMO COMPLETE
    ===================================================== */

    console.log(
        "Smart Matching demo interactions initialized successfully."
    );

});