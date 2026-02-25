// Function declaration
function fullName(first: string, last: string): string {
    return first + " " + last;
} 

// Function expression
var otherFullName: (first: string, last: string) => string;

otherFullName = function (first: string, last: string) {
    return first + " " + last;
}

var thirdFullName: (first: string, last: string) => string = function (first: string, last: string) {
    return first + " " + last;
}

console.log(fullName("John", "Doe"));
console.log(otherFullName("Jane", "Smith"));
console.log(thirdFullName("Alice", "Johnson"));