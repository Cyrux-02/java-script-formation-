//Todo Exercice 1 :   
function NewString(str) {
    var first3c = str.slice(0, 3);
    var last3c = str.slice(-3);
        if (str.length > 3){
        return "Charter numbers " + str.length +" the new one is :"+ first3c +last3c;
    }else{
        return "Try Again";
    }
    return str.length;
}
console.log(NewString("ydohamidfih"));

//Todo Exercice 2:
function HalfOfStr(string){
    var halfstring= string.length / 2;
    var ExtractFirstPart = string.slice(0,halfstring)
    return ExtractFirstPart;
}

console.log(HalfOfStr("temp"));
console.log(HalfOfStr("temple"));
console.log(HalfOfStr("temples"));

//Todo Exercice 3:

function RemoveFirstCharacter(String1,String2){
    var NewString1 = String1.slice(-(String1.length-1));
    var NewString2 = String2.slice(-(String2.length-1)) ;
    return "the new combined strings : "+ NewString1 + NewString2;
}
console.log(RemoveFirstCharacter("Abdellah","hamid"));

//Todo Exercice 4:
function NearNumber(num1,num2){
    var Cnum1=100-num1;
    var Cnum2=100-num2;
    if (Cnum1<Cnum2){
        return "The Number Nearest to 100 is : "+ num1;
    }else if (Cnum1>Cnum2){
        return "The Number Nearest to 100 is : "+num2;
    }else{
        return "The Numbers are equal !"
    }
}
console.log(NearNumber(50,50));

//Todo Exercice 5:
function RepeatedC(TheString,character){
    var count =0;
    for (var i=0 ; i<TheString.length;i++){
        if(TheString[i]===character){
             count++;
        }
    }
    return count ;
}
console.log(RepeatedC("Abdellah","l"));