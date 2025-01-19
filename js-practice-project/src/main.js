import "./style.css";

// Select countdown elements
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

// Select motivational message day element
const dayInMessageElement = document.getElementById("day");

// Function to calculate and update countdown
function updateCountdown() {
  const targetDate = new Date("2026-05-17T00:00:00");
  const now = new Date();
  const timeLeft = targetDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Update countdown UI
  daysElement.textContent = days.toString().padStart(2, "0");
  hoursElement.textContent = hours.toString().padStart(2, "0");
  minutesElement.textContent = minutes.toString().padStart(2, "0");
  secondsElement.textContent = seconds.toString().padStart(2, "0");

  // Update motivational message with remaining days
  dayInMessageElement.textContent = days;
}

// Call updateCountdown once and then at every second
updateCountdown();
setInterval(updateCountdown, 1000);

// Optional: Notification System
async function sendMotivationalNotification() {
  if (Notification.permission === "granted") {
    const response = await fetch("./motivations.json"); // Load motivational quotes
    const quotes = await response.json();

    const categories = Object.keys(quotes);
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    const randomQuote =
      quotes[randomCategory][
        Math.floor(Math.random() * quotes[randomCategory].length)
      ];

    const daysLeft = Math.ceil(
      (new Date("2026-05-17T00:00:00") - new Date()) / (1000 * 60 * 60 * 24)
    );
    const personalizedMessage = randomQuote.replace("___", daysLeft);

    new Notification("Stay Motivated! 💪", {
      body: personalizedMessage,
      icon: "https://cdn-icons-png.flaticon.com/512/3039/3039431.png", // Example motivational icon
    });
  }
}

// Request Notification Permission on user interaction
document.getElementById("notifyButton")?.addEventListener("click", () => {
  if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        // Send initial motivational notification
        sendMotivationalNotification();
      }
    });
  }
});

// Send notifications every 8 hours
const notificationInterval = 8 * 60 * 60 * 1000; // 8 hours in milliseconds
setInterval(sendMotivationalNotification, notificationInterval);
