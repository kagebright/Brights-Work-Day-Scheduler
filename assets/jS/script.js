// Time section variables and stuff
$(document).ready(function() {
    var currentDate = moment().format("MMMM Do, YYYY");
    var currentTime = moment().format("hh:mm:ss A");
    var currentHour;
  
  
    function init() {
      $("#date").text(currentDate);// Current date
     
      $("#time").text(currentTime);// Current time
      
      timeColor();//setting colors based on the current time
    
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
     
    if (possibleHours.before.indexOf(currentHour) !==-1){
       
  
    init();
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
  