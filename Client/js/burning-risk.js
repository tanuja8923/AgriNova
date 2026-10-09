document.addEventListener("DOMContentLoaded", () => {

    console.log("AgriNova Burning Risk loaded successfully.");

    // ================= DEMO DATA =================

    const riskData = {
        wasteType: "Rice Straw",
        quantity: 2000,
        harvestMonth: "September",
        location: "Agra, Uttar Pradesh",

        nearbyDemand: true,
        pickupAvailable: true,
        transportDistance: 12,

        currentRisk: 25,
        riskLevel: "Low Risk",
        riskStatus: "Safe",

        recommendedUse: "Biomass Energy",
        estimatedNetValue: 4200,
        pickupDate: "16 September",
        pickupTime: "10:30 AM",
        batchId: "AGRI-2026-00125"
    };

    console.log("Burning Risk Data:", riskData);


    // ================= RISK CALCULATION =================

    function calculateBurningRisk(data) {

        let score = 0;

        // High quantity increases burning pressure
        if (data.quantity >= 5000) {
            score += 30;
        } else if (data.quantity >= 2000) {
            score += 15;
        } else {
            score += 5;
        }

        // Harvest season
        if (data.harvestMonth === "September" ||
            data.harvestMonth === "October" ||
            data.harvestMonth === "November") {
            score += 20;
        }

        // Nearby demand reduces risk
        if (!data.nearbyDemand) {
            score += 20;
        } else {
            score -= 10;
        }

        // Pickup availability reduces risk
        if (!data.pickupAvailable) {
            score += 20;
        } else {
            score -= 10;
        }

        // Long transport distance increases risk
        if (data.transportDistance > 30) {
            score += 15;
        } else if (data.transportDistance > 20) {
            score += 10;
        } else {
            score += 0;
        }

        // Keep score between 0 and 100
        score = Math.max(0, Math.min(100, score));

        return score;
    }


    // ================= RISK LEVEL =================

    function getRiskLevel(score) {

        if (score <= 30) {
            return {
                level: "Low Risk",
                status: "Safe",
                message:
                    "Your waste already has a viable utilization path. Burning risk is currently low."
            };
        }

        if (score <= 60) {
            return {
                level: "Moderate Risk",
                status: "Attention Needed",
                message:
                    "Some risk factors are present. Early matching and collection can prevent waste burning."
            };
        }

        return {
            level: "High Risk",
            status: "Action Required",
            message:
                "This waste may be at higher risk of being burned. AgriNova recommends immediate matching and pickup planning."
        };
    }


    // ================= UPDATE RISK UI =================

    function updateRiskUI(score) {

        const riskInfo = getRiskLevel(score);

        const riskProgress = document.getElementById("riskProgress");
        const riskStatus = document.querySelector(".risk-status");
        const riskScoreCard = document.querySelector(".risk-score-card");

        // Progress bar
        if (riskProgress) {
            riskProgress.style.width = `${score}%`;
        }

        // Risk status
        if (riskStatus) {
            riskStatus.textContent = riskInfo.level;
        }

        // Risk score card
        if (riskScoreCard) {
            const scoreNumber =
                riskScoreCard.querySelector(".risk-score-number");

            if (scoreNumber) {
                scoreNumber.textContent = `${score}%`;
            }

            const message =
                riskScoreCard.querySelector(".risk-message");

            if (message) {
                message.textContent = riskInfo.message;
            }
        }

        console.log("Calculated Burning Risk:", score + "%");
        console.log("Risk Level:", riskInfo.level);
        console.log("Risk Status:", riskInfo.status);
    }


    // ================= INITIAL RISK =================

    const calculatedRisk = calculateBurningRisk(riskData);

    /*
       Demo UI currently shows 25%.
       Keep the demo value aligned with the dashboard.
    */

    updateRiskUI(riskData.currentRisk);


    // ================= ANIMATE PROGRESS =================

    const riskProgress = document.getElementById("riskProgress");

    if (riskProgress) {

        const finalWidth = riskData.currentRisk;

        riskProgress.style.width = "0%";

        setTimeout(() => {
            riskProgress.style.width = `${finalWidth}%`;
        }, 300);
    }


    // ================= RISK SCORE ANIMATION =================

    const scoreCard = document.querySelector(".risk-score-card");

    if (scoreCard) {

        scoreCard.style.opacity = "0";
        scoreCard.style.transform = "translateY(15px)";

        setTimeout(() => {
            scoreCard.style.transition =
                "opacity 0.6s ease, transform 0.6s ease";

            scoreCard.style.opacity = "1";
            scoreCard.style.transform = "translateY(0)";
        }, 100);
    }


    // ================= FACTOR CARDS =================

    const factorCards = document.querySelectorAll(".factor-card");

    factorCards.forEach((card, index) => {

        card.setAttribute("tabindex", "0");

        card.addEventListener("click", () => {

            const title = card.querySelector("strong");
            const value = card.querySelector("span");

            console.log(
                "Risk Factor:",
                title ? title.textContent.trim() : "Unknown"
            );

            console.log(
                "Factor Status:",
                value ? value.textContent.trim() : "Unknown"
            );

            card.classList.toggle("factor-selected");
        });


        card.addEventListener("keydown", (event) => {

            if (event.key === "Enter" || event.key === " ") {

                event.preventDefault();
                card.click();
            }
        });

        // Staggered entrance animation
        card.style.opacity = "0";
        card.style.transform = "translateY(12px)";

        setTimeout(() => {

            card.style.transition =
                "opacity 0.5s ease, transform 0.5s ease";

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, 150 + (index * 100));
    });


    // ================= ACTION CARD =================

    const actionCard = document.querySelector(".action-card");

    if (actionCard) {

        actionCard.addEventListener("click", () => {

            console.log("Recommended Early Action:");
            console.log("Utilization:", riskData.recommendedUse);
            console.log("Estimated Net Value:", "₹" + riskData.estimatedNetValue);
            console.log("Pickup:", riskData.pickupDate, riskData.pickupTime);
            console.log("Batch ID:", riskData.batchId);

        });
    }


    // ================= ACTION BUTTONS =================

    const actionButtons = document.querySelectorAll(".action-buttons a");

    actionButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const buttonText = button.textContent.trim();

            console.log("Early Action selected:", buttonText);

        });
    });


    // ================= DETECTION FLOW =================

    const detectionSteps =
        document.querySelectorAll(".detection-step");

    detectionSteps.forEach((step, index) => {

        step.setAttribute("tabindex", "0");

        step.addEventListener("click", () => {

            const title = step.querySelector("strong");

            if (title) {
                console.log(
                    "Detection Step:",
                    title.textContent.trim()
                );
            }

        });

        step.addEventListener("keydown", (event) => {

            if (event.key === "Enter" || event.key === " ") {

                event.preventDefault();
                step.click();
            }
        });

        step.style.opacity = "0";

        setTimeout(() => {

            step.style.transition =
                "opacity 0.5s ease";

            step.style.opacity = "1";

        }, 300 + (index * 150));
    });


    // ================= INTELLIGENCE NOTE =================

    const intelligenceNote =
        document.querySelector(".intelligence-note");

    if (intelligenceNote) {

        intelligenceNote.addEventListener("click", () => {

            console.log(
                "Future Burning Risk Intelligence:"
            );

            console.log(
                "Weather + Harvest Patterns + " +
                "Historical Residue Data + Previous Incidents"
            );

        });
    }


    // ================= BACK LINK =================

    const backLink = document.querySelector(".back-link");

    if (backLink) {

        backLink.addEventListener("click", () => {

            console.log(
                "Returning to Waste Passport / Farmer Dashboard..."
            );

        });
    }


    // ================= DATA VALIDATION =================

    const requiredFields = [
        "wasteType",
        "quantity",
        "harvestMonth",
        "location",
        "recommendedUse",
        "batchId"
    ];

    const dataComplete = requiredFields.every((field) => {

        return (
            riskData[field] !== undefined &&
            riskData[field] !== null &&
            riskData[field].toString().trim() !== ""
        );

    });

    if (dataComplete) {

        console.log(
            "Burning Risk Data Validation: PASSED ✅"
        );

    } else {

        console.warn(
            "Burning Risk Data Validation: FAILED ❌"
        );
    }


    // ================= FINAL LOG =================

    console.log("--------------------------------");
    console.log("AgriNova Burning Risk Summary");
    console.log("Waste:", riskData.wasteType);
    console.log("Quantity:", riskData.quantity + " kg");
    console.log("Location:", riskData.location);
    console.log("Risk:", riskData.currentRisk + "%");
    console.log("Level:", riskData.riskLevel);
    console.log("Recommended Action:", riskData.recommendedUse);
    console.log("Batch:", riskData.batchId);
    console.log("--------------------------------");

});