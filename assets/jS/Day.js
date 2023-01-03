window.onload = function() {
  const currentDayEl = document.getElementById("currentDay");
  const timeBlocks = document.querySelectorAll(".time-block");
  const saveButtons = document.querySelectorAll(".saveBtn");

  // Display current day and time
  const currentTime = moment();
  currentDayEl.textContent = currentTime.format("dddd, MMMM Do YYYY, h:mm:ss a");

  // Set past, present, and future classes for time blocks
  timeBlocks.forEach(timeBlock => {
    const timeBlockHour = parseInt(timeBlock.id.split("-")[1]);
    if (timeBlockHour < currentTime.hour()) {
      timeBlock.classList.add("past");
    } else if (timeBlockHour === currentTime.hour()) {
      timeBlock.classList.add("present");
    } else {
      timeBlock.classList.add("future");
    }
  });

  // Save textarea content to local storage when save button is clicked
  saveButtons.forEach(button => {
    button.addEventListener("click", event => {
      const timeBlockId = event.target.parentElement.id;
      const timeBlockTextarea = event.target.parentElement.querySelector("textarea");
      localStorage.setItem(timeBlockId, timeBlockTextarea.value);
    });
  });

  // Load textarea content from local storage
  timeBlocks.forEach(timeBlock => {
    const timeBlockTextarea = timeBlock.querySelector("textarea");
    timeBlockTextarea.value = localStorage.getItem(timeBlock.id);
  });
};
