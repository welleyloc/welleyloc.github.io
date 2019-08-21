console.log("\nMOMENT HOMEWORK--------------\n\n")

console.log("Moment demo:");
var today = moment();
console.log(today.format("YYYY MM DD"));

var momISO = moment("2019-02-08 09:30");
console.log(momISO.format());

var rfc = moment("22 Mar 2017 21:22:23 GMT");
console.log(rfc.format());

console.log("\nUsing the values in the chart, print each of the above dates in the following formats:");


console.log("\nLong day, short month, day number, year and time");
console.log(today.format("dddd MMM Do YYYY LT"));

console.log("\nShort month, day, year, and time");
console.log(today.format("MMM D YYYY LT"));

console.log("\nWeek of year, short year");
console.log(today.format("wo YY"));

console.log("\nQuarter of year, long year.");
console.log(today.format("Qo YY"));

console.log("\nUsing the difference function, find the difference between the ISO and rfc dates in days, weeks, and months.");
console.log("ISO = " + momISO.format("YYYY D MMMM"));
console.log("rfc = " + rfc.format("YYYY D MMMM"));
console.log(momISO.diff(rfc, "days") + " days, " + momISO.diff(rfc, "weeks") + " weeks, " + momISO.diff(rfc, "months") + " months.");

console.log("\nFind the difference between the current date and the rfc in weeks, months, and years.");
console.log("today = " + today.format("YYYY D MMMM"));
console.log("rfc = " + rfc.format("YYYY D MMMM"));
console.log(today.diff(rfc, "weeks") + " weeks, " + today.diff(rfc, "months") + " months, " + today.diff(rfc, "years") + " years.");