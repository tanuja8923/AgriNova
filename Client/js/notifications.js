document.addEventListener("DOMContentLoaded", () => {

    console.log("AgriNova Notifications loaded successfully.");

    // =====================================================
    // DEMO NOTIFICATION DATA
    // =====================================================

    const notifications = [
        {
            title: "Pickup Assigned",
            category: "collection",
            unread: true,
            time: "10 min ago"
        },
        {
            title: "Best Value Found",
            category: "value",
            unread: true,
            time: "32 min ago"
        },
        {
            title: "Burning Risk Updated",
            category: "system",
            unread: true,
            time: "1 hr ago"
        },
        {
            title: "Group Collection Created",
            category: "collection",
            unread: false,
            time: "Yesterday"
        },
        {
            title: "Waste Passport Verified",
            category: "system",
            unread: false,
            time: "Yesterday"
        },
        {
            title: "Waste Analysis Complete",
            category: "value",
            unread: false,
            time: "2 days ago"
        },
        {
            title: "Welcome to AgriNova",
            category: "system",
            unread: false,
            time: "3 days ago"
        }
    ];

    console.log("Notification Data:", notifications);


    // =====================================================
    // ELEMENTS
    // =====================================================

    const notificationCards =
        document.querySelectorAll(".notification-card");

    const filterTabs =
        document.querySelectorAll(".filter-tab");

    const markAllBtn =
        document.getElementById("markAllBtn");

    const unreadCountElement =
        document.getElementById("unreadCount");

    const emptyState =
        document.getElementById("emptyState");


    // =====================================================
    // UPDATE UNREAD COUNT
    // =====================================================

    function updateUnreadCount() {

        const unreadCards =
            document.querySelectorAll(
                ".notification-card.unread:not(.hidden)"
            );

        if (unreadCountElement) {
            unreadCountElement.textContent =
                unreadCards.length;
        }

        console.log(
            "Unread Notifications:",
            unreadCards.length
        );
    }


    // =====================================================
    // FILTER NOTIFICATIONS
    // =====================================================

    function filterNotifications(filter) {

        let visibleCount = 0;

        notificationCards.forEach((card) => {

            const category =
                card.dataset.category;

            const isUnread =
                card.classList.contains("unread");

            let shouldShow = false;

            if (filter === "all") {
                shouldShow = true;
            }

            else if (filter === "unread") {
                shouldShow = isUnread;
            }

            else {
                shouldShow =
                    category === filter;
            }


            if (shouldShow) {

                card.classList.remove("hidden");
                visibleCount++;

            } else {

                card.classList.add("hidden");

            }

        });


        // Show / hide empty state

        if (emptyState) {

            if (visibleCount === 0) {
                emptyState.classList.add("show");
            } else {
                emptyState.classList.remove("show");
            }

        }


        console.log(
            "Notification Filter:",
            filter,
            "| Visible:",
            visibleCount
        );
    }


    // =====================================================
    // FILTER TAB CLICK
    // =====================================================

    filterTabs.forEach((tab) => {

        tab.addEventListener("click", () => {

            filterTabs.forEach((item) => {
                item.classList.remove("active");
            });

            tab.classList.add("active");

            const filter =
                tab.dataset.filter;

            filterNotifications(filter);

        });

    });


    // =====================================================
    // MARK SINGLE NOTIFICATION AS READ
    // =====================================================

    notificationCards.forEach((card) => {

        card.addEventListener("click", (event) => {

            // Don't trigger card read action
            // when clicking the three-dot menu
            if (
                event.target.closest(".notification-menu")
            ) {
                return;
            }

            if (card.classList.contains("unread")) {

                card.classList.remove("unread");
                card.classList.add("read");

                console.log(
                    "Notification marked as read:",
                    card.querySelector("h3")?.textContent.trim()
                );

                updateUnreadCount();

                // If currently on Unread filter,
                // remove it from the visible list
                const activeFilter =
                    document.querySelector(
                        ".filter-tab.active"
                    );

                if (
                    activeFilter &&
                    activeFilter.dataset.filter === "unread"
                ) {
                    card.classList.add("hidden");

                    const visibleUnread =
                        document.querySelectorAll(
                            ".notification-card.unread:not(.hidden)"
                        );

                    if (
                        visibleUnread.length === 0 &&
                        emptyState
                    ) {
                        emptyState.classList.add("show");
                    }
                }
            }

        });

    });


    // =====================================================
    // THREE-DOT MENU
    // =====================================================

    const menuButtons =
        document.querySelectorAll(".notification-menu");

    menuButtons.forEach((button) => {

        button.addEventListener("click", (event) => {

            event.stopPropagation();

            const card =
                button.closest(".notification-card");

            if (!card) return;

            const title =
                card.querySelector("h3");

            const notificationTitle =
                title
                    ? title.textContent.trim()
                    : "Notification";

            console.log(
                "Notification options:",
                notificationTitle
            );

            // Simple frontend demo
            const action =
                confirm(
                    notificationTitle +
                    "\n\nMark this notification as read?"
                );

            if (action) {

                card.classList.remove("unread");
                card.classList.add("read");

                updateUnreadCount();

                console.log(
                    "Notification marked as read:",
                    notificationTitle
                );

            }

        });

    });


    // =====================================================
    // MARK ALL AS READ
    // =====================================================

    if (markAllBtn) {

        markAllBtn.addEventListener("click", () => {

            const unreadCards =
                document.querySelectorAll(
                    ".notification-card.unread"
                );

            if (unreadCards.length === 0) {

                alert(
                    "All notifications are already read."
                );

                return;
            }


            unreadCards.forEach((card) => {

                card.classList.remove("unread");
                card.classList.add("read");

            });


            updateUnreadCount();


            markAllBtn.classList.add("completed");

            markAllBtn.innerHTML =
                '<i class="fa-solid fa-check"></i> All Notifications Read';


            console.log(
                "All notifications marked as read."
            );


            setTimeout(() => {

                markAllBtn.classList.remove("completed");

                markAllBtn.innerHTML =
                    '<i class="fa-solid fa-check-double"></i> Mark All as Read';

            }, 2000);


            // If Unread filter is active
            const activeFilter =
                document.querySelector(
                    ".filter-tab.active"
                );

            if (
                activeFilter &&
                activeFilter.dataset.filter === "unread"
            ) {

                filterNotifications("unread");
            }

        });

    }


    // =====================================================
    // ACCESSIBILITY
    // =====================================================

    notificationCards.forEach((card) => {

        card.setAttribute("tabindex", "0");

        card.addEventListener("keydown", (event) => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                card.click();
            }

        });

    });


    // =====================================================
    // ENTRANCE ANIMATION
    // =====================================================

    notificationCards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(12px)";

        setTimeout(() => {

            card.style.transition =
                "opacity 0.45s ease, transform 0.45s ease";

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, 100 + (index * 80));

    });


    // =====================================================
    // INITIAL STATE
    // =====================================================

    updateUnreadCount();

    filterNotifications("all");


    // =====================================================
    // VALIDATION
    // =====================================================

    const totalNotifications =
        notificationCards.length;

    if (totalNotifications > 0) {

        console.log(
            "Notification module validation: PASSED ✅"
        );

    } else {

        console.warn(
            "No notification cards found."
        );

    }


    // =====================================================
    // FINAL SUMMARY
    // =====================================================

    console.log("--------------------------------");
    console.log("AgriNova Notifications Summary");
    console.log(
        "Total Notifications:",
        totalNotifications
    );
    console.log(
        "Unread:",
        document.querySelectorAll(
            ".notification-card.unread"
        ).length
    );
    console.log("--------------------------------");

});