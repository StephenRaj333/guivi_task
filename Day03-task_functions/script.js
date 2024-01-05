
// 1. Print odd numbers in an array
  
const arr = [1,2,3,4,5,6,7,8,9,10];   

const printoddNumbers = function (data) {
    for(let i = 0;i<data.length;i++) {
        if(data[i] % 2 !== 0) {  
            console.log(data[i]);
        }
    }
}

printoddNumbers(arr);  

(function printoddNumbersIIFE (data) {
    console.log("IIFE Function Output");
    for(let i = 0;i<data.length;i++) {
        if(data[i] % 2 !== 0) {  
            console.log(data[i]);
        }
    }
})(arr);  


// 2. Convert all the strings to title caps in a string array

const allArrayStrings =["stephen","james","abishek","annie","ashik"];

const printtoSmall  = function (data) {
    for(let i = 0;i<data.length;i++) {
        let smallValue = data[i].toLocaleUpperCase();
        console.log(smallValue);
    }
}

printtoSmall(allArrayStrings); 

(function printtoSmallIIFE (data) {
    console.log("IIFE Function Output");    
    for(let i = 0;i<data.length;i++) {
      let smallValue = data[i].toLocaleUpperCase();
        console.log(smallValue);
    }
})(allArrayStrings);

// 3. Sum of all numbers in an array

const allNumbers = [1,2,3,4,5,6,7,8,9,10];

const printallNumbers = function (data) {
    let sum = 0;
    for(let i = 0; i < data.length;i++) {    
        sum  = sum  + data[i];  
    }   
    return console.log(sum);
}   

printallNumbers(allNumbers);


(function printallNumbersIIFE (data) {
    console.log("IIFE Function Output");    
    let sum = 0;
    for(let i = 0; i < data.length;i++) {    
        sum  = sum  + data[i];  
    }   
    return console.log(sum); 
})(allNumbers);

// 4.  Return all the prime numbers in an array 

// Given array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using an anonymous function
const primeNumbersAnonymous = numbers.filter(function (num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; 
    }
  }
  return true;
}); 

console.log("Prime numbers using anonymous function:", primeNumbersAnonymous);

// Using an IIFE (Immediately Invoked Function Expression)
const primeNumbersIIFE = (function (arr) {
  return arr.filter(function (num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  });   
})(numbers);  

console.log("Prime numbers using IIFE function:", primeNumbersIIFE);    


// 5. Return all the palindrome in an Array 

const palindrome = ["level","refer","madam","noon"];  

const findPalindrome = function (data) {
  let newArray = [];
  for(let i = 0;i<data.length;i++) {  
    let newData =  data[i].split("").reverse().join(""); 
    newArray.push(newData);
  } 
  console.log("Using Anonymous funtion",newArray);
} 

findPalindrome(palindrome);


(function findPalindromeIIFE (data) {
  let newArray = [];
  for(let i = 0;i<data.length;i++) {  
    let newData =  data[i].split("").reverse().join(""); 
    newArray.push(newData);
  } 
  console.log("Using IIFE funtion",newArray);
})(palindrome) 


// 6. Remove duplicates from an array

var NewArray = [1,5,7,8,9,8,8,4,6,7,5,1,6,];   

const findDuplicate = function (data) {   

  var obj = {}; 
  
  var maxele = data[0];     
  
  var mincount = 1; 

  
  
  for (var i = 0; i<data.length;i++) {    
      var ele = data[i];   
      if(obj[ele]) {  
          obj[ele]++; 
      }else { 
          obj[ele]=1; 
      }   
      if(obj[ele] > mincount) {   
          mincount = obj[ele];    
          maxele = ele;   
      }      
  }     
  
  console.log("max occurance " + maxele);     
  
  console.log("duplicate number in Anonymous function",obj);     
}

findDuplicate(NewArray);  


(function findDuplicate(data) {   

  var obj = {}; 
  
  var maxele = data[0];    
  
  var mincount = 1; 
  
  for (var i = 0; i<data.length;i++) {    
      var ele = data[i];   
      if(obj[ele]) {  
          obj[ele]++; 
      }else { 
          obj[ele]=1; 
      }   
      if(obj[ele] > mincount) {   
          mincount = obj[ele];    
          maxele = ele;   
      }      
  }     
  
  console.log("max occurance " + maxele);     
  
  console.log("duplicate number in IIFE function",obj);     
})(NewArray);

// 7. find the median of two sorted Array 

const A = [5,6,7,8];

const B = [9,10,11,12];

const C = A.concat(B);

console.log("VALUE OF C",C); 

const AnonymousFunctionC = function (data) {
  for(let i = 0; i<data.length;i++) {
     let indexOne =  data.length /2;   // index value 
      let indexTwo = data.length/2 - 1;  
     console.log("Anonymous Median Data",(data[indexOne]+data[indexTwo])/2);  
  }
}

AnonymousFunctionC(C);

(function AnonymousFunctionIIFEC (data) {
  for(let i = 0; i<data.length;i++) {
     let indexOne =  data.length /2;   // index value 
      let indexTwo = data.length/2 - 1;  
     console.log("IIFE Median function Data",(data[indexOne]+data[indexTwo])/2); 
  }
})(C);


// ******************--------********************* Arrow functions **************------**********************   


// 1. Print Odd Numbers in An Array 

const printOddNumbers = (data) => {
  for(let i = 0;i<data.length;i++) {
    if(i % 2 === 0) {
      console.log(data[i]); 
    }  
  }
}

printOddNumbers([1,2,3,4,5,6,7,8,9,10]);  

// 2. conver all the strings to title caps 

const upperCaps = (data) => {
  for(let i = 0;i<data.length;i++) {
    let capsData =   data[i].toLocaleUpperCase()
    console.log(capsData);  
  }
}

upperCaps(["stephen","abishek","ashik","annie","james"])


// 3. sum of all the numbers in an array 


const sumprintallNumbers = (data) => {  
    let sum = 0;
    for(let i = 0; i < data.length;i++) {    
        sum  = sum  + data[i];  
    }   
    return console.log("sum of all  numbers",sum);  
}   

sumprintallNumbers([1,2,3,4,5,6,7,8,9,10]); 



// 4. Return all the prime numbers in an array 


const Arrayofnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const FindAllPrimeNumbers = Arrayofnumbers.filter((num) =>  {   
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; 
    }
  }
  return true;
}); 

console.log("Prime numbers using Arrow function:", primeNumbersAnonymous);


//5. Return all the palindromein an array   

const palindromeArray = ["level","refer","madam","noon"];  

const findPalindromeArrowFUnction = function (data) {
  let newArray = [];
  for(let i = 0;i<data.length;i++) { 
    let newData =  data[i].split("").reverse().join(""); 
    newArray.push(newData);
  } 
  console.log("Using Arrow funtion",newArray);
} 

findPalindromeArrowFUnction(palindrome);  