console.log(fullName('Sam', 'Paul'));
// Function Declaration
function fullName(first : string, last :string) : string {
  return first + " " + last;
}

// Function Expression
var otherFullName : (first : string, last : string) => string;

otherFullName = function (first : string, last : string) {
  return first + " " + last;
}

var thirdFullName : (first : string, last : string) => string = function (first : string, last : string) {
  return first + " " + last;
}

console.log(fullName('Sam', 'Paul'));
console.log(otherFullName('Sam', 'Paul'));
console.log(thirdFullName('Sam', 'Paul'));
