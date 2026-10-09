/* =========================================================
   AGRINOVA - INDUSTRY DASHBOARD JS
   Phase 1: Frontend Demo Only
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("AgriNova Industry Dashboard loaded.");


    // =====================================================
    // CREATE REQUIREMENT
    // =====================================================

    const createRequirementBtn =
        document.getElementById("createRequirementBtn");

    if (createRequirementBtn) {

        createRequirementBtn.addEventListener("click", () => {

            console.log("Create Requirement clicked.");

            alert(
                "Create Requirement module will allow the industry to specify:\n\n" +
                "• Waste Type\n" +
                "• Required Quantity\n" +
                "• Quality\n" +
                "• Maximum Radius\n" +
                "• Required Date"
            );

        });

    }


    // =====================================================
    // MANAGE REQUIREMENTS
    // =====================================================

    const manageButtons =
        document.querySelectorAll(".small-btn");

    manageButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const card = button.closest(".requirement-card");
            const title = card?.querySelector("h3");

            const requirementName =
                title
                    ? title.textContent.trim()
                    : "Selected requirement";

            console.log(
                "Managing requirement:",
                requirementName
            );

            alert(
                "Managing requirement:\n\n" +
                requirementName
            );

        });

    });


    // =====================================================
    // VIEW SUPPLY BATCH
    // =====================================================

    const viewButtons =
        document.querySelectorAll(".action-btn");

    viewButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const row = button.closest("tr");

            const batch =
                row?.querySelector(".batch-name strong");

            const waste =
                row?.querySelector(".batch-name small");

            const location =
                row?.children[1];

            const quantity =
                row?.children[2];

            console.log(
                "Viewing batch:",
                batch?.textContent.trim()
            );

            alert(
                "Waste Batch Details\n\n" +
                "Batch: " +
                (batch?.textContent.trim() || "N/A") +
                "\nWaste: " +
                (waste?.textContent.trim() || "N/A") +
                "\nLocation: " +
                (location?.textContent.trim() || "N/A") +
                "\nQuantity: " +
                (quantity?.textContent.trim() || "N/A")
            );

        });

    });


    // =====================================================
    // MATCH SUPPLY
    // =====================================================

    const matchButtons =
        document.querySelectorAll(".match-btn");

    matchButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const row = button.closest("tr");

            const batch =
                row?.querySelector(".batch-name strong");

            const batchName =
                batch
                    ? batch.textContent.trim()
                    : "Selected batch";


            // Prevent double click
            if (button.classList.contains("matched")) {

                console.log(
                    "Already matched:",
                    batchName
                );

                return;
            }


            button.classList.add("matched");

            button.innerHTML =
                '<i class="fa-solid fa-check"></i> Matched';


            console.log(
                "Supply matched:",
                batchName
            );


            alert(
                "Supply matched successfully!\n\n" +
                batchName +
                "\n\nNext step: collection and logistics."
            );

        });

    });


    // =====================================================
    // VIEW MATCHING
    // =====================================================

    const viewMatchingBtn =
        document.getElementById("viewMatchingBtn");

    if (viewMatchingBtn) {

        viewMatchingBtn.addEventListener("click", () => {

            console.log(
                "Opening Smart Matching..."
            );

            alert(
                "Smart Matching\n\n" +
                "AgriNova compares:\n\n" +
                "• Waste Type\n" +
                "• Quantity\n" +
                "• Quality\n" +
                "• Distance\n" +
                "• Industry Demand\n" +
                "• Logistics feasibility"
            );

        });

    }


    // =====================================================
    // VIEW ALL LINKS
    // =====================================================

    const viewAllLinks =
        document.querySelectorAll(".view-all");

    viewAllLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            event.preventDefault();

            console.log(
                "View All clicked:",
                link.textContent.trim()
            );

            alert(
                "This section will be expanded in the next module."
            );

        });

    });


    // =====================================================
    // INITIAL DASHBOARD LOG
    // =====================================================

    console.log(
        "Active Requirements: 3"
    );

    console.log(
        "Matched Supply: 18.5 Ton"
    );

    console.log(
        "Current Collection: 6.2 Ton"
    );

    console.log(
        "Average Distance: 16 km"
    );

});
function logoutUser() {
    sessionStorage.removeItem("agrinovaLoggedIn");
    sessionStorage.removeItem("agrinovaRole");

    window.location.href = "login.html";
}