//TODO Exercice 1 :

function CheckNumber(a,b){
    if (a==100 || b ==100)  {
        return "true";
    }else if (a+b==100){
        return "true";
    }else{
        return "false"
    }
}
console.log(CheckNumber(50,49));
// *        ===== SOLUTION Exercice 1  WITH ARROW FUNCTION =====

// Arrow function syntax: const name = (parameters) => expression
// Uses === (strict equality) instead of == (loose equality)
// Returns boolean (true/false) not string ("true"/"false")
//const CheckNumber = (a, b) => a === 100 || b === 100 || a + b === 100;

// Testing:
console.log(CheckNumber(100, 0));  // true
console.log(CheckNumber(50, 50));  // true
console.log(CheckNumber(50, 49));  // false

//TODO Exercice 2:

// Function to get the file extension from a filename
function getFileExtension(str) {
    // Find the position of the last dot in the filename
    const dotPosition = str.lastIndexOf('.');
    
    // Extract everything from the dot to the end
    const extension = str.slice(dotPosition);
    
    return extension;
}

// Test the function
console.log(getFileExtension('index.html'));  // Output: .html


//*           ===== SOLUTION Exercice 2 of WITH ARROW FUNCTION =====

// Arrow function: finds last dot position and slices from there to end
// str.lastIndexOf('.') → finds position of last dot
// str.slice() → cuts string from that position to end
const getFileExtensionArrow = (str) => str.slice(str.lastIndexOf('.'));

// Testing:
console.log(getFileExtensionArrow('index.html'));   // .html
console.log(getFileExtensionArrow('script.js'));    // .js
console.log(getFileExtensionArrow('style.css'));    // .css

//TODO Exercice 3 :
function ConvertStr(string){
    let result =""
    for(var i =0; i<string.length; i++){
        let code= string .charCodeAt(i);
        let NewCode =code + 1 ;
        let newChar = String .fromCharCode(NewCode);
        result += newChar ;
    }
    return result;
}
console.log(ConvertStr("abcd"));

//*                     ===== SOLUTION Exercice 3  =====

//function ConvertStr(string){
    // result: Empty string that will store our final answer
    // We build it character by character inside the loop
    //let result = ""
    
    // Loop through each character in the string
    // i: position/index in the string (0, 1, 2, 3...)
    // string.length: total number of characters
    //for(var i = 0; i < string.length; i++){
        
        // charCodeAt(i): Gets the Unicode/ASCII number of the character at position i
        // Example: 'h' at position 0 returns 104
        //let code = string.charCodeAt(i);
        
        // Add 1 to get the code of the NEXT letter in alphabet
        // Example: 104 + 1 = 105 (which is the code for 'i')
        //let NewCode = code + 1;
        
        // String.fromCharCode(): Converts a number BACK into a character
        // Example: 105 becomes 'i'
        //let newChar = String.fromCharCode(NewCode);
        
        // += adds the new character to our result string
        // Example: "" becomes "i", then "if", then "ifm", etc.
        //result += newChar;
    
    
    // Return the complete converted string
    //return result;


// Test the function with "hello"
// Expected output: "ifmmp"
//console.log(ConvertStr("hello"));

//TODO Exercice 4 + Sollution:

// This is a function that takes a Date object as input and returns a formatted date string
function TodayDate(Date){
    
    // Get the month from the Date object
    // .getMonth() returns 0-11 (0=January, 11=December), so we add 1 to get 1-12
    // .toString() converts the number to a string (example: 5 becomes "5")
    // .padStart(2,'0') makes sure we have 2 digits by adding a '0' at the start if needed (example: "5" becomes "05")
    var Month=(Date.getMonth() + 1).toString().padStart(2,'0'); 
    
    // Get the day of the month (1-31)
    // .getDate() returns the day number
    // .toString() converts it to a string
    // .padStart(2,'0') adds a leading zero if needed (example: "9" becomes "09")
    var date=Date.getDate().toString().padStart(2,'0'); 
    
    // Get the full year (example: 2025)
    // .getFullYear() returns the 4-digit year
    var Year=Date.getFullYear();

    // Combine all parts with "-" separator and return the formatted date string
    // Example result: "11-09-2025"
    return Month + "-" + date + "-" + Year ;

}

// Create a new Date object representing today's date and time
// Pass it to the TodayDate function
// console.log() displays the result in the console
console.log(TodayDate(new Date()));

//* Exercice 4 other sollution
const formatDate=(date=new Date())=>{
    const days =date.getDate();
    const months=date.getMonth()+1;
    const years=date.getFullYear();
    return `${days}/${months}/${years}`; // used / not + and $ = Dollar sign - signals "insert something here"
}
console.log(formatDate());

//TODO Exercice 5 + Sollution:
function NewString(Str){
    if (Str.startsWith("New!")){
        return Str;
    }else{
        return "New!" + Str;
    }
}
console.log(NewString("New! hello"));


//= → assigns a value
//== → compares (loose)
//=== → compares (strict) ✅

//* Exercice 5 sollution
//TODO Exercise 5: Add "New!" to string

// Function to add "New!" to beginning of string
// If string already starts with "New!", return it unchanged
function NewString(Str){
    // Check if string starts with "New!"
    if (Str.startsWith("New!")){
        // Already has "New!", return original
        return Str;
    } else {
        // Doesn't have "New!", add it to the front
        return "New! " + Str;  // Note: added space for better formatting
    }
}

// Test cases
console.log(NewString("New! hello"));   // Output: "New! hello" (unchanged)
console.log(NewString("hello"));        // Output: "New! hello" (added)
console.log(NewString("Product"));      // Output: "New! Product"

//* ===== SOLUTION Exercise 5 =====

// FUNCTION USED: .startsWith()
// Syntax: string.startsWith(searchString)
// Returns: true if string starts with searchString, false otherwise
// Example:
//   "New! hello".startsWith("New!")  → true
//   "hello".startsWith("New!")       → false

// LOGIC:
// 1. Check if input string starts with "New!"
// 2. If YES → return original string (no change)
// 3. If NO → add "New! " to the beginning

