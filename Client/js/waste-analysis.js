// =========================================================
// AGRINOVA — WASTE ANALYSIS
// Frontend Only — Phase 1
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    // =====================================================
    // ELEMENTS
    // =====================================================

    const continueBtn = document.querySelector(".continue-btn");
    const analysisStatus = document.querySelector(".analysis-status");

    const summaryItems = document.querySelectorAll(".summary-item");
    const factorCards = document.querySelectorAll(".factor-card");
    const demandRows = document.querySelectorAll(
        ".demand-row:not(.demand-head)"
    );


    // =====================================================
    // DEMO ANALYSIS DATA
    // =====================================================

    const analysisData = {

        wasteType: "Rice Straw",

        quantity: 2000,

        unit: "kg",

        location: "Agra",

        quality: "Dry / Low Moisture",

        nearbyDemand: [
            {
                industry: "Biomass Energy Unit",
                requirement: "50 Ton",
                distance: 12,
                demand: "High Demand"
            },

            {
                industry: "Organic Compost Unit",
                requirement: "20 Ton",
                distance: 18,
                demand: "Available"
            },

            {
                industry: "Paper Processing Unit",
                requirement: "35 Ton",
                distance: 26,
                demand: "Available"
            }
        ],

        factors: {
            demand: true,
            distance: true,
            quality: true,
            quantity: true
        }

    };


    // =====================================================
    // ANALYSIS STATUS
    // =====================================================

    if (analysisStatus) {

        analysisStatus.addEventListener("click", () => {

            analysisStatus.innerHTML = `
                <i class="fa-solid fa-circle-check"></i>
                Analysis Complete
            `;

        });

    }


    // =====================================================
    // SUMMARY CARD INTERACTION
    // =====================================================

    summaryItems.forEach((item) => {

        item.addEventListener("mouseenter", () => {

            item.style.transform = "translateY(-2px)";
            item.style.transition = "0.2s ease";

        });

        item.addEventListener("mouseleave", () => {

            item.style.transform = "translateY(0)";

        });

    });


    // =====================================================
    // FACTOR CARD INTERACTION
    // =====================================================

    factorCards.forEach((card) => {

        card.addEventListener("click", () => {

            const title = card.querySelector("strong");

            if (title) {

                console.log(
                    "AgriNova analyzed factor:",
                    title.textContent
                );

            }

        });

    });


    // =====================================================
    // DEMAND ROW INTERACTION
    // =====================================================

    demandRows.forEach((row) => {

        row.addEventListener("click", () => {

            const industry = row.querySelector(
                ".industry-name strong"
            );

            if (industry) {

                console.log(
                    "Selected industry:",
                    industry.textContent
                );

            }

        });

    });


    // =====================================================
    // SEE BEST UTILIZATION
    // =====================================================

   if (continueBtn) {

    continueBtn.addEventListener("click", () => {

        console.log(
            "Opening Best Utilization Recommendation..."
        );

    });

}


    // =====================================================
    // VIEW ALL DEMAND
    // =====================================================

    const viewLink = document.querySelector(".view-link");

    if (viewLink) {

        viewLink.addEventListener("click", (event) => {

            event.preventDefault();

            alert(
                "Nearby demand details will be available here."
            );

        });

    }


    // =====================================================
    // INITIAL CONSOLE CHECK
    // =====================================================

    console.log("====================================");
    console.log("AgriNova — Waste Analysis Loaded");
    console.log("====================================");

    console.log("Waste Type:", analysisData.wasteType);
    console.log("Quantity:", analysisData.quantity + " " + analysisData.unit);
    console.log("Location:", analysisData.location);
    console.log("Quality:", analysisData.quality);

});