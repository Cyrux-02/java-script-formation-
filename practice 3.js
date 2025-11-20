//Todo Exercice 1:
function FindNumber(array){
    let count = 0;
    for (let i=0 ; i<array.length; i++){
        let number = array [i];
        let StrNumber =String(number);
    //console.log(StrNumber);
    for (let j=0 ; j<StrNumber.length ; j++){
        console.log(StrNumber[j]);
        let digit =Number(StrNumber[j]);
        if (digit % 2 ==0 ){
            count++;
        }
    }
}
    return count;
}
console.log(FindNumber([12,14,16,18,20,102]));

//Todo Exercice 2 :
function GivenNumber(number){
    let count=0 ;
    for (let i=1 ;i<= number; i++){
        let StrNumber =String(i);
    for (let j=0 ; j<StrNumber.length ; j++){
        //console.log(StrNumber[j]);
        let digit =Number(StrNumber[j]);
        if (digit % 2 ==0 ){
            count++;
        }   
    }
    }
    return count;
}
console.log(GivenNumber(5))

//Todo Exercice 3 :
function OrderVerification(array) {
  if (array.length === 0) {
    console.log("Array is empty");
    return;
  }

  let FirstElement = array[0];       
  let NumberOfElements = array.length;

  // Create the second array starting from the first element
  let secondArray = [];
  for (let j = FirstElement; j < FirstElement + NumberOfElements; j++) {
    secondArray.push(j);
  }
  console.log(FirstElement)

  console.log("Original array:", array);
  console.log("Second array:", secondArray);

  // Compare arrays
  if (arraysAreEqual(array, secondArray)) {
    console.log("The array is sorted in ascending consecutive order ✅");
  } else {
    console.log("The array is NOT in ascending consecutive order ❌");
  }
}

// Helper function to compare two arrays
function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}


OrderVerification([10, 11, 12]);

//Todo Exercice 4 :
function LargestNumber(arr){
  let max = arr[0];
  for (let i=0 ;i<arr.length;i++){
    if(arr[i]>max){
      max=arr[i];
    }
  }
  return "The lasrgest Number is :" + max;
}
console.log(LargestNumber([1,5,44]));

//Todo Exercice 5 :

function ReplaceElement(arrays) {
  let firstElement = arrays[0];          // 12
  let strNumber = String(firstElement);  // "12"

  // Replace first digit with '$'
  let newStr = "$" + strNumber[1];       // "$2"
  console.log("New string:", newStr);

  // Create new array combining the modified first element + rest of array
  let newArray = [newStr, ...arrays.slice(1)];

  console.log("New array:", newArray);
}

ReplaceElement([12, 5, 44]);



