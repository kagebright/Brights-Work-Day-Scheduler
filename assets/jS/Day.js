// Using moment for today's date
$(document).ready(function() {
    const currentDate = moment().format("MMMM Do, YYYY");
    const currentTime = momemt().format("hh:mm:ss A");

    function init() {
        //displaying the current date
        $("date").text(currentDate);
    };

    //Changing the colors according to the past, present, or future times
    function hourColor () {
        currentHour = moment.format("hhA")
    }

  // adding event listener on the save button
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
  function loadScheduleData();



});
