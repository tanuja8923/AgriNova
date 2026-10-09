// =========================================================
// AGRINOVA — SMART WASTE SUBMISSION
// Frontend-only Phase 1
// Voice → Automatic Form Filling
// =========================================================


// =========================================================
// ELEMENTS
// =========================================================

const wasteType = document.getElementById("wasteType");
const quantity = document.getElementById("quantity");
const unit = document.getElementById("unit");
const locationInput = document.getElementById("location");

const previewWaste = document.getElementById("previewWaste");
const previewQuantity = document.getElementById("previewQuantity");
const previewLocation = document.getElementById("previewLocation");

const detectLocationBtn =
    document.getElementById("detectLocationBtn");

const voiceSubmitBtn =
    document.getElementById("voiceSubmitBtn");

const wasteSubmissionForm =
    document.getElementById("wasteSubmissionForm");


// =========================================================
// LIVE PREVIEW
// =========================================================

function updatePreview() {

    // Waste
    if (wasteType.value) {
        previewWaste.textContent = wasteType.value;
    } else {
        previewWaste.textContent = "Not selected";
    }


    // Quantity
    if (quantity.value) {
        previewQuantity.textContent =
            `${quantity.value} ${unit.value}`;
    } else {
        previewQuantity.textContent = "Not entered";
    }


    // Location
    if (locationInput.value.trim()) {
        previewLocation.textContent =
            locationInput.value.trim();
    } else {
        previewLocation.textContent = "Not detected";
    }
}


// =========================================================
// LIVE PREVIEW EVENTS
// =========================================================

wasteType.addEventListener("change", updatePreview);
quantity.addEventListener("input", updatePreview);
unit.addEventListener("change", updatePreview);
locationInput.addEventListener("input", updatePreview);


// =========================================================
// DETECT LOCATION
// =========================================================

detectLocationBtn.addEventListener("click", function () {

    if (!navigator.geolocation) {

        alert(
            "Location detection is not supported by your browser."
        );

        return;
    }


    detectLocationBtn.innerHTML =
        `<i class="fa-solid fa-spinner fa-spin"></i>
         Detecting...`;

    detectLocationBtn.disabled = true;


    navigator.geolocation.getCurrentPosition(

        function (position) {

            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;


            locationInput.value =
                `Lat ${latitude.toFixed(5)}, Long ${longitude.toFixed(5)}`;


            updatePreview();


            detectLocationBtn.innerHTML =
                `<i class="fa-solid fa-circle-check"></i>
                 Location Detected`;

            detectLocationBtn.disabled = false;
        },


        function () {

            alert(
                "Unable to detect your location. Please allow location access and try again."
            );


            detectLocationBtn.innerHTML =
                `<i class="fa-solid fa-location-crosshairs"></i>
                 Detect Location`;

            detectLocationBtn.disabled = false;
        }
    );
});


// =========================================================
// VOICE INPUT
// =========================================================

voiceSubmitBtn.addEventListener("click", function () {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    // Browser support
    if (!SpeechRecognition) {

        alert(
            "Voice input is not supported in this browser. Please use Chrome or enter the details manually."
        );

        return;
    }


    const recognition =
        new SpeechRecognition();


    // Hindi voice recognition
    recognition.lang = "hi-IN";

    recognition.interimResults = false;

    recognition.maxAlternatives = 1;


    // Button state
    voiceSubmitBtn.innerHTML =
        `<i class="fa-solid fa-microphone-lines"></i>
         Listening...`;

    voiceSubmitBtn.classList.add("listening");

    voiceSubmitBtn.disabled = true;


    // Start microphone
    recognition.start();


    // =====================================================
    // SPEECH RESULT
    // =====================================================

    recognition.onresult = function (event) {

        const speechText =
            event.results[0][0].transcript;


        console.log(
            "Voice Input:",
            speechText
        );


        // Automatically extract everything
        extractWasteDetails(speechText);


        // Button reset
        resetVoiceButton();
    };


    // =====================================================
    // ERROR
    // =====================================================

    recognition.onerror = function (event) {

        console.log(
            "Speech recognition error:",
            event.error
        );


        // Only show error if microphone actually failed
        if (event.error !== "no-speech") {

            alert(
                "Voice input could not be captured. Please try again."
            );
        }


        resetVoiceButton();
    };


    // =====================================================
    // END
    // =====================================================

    recognition.onend = function () {

        resetVoiceButton();
    };

});


// =========================================================
// RESET VOICE BUTTON
// =========================================================

function resetVoiceButton() {

    voiceSubmitBtn.innerHTML =
        `<i class="fa-solid fa-microphone"></i>
         बोलकर बताएं`;

    voiceSubmitBtn.classList.remove("listening");

    voiceSubmitBtn.disabled = false;
}


// =========================================================
// VOICE TEXT → WASTE DETAILS
// =========================================================

function extractWasteDetails(text) {

    const originalText =
        text.toLowerCase().trim();


    console.log(
        "Processing speech:",
        originalText
    );


    // =====================================================
    // 1. WASTE TYPE
    // =====================================================

    let detectedWaste = "";


    if (
        originalText.includes("rice") ||
        originalText.includes("paddy") ||
        originalText.includes("धान") ||
        originalText.includes("पराली") ||
        originalText.includes("चावल") ||
        originalText.includes("धान की पराली")
    ) {

        detectedWaste = "Rice Straw";

    }

    else if (
        originalText.includes("wheat") ||
        originalText.includes("गेहूं") ||
        originalText.includes("गेहूँ") ||
        originalText.includes("गेहू")
    ) {

        detectedWaste = "Wheat Straw";

    }

    else if (
        originalText.includes("corn") ||
        originalText.includes("maize") ||
        originalText.includes("मक्का") ||
        originalText.includes("भुट्टा")
    ) {

        detectedWaste = "Corn Stalk";

    }

    else if (
        originalText.includes("banana") ||
        originalText.includes("केला") ||
        originalText.includes("केले")
    ) {

        detectedWaste = "Banana Waste";

    }

    else if (
        originalText.includes("groundnut") ||
        originalText.includes("peanut") ||
        originalText.includes("मूंगफली") ||
        originalText.includes("मूंगफली के छिलके")
    ) {

        detectedWaste = "Groundnut Shells";

    }

    else if (
        originalText.includes("coconut") ||
        originalText.includes("नारियल")
    ) {

        detectedWaste = "Coconut Waste";

    }

    else if (
        originalText.includes("sugarcane") ||
        originalText.includes("bagasse") ||
        originalText.includes("गन्ना") ||
        originalText.includes("गन्ने")
    ) {

        detectedWaste = "Sugarcane Bagasse";
    }



    // =====================================================
    // 2. QUANTITY
    // =====================================================

    let detectedQuantity = null;

    let detectedUnit = "Ton";


    // -----------------------------
    // Numeric quantity
    // -----------------------------

    const tonPattern =
        /(\d+(?:\.\d+)?)\s*(ton|tons|tonne|tonnes|टन)/i;


    const kgPattern =
        /(\d+(?:\.\d+)?)\s*(kg|kgs|kilogram|kilograms|kilo|kilos|किलो|किलोग्राम)/i;


    const tonMatch =
        originalText.match(tonPattern);


    const kgMatch =
        originalText.match(kgPattern);


    if (tonMatch) {

        detectedQuantity =
            parseFloat(tonMatch[1]);

        detectedUnit = "Ton";
    }

    else if (kgMatch) {

        detectedQuantity =
            parseFloat(kgMatch[1]);

        detectedUnit = "Kg";
    }


    // =====================================================
    // 3. HINDI NUMBER WORDS
    // =====================================================

    if (detectedQuantity === null) {

        const hindiNumbers = {

            "एक": 1,
            "दो": 2,
            "तीन": 3,
            "चार": 4,
            "पांच": 5,
            "पाँच": 5,
            "छह": 6,
            "छः": 6,
            "सात": 7,
            "आठ": 8,
            "नौ": 9,
            "दस": 10,
            "ग्यारह": 11,
            "बारह": 12,
            "तेरह": 13,
            "चौदह": 14,
            "पंद्रह": 15,
            "सोलह": 16,
            "सत्रह": 17,
            "अठारह": 18,
            "उन्नीस": 19,
            "बीस": 20
        };


        for (const numberWord in hindiNumbers) {

            if (
                originalText.includes(numberWord)
            ) {

                // Ton
                if (
                    originalText.includes("टन")
                ) {

                    detectedQuantity =
                        hindiNumbers[numberWord];

                    detectedUnit = "Ton";

                    break;
                }


                // Kg
                if (
                    originalText.includes("किलो") ||
                    originalText.includes("किलोग्राम")
                ) {

                    detectedQuantity =
                        hindiNumbers[numberWord];

                    detectedUnit = "Kg";

                    break;
                }
            }
        }
    }



    // =====================================================
    // 4. LOCATION
    // =====================================================

    let detectedLocation = "";


    const locations = [

        {
            names: ["agra", "आगरा"],
            value: "Agra"
        },

        {
            names: ["delhi", "दिल्ली"],
            value: "Delhi"
        },

        {
            names: ["mathura", "मथुरा"],
            value: "Mathura"
        },

        {
            names: ["fatehpur sikri", "फतेहपुर सीकरी"],
            value: "Fatehpur Sikri"
        },

        {
            names: ["bharatpur", "भरतपुर"],
            value: "Bharatpur"
        },

        {
            names: ["aligarh", "अलीगढ़", "अलीगढ"],
            value: "Aligarh"
        },

        {
            names: ["jaipur", "जयपुर"],
            value: "Jaipur"
        },

        {
            names: ["lucknow", "लखनऊ"],
            value: "Lucknow"
        },

        {
            names: ["kanpur", "कानपुर"],
            value: "Kanpur"
        },

        {
            names: ["gwalior", "ग्वालियर"],
            value: "Gwalior"
        }
    ];


    for (const location of locations) {

        for (const name of location.names) {

            if (
                originalText.includes(name.toLowerCase())
            ) {

                detectedLocation =
                    location.value;

                break;
            }
        }


        if (detectedLocation) {
            break;
        }
    }



    // =====================================================
    // 5. FILL FORM AUTOMATICALLY
    // =====================================================

    if (detectedWaste) {

        wasteType.value =
            detectedWaste;
    }


    if (detectedQuantity !== null) {

        quantity.value =
            detectedQuantity;

        unit.value =
            detectedUnit;
    }


    if (detectedLocation) {

        locationInput.value =
            detectedLocation;
    }


    // =====================================================
    // 6. UPDATE PREVIEW
    // =====================================================

    updatePreview();


    // =====================================================
    // 7. CONSOLE RESULT
    // =====================================================

    console.log(
        "Extracted Details:",
        {
            waste: detectedWaste || "Not detected",

            quantity:
                detectedQuantity !== null
                    ? detectedQuantity
                    : "Not detected",

            unit:
                detectedUnit,

            location:
                detectedLocation || "Not detected"
        }
    );


    // =====================================================
    // IMPORTANT
    // No alert here.
    // Form will automatically fill.
    // =====================================================
}



// =========================================================
// FORM SUBMISSION
// =========================================================

wasteSubmissionForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const selectedWaste =
            wasteType.value;


        const enteredQuantity =
            quantity.value;


        const selectedUnit =
            unit.value;


        const selectedLocation =
            locationInput.value.trim();


        // =================================================
        // VALIDATION
        // =================================================

        if (!selectedWaste) {

            alert(
                "Please select your waste type."
            );

            wasteType.focus();

            return;
        }


        if (
            !enteredQuantity ||
            enteredQuantity <= 0
        ) {

            alert(
                "Please enter a valid quantity."
            );

            quantity.focus();

            return;
        }


        if (!selectedLocation) {

            alert(
                "Please detect or enter your location."
            );

            locationInput.focus();

            return;
        }


        // =================================================
        // PHASE 1 DEMO
        // =================================================

        alert(
            `Waste submitted successfully!\n\n` +
            `Waste: ${selectedWaste}\n` +
            `Quantity: ${enteredQuantity} ${selectedUnit}\n` +
            `Location: ${selectedLocation}`
        );


        console.log(
            "AgriNova Waste Submission:",
            {
                wasteType: selectedWaste,
                quantity: enteredQuantity,
                unit: selectedUnit,
                location: selectedLocation
            }
        );
    }
);


// =========================================================
// INITIAL PREVIEW
// =========================================================

updatePreview();