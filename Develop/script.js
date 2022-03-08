const m = moment();
console.log(m.toString());

//The current month, day, year + current time
var today = new Date();
 var date = moment().format('MMMM Do YYYY, h:mm:ss a');
 document.getElementById("currentDate").value = date;

 var currentTime = moment();
 // Returns current time to the nearest hour - 12:30 becomes 12:00
 currentTime = currentTime.startOf("hour");
 // Calculates the start of day + 9 to return 9 am
 var beforeTime = moment().startOf('day').add(9, "hours");

 // Time blocks
// 9 AM 
var time9 = beforeTime.add(0, "h");
// var time9 = beforeTime;
time9 = time9.format('hh:mm A');
// Populates time formula into html
$(".block-1").text(time9);

// 10 AM 
var time10 = beforeTime.add(1, "h");
// var time10 = beforeTime;
time10 = time10.format('hh:mm A');
// Populates time formula into html
$(".block-2").text(time10);

// 11 AM 
var time11 = beforeTime.add(1, "h");
// var time11 = beforeTime;
time11 = time11.format('hh:mm A');
// Populates time formula into html
$(".block-3").text(time11);

// 12 PM 
var time12 = beforeTime.add(1, "h");
// var time12 = beforeTime;
time12 = time12.format('hh:mm A');
// Populates time formula into html
$(".block-4").text(time12);

// 1 PM 
var time1 = beforeTime.add(1, "h");
// var time9 = beforeTime;
time1 = time1.format('hh:mm A');
// Populates time formula into html
$(".block-5").text(time1);

// 2 PM 
var time2 = beforeTime.add(1, "h");
// var time2 = beforeTime;
time2 = time2.format('hh:mm A');
// Populates time formula into html
$(".block-6").text(time2);

// 3PM 
var time3 = beforeTime.add(1, "h");
// var time3 = beforeTime;
time3 = time3.format('hh:mm A');
// Populates time formula into html
$(".block-7").text(time3);

// 4 PM 
var time4 = beforeTime.add(1, "h");
// var time4 = beforeTime;
time4 = time4.format('hh:mm A');
// Populates time formula into html
$(".block-8").text(time4);

// 5 PM 
var time5 = beforeTime.add(1, "h");
// var time5 = beforeTime;
time5 = time5.format('hh:mm A');
// Populates time formula into html
$(".block-9").text(time5);


// Function to compare hour slots with current time 
// Update these to coordinating numbers
function workTimeframe() {
    // Add time 9AM
    time9 = moment().startOf('day').add(9, "hours");
    // Adjusts current time to the hour
    currentTime = currentTime.startOf("hour");
    // Add time9 if/else
    if (currentTime.isAfter(time9)) {
        $(".box1").addClass("past");
    }
    else if (currentTime.isBefore(time9)) {
        $(".box1").addClass("future");
    }
    else if (currentTime.isSame(time9)) {
        $(".box1").addClass("present");
    };
    // Add time 10AM
    time10 = moment().startOf('day').add(10, "hours");
    // Add time10 if/else
    if (currentTime.isAfter(time10)) {
        $(".box2").addClass("past");
    }
    else if (currentTime.isBefore(time2)) {
        $(".box2").addClass("future");
    }
    else if (currentTime.isSame(time2)) {
        $(".box2").addClass("present");
    };
    // Add time 11AM
    time11 = moment().startOf('day').add(11, "hours");
    // Add time11 if/else
    if (currentTime.isAfter(time11)) {
        $(".box3").addClass("past");
    }
    else if (currentTime.isBefore(time11)) {
        $(".box3").addClass("future");
    }
    else if (currentTime.isSame(time11)) {
        $(".box3").addClass("present");
    };
    // Add time 12PM
    time12 = moment().startOf('day').add(12, "hours");
    // Add time12pm if/else
    if (currentTime.isAfter(time12)) {
        $(".box4").addClass("past");
    }
    else if (currentTime.isBefore(time12)) {
        $(".box4").addClass("future");
    }
    else if (currentTime.isSame(time12)) {
        $(".box4").addClass("present");
    };
    // Add time 1PM
    time1 = moment().startOf('day').add(13, "hours");
    // Add time1pm if/else
    if (currentTime.isAfter(time1)) {
        $(".box5").addClass("past");
    }
    else if (currentTime.isBefore(time1)) {
        $(".box5").addClass("future");
    }
    else if (currentTime.isSame(time1)) {
        $(".box5").addClass("present");
    };
    // Add time 2PM
    time2 = moment().startOf('day').add(14, "hours");
    // Add time2pm if/else
    if (currentTime.isAfter(time2)) {
        $(".box6").addClass("past");
    }
    else if (currentTime.isBefore(time2)) {
        $(".box6").addClass("future");
    }
    else if (currentTime.isSame(time2)) {
        $(".box6").addClass("present");
    };
    // Add time 3PM
    time3 = moment().startOf('day').add(15, "hours");
    // Add time 3pm if/else
    if (currentTime.isAfter(time3)) {
        $(".box7").addClass("past");
    }
    else if (currentTime.isBefore(time3)) {
        $(".box7").addClass("future");
    }
    else if (currentTime.isSame(time3)) {
        $(".box7").addClass("present");
    };
    // Add time 4pm
    time4 = moment().startOf('day').add(16, "hours");
    // Add time 4pm if/else
    if (currentTime.isAfter(time4)) {
        $(".box8").addClass("past");
    }
    else if (currentTime.isBefore(time4)) {
        $(".box8").addClass("future");
    }
    else if (currentTime.isSame(time4)) {
        $(".box8").addClass("present");
    };
    // Add time 5pm
    time5 = moment().startOf('day').add(17, "hours");
    // Add time 5pm if/else
    if (currentTime.isAfter(time5)) {
        $(".box9").addClass("past");
    }
    else if (currentTime.isBefore(time5)) {
        $(".box9").addClass("future");
    }
    else if (currentTime.isSame(time5)) {
        $(".box9").addClass("present");
    };
}

workTimeframe();

//for loop to gather the info in each text box
var gather = [''];

for(var i = 0; i < gather.length; i++) {
    localStorage.setItem('gather', gather)
}

const element = document.getElementById("saveBtn");
element.addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("tasks").innerHTML 
    console.log("it worked!");
}
