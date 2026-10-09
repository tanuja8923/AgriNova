document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("requirementForm");
    const requiredDate = document.getElementById("requiredDate");

    // Prevent past dates
    const today = new Date().toISOString().split("T")[0];

    if (requiredDate) {
        requiredDate.min = today;
    }


    // ================= FORM SUBMIT =================

    form.addEventListener("submit", (event) => {

        event.preventDefault();


        const wasteType =
            document.getElementById("wasteType").value;

        const quantity =
            document.getElementById("quantity").value;

        const unit =
            document.getElementById("unit").value;

        const utilization =
            document.querySelector(
                'input[name="utilization"]:checked'
            )?.value;

        const quality =
            document.querySelector(
                'input[name="quality"]:checked'
            )?.value;

        const location =
            document.getElementById("location").value.trim();

        const date =
            document.getElementById("requiredDate").value;

        const delivery =
            document.querySelector(
                'input[name="delivery"]:checked'
            )?.value;

        const additionalRequirements =
            document.getElementById("additionalRequirements").value.trim();


        // ================= VALIDATION =================

        if (!wasteType ||
            !quantity ||
            !utilization ||
            !quality ||
            !location ||
            !date ||
            !delivery) {

            alert("Please complete all required fields.");
            return;
        }


        // ================= REQUIREMENT OBJECT =================

        const requirement = {

            id:
                "REQ-" +
                Date.now(),

            wasteType: wasteType,

            quantity:
                Number(quantity),

            unit: unit,

            utilization: utilization,

            quality: quality,

            location: location,

            requiredDate: date,

            delivery: delivery,

            additionalRequirements:
                additionalRequirements,

            status: "Active",

            createdAt:
                new Date().toISOString()

        };


        // ================= TEMPORARY FRONTEND STORAGE =================

        const existingRequirements =
            JSON.parse(
                localStorage.getItem("agrinovaRequirements")
            ) || [];


        existingRequirements.push(requirement);


        localStorage.setItem(
            "agrinovaRequirements",
            JSON.stringify(existingRequirements)
        );


        // ================= SUCCESS =================

        alert(
            "Requirement created successfully! AgriNova will now find suitable waste matches."
        );


        // Redirect to Smart Matching
        window.location.href =
            "smart-matching.html";

    });

});