// Task 1
// Select the dashboard container using both getElementById and querySelector
const dashboard1 = document.getElementById("dashboard");
const dashboard2 = document.querySelector("#dashboard");

// Ensure the dashboard exists before proceeding
if (dashboard1 && dashboard2) {
  // Create a new div element for the metric card
  const revenueCard = document.createElement("div");

  // Set attributes for class and ID
  revenueCard.setAttribute("class", "metric-card");
  revenueCard.setAttribute("id", "revenueCard");

  // Populate the card with a title and a placeholder value
  revenueCard.innerHTML = `
    <h3>Revenue</h3>
    <p>$0</p>
  `;

  // Append the new metric card to the dashboard container
  dashboard1.appendChild(revenueCard); // Using getElementById reference
}


// Task 2
// Select all elements with the class "metric-card"
const metricCards = document.querySelectorAll(".metric-card");

// Convert the NodeList to an array using Array.from()
const metricCardsArray = Array.from(metricCards);

// Use forEach() to update each card’s inner text and modify styles
metricCardsArray.forEach(card => {
  // Append " - Updated" to the existing text
  card.querySelector("h3").innerText += " - Updated";

  // Change background color for better visibility
  card.style.backgroundColor = "#f0f8ff"; // Light blue shade
  card.style.border = "2px solid #007BFF"; // Blue border
});
