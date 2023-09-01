document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    // Add a click event listener to each tab button
    tabButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Remove the 'active' class from all tab buttons and tab contents
            tabButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            tabContents.forEach(function (content) {
                content.classList.remove("active");
            });

            // Add the 'active' class to the clicked tab button and its corresponding content
            const tabId = button.getAttribute("data-tab");
            const tabContent = document.getElementById(tabId);

            button.classList.add("active");
            tabContent.classList.add("active");
        });
    });
});
