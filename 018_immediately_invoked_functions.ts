var names : string[] = ['Sam', 'Zachary', 'Paul'];
var counter : number = 0;

(function() {
  for (let name in names) {
    counter++;
  }
})();

console.log(counter);