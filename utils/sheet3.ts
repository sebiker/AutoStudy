// Function expression
var fulName : (first : string, last : string) => string;

fulName = function(first : string, last : string) {
    return first + " " + last;
}

console.log(fulName("John", "Doe"));

// Imediately invoked version
(function(first : string, last : string) {
    console.log(first + " " + last);
})("Jane", "Smith");