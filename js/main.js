console.log('Hello World!')

// Basics of Javascript
// single line comment

/*
    Multiline comment in JS
    -- Variable Declaration in JS --
    Primitive Types: Strings, Numbers, Boolean, Undefined, Null
    Objects: Objects, Arrays, Functions
    Control Flow in JS
*/



//                  PRIMITIVE TYPES

// String Declaration (semicolon denotes end of line)
var myName = 'Baruch'; 

// console.log is same as pythons print()
console.log(myName);

var age;

console.log(age);

// Strings can be delimited by '',"", or ``. The tick marks `` have a special behavior to format.
console.log("My name is ${myName}")
console.log('My name is ${myName}')

//  Syntax for creating an fstring:  (`${variableHere}`)
console.log(`My name is ${myName}`)

//  Integer
var myAge = 27;

console.log(myAge);
console.log(typeof(myAge))

// Floats
var pi = 3.14;

console.log(pi)
console.log(typeof(pi))

// Booleans
var someBool = true;
var someOtherBool = false;

console.log(someBool,someOtherBool);
console.log(typeof(someBool));

// Undefined
var something;

console.log(something);
console.log(typeof(something));

// Null
var someNull = null;

console.log(someNull);
console.log(typeof(someNull));



//              OBJECTS

// Array
var myArray = ['Baruch', 1, 2, 3, 4, 5];

console.log(myArray);
console.log(typeof(myArray))

// Arrays are indexable
console.log(myArray[0])

// Arrays have a length attribute/property
console.log(myArray.length)

// Objects ( Objects are same as Dictionaries in Python, Properties are same as Keys in Python)
var person = {
    first: 'Baruch',
    last: 'Rotbart',
    languages: ['Python', 'JavaScript']
}

console.log(person);
console.log(typeof(person));

// Bracket Notation
console.log(`My last name is ${person['last']}`);

// Dot Notation
console.log(`My last name is ${person.last}`);

console.log(`Today I am learning ${person.languages[1]}`);

console.log(`My full name is ${person['first']} ${person['last']} `)



// let vs var - let is block-scoped, var is global-scoped
let myCity = 'Chicago';
let myDOB;


console.log(myCity);
console.log(typeof(myCity));
console.log(typeof(myDOB));


var adult = true;

if (adult) {
    var mySchool = 'Coding Temple';
    let color = 'Blue';
    console.log(color);
}


console.log(mySchool);
// console.log(color);



//  const - similar to let (block scoped) - needs value when declared - cannot be reassigned
const myBirthday = true;
let ageOfPerson = 33;

if (myBirthday) {
    const myFavColor = 'Purple'
    ageOfPerson = ageOfPerson +1; // Ok because age is declared with let
    // myBirthday = false;// Error because myBirthday declared with const so cant be reassigned
};

// console.log(myFavColor)


const cities = ['Chicago', 'New York', 'Boston', 'Los Angeles']

console.log(cities);

cities[2] = 'Denver';

console.log(cities);



// JavaScript Hoisting (claims a variable befor eits defined)
console.log(hoist);
var hoist = 'example';
console.log(hoist);



