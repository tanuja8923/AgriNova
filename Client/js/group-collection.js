/* =========================================================
   AGRINOVA - GROUP COLLECTION
   Frontend Demo Logic
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("AgriNova Group Collection loaded successfully.");

    /* =====================================================
       DEMO COLLECTION DATA
    ===================================================== */

    const collectionData = {
        clusterId: "CL-AGRA-001",
        wasteType: "Rice Straw",
        farmers: 4,
        totalQuantity: 1000,
        location: "Agra",
        pickupDate: "16 September",
        distance: 14,
        transportCost: 600,
        status: "Pickup Assigned"
    };


    /* =====================================================
       LOG COLLECTION DATA
    ===================================================== */

    console.log("Collection Cluster:", collectionData.clusterId);
    console.log("Waste Type:", collectionData.wasteType);
    console.log("Total Quantity:", collectionData.totalQuantity + " kg");
    console.log("Farmers:", collectionData.farmers);
    console.log("Pickup Date:", collectionData.pickupDate);
    console.log("Estimated Transport Cost: ₹" + collectionData.transportCost);


    /* =====================================================
       BACK BUTTON
    ===================================================== */

    const backLink = document.querySelector(".back-link");

    if (backLink) {

        backLink.addEventListener("click", () => {

            console.log("Returning to Smart Matching...");

        });

    }


    /* =====================================================
       BATCH INTERACTION
    ===================================================== */

    const farmerBatches =
        document.querySelectorAll(".farmer-batch");

    farmerBatches.forEach((batch) => {

        batch.addEventListener("click", () => {

            const farmerName =
                batch.querySelector(".farmer-details strong");

            const quantity =
                batch.querySelector(".batch-quantity strong");

            if (farmerName && quantity) {

                console.log(
                    "Selected Farmer:",
                    farmerName.textContent.trim()
                );

                console.log(
                    "Batch Quantity:",
                    quantity.textContent.trim()
                );

            }

        });

    });


    /* =====================================================
       TRANSPORT PLAN
    ===================================================== */

    const transportCards =
        document.querySelectorAll(".transport-card");

    transportCards.forEach((card) => {

        card.addEventListener("click", () => {

            const title =
                card.querySelector("strong");

            if (title) {

                console.log(
                    "Transport Detail:",
                    title.textContent.trim()
                );

            }

        });

    });


    /* =====================================================
       CONTINUE TO TRANSPORT
    ===================================================== */

    const continueBtn =
        document.querySelector(".collection-cta a");

    if (continueBtn) {

        continueBtn.addEventListener("click", (event) => {

            event.preventDefault();

            console.log("Opening Transport Module...");

            alert(
                "Group collection created successfully! 🌾\n\n" +
                "Cluster: " + collectionData.clusterId + "\n" +
                "Waste: " + collectionData.wasteType + "\n" +
                "Total Quantity: " +
                collectionData.totalQuantity +
                " kg\n" +
                "Farmers: " +
                collectionData.farmers +
                "\n\n" +
                "Transport module will be connected in the next phase."
            );

        });

    }


    /* =====================================================
       CLUSTER STATUS
    ===================================================== */

    const statusElement =
        document.querySelector(".collection-status strong");

    if (statusElement) {

        console.log(
            "Current Collection Status:",
            statusElement.textContent.trim()
        );

    }


    /* =====================================================
       KEYBOARD ACCESSIBILITY
    ===================================================== */

    farmerBatches.forEach((batch) => {

        batch.setAttribute("tabindex", "0");

        batch.addEventListener("keydown", (event) => {

            if (event.key === "Enter" || event.key === " ") {

                event.preventDefault();

                batch.click();

            }

        });

    });


    /* =====================================================
       SIMPLE COLLECTION VALIDATION
    ===================================================== */

    if (
        collectionData.totalQuantity > 0 &&
        collectionData.farmers > 1
    ) {

        console.log(
            "Group collection is viable:",
            collectionData.totalQuantity + " kg from " +
            collectionData.farmers + " farmers."
        );

    } else {

        console.log(
            "Group collection requirements are not satisfied."
        );

    }


    /* =====================================================
       TRANSPORT SAVING MESSAGE
    ===================================================== */

    if (collectionData.farmers >= 3) {

        console.log(
            "Aggregation benefit detected: multiple farmer batches " +
            "can be collected through a single optimized pickup."
        );

    }

});