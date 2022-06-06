var today = new Date();
var hourNow = today.getHours();
var greeting;
var header = $("header");   
  // tweak needed for different time zones
header.textcontent(today); 
function greeting () {
if (hourNow > 18) {
  greeting = 'Good Evening!';
}
else if (hourNow > 12) {
  greeting = 'Good Afternoon!';
}
else if (hourNow > 0) {
  greeting = 'Good Morning!';
} else {
  greeting = 'welcome!';
}
document.write(greeting);
}
// THEN the current day is displayed at the top of the calendar



//time blocks for standard business hours. get from jquery

// THEN each time block is color-coded to indicate whether it is in the past, present, or future


// WHEN I click into a time block THEN I can enter an event

// text for that event is saved in local storage WHEN I refresh the page THEN the saved events persist





greetings ()