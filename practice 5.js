//Todo Exercice 1
function Alphabets(string){
        let AlphaOrder1 = string.split('');
        AlphaOrder1.sort();
        return AlphaOrder1.join('');// This function takes a string, splits it into individual characters, 
                                    // sorts them alphabetically, and then joins them back into a single string.
}
console.log(Alphabets("ZAIBJTSRC"));

//Todo Exercice 2
function DetectVoals(string){
    let count = 0;
    let vowels = ['a','e','i','o','u','A','E','I','O','U']
    for (let i=0; i<string.length ; i++){
        let Alphabets = string[i];
        if (vowels.includes(Alphabets)){
            count++;
        } 
    }
    return count;
}
console.log(DetectVoals("ahueoigkm"));

//Todo Exercice 3
function MoneyChanger(amount, coins) {
    let result = []; // to store coins used

    for (let i = 0; i < coins.length; i++) {
        let coin = coins[i];
        while (amount >= coin) {
            amount -= coin;
            result.push(coin);
        }
    }

    return result;
}

console.log(MoneyChanger(46, [25,10,5,2,1]));

//Todo Exercice 4 :
function SerchCaracter(String){
    let storage=""
    for(let i=0; i<String.length; i++){
        if (!storage.includes(String[i])){
        storage +=(String[i]);
        }
    }
    return storage;
}
console.log(SerchCaracter("Hello",))

//Todo Exercice 5 :
function NoRepeat(str){
    for(let i=0; i<str.length ;i++){
        let char=str[i];
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
}
console.log(NoRepeat("abacddbec"))