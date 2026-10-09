/* =========================================================
   AGRINOVA - WASTE PASSPORT
   ========================================================= */
console.log("WASTE PASSPORT JS LOADED");
document.addEventListener("DOMContentLoaded", () => {

    console.log("AgriNova Waste Passport loaded successfully.");


    /* =====================================================
       DEMO PASSPORT DATA
       ===================================================== */

    const passportData = {
        batchId: "AGRI-2026-00125",
        wasteType: "Rice Straw",
        quantity: "2,000 kg",
        location: "Agra, Uttar Pradesh",
        harvestDate: "10 September 2026",
        moisture: "Low",
        quality: "Dry & Suitable",
        utilization: "Biomass Energy",
        matchScore: "94%",
        estimatedValue: 5000,
        transportCost: 800,
        netValue: 4200,
        status: "Pickup Assigned"
    };


    console.log("Passport Data:", passportData);


    /* =====================================================
       QR CODE GENERATION
       ===================================================== */

    const qrContainer = document.getElementById("qrCode");

    if (qrContainer && typeof QRCode !== "undefined") {

        qrContainer.innerHTML = "";

        const qrData = JSON.stringify({
            batchId: passportData.batchId,
            wasteType: passportData.wasteType,
            quantity: passportData.quantity,
            location: passportData.location,
            utilization: passportData.utilization,
            status: passportData.status
        });

        new QRCode(qrContainer, {
            text: qrData,
            width: 174,
            height: 174,
            colorDark: "#123b2a",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });

        console.log("QR Code generated successfully.");

    } else {

        console.error("QR Code library not loaded.");

    }


    /* =====================================================
       QR BATCH CLICK
       ===================================================== */

    const qrBatch = document.querySelector(".qr-batch");

    if (qrBatch) {

        qrBatch.addEventListener("click", () => {

            console.log(
                "QR Batch ID:",
                passportData.batchId
            );

        });

    }


    /* =====================================================
       BACK BUTTON
       ===================================================== */

    const backLink = document.querySelector(".back-link");

    if (backLink) {

        backLink.addEventListener("click", () => {

            console.log("Returning to Farmer Dashboard...");

        });

    }


    /* =====================================================
       TRACEABILITY TIMELINE
       ===================================================== */

    const timelineSteps =
        document.querySelectorAll(".timeline-step");

    timelineSteps.forEach((step, index) => {

        step.setAttribute("tabindex", "0");

        step.addEventListener("click", () => {

            const title =
                step.querySelector("strong");

            const date =
                step.querySelector("span");

            if (title) {

                console.log(
                    "Timeline Step:",
                    title.textContent.trim()
                );

            }

            if (date) {

                console.log(
                    "Timeline Date:",
                    date.textContent.trim()
                );

            }

        });


        /* Keyboard accessibility */

        step.addEventListener("keydown", (event) => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                step.click();

            }

        });

    });


    /* =====================================================
       SAVE PASSPORT
       ===================================================== */

    const savePassportBtn =
        document.getElementById("downloadPassportBtn");

    if (savePassportBtn) {

        savePassportBtn.addEventListener("click", () => {

            savePassportBtn.disabled = true;

            const originalContent =
                savePassportBtn.innerHTML;

            savePassportBtn.innerHTML =
                '<i class="fa-solid fa-spinner fa-spin"></i> Saving...';


            setTimeout(() => {

                savePassportBtn.disabled = false;

                savePassportBtn.innerHTML =
                    originalContent;

                alert(
                    "Waste Passport saved successfully! 🌾\n\n" +
                    "Batch ID: " +
                    passportData.batchId +
                    "\n" +
                    "Waste: " +
                    passportData.wasteType +
                    "\n" +
                    "Quantity: " +
                    passportData.quantity +
                    "\n" +
                    "Status: " +
                    passportData.status
                );

                console.log(
                    "Waste Passport saved:",
                    passportData.batchId
                );

            }, 900);

        });

    }


    /* =====================================================
       PASSPORT CARD INTERACTION
       ===================================================== */

    const passportCard =
        document.querySelector(".passport-card");

    if (passportCard) {

        passportCard.addEventListener("mouseenter", () => {

            console.log(
                "Viewing Waste Passport:",
                passportData.batchId
            );

        });

    }


    /* =====================================================
       VALUE VALIDATION
       ===================================================== */

    const calculatedNetValue =
        passportData.estimatedValue -
        passportData.transportCost;

    if (calculatedNetValue === passportData.netValue) {

        console.log(
            "Net value verified:",
            "₹" + calculatedNetValue
        );

    } else {

        console.warn(
            "Net value calculation mismatch."
        );

    }


    /* =====================================================
       PASSPORT STATUS
       ===================================================== */

    console.log(
        "Current Batch Status:",
        passportData.status
    );


    /* =====================================================
       BASIC PASSPORT VALIDATION
       ===================================================== */

    const requiredFields = [
        "batchId",
        "wasteType",
        "quantity",
        "location",
        "utilization",
        "status"
    ];

    const passportComplete =
        requiredFields.every(field => {

            return (
                passportData[field] &&
                passportData[field].toString().trim() !== ""
            );

        });


    if (passportComplete) {

        console.log(
            "Waste Passport validation: PASSED ✅"
        );

    } else {

        console.warn(
            "Waste Passport validation: FAILED ❌"
        );

    }

});