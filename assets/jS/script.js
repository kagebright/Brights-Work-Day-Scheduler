// Using moment for today's date
$(document).ready(function() {

   let todaysDate = moment().format("MMMM Do, YYYY");
    $("#currentDay").text(todaysDate);
  
    // applying right class for colors based on past, current, and future times
    function fctClass() {
      // console.log(moment().hour());
      $(".time-block").each(function () {

          let textArea = $(this).siblings(".columnInput");
          let textAreaHour = $(this).data("value");
          if (textAreaHour < moment().hour()) {
              textArea.addClass("past");
          }
          if (textAreaHour == moment().hour()) {
              textArea.addClass("present");
          }
          if (textAreaHour > moment().hour()) {
              textArea.addClass("future");
          }
      });
  }
  // calling my function to create correct colors in text area
  fctClass();



  // event listener on save button
  $(".saveBtn").on("click", function (event) {
      event.preventDefault();
      let taskObj = [];

      $(".columnInput").each(function (currentIndex, currentEl) {
          taskObj[currentIndex] = $(currentEl).val().trim(); // adds key value pairs to object
      });


      localStorage.setItem("dailyPlan", JSON.stringify(taskObj));


  });


  // loads dailyPlan from local storage and displays on screen
  function loadLs() {
      let storedPlan = JSON.parse(localStorage.getItem("dailyPlan"));
      if (storedPlan !== null) {

          for (let i = 0; i < 10; i++) {

              $(".columnInput" + (i + 9)).text(storedPlan[i]);

          }
      }
  }
  // calls function to load local storage and displays on the screen
  loadLs();



});
