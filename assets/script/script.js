var today = moment().format('dddd, MMMM Do, YYYY');
//var hourNow = today.getHours();
var greeting;
var header = $(".current");   
  // tweak needed for different time zones
var currentHour=moment().hours()
console.log(currentHour);
// THEN the current day is displayed at the top of the calendar
function displayDate () {
    //header.appendchild(today);
  header.text(today);
}
for (var i =9; i<18; i++) {
  var colorKey='';
  if (currentHour>i){
    colorKey='past';
  } 
  else if (currentHour===i) {
    colorKey='present';
  }
  else {
    colorKey='future';
  }
  var hourDisplay='';
  if (i<12) {
    hourDisplay=i+' AM';
  }
  else if (i===12) {
    hourDisplay=i+ ' PM';
  }
  else {
    hourDisplay=i-12+ ' PM';
  }
  var rowdiv=$('<div>').addClass('row time-block').attr('id',i);
var hourDiv=$('<div>').addClass('col-2 hour').text(hourDisplay);
var textDiv=$('<textarea>').addClass('col-8 description '+ colorKey).val(localStorage.getItem(i));
var saveBtn=$('<button>').addClass('col-2 saveBtn').text('save').val(i);
  $('.container').append(rowdiv.append(hourDiv, textDiv, saveBtn));
}

//time blocks for standard business hours. get from jquery


// THEN each time block is color-coded to indicate whether it is in the past, present, or future


// WHEN I click into a time block THEN I can enter an event
$('.saveBtn').on('click', function(){
  var hourKey=this.value;
  var activity=$(this).siblings('.description').val();
  localStorage.setItem(hourKey, activity);
})
// text for that event is saved in local storage WHEN I refresh the page THEN the saved events persist




displayDate ()