// function expression
var fullName : (first : string, last : string) => string;

fullName = function(first : string, last : string) {
  return first + " " + last;
}

console.log(fullName('Sam', 'Paul'));

//immediately invoked version
(function(first : string, last : string) {
  console.log(first + " " + last);
})('Samuel', 'Paul');