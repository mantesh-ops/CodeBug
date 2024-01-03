// Get the current date and time in Mumbai, India
const now = new Date();
const currentDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());
const endDate = new Date(2024, 0, 4, 16, 59, 59, 999);

// Calculate the time difference in milliseconds
let timeDifference = endDate.getTime() - currentDate.getTime();

// Flag to check if pop-up has been shown
let popupShown = false;

// Function to update the countdown display
function updateCountdown() {
    const timeLeft = timeDifference - (Date.now() - currentDate.getTime());

    // Ensure timeLeft does not go below 0
    const remainingTime = Math.max(0, timeLeft);

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Display the countdown in the specified container
    const countdownContainer = document.getElementById("countdown");
    if (countdownContainer) {
        countdownContainer.innerHTML = `
            <h2>Registration ends in : &nbsp;</h2>
            <div class="time">
                <span>Days: ${days} &nbsp; </span>
                <span>Hours: ${hours} &nbsp; </span>
                <span>Minutes: ${minutes} &nbsp; </span>
                <span>Seconds: ${seconds} &nbsp; </span>
            </div>     
        `;
    }
}
// Start the countdown
const countdownInterval = setInterval(updateCountdown, 1000); // Update every second

// Initialize Type.js
var options = {
    strings: ["Celebreating CodeBug competition", "Enjoy refreshments", "Giving Little gifts for all"],
    typeSpeed: 40, // Adjust the typing speed as needed
    backSpeed: 40,
    showCursor: true,
    loop: true
};

var typed = new Typed('.auto-type-text', options);

const loader = document.querySelector(".loader");
const body = document.querySelector("body");

document.addEventListener("DOMContentLoaded", () => {
    loader.style.display = "none";
});
