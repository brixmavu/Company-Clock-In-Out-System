const clockInButton = document.getElementById("clock-in");
const clockOutButton = document.getElementById("clock-out");
const clockTimesBody = document.getElementById("clock-times");

let currentEmployee = "";
let clockInTime = "";

clockInButton.addEventListener("click", function () {
  // Get the employee name from the input field
  currentEmployee = document.getElementById("employee-name").value;
  // Record the clock in time
  clockInTime = new Date();
  // Disable the clock in button and enable the clock out button
  clockInButton.setAttribute("disabled", true);
  clockOutButton.removeAttribute("disabled");
});

clockOutButton.addEventListener("click", function () {
  // Record the clock out time
  const clockOutTime = new Date();
  // Calculate the total hours worked
  const totalHours = (clockOutTime - clockInTime) / 1000 / 60 / 60;
  // Create a new table row with the clock in/out times and total hours worked
  const clockTimesRow = document.createElement("tr");
  clockTimesRow.innerHTML = `
      <td>${currentEmployee}</td>
      <td>${clockInTime.toLocaleString()}</td>
      <td>${clockOutTime.toLocaleString()}</td>
      <td>${totalHours.toFixed(2)}</td>
    `;
  clockTimesBody.appendChild(clockTimesRow);
  // Clear the employee name input field and disable the clock out button
  document.getElementById("employee-name").value = "";
  clockOutButton.setAttribute("disabled", true);
  clockInButton.removeAttribute("disabled");
});

// Disable the clock out button by default
clockOutButton.setAttribute("disabled", true);

