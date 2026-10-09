/* =========================================================
   AGRINOVA — FARMER DASHBOARD JS
   Phase 1: Frontend Only
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       1. DYNAMIC DATE
    ===================================================== */

    const dateElement = document.querySelector(".welcome-date strong");

    if (dateElement) {
        const today = new Date();

        const options = {
            day: "numeric",
            month: "long",
            year: "numeric"
        };

        dateElement.textContent =
            today.toLocaleDateString("en-IN", options);
    }


    /* =====================================================
       2. VOICE SUBMISSION BUTTON
    ===================================================== */

    const voiceButton = document.getElementById("voiceSubmitBtn");

    if (voiceButton) {

        voiceButton.addEventListener("click", () => {

            const originalText = voiceButton.innerHTML;

            voiceButton.innerHTML = `
                <i class="fa-solid fa-microphone"></i>
                Listening...
            `;

            voiceButton.disabled = true;

            setTimeout(() => {

                alert(
                    "Voice submission module is ready for integration.\n\n" +
                    "Example:\n" +
                    "“Mere paas 2 ton rice straw hai.”"
                );

                voiceButton.innerHTML = originalText;
                voiceButton.disabled = false;

            }, 1200);
        });
    }


    /* =====================================================
       3. VIEW ANALYSIS BUTTON
    ===================================================== */

    const viewAnalysisBtn =
        document.querySelector(".view-analysis-btn");

    if (viewAnalysisBtn) {

        viewAnalysisBtn.addEventListener("click", () => {

            window.location.href = "net-value-analysis.html";

        });
    }


    /* =====================================================
       4. PROFILE MENU
    ===================================================== */

    const profileMenu =
        document.getElementById("profileMenu");

    if (profileMenu) {

        profileMenu.addEventListener("click", () => {

            window.location.href = "profile.html";

        });
    }


    /* =====================================================
       5. LANGUAGE SELECTOR
    ===================================================== */

    const languageSelector =
        document.getElementById("languageSelector");

    const languageDropdown =
        document.getElementById("languageDropdown");

    const currentLanguage =
        document.getElementById("currentLanguage");


    if (languageSelector && languageDropdown) {

        languageSelector.addEventListener("click", (event) => {

            event.stopPropagation();

            languageDropdown.classList.toggle("show");

        });
    }


    /* =====================================================
       6. LANGUAGE BUTTONS
    ===================================================== */

    const languageButtons =
        document.querySelectorAll(
            ".language-dropdown button"
        );


    languageButtons.forEach(button => {

        button.addEventListener("click", (event) => {

            event.stopPropagation();

            const selectedLanguage =
                button.dataset.lang;


            if (selectedLanguage === "hi") {

                currentLanguage.textContent = "HI";

                localStorage.setItem(
                    "agrinovaLanguage",
                    "hi"
                );

                setHindi();

            } else {

                currentLanguage.textContent = "EN";

                localStorage.setItem(
                    "agrinovaLanguage",
                    "en"
                );

                setEnglish();

            }


            languageDropdown.classList.remove("show");

        });

    });


    /* =====================================================
       7. CLOSE LANGUAGE DROPDOWN
    ===================================================== */

    document.addEventListener("click", () => {

        if (languageDropdown) {

            languageDropdown.classList.remove("show");

        }

    });


    /* =====================================================
       8. ACTIVITY ITEMS
    ===================================================== */

    const activityItems =
        document.querySelectorAll(".activity-item");

    activityItems.forEach(item => {

        item.addEventListener("click", () => {

            item.style.background = "#f4f7f2";

            setTimeout(() => {

                item.style.background = "";

            }, 300);

        });

    });


    /* =====================================================
       9. STAT CARD INTERACTION
    ===================================================== */

    const statCards =
        document.querySelectorAll(".stat-card");

    statCards.forEach(card => {

        card.addEventListener("click", () => {

            const label =
                card.querySelector(".stat-label");

            if (label) {

                console.log(
                    `Selected dashboard statistic: ${label.textContent.trim()}`
                );

            }

        });

    });


    /* =====================================================
       10. NAVIGATION
    ===================================================== */

    const navLinks =
        document.querySelectorAll(".main-nav a");

    navLinks.forEach(link => {

        link.addEventListener("click", (event) => {

            const href =
                link.getAttribute("href");

            if (href === "#") {

                event.preventDefault();

                alert(
                    `${link.textContent.trim()} section will be connected later.`
                );

            }

        });

    });


    /* =====================================================
       11. LOAD SAVED LANGUAGE
    ===================================================== */

    const savedLanguage =
        localStorage.getItem("agrinovaLanguage");

    if (savedLanguage === "hi") {

        if (currentLanguage) {
            currentLanguage.textContent = "HI";
        }

        setHindi();

    } else {

        if (currentLanguage) {
            currentLanguage.textContent = "EN";
        }

    }


    /* =====================================================
       12. DASHBOARD READY
    ===================================================== */

    console.log(
        "AgriNova Farmer Dashboard loaded successfully."
    );

});


/* =========================================================
   HINDI TRANSLATION
   ========================================================= */

function setHindi() {

    const translations = {

        /* HEADER */

        "Dashboard":
            "डैशबोर्ड",

        "Submit Waste":
            "अपशिष्ट जमा करें",

        "My Batches":
            "मेरे बैच",

        "Value Analysis":
            "मूल्य विश्लेषण",

        "Collections":
            "संग्रह",

        "Impact":
            "प्रभाव",

        "Farmer":
            "किसान",

        "Agra, UP":
            "आगरा, उत्तर प्रदेश",


        /* WELCOME */

        "FARMER CONTROL CENTER":
            "किसान नियंत्रण केंद्र",

        "Welcome back, ":
            "आपका स्वागत है, ",

        "Welcome back,":
            " आपका स्वागत है,",

        "Manage your agricultural waste, discover its best value, track collections and see your environmental impact — all from one place.":
            "अपने कृषि अपशिष्ट को प्रबंधित करें, उसका सर्वोत्तम मूल्य जानें, संग्रह की स्थिति देखें और अपने पर्यावरणीय प्रभाव को एक ही स्थान से ट्रैक करें।",

        "Today":
            "आज",


        /* SMART SUBMISSION */

        "SMART WASTE SUBMISSION":
            "स्मार्ट अपशिष्ट जमा",

        "Tell us what you have":
            "आपके पास क्या है, हमें बताएं",

        "Simply speak or enter your waste details. AgriNova will find where it creates the most value.":
            "बस बोलकर या अपने अपशिष्ट की जानकारी दर्ज करें। AgriNova पता लगाएगा कि इससे सबसे अधिक मूल्य कहाँ बनाया जा सकता है।",

        "Speak":
            "बोलें",

        "Submit Waste":
            "अपशिष्ट जमा करें",


        /* QUICK ACTIONS */

        "QUICK ACTIONS":
            "त्वरित कार्य",

        "What would you like to do?":
            "आप क्या करना चाहते हैं?",

        "Add a new waste batch":
            "नया अपशिष्ट बैच जोड़ें",

        "Compare utilization options":
            "उपयोग के विकल्पों की तुलना करें",

        "View pickup status":
            "पिकअप की स्थिति देखें",

        "View batch identity":
            "बैच की जानकारी देखें",

        "Check Best Value":
            "सर्वोत्तम मूल्य देखें",

        "Track Collection":
            "संग्रह ट्रैक करें",

        "Waste Passport":
            "वेस्ट पासपोर्ट",


        /* STATS */

        "Waste Submitted":
            "जमा किया गया अपशिष्ट",

        "This season":
            "इस सीज़न",

        "Best Match":
            "सर्वोत्तम मिलान",

        "Potential Net Value":
            "संभावित शुद्ध मूल्य",

        "After estimated transport":
            "अनुमानित परिवहन लागत के बाद",

        "Next Collection":
            "अगला संग्रह",

        "Scheduled":
            "निर्धारित",

        "Waste Diverted":
            "अपशिष्ट को हटाया गया",

        "Positive":
            "सकारात्मक",

        "From burning / disposal":
            "जलाने / निपटान से बचाया गया",


        /* WASTE OVERVIEW */

        "MY WASTE OVERVIEW":
            "मेरे अपशिष्ट का विवरण",

        "Your waste journey":
            "आपकी अपशिष्ट यात्रा",

        "View All":
            "सभी देखें",

        "Total Batches":
            "कुल बैच",

        "Matched":
            "मिलान किए गए",

        "Collected":
            "संग्रह किए गए",

        "Delivered":
            "पहुंचाए गए",


        /* ACTIVE BATCH */

        "ACTIVE WASTE BATCH":
            "सक्रिय अपशिष्ट बैच",

        "Details":
            "विवरण",

        "Quantity":
            "मात्रा",

        "Collection Progress":
            "संग्रह प्रगति",

        "Submitted":
            "जमा किया गया",

        "Pickup":
            "पिकअप",

        "Delivered":
            "पहुंचाया गया",


        /* INTELLIGENCE */

        "AGRINOVA INTELLIGENCE":
            "AGRINOVA इंटेलिजेंस",

        "Best Utilization":
            "सर्वोत्तम उपयोग",

        "Biomass Energy":
            "बायोमास ऊर्जा",

        "Best practical value for this batch":
            "इस बैच के लिए सर्वोत्तम व्यावहारिक मूल्य",

        "Estimated Net Value":
            "अनुमानित शुद्ध मूल्य",

        "Paper Industry":
            "कागज उद्योग",

        "Composting":
            "कम्पोस्टिंग",

        "View Full Value Analysis":
            "पूरा मूल्य विश्लेषण देखें",


        /* COLLECTION */

        "UPCOMING COLLECTION":
            "आगामी संग्रह",

        "Pickup Schedule":
            "पिकअप शेड्यूल",

        "Track":
            "ट्रैक करें",

        "Rice Straw Collection":
            "राइस स्ट्रॉ संग्रह",

        "Pickup Assigned":
            "पिकअप निर्धारित",

        "Transport arranged":
            "परिवहन की व्यवस्था की गई",

        "Nearby industry":
            "नजदीकी उद्योग",


        /* BURNING RISK */

        "EARLY INTERVENTION":
            "प्रारंभिक हस्तक्षेप",

        "Burning Risk":
            "जलाने का जोखिम",

        "CURRENT RISK":
            "वर्तमान जोखिम",

        "LOW":
            "कम",

        "Your submitted waste already has a potential utilization pathway and collection option. No immediate disposal pressure detected.":
            "आपके जमा किए गए अपशिष्ट के लिए पहले से ही संभावित उपयोग और संग्रह का विकल्प उपलब्ध है। तत्काल निपटान का कोई दबाव नहीं पाया गया।",

        "Keep your waste ready for collection.":
            "अपने अपशिष्ट को संग्रह के लिए तैयार रखें।",


        /* LOCAL DEMAND */

        "LOCAL DEMAND":
            "स्थानीय मांग",

        "Nearby Industries Looking for Waste":
            "अपशिष्ट की तलाश कर रहे नजदीकी उद्योग",

        "Explore Demand":
            "मांग देखें",

        "Dry Quality":
            "सूखी गुणवत्ता",

        "Mixed":
            "मिश्रित",

        "Required":
            "आवश्यक",

        "km away":
            "किमी दूर",


        /* PASSPORT */

        "TRACEABILITY":
            "ट्रेसबिलिटी",

        "Waste Passport":
            "वेस्ट पासपोर्ट",

        "BATCH ID":
            "बैच आईडी",

        "Material":
            "सामग्री",

        "Quality":
            "गुणवत्ता",

        "Dry · Low Moisture":
            "सूखा · कम नमी",

        "View Full Passport":
            "पूरा पासपोर्ट देखें",


        /* ACTIVITY */

        "RECENT ACTIVITY":
            "हाल की गतिविधि",

        "Latest Updates":
            "नवीनतम अपडेट",

        "Buyer matched":
            "खरीदार का मिलान हुआ",

        "Biomass Energy Unit matched your batch":
            "बायोमास ऊर्जा इकाई ने आपके बैच का मिलान किया",

        "Pickup scheduled":
            "पिकअप निर्धारित",

        "Collection confirmed for 16 September":
            "16 सितंबर के लिए संग्रह की पुष्टि हुई",

        "Value analysis completed":
            "मूल्य विश्लेषण पूरा हुआ",

        "Biomass gives the best estimated net value":
            "बायोमास सर्वोत्तम अनुमानित शुद्ध मूल्य देता है",

        "Environmental impact updated":
            "पर्यावरणीय प्रभाव अपडेट किया गया",

        "2 tons of residue added to diverted waste":
            "2 टन अवशेष को हटाए गए अपशिष्ट में जोड़ा गया",

        "2h ago":
            "2 घंटे पहले",

        "5h ago":
            "5 घंटे पहले",

        "Yesterday":
            "कल",

        "2d ago":
            "2 दिन पहले",


        /* IMPACT */

        "YOUR AGRICULTURAL IMPACT":
            "आपका कृषि प्रभाव",

        "Every kilogram diverted creates value.":
            "हटाया गया हर किलोग्राम मूल्य पैदा करता है।",

        "By connecting agricultural residue with useful applications instead of disposal or burning, AgriNova helps turn farm waste into an economic and environmental resource.":
            "कृषि अवशेषों को जलाने या निपटाने के बजाय उपयोगी कार्यों से जोड़कर AgriNova कृषि अपशिष्ट को आर्थिक और पर्यावरणीय संसाधन में बदलने में मदद करता है।",

        "CO₂ Impact*":
            "CO₂ प्रभाव*",

        "Potential Value":
            "संभावित मूल्य",

        "Batches Tracked":
            "ट्रैक किए गए बैच",

        "*Indicative estimate for prototype demonstration; actual environmental impact depends on material, utilization pathway and verified data.":
            "*प्रोटोटाइप प्रदर्शन के लिए अनुमानित आंकड़ा; वास्तविक पर्यावरणीय प्रभाव सामग्री, उपयोग के तरीके और सत्यापित डेटा पर निर्भर करता है।",


        /* FOOTER */

        "Helping farmers discover better value from agricultural waste through intelligent matching, utilization analysis and organized collection.":
            "इंटेलिजेंट मिलान, उपयोग विश्लेषण और व्यवस्थित संग्रह के माध्यम से किसानों को कृषि अपशिष्ट से बेहतर मूल्य प्राप्त करने में मदद करना।",

        "🌾 Smart Agriculture • Sustainable Future":
            "🌾 स्मार्ट कृषि • टिकाऊ भविष्य",

        "Platform":
            "प्लेटफ़ॉर्म",

        "Operations":
            "संचालन",

        "Support":
            "सहायता",

        "Smart Matching":
            "स्मार्ट मिलान",

        "Transport":
            "परिवहन",

        "How It Works":
            "यह कैसे काम करता है",

        "Help Center":
            "सहायता केंद्र",

        "Contact":
            "संपर्क करें",

        "About AgriNova":
            "AgriNova के बारे में",

        "Privacy":
            "गोपनीयता",

        "Route Planning":
            "रूट प्लानिंग",

        "🌾 Farm Waste → Value":
            "🌾 कृषि अपशिष्ट → मूल्य",

        "© 2026 AgriNova. All rights reserved.":
            "© 2026 AgriNova. सर्वाधिकार सुरक्षित।"
    };


    translatePage(translations);
}


/* =========================================================
   ENGLISH
========================================================= */

function setEnglish() {

    const elements =
        document.querySelectorAll(
            "a, button, h1, h2, h3, h4, h5, p, span, strong, label"
        );


    elements.forEach(element => {

        if (element.dataset.originalText !== undefined) {

            element.textContent =
                element.dataset.originalText;

            delete element.dataset.originalText;

        }

    });

}


/* =========================================================
   TRANSLATE WITHOUT DESTROYING ICONS
========================================================= */

function translatePage(translations) {

    const elements =
        document.querySelectorAll(
            "a, button, h1, h2, h3, h4, h5, p, span, strong, label"
        );


    elements.forEach(element => {

        /* Language dropdown ko translate nahi karna */
        if (element.closest(".language-selector")) {
            return;
        }


        /* Direct text nodes only */
        element.childNodes.forEach(node => {

            if (node.nodeType !== Node.TEXT_NODE) {
                return;
            }


            const original =
                node.nodeValue;

            const cleanText =
                original.trim();


            if (!cleanText) {
                return;
            }


            /* English text first time save karo */
            if (element.dataset.originalText === undefined) {

                element.dataset.originalText =
                    cleanText;

            }


            if (translations[cleanText]) {

                const translated =
                    translations[cleanText];

                const leadingSpace =
                    original.match(/^\s*/)?.[0] || "";

                const trailingSpace =
                    original.match(/\s*$/)?.[0] || "";

                node.nodeValue =
                    leadingSpace +
                    translated +
                    trailingSpace;

            }

        });

    });

}
function logoutUser() {
    sessionStorage.removeItem("agrinovaLoggedIn");
    sessionStorage.removeItem("agrinovaRole");

    window.location.href = "login.html";
}