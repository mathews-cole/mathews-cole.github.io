
document.addEventListener("DOMContentLoaded", function () {
    const homeButton = document.getElementById("Home");

    function toggleHomeButton() {
        if (window.scrollY < 800 ) { 
            homeButton.style.display = "none"; // Hide when on home
        } else {
            homeButton.style.display = "block"; // Show when scrolled
        }
    }

    // Run on page load and on scroll
    toggleHomeButton();
    window.addEventListener("scroll", toggleHomeButton);

    // Ensure instant jump to top when clicking "Home"
    homeButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default scrolling
        window.scrollTo({ top: 0, behavior: "instant" }); // Instantly jump to top
    });
});
    
    
    
    
    



