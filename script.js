// Get the current date and time in Mumbai, India
const now = new Date();
const currentDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());
const endDate = new Date(2024, 0, 5, 23, 59, 59, 999); // Set to 23:59:59 to ensure countdown reaches 0

// Calculate the time difference in milliseconds
const timeDifference = endDate.getTime() - currentDate.getTime();

// Function to update the countdown display
function updateCountdown() {
    const timeLeft = timeDifference - (Date.now() - currentDate.getTime());
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the countdown in the specified container
    const countdownContainer = document.getElementById("countdown");
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

// Start the countdown
updateCountdown();
setInterval(updateCountdown, 1000); // Update every second


// Initialize Type.js
var options = {
    strings: ["Celebreating CodeBug competition", "Enjoy refreshments", "Giving Little gifts for all"],
    typeSpeed: 40, // Adjust the typing speed as needed
    backSpeed: 40,
    showCursor: true,
    loop: true
};

var typed = new Typed('.auto-type-text', options);
