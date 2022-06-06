var today = new Date();
var hourNow = today.getHours();
var greeting;
var header = $(".current");   
  // tweak needed for different time zones


// THEN the current day is displayed at the top of the calendar
function displayDate () {
    //header.appendchild(today);
    header.textcontent(today); 
}


//time blocks for standard business hours. get from jquery
$( function displayBlocks () {
    $( "#selectable" ).selectable({
      stop: function() {
        var result = $( "#select-result" ).empty();
        $( ".ui-selected", this ).each(function() {
          var index = $( "#selectable li" ).index( this );
          result.append( " #" + ( index + 1 ) );
        });
      }
    });

});




// THEN each time block is color-coded to indicate whether it is in the past, present, or future


// WHEN I click into a time block THEN I can enter an event

// text for that event is saved in local storage WHEN I refresh the page THEN the saved events persist



displayBlocks ()
displayDate ()