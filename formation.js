
// *- to add a comment in java script i need to use this a symbols like this up and down
// *- data types used in java script :
// *undifined - null - bolean ( true or false ) - string  - symbol - number  and object 

var myName   =  "Abdellah " // var is used to the whole programme 
//* myName = 23
//* let myName = "Abdellah" 
const pi = 3.14 // the const cant be changed if we try to change const we will have an errorr 

//* the difference between  declaring variables and  assigning variables :
var a ; // declring a variable 
var b = 23 ; // assign a variable and and add  semicolon
console .log (a)
a = 7 ; //assign 7 to a and  a is already declared 
b = a  ; //assign the content of a to b 
console .log (a) // i download  node js Node.js lets you run JavaScript code directly on your computer instead of needing a browser.
var c ; // declaration
 var c = " I'm a " ;
 c =  c +"string !"; // assignment 
 console .log (c)
var sum = 23 + 2 ;
var diffrence = 23 - 2 ;
console .log (sum)
console .log (diffrence)
var product  = 23 * 10 ;
console .log (product)
var quotion = 40 / 2 ; 
console .log (quotion)
var hamid = 999; 
hamid ++ ; // INCREMENT hamid from 999 to 1000 by adding 1
// hamid -- ; decrement hamid fromm 999 to 998 by removing 1 
console .log (hamid)
var DecimalNumber = 0.44 ;// floating point number 
var  product = 2.4 * 2.3 ; // multipliying 2 float numbers 
var  quotion  = 2.4 * 2.3 ; // devide decimales 
//finding a remainder :
// ==> WE CAN DO X = X + 23 ; or X += 23 ; 
// ==> WE CAN DO X = X - 23 ; or X =- 23 ; 
// ==> WE CAN DO X = X  * 23 ; or X *= 23 ;
// ==> WE CAN DO X = X / 23 ; or X /= 23 ;
var  Name = "Abdou " ; //declare string variables   
var myStr = "I'm an \"Automation ENG\" i m 23 years old \"i'm the best " 
console .log (myStr);
var mysttr = `i'm hamid "from fès" `;
console .log (mysttr);
var string = "i'm Abdellah " + "I'm from Meknès"; //concatenating  strings  with plus operator
console .log(string);
var  strr = "I'm first . ";//concatenating  strings  with plus equals operator
strr += "I'm seconde .";
console.log(strr)
//concatenating  strings  with variables :
var hamid = " hamidou " ;
var said = "hello i'm  said and this is my frend " ; 
said += hamid;
console.log(said);

//find lenth of string we use .lenth
var lastNameLength = 0 ;
var lastName = "Abdellah" ;
lastNameLength = lastName.length ;
console.log(lastNameLength) ; 

//Braket Notation  to find  first  chracter in  string  for same exemple 
var FirstLetterOfFirstName ="";
var firstName = "Abdellah";
FirstLetterOfFirstName=firstName[0];
console.log(FirstLetterOfFirstName); 
var lastLetterofFirstName= firstName[firstName.length-1]; //firnd the laste letter of firstNamae without knowing the number of letters 
console.log(lastLetterofFirstName);

//Store Multiple Values  with  Arrays for this exemple we have a string and a number 
var ourArray=["Abdellah",23]; 
console.log(ourArray);
//Nested Array
var myarray=[["Abdella",23],["Hamid",999]];
console.log(myarray);
//access Array data with  indexes   
var ourARRAY =[23,3334,999];
var ourData = ourARRAY[1];
console.log(ourData);
//modify Array Data With Indexes 
ourARRAY[1]= 444;
console.log(ourARRAY);
//Access Multi-Dimentionnal Arrays With Indexes 
var ARRAy = [[1,2,3] ,[4,5,6],[7,8,9]];
var myDATA = ARRAy[1][2];
console.log(myDATA);
//push something into an array
var smiya = ["Abdellah", 23];
smiya.push(["Hamid",38]);
console.log(smiya);
//manipulate array with pop function ()
var removedFroMyArray= smiya.pop();
console.log(smiya);
//manipulate array with shift function 
var removedfromArray = smiya.shift();
console.log(smiya) ;
//seconde exemple of using shift and unshift 
var myaray =[["Abdellah", 23] ,["Mahmoud",2030]];
myaray.shift() //so the first array ["Abdellah", 23] is deleated 
myaray.unshift(["joebonamassa",44]); //  the first array deleated is replased by a new array
console.log(myaray);

//==>Write reusable  code  with functions
//the function is set up like this " function +function name + () + { the code inside the 2 curly brackets is runned every time we call the function } "
//we call the function like this ==> "functionn name();"
//exemple of function :
function Abdellah(){
    console.log(" Heya , Helllo to the best Abdellah fl3alam");
}
Abdellah();
Abdellah();

//passing values to functions with arguments
//inside the function we can have some parameters there like inputs for the funcction for exemple
function ourFunctioWithArgs (a,b){
    console.log(a-b);
}
ourFunctioWithArgs(10,2); 
//✔️Global Scope and functions 
//✔️scope refers to the visibility of the variables 
//✔️variables outside the function have a globale scope 
//✔️exemple of this globale scope 
var DJ = 145;
function djhmida(){
    console.log(DJ);
}
djhmida();
//✔️if the variable is in decaled in the function and we call it outside the function the variable is not found 

//✔️global vs local scope in function 
//✔️we can have sometimes local and global variables declared wwith the same name !!
//==> the local variable took precedence over the global variable  (exemple 1)
var variable ="Messi";
function footballer(){
    variable ="Ronaldo";
    return variable; //You just returned a value. Nothing was printed to the console because return only sends a value back to the caller; it doesn’t display it.
}
 console.log(footballer());//It returns "Ronaldo" because the function changes the global variable variable from "Messi" to "Ronaldo" before returning it.
 console.log(variable); 

 //✔️Return a value from  a function  with return 
 function minustwo(num){
    return num-2;
 }
 console.log(minustwo(100));
 //✔️understanding undefined value  returned from a function
 processed = 2;
 function addfive(summ){
    summ = summ + 3 ;
    return summ //if we dont rutrn the varable we will have "undefined " 
 }
console.log("addfive = "+ addfive(3));
processed = addfive(9);
console.log("processed = "+ processed);

//✅ JSON.stringify converts a JavaScript object, array, or value into a JSON-formatted string.
//✅ We use it to send data to a server, store it in localStorage, or log it in a readable format.
function nextinline(arr,item){
    arr.push(item)
    //return item;
    return arr.shift(); //after: [2,3,4,5,6]
}
var testarray = [1,2,3,4,5];    
console.log("before: " + JSON.stringify(testarray));
console.log(nextinline(testarray,6));
console.log("after: " + JSON.stringify(testarray));
// ✅nextinline(arr, item) adds 'item' to the end of the array.
// ✅Using 'return item;' just returns the added item.
// ✅Using 'return arr.shift();' removes and returns the first element (like a queue).

//TODO: Boolean Values and condition exemple 1:
function trueOrFalse1(wasThatTrue){
    if (wasThatTrue){
        return "Yes , that was true ";
    }
    return"No, that was false" ;
}
console.log(trueOrFalse1(true));

//TODO: Boolean Values and condition exemple 2: with duble condition  using and statment 
function trueOrFalse2(wasThatTrue,wasThatTrue2){
    if (wasThatTrue && wasThatTrue2){
        return "Yes , that was true ";
    } else {
    return"No, that was false" ;
    }
}
console.log(trueOrFalse2(true,false));
console.log(trueOrFalse2(true,true));

//Comparaison with the equality operator 
function testEqual(age) {
    if (age== 23){
        return "Equal !";
    }
    return "Not equal !";
}
console.log(testEqual('23'));
//comparaison with the strict Equality Operator
function testEqual2(age) {
    if (age=== 23){
        return "Equal !";
    }
    return "Not equal !"; //!: Difference between '==' and '===' compare line 195 and line 203
}
console.log(testEqual2("23"));


function testEqual3(age) {
    if (age != 23){
        return "Equal !";
    }
    return "Not equal !"; //!: Difference between '==' and '===' compare line 195 and line 203
}
console.log(testEqual3("23"));
// !: if (age !== 23){
// !: if (val> 10)
// !: if (val>= 10)
// !: if (val>= 10 || val > 2) ==>"||" means " the or statment" 

//TODO: exemple of if and else if statment 
function testSize(num){
    if (num < 5){
    return "Tiny";
    } else if (num < 10){
        return "Small";
    } else if (num < 15){
    return "Medium";
    } else if (num < 20){
        return "Large";
    } else {
        return "Huge"
    }

}
console.log(testSize(4));
console.log(testSize(9));
console.log(testSize(14));
console.log(testSize(19));
console.log(testSize(1000)); 


// TODO:the par is the average number of strokes
    var names = ["Hole-in-one!","Eagle","Birdie","Par","Bogey","Double Bogey","Go Home!!"]
    function GolfScores(par,Stockes){
        if (Stockes==1){
            return names[0];
        }else if (Stockes<= par-2){
            return names[1];
        }else if (Stockes== par-1){
            return names[2];
        }else if (Stockes== par){
            return names[3];
        }else if (Stockes== par +1){
            return names[4];
        }else if (Stockes== par +2){
            return names[5];
        }else if (Stockes>= par+3){
            return names[6];
        }
    }
    console.log(GolfScores(5,4));

//* Switch Statments usings "case and break"
//? what we call case and break in java script porogramming 
//? when we use case and brak and when we use if can we use them both in some cases
// TODO : a function where we use case and break
function caseInSwithch(val){
    var answer="";
    switch(val){
        case 1 :
            answer ="Alpha";
            break;
        case 2 :
            answer ="beta";
            break;
        case 3 :
            answer ="Gamma";
            break;
        case 4  :
            answer ="Delta";
            break;   
    }
    return answer;
}
console.log(caseInSwithch(1));
console.log(caseInSwithch(2));    
console.log(caseInSwithch(3));
console.log(caseInSwithch(4));    
//!: switch checks one value (val) and matches it against different cases
//!: case = a possible value to compare with
//!: break = stop after finding the match (avoid running next cases)
//!: without break, it continues to next cases (fall-through)


//*Dedault  Option  in Switch Statements
//!==> A statement is a single instruction in JavaScript
//!==> Examples: assigning a value, calling a function, if, switch, return, loop
//!==> It tells the computer to do one specific action

//todo==> Returning Bolean Values from Functions (witout using if statment)
function boll(a,b){
    return a<b; 
}
console.log(boll(4,2));

//todo==> Counting Cards

var count =0; // ← FIXED/PERMANENT - keeps its value between calls
function cc(card){
    switch(card){
        case 2:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "K":
        case "Q":
        case "J":
        case "A":
            count--;
            break;  
    }
var holdbet= "Hold" // ← RESETS - starts fresh every call
if (count>0){
    holdbet="Bet"
}
return count +" "+holdbet //! we gona use the turn erea operater 
                        //?what's the trun erea operator
}
cc(2);cc(3);cc(7);cc("K");cc("A");// ← These are the CARDS being processed
console.log(cc(4))// ← This shows the RESULT after all cards

//todo => Build java script objects 
    //? instead of using indexes  to access data we use  properties
    //* ==> name and  legs  and tails  and friends are  all properties  and after the colons we have the values like (camper, 4,1,EVERITHING)µ
    //! ==> the propeties can be string or numbers or arrays or any data type in java script 
var my_profile = { //* this is an exemple f an object
    "name": "Rahmouni Abdellah",
    "job" : "automation engineer",
    "programing langueges":"java script , python , html , css",
    "number of programming languages":4,
};
//if we want to access a property on an object :2 methdes
    //first methode : 1- Dot notation
        var job_name = my_profile .job; //!==> to find the value of the property inside the object
        //*-- after the dot we put the name of the property that we want to see the value 
        console.log(job_name); // we will recieve the value of the property 
    //seconde methode : 2- Bracket notation
        var job_name = my_profile ["job"]; //!==> to find the value of the property inside the object
        console.log(job_name);  
    // 3- accessing object properties with variables 
    var test_numbers ={ 
    23 : "Abdelllah",
    38 : "Hamid",
    };
    var anonyme = 23;
    var  programer_name= test_numbers[anonyme]
    console.log(programer_name)//* i used up the variable "programmer_name " to look up the pbject property
    //4- update project properties
    my_profile.job ="Software engineer";
    //5- add a new properties to an object 
    my_profile.age="23";
    my_profile['frend']="Hamid";
    //6 -delete properties from an object
    delete my_profile.number_of_programming_languages;
 //! ==> we can use the objectiinsted of using the swich and case statment 
    function caseInSwithch(val){ //same swich case statment exemple !!!
    var answer="";
    var lookup = {
        1 : "Alpha",
        2 : "beta",
        3: "Gamma" ,
        4: "Delta" ,
    };
 answer = lookup[val];
    return answer;
}
console.log(caseInSwithch(1));
// testing objects for propeties 
 var lookup = {
        1 : "Alpha",
        2 : "beta",
        3: "Gamma" ,
        4: "Delta" ,
    };
function chkobj(checkProp){
    if (lookup.hasOwnProperty(checkProp)){
        return lookup[checkProp];
    }else{
        return"Not Found";
    }
}
console.log(chkobj(6));// 6 is not a property in the object thats why i will recieve not found
//! a java script object is a whey to store flexible data 
var MyMusic =[   //todo exemple 1 
    {
        "artist":"PinkFloy",
        "title": "the wall",
        "release_year": 1970,
        "formats":[
            "CD",
            "vidéo",
        ],
    },
    {
        "artist":"joeBonamassa",
        "title": "midnight blues",
        "release_year": 2000,
        "formats":[
            "CD",
            "vidéo",
        ],
    },
]
//todo exxemple 2
var my_storage={
    "car":{
        "inside":{
            "glove box":"maps",
            "pasenger seat":"crumbs",
        },
        "outside":{
            "trunk":"jack",
        },
    },
};
var gloveBoxContents = my_storage.car.inside["glove box"];
console.log(gloveBoxContents); 
//?  explanation of my questions using an exemple
         var x = 5;  // semicolon ends the statement

         obj = {
         name: "Ahmed",  // comma separates properties
         age: 25         // no comma on last property
         }; // semicolon ends the whole declaration

        //! Objects organize related data - used in every project!
//todo exemple where have an array with multipale objects
var MyMusic =[    
    {
        "artist":"PinkFloy",
        "title": "the wall",
        "release_year": 1970,
        "formats":[
            "CD",
            "vidéo",
        ],
    },
    {
        "artist":"joeBonamassa",
        "title": "midnight blues",
        "release_year": 2000,
        "formats":[
            "CD",
            "vidéo",
        ],
    },
]
var todays_music = MyMusic[1].formats[1];// to foundsomething inside the object exactly inside the array
console.log(todays_music);

//todo ==> Record Collection the goal is to creat an updateRecords function 
    // MUSIC COLLECTION - Object containing multiple albums
    var collection = {
        "4122": {
            album: "The Thrill Is Gone",
            artist: "B.B. King",
            tracks: [
                "The Thrill Is Gone",
                "Sweet Little Angel"
            ]
        },
        "5289": {
            album: "Born Under a Bad Sign",
            artist: "Albert King",
            tracks: [ ]
        },
        "6344": {
            album: "At Last!",
        },
        "7455": {
            album: "Texas Flood",
            artist: "Stevie Ray Vaughan",
            tracks: [
                "Pride and Joy",
                "Texas Flood"
            ]
        }
    };
    // JSON.stringify() - Converts object to text string
// JSON.parse() - Converts text string back to object
// Together they create a deep copy (backup) of the collection
    var collectionCopy=JSON.parse(JSON.stringify(collection));
    
function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];  // Empty value = delete property
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];  // Create array if missing
        collection[id][prop].push(value);  // Add track to array
    } else {
        collection[id][prop] = value;  // Set any other property
    }
    return collection;
}
    updateRecords(7455,"tracks","blues goat");
    console.log(updateRecords(6344,"artist","Abdellah"));

//todo ==> Iterate with while loops
//LOOPS ALLOW YOU TO RUN THE SAME CODE Multiple times
//while loop it runs when its true and it stopes when it's not true
var myArray=[];
var i=0;
while (i<=10){
    myArray.push(i);
    i++;
}
console.log(myArray);

//the "for loop"
var myforloop =[];
for(var i=1;i<10;i+=2){ // we start by initianlisation of the variable i then seconde the condition then the action is incrementation 
    myforloop.push(i);
}
console.log(myforloop);


var myForloop =[];
for(var i=10;i>0;i-=2){ //decriment by 2 using for loop
    myForloop.push(i);
}
console.log(myForloop);


//todo iterate through an array with  a for loop 
var ourAR = [10, 13, 15, 23];  // Array of numbers
var ourTotal = 0;              // Variable to store sum

// .length = number of items in array (here: 4)
// Loop runs while i < 4 (indexes: 0, 1, 2, 3)
for (var i = 0; i < ourAR.length; i++) {
    ourTotal += ourAR[i];  // Add current number to total
}

console.log(ourTotal);  // Result: 61 (10+13+15+23)

//todo ==> Netsing for loops 
function multiplyAll(arr){
    var product =1;
    for (var i=0; i< arr.length;i++){ // i is outer array
        for (var j=0;j<arr[i].length; j++){ // J is inter array
            product *=arr[i][j]
        }
    }

    return product;
}
var product=multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product);

//Array: [[1,2], [3,4], [5,6,7]]
//Starting product = 1

//OUTER LOOP 1: i = 0 → arr[0] = [1, 2]
 // INNER LOOP 1: j = 0 → arr[0][0] = 1
 //   product = 1 * 1 = 1
 // INNER LOOP 2: j = 1 → arr[0][1] = 2
 //   product = 1 * 2 = 2

//OUTER LOOP 2: i = 1 → arr[1] = [3, 4]
 // INNER LOOP 1: j = 0 → arr[1][0] = 3
 //   product = 2 * 3 = 6
 // INNER LOOP 2: j = 1 → arr[1][1] = 4
   // product = 6 * 4 = 24

//OUTER LOOP 3: i = 2 → arr[2] = [5, 6, 7]
  //INNER LOOP 1: j = 0 → arr[2][0] = 5
  //  product = 24 * 5 = 120
  //INNER LOOP 2: j = 1 → arr[2][1] = 6
 //   product = 120 * 6 = 720
  //INNER LOOP 3: j = 2 → arr[2][2] = 7
  //  product = 720 * 7 = 5040 ✅

//Final Result: 5040
 