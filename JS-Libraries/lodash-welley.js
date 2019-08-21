var arr = [1, 4, 5, 12, 55, 24, 69, 13, 5, 8, 12];
var theObj = { "id": 1, "name": "Tom Henry", "state": "KS" };
var arrObj = [
    { "id": 1, "name": "Tom Henry", "state": "TX" },
    { "id": 2, "name": "Sally Newman", "state": "FL" },
    { "id": 3, "name": "Ryan Busch", "state": "CO" },
    { "id": 4, "name": "Brenda Miller", "state": "KS" },
    { "id": 5, "name": "Ed Cage", "state": "NC" },
    { "id": 6, "name": "Will Turner", "state": "KS" },
    { "id": 7, "name": "Dawn Williams", "state": "NC" },
    { "id": 8, "name": "Sean Cunningham", "state": "NC" },
    { "id": 9, "name": "Ted Hardy", "state": "TX" },
    { "id": 10, "name": "Bruce Matthis", "state": "FL" },
    { "id": 11, "name": "Billy Smith", "state": "FL" },
    { "id": 12, "name": "Clara Jarvis", "state": "TX" },
    { "id": 13, "name": "Cindy Fisher", "state": "CO" },
    { "id": 14, "name": "Gino Donovan", "state": "CO" },
    { "id": 15, "name": "Nancy Curtis", "state": "NC" }
];

$(document).ready(function () {
    chunkTest();
});

function chunkTest() {
    console.log("\nLODASH HOMEWORK---------------\n\n");

    console.log("Chunk test demo:");
    var newArr = _.chunk(arr, 3);
    console.log(newArr);
    /* This function splits and groups arr into four arrays, each
    containing three elements (with the last array containing the
    remaining two). These four arrays are then placed into a new array.
    */

    _.forEach(newArr, function (value) {
        console.log(value);
    }); // This spreads out and displays all the arrays and their elements in newArr

    console.log("\nUse _.range and _.chunk to get the following arrays:\n\n");

    console.log("1-20");
    // _.forEach(_.range(1, 21, 1), function(value){
    //     console.log(value)
    // });
    _.forEach(_.chunk(_.range(1, 21, 1), 5), function (value) {
        console.log(value);
    });

    console.log("\n50-100");
    // _.forEach(_.range(50, 101, 1), function(value){
    //     console.log(value)
    // });
    _.forEach(_.chunk(_.range(50, 101, 1), 10), function (value) {
        console.log(value);
    });

    console.log("\n1-100 (even)");
    // _.forEach(_.range(2, 101, 2), function(value){
    //     console.log(value)
    // });
    _.forEach(_.chunk(_.range(2, 101, 2), 10), function (value) {
        console.log(value);
    });

    console.log("\n1-100 (odd)");
    // _.forEach(_.range(1, 100, 2), function(value){
    //     console.log(value)
    // });
    _.forEach(_.chunk(_.range(1, 100, 2), 10), function (value) {
        console.log(value);
    });

    console.log("\n1-500 (multiples of 20)");
    // _.forEach(_.range(20, 501, 20), function(value){
    //     console.log(value)
    // });
    _.forEach(_.chunk(_.range(20, 501), 250), function (value) {
        console.log(value);
    });

    console.log("\nFilter to print residents in Colorado:");
    _.forEach(_.filter(arrObj, ["state", "CO"]), function (value) {
        console.log(value);
    });

    console.log("\nUse _.countby() to print out the number of residents in each state:");

    console.log(_.countBy(arrObj, "state"));

    console.log("\nUse filter method to retrieve residents that have last names with 7+ letters")
    // var arrObjNew = []
    // for (let i = 0; i < arrObj.length; i++) {
    //     if (_.split(arrObj[i].name, " ")[1].length >= 7) {
    //         arrObjNew.push(arrObj[i]);
    //     }
    // }
    // _.forEach(arrObjNew, function (value) {
    //     console.log(value)
    // });
    _.forEach(_.filter(arrObj, obj => _.split(obj.name, " ")[1].length >= 7), function (value) {
        console.log(value);
    });

    console.log("\nUse foreach loop and appropriate string function to print the states in all lower case (_.lowerCase):");
    var arrObjLowerCase = _.filter(arrObj, obj => obj.state = _.lowerCase(obj.state));
    _.forEach(arrObjLowerCase, function (value) {
        console.log(value)
    });

    console.log("\nThen alter the function to print them all capitalized (_.upperCase):");
    var arrObjUpperCase = _.filter(arrObjLowerCase, obj => obj.state = _.upperCase(obj.state));
    _.forEach(arrObjUpperCase, function (value) {
        console.log(value)
    });
}
