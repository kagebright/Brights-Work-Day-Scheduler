// Time section variables and stuff
$(document).ready(function() {
    var currentDate = moment().format("MMMM Do, YYYY");
    var currentTime = moment().format("hh:mm:ss A");
    var currentHour;
    var possibleHours = {
      before: ["12AM","01AM", "02AM", "03AM", "04AM", "05AM", "06AM" ],
      business: ["07AM", "08AM", "09AM", "10AM", "11AM", "12PM", "01PM", "02PM", "03PM"],
      after: ["04PM", "05PM", "06PM", "07PM", "08PM", "09PM", "10PM", "11PM"]
    };
  
    function init() {
      // Display current date
      $("#date").text(currentDate);
      // Display current time
      $("#time").text(currentTime);
      // Set colors based on current time
      timeColor();
      // Update current date and time every second
      let currentTimer = setInterval(function() {
        currentDate = moment().format("MMMM Do, YYYY");
        $("#date").text(currentDate);
        currentTime = moment().format("hh:mm:ss A");
        $("#time").text(currentTime);
        timeColor();
      }, 1000);
    }
  
  //Change text box/area to a specific color for past, present and future hours
  function timeColor() {
    currentHour = moment().format("hhA");
    //If currentHours is before 9am set all hours to background color to gray
    if (possibleHours.before.indexOf(currentHour) !==-1){
        $(".hourNotes").css("background-color", "#d3d3d3");
    }
    // If currentHour is after 5, set all hours to background-color to gray
    if (possibleHours.after.indexOf(currentHour) !== -1) {
        $(".hourNotes").css("background-color", "#d3d3d3");
      }
      // If currentHour is between 9 and 5...
      if (possibleHours.business.indexOf(currentHour) !== -1) {
        // Set the id that matches currentHour to background-color to red
        $("#" + currentHour).css("background-color", "#ff6961");
        // Set all hours before currentHour to background-color: gray
        for (let i = 0; i < possibleHours.business.indexOf(currentHour); i++) {
          $("#" + possibleHours.business[i]).css("background-color", "#d3d3d3");
        }
        // Set all hours after currentHour to background-color to green
        for (
          let i = possibleHours.business.length - 1;
          i > possibleHours.business.indexOf(currentHour);
          i--
        ) {
          $("#" + possibleHours.business[i]).css("background-color", "#77dd77");
        }
      }
    }
  
    init();
  });
  
  //When the Save button is clicked it will store the time and input in local storage
  $(".saveBtn").on("click", function(){
    var clickID = $(this).attr("id");
    var textID;
    switch (clickID) {
      case "07AMsave":
        textID = $("#07AM").val();
        localStorage.setItem("07AMtext", textID);
        break;
      case "08AMsave":
        textID = $("#08AM").val();
        localStorage.setItem("08AMtext", textID);
        break;
      case "09AMsave":
        textID = $("#09AM").val();
        localStorage.setItem("09AMtext", textID);
        break;
      case "10AMsave":
        textID = $("#10AM").val();
        localStorage.setItem("10AMtext", textID);
        break;
      case "11AMsave":
        textID = $("#11AM").val();
        localStorage.setItem("11AMtext", textID);
        break;
      case "12PMsave":
        textID = $("#12PM").val();
        localStorage.setItem("12PMtext", textID);
        break;
      case "01PMsave":
        textID = $("#01PM").val();
        localStorage.setItem("01Mtext", textID);
        break;
      case "02PMsave":
        textID = $("#02PM").val();
        localStorage.setItem("02PMtext", textID);
        break;
      case "03PMsave":
        textID = $("#03PM").val();
        localStorage.setItem("03PMtext", textID);
    }
  });
  
  
    // Data saved to the local
    function loadScheduleData() {
      $("#07AM").text(localStorage.getItem("07AMtext"));
      $("#08AM").text(localStorage.getItem("08AMtext"));
      $("#09AM").text(localStorage.getItem("09AMtext"));
      $("#10PM").text(localStorage.getItem("10AMtext"));
      $("#11AM").text(localStorage.getItem("11AMtext"));
      $("#12PM").text(localStorage.getItem("12PMtext"));
      $("#01PM").text(localStorage.getItem("01PMtext"));
      $("#02PM").text(localStorage.getItem("02PMtext"));
      $("#03PM").text(localStorage.getItem("03PMtext"));
    }
  
    loadScheduleData();
  