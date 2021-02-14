//Object Literal
// Syntax
/*
   A colon separates property name from value.
   A comma separates each name-value pair from the next.
   A comma after the last name-value pair is optional.
*/
var myObject = {
  fullname: "Patricia Nekesa",
  greet: (message, name) => {
    console.log(message + " " + name + "!!");
  },
};

// Use/access the created object literal
console.log(myObject.fullname);
myObject.greet("Greetings", myObject.fullname);
