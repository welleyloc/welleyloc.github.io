console.log("\nMATH HOMEWORK--------------\n\n")

console.log("Using the correct math methods, calculate and display the following:");

console.log("\nBase 10 log of 1000000");
console.log(Math.log10(1000000));

console.log("\nBase 2 log of 64");
console.log(Math.log2(64));

console.log("\nBase 4 log of 16384");
function returnBaseLog(x, y) {
    return (Math.log(y) / Math.log(x));
}
console.log(returnBaseLog(4, 16384));

console.log("\nSquare root of 96");
console.log(Math.sqrt(96));

console.log("\nSquare root of -64");
console.log("Answer from Math.sqrt(): " + Math.sqrt(-64));
function returnImaginary(z) {
    if (z < 0)
        return Math.sqrt(Math.abs(z)) + "i";
}
console.log("Answer by custom function: " + returnImaginary(-64));

console.log("\nSimplify the expression '3x + 4y + 9x + 2y + 8'");
console.log(math.simplify('3x + 4y + 9x + 2y + 8').toString());

console.log("\nThe cosine of 45 degrees.");
console.log(Math.cos(45 * Math.PI/180));
