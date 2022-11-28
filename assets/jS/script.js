// Using moment for today's date
$(document).ready(function() {

   let currentDate = moment().format("MMMM Do, YYYY");
    $("#currentDay").text(todaysDate);
  
  // Array for the hours between 7am-3pm
  scheduleArray = [
    "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM"
  ];
  
  //creating the rows in the schedule
  for(let i=0; i < scheduleArray.length; i++) {
    //creating the section for the schedule
    let rowEl = $('<div>').addClass("row time");
    
    let timesArray = scheduleArray[i].split(" ");
    let hour = timesArray[0];
    let latestTime = hour;
  //color coding the rows 
    if (hour < 6) {
      latestTime = parseInt(hour) + 12
    }

    let columnTime =$('<div>').addClass("col-2 hour time-block ").data("value", latestTime);
    










  });