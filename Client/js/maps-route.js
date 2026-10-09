// =========================================================
// AGRINOVA - REAL MAP & ROUTE
// Leaflet + OpenStreetMap + OSRM
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("AgriNova Real Map Module started.");


    // =====================================================
    // DEMO LOCATIONS
    // =====================================================

    const pickup = {
        lat: 27.1767,
        lng: 78.0081,
        name: "Agra Farmer Cluster"
    };


    const destination = {
        lat: 27.2017,
        lng: 77.9855,
        name: "Biomass Energy Unit"
    };


    // =====================================================
    // MAP ELEMENT
    // =====================================================

    const mapElement =
        document.getElementById("agrinovaMap");


    if (!mapElement) {

        console.error(
            "Map element not found."
        );

        return;
    }


    // =====================================================
    // CREATE REAL MAP
    // =====================================================

    const map = L.map("agrinovaMap");


    // =====================================================
    // OPENSTREETMAP
    // =====================================================

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            maxZoom: 19,

            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a>'
        }
    ).addTo(map);


    // =====================================================
    // CUSTOM PICKUP ICON
    // =====================================================

    const pickupIcon = L.divIcon({

        className: "agrinova-map-marker",

        html: `
            <div style="
                width:44px;
                height:44px;
                background:#123b2a;
                border:4px solid white;
                border-radius:50% 50% 50% 5px;
                transform:rotate(-45deg);
                display:flex;
                align-items:center;
                justify-content:center;
                box-shadow:0 5px 15px rgba(0,0,0,.3);
            ">
                <span style="
                    transform:rotate(45deg);
                    font-size:19px;
                ">
                    🌾
                </span>
            </div>
        `,

        iconSize: [44, 44],

        iconAnchor: [22, 44],

        popupAnchor: [0, -44]
    });


    // =====================================================
    // DESTINATION ICON
    // =====================================================

    const destinationIcon = L.divIcon({

        className: "agrinova-map-marker",

        html: `
            <div style="
                width:44px;
                height:44px;
                background:#c79a45;
                border:4px solid white;
                border-radius:50% 50% 50% 5px;
                transform:rotate(-45deg);
                display:flex;
                align-items:center;
                justify-content:center;
                box-shadow:0 5px 15px rgba(0,0,0,.3);
            ">
                <span style="
                    transform:rotate(45deg);
                    font-size:18px;
                ">
                    🏭
                </span>
            </div>
        `,

        iconSize: [44, 44],

        iconAnchor: [22, 44],

        popupAnchor: [0, -44]
    });


    // =====================================================
    // PICKUP MARKER
    // =====================================================

    const pickupMarker = L.marker(
        [pickup.lat, pickup.lng],
        {
            icon: pickupIcon
        }
    ).addTo(map);


    pickupMarker.bindPopup(`
        <strong>🌾 Pickup Location</strong>
        <br><br>
        ${pickup.name}
        <br>
        <small>Agra, Uttar Pradesh</small>
    `);


    // =====================================================
    // DESTINATION MARKER
    // =====================================================

    const destinationMarker = L.marker(
        [destination.lat, destination.lng],
        {
            icon: destinationIcon
        }
    ).addTo(map);


    destinationMarker.bindPopup(`
        <strong>🏭 Destination</strong>
        <br><br>
        ${destination.name}
        <br>
        <small>Agra, Uttar Pradesh</small>
    `);


    // =====================================================
    // INITIAL VIEW
    // =====================================================

    const locationBounds = L.latLngBounds(
        [
            pickup.lat,
            pickup.lng
        ],
        [
            destination.lat,
            destination.lng
        ]
    );


    map.fitBounds(
        locationBounds,
        {
            padding: [60, 60]
        }
    );


    // =====================================================
    // ROUTE INFO ELEMENTS
    // =====================================================

    const routeInfo =
        document.getElementById("routeInfo");

    const distanceValue =
        document.getElementById("distanceValue");

    const timeValue =
        document.getElementById("timeValue");

    const routeStatus =
        document.getElementById("routeStatus");


    // =====================================================
    // ACTUAL ROAD ROUTE
    // =====================================================

    const routingURL =
        "https://router.project-osrm.org/route/v1/driving/" +
        pickup.lng + "," + pickup.lat +
        ";" +
        destination.lng + "," + destination.lat +
        "?overview=full&geometries=geojson";


    console.log(
        "Fetching actual road route..."
    );


    fetch(routingURL)

        .then(response => {

            if (!response.ok) {

                throw new Error(
                    "Routing service unavailable."
                );
            }

            return response.json();

        })

        .then(data => {

            if (
                !data.routes ||
                data.routes.length === 0
            ) {

                throw new Error(
                    "No route found."
                );
            }


            const route =
                data.routes[0];


            // =================================================
            // DISTANCE
            // =================================================

            const distance =
                (route.distance / 1000).toFixed(1);


            // =================================================
            // TIME
            // =================================================

            const minutes =
                Math.round(
                    route.duration / 60
                );


            // =================================================
            // DRAW ACTUAL ROAD
            // =================================================

            const routeLayer =
                L.geoJSON(
                    route.geometry,
                    {
                        style: {
                            color: "#123b2a",
                            weight: 7,
                            opacity: 0.9
                        }
                    }
                ).addTo(map);


            // =================================================
            // FIT ROUTE
            // =================================================

            map.fitBounds(
                routeLayer.getBounds(),
                {
                    padding: [55, 55]
                }
            );


            // =================================================
            // UPDATE UI
            // =================================================

            if (routeInfo) {

                routeInfo.textContent =
                    `${distance} km · Approx. ${minutes} min`;

            }


            if (distanceValue) {

                distanceValue.textContent =
                    `${distance} km`;

            }


            if (timeValue) {

                timeValue.textContent =
                    `${minutes} min`;

            }


            if (routeStatus) {

                routeStatus.textContent =
                    "Actual Route Ready";

            }


            console.log(
                "Actual road route loaded."
            );

            console.log(
                "Distance:",
                distance + " km"
            );

            console.log(
                "Travel Time:",
                minutes + " minutes"
            );

        })

        .catch(error => {

            console.error(
                "Route error:",
                error
            );


            if (routeInfo) {

                routeInfo.textContent =
                    "Unable to calculate road route";

            }


            if (routeStatus) {

                routeStatus.textContent =
                    "Location Map Ready";

            }

        });


    // =====================================================
    // FIT ROUTE BUTTON
    // =====================================================

    const locateRouteBtn =
        document.getElementById(
            "locateRouteBtn"
        );


    if (locateRouteBtn) {

        locateRouteBtn.addEventListener(
            "click",
            () => {

                map.fitBounds(
                    locationBounds,
                    {
                        padding: [60, 60]
                    }
                );

            }
        );

    }


    // =====================================================
    // OPTIMIZE ROUTE
    // =====================================================

    const optimizeRouteBtn =
        document.getElementById(
            "optimizeRouteBtn"
        );


    if (optimizeRouteBtn) {

        optimizeRouteBtn.addEventListener(
            "click",
            () => {

                optimizeRouteBtn.disabled = true;

                optimizeRouteBtn.innerHTML = `
                    <i class="fa-solid fa-spinner fa-spin"></i>
                    Optimizing Route...
                `;


                setTimeout(() => {

                    optimizeRouteBtn.disabled = false;

                    optimizeRouteBtn.innerHTML = `
                        <i class="fa-solid fa-circle-check"></i>
                        Route Optimized
                    `;


                    alert(
                        "Route optimized successfully! 🌾\n\n" +
                        "AgriNova selected the practical road route " +
                        "for this pickup."
                    );


                    setTimeout(() => {

                        optimizeRouteBtn.innerHTML = `
                            <i class="fa-solid fa-wand-magic-sparkles"></i>
                            Optimize Route
                            <i class="fa-solid fa-arrow-right"></i>
                        `;

                    }, 2500);


                }, 1500);

            }
        );

    }


    // =====================================================
    // START NAVIGATION
    // =====================================================

    const startNavigationBtn =
        document.getElementById(
            "startNavigationBtn"
        );


    if (startNavigationBtn) {

        startNavigationBtn.addEventListener(
            "click",
            () => {

                const googleMapsURL =
                    `https://www.google.com/maps/dir/?api=1` +
                    `&origin=${pickup.lat},${pickup.lng}` +
                    `&destination=${destination.lat},${destination.lng}`;


                window.open(
                    googleMapsURL,
                    "_blank"
                );


                console.log(
                    "Navigation opened."
                );

            }
        );

    }


    // =====================================================
    // ROUTE STEPS
    // =====================================================

    const routeSteps =
        document.querySelectorAll(
            ".route-step"
        );


    routeSteps.forEach(step => {

        step.addEventListener(
            "click",
            () => {

                const title =
                    step.querySelector("strong");

                if (title) {

                    console.log(
                        "Route Step:",
                        title.textContent.trim()
                    );

                }

            }
        );

    });


    console.log(
        "AgriNova Real Map initialized successfully."
    );

});