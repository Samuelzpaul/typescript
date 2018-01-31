console.log(fullName('Sam', 'Paul'));
// Function Declaration
function fullName(first, last) {
    return first + " " + last;
}
// Function Expression
var otherFullName;
otherFullName = function (first, last) {
    return first + " " + last;
};
var thirdFullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Sam', 'Paul'));
console.log(otherFullName('Sam', 'Paul'));
console.log(thirdFullName('Sam', 'Paul'));
//# sourceMappingURL=017_function_declarations_vs_expressions.js.map