// Wait until the DOM content is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Select the elements that will display the current day and time in UTC
  const currentDay = document.querySelector('[data-testid="currentDay"]');
  const currentTimeUTC = document.querySelector(
    '[data-testid="currentTimeUTC"]'
  );

  // Function to update the time and day
  function updateTimeandDay() {
    const getDate = new Date();

    // Get the current hours and minutes in UTC
    const hours = getDate.getUTCHours().toString().padStart(2, "0");
    const minutes = getDate.getUTCMinutes().toString().padStart(2, "0");

    // Format the current time in HH:MM format
    const getCurrentTimeUTC = `${hours}:${minutes}`;

    // Get the current day of the week in English, using the UTC timezone
    const getCurrentDay = getDate.toLocaleDateString("en-US", {
      weekday: "long",
      timeZone: "UTC",
    });

    // Update the text content of the elements with the current time and day
    currentTimeUTC.textContent = getCurrentTimeUTC;
    currentDay.textContent = getCurrentDay;
  }
  // Call the updateTimeandDay function every second
  setInterval(updateTimeandDay, 1000);
});
