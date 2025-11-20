//Todo Exercice 1 :
function YearType(Year){
    if (Year %4 ===0){
        if (Year %100===0){
            if((Year %400===0)){
                return "the year is leap"
            }else{
                return "the year is not leap"    
            }
        } else{
            return "the year is leap"
        }
    } else{
        return "the year is not leap"
    }
}
console.log(YearType(1900));
console.log(YearType(2000));
console.log(YearType(2025));
console.log(YearType(2024));

//todo Exercice 2 :
// Exercise 2
// Write a JavaScript program to compare two objects
// to determine if the first one contains the same properties
// as the second one (which may also have additional properties)

const objA = { a: 1, b: 2, c: 1 };
const objB = { a: 1, b: 1 };
const objC = { a: 1 };

function compareObjects(obj1, obj2) {
  // get the keys of the second object (the one we want to check)
  const keysB = Object.keys(obj2);

  // check if all properties in obj2 exist in obj1 and have the same value
  return keysB.every(key => obj1.hasOwnProperty(key) && obj1[key] === obj2[key]);
}

console.log(compareObjects(objA, objB)); // false (b value is different)
console.log(compareObjects(objA, objC)); // true  (objA contains all of objC's properties)
console.log(compareObjects(objB, objC)); // true  (objB contains all of objC's properties)

//* Exercie 2 Sollution 

// Create three test objects with properties named a, b, c
const objD = {a: 1, b: 2, c: 1};
const objP = {a: 1, b: 2, c: 2};  // c is different from objD
const objX = {a: 1, b: 3, c: 3};  // b and c are different from objP

// NOTE: Object.keys() returns an ARRAY of property NAMES, not the values!
Object.keys(objX); // Returns: ["a", "b", "c"] (NOT {a: 1, b: 3, c: 3})

// console.log shows the actual object with values
console.log(objX); // Returns: {a: 1, b: 3, c: 3}

// Function to compare if two objects are equal
// Parameters: a and b are ENTIRE OBJECTS (not property names!)
const ObjectEqual = (a, b) => 
    // STEP 1: Check if both objects have the same NUMBER of properties
    Object.keys(a).length === Object.keys(b).length &&
    
    // STEP 2: Check if ALL property VALUES are the same
    // Object.keys(a) gives us ["a", "b", "c"] (all property names in object a)
    // .every() loops through EACH property name
    // For each property name (Key), compare: a[Key] === b[Key]
    Object.keys(a).every(Key => a[Key] === b[Key]);
    // Example when Key = "a": a["a"] === b["a"] → compare the VALUES at property "a"
    // Example when Key = "b": a["b"] === b["b"] → compare the VALUES at property "b"
    // Example when Key = "c": a["c"] === b["c"] → compare the VALUES at property "c"
    // If ALL comparisons are true, .every() returns true
    // If ANY comparison is false, .every() returns false

// TEST 1: Compare objD and objP
console.log(ObjectEqual(objD, objP));
// Here: a = objD, b = objP
// Check property "a": objD.a === objP.a → 1 === 1 ✓
// Check property "b": objD.b === objP.b → 2 === 2 ✓
// Check property "c": objD.c === objP.c → 1 === 2 ✗
// Result: false (because property c is different)

// TEST 2: Compare objP and objX
console.log(ObjectEqual(objP, objX));
// Here: a = objP, b = objX
// Check property "a": objP.a === objX.a → 1 === 1 ✓
// Check property "b": objP.b === objX.b → 2 === 3 ✗
// Result: false (because property b is different)

//Todo Exercice 3 :

const cvs = "abc,def,ghi\njkl,mno,pqr\nstu,vwx,yza";
const separeted_string=cvs.split("\n");// the split methode returns returns an array
console.log(separeted_string);
const result =[];   
for (let i=0 ; i < separeted_string.length ; i++){
const splitRow=separeted_string[i].split(",");
result.push(splitRow);
}
console.log(result);

//Todo Exercice 4 :

/*
 * Exercise 4:
 * -----------
 * Write a JavaScript program to generate a
 * random hexadecimal color code.
 */

// Function to generate ONE random hexadecimal character (0-9 or a-f)
const getRandomHexNumber = () =>
    // Step 1: Math.random() generates a random number between 0 and 0.999...
    // Step 2: Multiply by 16 to get a number between 0 and 15.999...
    // Step 3: Math.floor() rounds DOWN to get a whole number from 0 to 15
    // Step 4: .toString(16) converts the number to hexadecimal
    //         Examples: 0→"0", 9→"9", 10→"a", 11→"b", 15→"f"
    Math.floor(Math.random() * 16).toString(16);

// Function to generate a complete random hex color code
const getRandomHexColor = () => 
    // Start with '#' and add 6 random hex characters
    '#' + 
    
    // Array.from({ length: 6 }) creates an array with 6 empty slots
    // This gives us: [undefined, undefined, undefined, undefined, undefined, undefined]
    Array.from({ length: 6 })
    
    // .map(getRandomHexNumber) calls getRandomHexNumber() for each slot
    // This transforms each undefined into a random hex character
    // Example result: ["a", "3", "f", "2", "b", "9"]
    .map(getRandomHexNumber)
    
    // .join('') combines all characters into one string with no separator
    // Example: ["a", "3", "f", "2", "b", "9"] becomes "a3f2b9"
    .join('');

// Test the function - each call generates a new random color
console.log(getRandomHexColor());  // Example output: #a3f2b9
console.log(getRandomHexColor());  // Example output: #1c8e4d
console.log(getRandomHexColor());  // Example output: #ff0033
console.log(getRandomHexColor());  // Example output: #92b6a1

//Todo Exercice 5
 function checkNumbers(numbers){
for (let i =0 ; i <numbers.length ; i++){
    let Numbers=numbers[i];
        if (Numbers  % 2 !== 0){
            return "Numbers are Odd"
        }
 }
 return "Numbers are even"
 }
console.log(checkNumbers([2,4,6,8,10]));
console.log(checkNumbers([1,3,5,7,9]));