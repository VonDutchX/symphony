node girls

' ' a pair of single quotes
" " a pair of double quotes

String //"text"
Integer //1 Cijfer
Boolean //true, false

var //variable - store a value

var artist = 'dan le';
console.log(artist)

//numbers cannot be variable
var a = "node girls"
var b = 1234
var c = false

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)

//
var happy = true

if (happy === true) {
  console.log('hi');
} else {
  console.log(":-(");
}

https://node-girls.gitbook.io/beginners-javascript/tutorial/step-5-if-else-statements
//Mini Challenge
var word = 'javascriptxxxxx';
var length = word.length;

if (length > 10) {
console.log('long');
} else {
  console.log('short');
 }
 
 Step 6 LOOPS
 
 for (var i=0; i <= 100; i+=2) {  
  console.log(i);
}

7. Functions
function add (x, y) {  
console.log(x+y);
console.log(y)

return x*y;
}

add(2, 3);

//[Arrays]
var animals = ["tiger", "puppy", "snake", "llama"];

for (var i=0; i<=3; i++)
{
  console.log (animals[i]);
}

//OBJECT
var person = {
  firstName: "Virginia",
  lastName: "Woolf",
  occupation: "writer",
  age: 59,
  alive: false
};
console.log("Hi, my name is " + person.firstName, person.lastName + ". I am " + person.age + " years old, and work as a "+ person.occupation + ".");

var firstName= "Virginia";
var lastName= "Woolf";
var occupation= "writer";
var age= 59;
var alive= false;

console.log("Hi, my name is " + firstName, lastName + ". I am " + age + " years old, and work as a "+ occupation + ".");

var youngest = {
  name: 'Maya',
  age: 13
};

var oldest = {
  naem: 'Joy',
  age: 83
};

function ageDifference(youngest, oldest)
{
  return oldest.age - youngest.age;
}

ageDifference(youngest, oldest);




// ARRAY of OBJECTS Nog te doen
var writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  },
];
for (var i=0; i<=3; i=++)
console.log("Hi, my name is writers.firstname[i] + "." I am writers.age[i] years old, and work as a writers.occupation[i] + ".");

var firstnumber = 13;
var secondnumber = 27;

function add (x + y) {
  return x + y;
}
add(firstnumber, secondnumber);



