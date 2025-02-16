// Function to toggle the sidebar menu
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}

// Function to select a section and highlight it
function selectSection(sectionId) {
    document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.remove("active");
    });

    const selectedLink = document.getElementById(sectionId);
    selectedLink.classList.add("active");

    toggleMenu();
}

// Add event listeners to all nav links to update active status
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function () {
        document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});

