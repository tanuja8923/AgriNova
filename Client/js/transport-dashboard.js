document.addEventListener("DOMContentLoaded", () => {

    console.log("AgriNova Transport Dashboard loaded successfully.");

    // =====================================================
    // DEMO TRANSPORT DATA
    // =====================================================

    const transportData = {
        transporter: "Transport Partner",
        vehicleType: "Light Commercial Vehicle",
        vehicleCapacity: 2500,

        activePickup: {
            batchId: "AGRI-2026-00125",
            wasteType: "Rice Straw",
            quantity: 1000,
            farmers: 4,
            pickupLocation: "Agra, Uttar Pradesh",
            destination: "Biomass Energy Unit",
            distance: 14,
            pickupDate: "16 September",
            pickupTime: "10:30 AM",
            estimatedEarnings: 600,
            status: "Pickup Assigned"
        },

        availableRequests: [
            {
                batchId: "AGRI-2026-00131",
                wasteType: "Rice Straw",
                quantity: 1500,
                location: "Bharatpur",
                distance: 28,
                earnings: 850
            },
            {
                batchId: "AGRI-2026-00144",
                wasteType: "Wheat Straw",
                quantity: 1200,
                location: "Mathura",
                distance: 34,
                earnings: 1050
            },
            {
                batchId: "AGRI-2026-00152",
                wasteType: "Sugarcane Bagasse",
                quantity: 2000,
                location: "Fatehpur Sikri",
                distance: 22,
                earnings: 750
            }
        ]
    };


    // =====================================================
    // ACTIVE PICKUP DATA
    // =====================================================

    console.log("Active Pickup:");
    console.log("Batch ID:", transportData.activePickup.batchId);
    console.log("Waste:", transportData.activePickup.wasteType);
    console.log("Quantity:", transportData.activePickup.quantity + " kg");
    console.log("Pickup:", transportData.activePickup.pickupLocation);
    console.log("Destination:", transportData.activePickup.destination);
    console.log("Distance:", transportData.activePickup.distance + " km");


    // =====================================================
    // START PICKUP
    // =====================================================

    const startPickupBtn = document.getElementById("startPickupBtn");

    if (startPickupBtn) {

        startPickupBtn.addEventListener("click", () => {

            console.log("Pickup started.");

            startPickupBtn.innerHTML = `
                <i class="fa-solid fa-truck"></i>
                Pickup Started
            `;

            startPickupBtn.disabled = true;

            startPickupBtn.style.opacity = "0.7";

            alert(
                "Pickup Started Successfully! 🚚\n\n" +
                "Waste: " +
                transportData.activePickup.wasteType +
                "\nQuantity: " +
                transportData.activePickup.quantity +
                " kg\n\n" +
                "Status: On the Way"
            );

        });

    }


    // =====================================================
    // VIEW ROUTE
    // =====================================================

    const viewRouteBtn = document.getElementById("viewRouteBtn");

    if (viewRouteBtn) {

        viewRouteBtn.addEventListener("click", () => {

            console.log(
                "Opening route from " +
                transportData.activePickup.pickupLocation +
                " to " +
                transportData.activePickup.destination
            );

            alert(
                "Route Details 🚚\n\n" +
                "Pickup: " +
                transportData.activePickup.pickupLocation +
                "\nDestination: " +
                transportData.activePickup.destination +
                "\nDistance: " +
                transportData.activePickup.distance +
                " km\n\n" +
                "Map & navigation will be connected in the next phase."
            );

        });

    }


    // =====================================================
    // ACCEPT PICKUP REQUESTS
    // =====================================================

    const acceptButtons = document.querySelectorAll(".accept-btn");

    acceptButtons.forEach((button, index) => {

        button.addEventListener("click", () => {

            const request = transportData.availableRequests[index];

            if (!request) {
                return;
            }

            console.log("Pickup request accepted:", request);

            button.innerHTML = `
                <i class="fa-solid fa-check"></i>
                Accepted
            `;

            button.disabled = true;

            button.style.background = "#2f6b4f";
            button.style.color = "#ffffff";
            button.style.borderColor = "#2f6b4f";

            alert(
                "Pickup Request Accepted! ✓\n\n" +
                "Batch: " +
                request.batchId +
                "\nWaste: " +
                request.wasteType +
                "\nQuantity: " +
                request.quantity +
                " kg\n" +
                "Location: " +
                request.location +
                "\nEstimated Earnings: ₹" +
                request.earnings.toLocaleString("en-IN") +
                "\n\nThe request has been added to your assignments."
            );

        });

    });


    // =====================================================
    // FILTER BUTTON
    // =====================================================

    const filterBtn = document.getElementById("filterBtn");

    if (filterBtn) {

        filterBtn.addEventListener("click", () => {

            console.log("Transport request filter opened.");

            alert(
                "Filter Options\n\n" +
                "• Waste Type\n" +
                "• Maximum Distance\n" +
                "• Minimum Quantity\n" +
                "• Estimated Earnings\n\n" +
                "Advanced filtering will be connected in the next phase."
            );

        });

    }


    // =====================================================
    // VEHICLE SETTINGS
    // =====================================================

    const vehicleSettingsBtn =
        document.getElementById("vehicleSettingsBtn");

    if (vehicleSettingsBtn) {

        vehicleSettingsBtn.addEventListener("click", () => {

            console.log("Vehicle settings opened.");

            alert(
                "Vehicle Settings 🚚\n\n" +
                "Vehicle Type: " +
                transportData.vehicleType +
                "\nCapacity: " +
                transportData.vehicleCapacity +
                " kg\n\n" +
                "Vehicle profile management will be connected in the next phase."
            );

        });

    }


    // =====================================================
    // SMART ROUTE OPTIMIZATION
    // =====================================================

    const optimizeRouteBtn =
        document.getElementById("optimizeRouteBtn");

    if (optimizeRouteBtn) {

        optimizeRouteBtn.addEventListener("click", () => {

            console.log("Smart route optimization started.");

            optimizeRouteBtn.innerHTML = `
                <i class="fa-solid fa-spinner fa-spin"></i>
                Optimizing...
            `;

            optimizeRouteBtn.disabled = true;


            setTimeout(() => {

                optimizeRouteBtn.innerHTML = `
                    <i class="fa-solid fa-check"></i>
                    Route Optimized
                `;

                optimizeRouteBtn.disabled = false;

                console.log(
                    "Optimized route calculated using nearby pickup requests."
                );

                alert(
                    "Smart Route Optimized! 🗺️\n\n" +
                    "AgriNova found a more efficient pickup sequence.\n\n" +
                    "• Nearby requests grouped\n" +
                    "• Empty travel reduced\n" +
                    "• Pickup sequence optimized\n\n" +
                    "Detailed map routing will be connected in the next phase."
                );

            }, 1200);

        });

    }


    // =====================================================
    // JOURNEY STATUS
    // =====================================================

    const journeySteps =
        document.querySelectorAll(".journey-step");

    journeySteps.forEach((step) => {

        step.addEventListener("click", () => {

            const title = step.querySelector("strong");

            if (title) {

                console.log(
                    "Journey stage selected:",
                    title.textContent.trim()
                );

            }

        });

    });


    // =====================================================
    // REQUEST CARD INTERACTION
    // =====================================================

    const requestCards =
        document.querySelectorAll(".request-card");

    requestCards.forEach((card) => {

        card.addEventListener("click", (event) => {

            // Don't trigger when Accept button itself is clicked
            if (event.target.closest(".accept-btn")) {
                return;
            }

            const batchId =
                card.querySelector(".request-id");

            const waste =
                card.querySelector(".request-title h3");

            if (batchId && waste) {

                console.log(
                    "Selected Request:",
                    batchId.textContent.trim(),
                    waste.textContent.trim()
                );

            }

        });

    });


    // =====================================================
    // VEHICLE CAPACITY CHECK
    // =====================================================

    const currentLoad =
        transportData.activePickup.quantity;

    const vehicleCapacity =
        transportData.vehicleCapacity;

    const remainingCapacity =
        vehicleCapacity - currentLoad;

    console.log(
        "Vehicle Capacity:",
        vehicleCapacity + " kg"
    );

    console.log(
        "Current Load:",
        currentLoad + " kg"
    );

    console.log(
        "Remaining Capacity:",
        remainingCapacity + " kg"
    );


    if (remainingCapacity > 0) {

        console.log(
            "Vehicle has capacity for additional waste."
        );

    } else {

        console.log(
            "Vehicle capacity is full."
        );

    }


    // =====================================================
    // KEYBOARD ACCESSIBILITY
    // =====================================================

    requestCards.forEach((card) => {

        card.setAttribute("tabindex", "0");

        card.addEventListener("keydown", (event) => {

            if (event.key === "Enter" || event.key === " ") {

                event.preventDefault();

                card.click();

            }

        });

    });


    // =====================================================
    // INITIAL STATUS
    // =====================================================

    console.log(
        "Current Transport Status:",
        transportData.activePickup.status
    );

    console.log(
        "Estimated Active Pickup Earnings: ₹" +
        transportData.activePickup.estimatedEarnings.toLocaleString("en-IN")
    );

    console.log(
        "AgriNova Transport Module is running in frontend demo mode."
    );

});
function logoutUser() {
    sessionStorage.removeItem("agrinovaLoggedIn");
    sessionStorage.removeItem("agrinovaRole");

    window.location.href = "login.html";
}