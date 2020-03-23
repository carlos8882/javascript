// Anonymous function is the function that does not have name , and can be assign to an variable
let callback = function(){return "Anonymous function";};

console.log(callback());

(function() {console.log("other Anonymous function");}());