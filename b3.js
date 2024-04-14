"use strict";
var weekDays;
(function (weekDays) {
    weekDays[weekDays["Monday"] = 15] = "Monday";
    weekDays[weekDays["Tuesday"] = 16] = "Tuesday";
    weekDays[weekDays["Wednesday"] = 17] = "Wednesday";
    weekDays[weekDays["Thursday"] = 18] = "Thursday";
    weekDays[weekDays["Friday"] = 19] = "Friday";
    weekDays[weekDays["Saturday"] = 20] = "Saturday";
    weekDays[weekDays["Sunday"] = 21] = "Sunday";
})(weekDays || (weekDays = {}));
console.log(weekDays.Monday, weekDays.Tuesday, weekDays.Wednesday, weekDays.Thursday, weekDays.Friday, weekDays.Saturday, weekDays.Sunday);
