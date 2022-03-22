
const arr1 = [1, 50, 28, 2, 5, 103, 496, 105, 108, 25, 36, 6, 50, 53, 289, 1003, 472, 105, 3, 899, 692, 1000 , 289, 103];
const arr2 = [];
arr1.forEach((element) =>{
if (!arr2.includes(element)){
    arr2.push(element);
}
});

// Calculate sum of all array
function sumArray(arr2){
    let sum = 0;
    for (let i = 0; i < arr2.length; i++){
        sum += arr2[i];
    }
     
    return sum;
}
console.log(sumArray(arr2));


// Find the odd numbers.
// Find the even numbers.
const oddArr =[];
const evenArr =[];
arr2.forEach((element) => {
if (element % 2 === 0 ){
     evenArr.push(element);
}else{
    oddArr.push(element);
}
});


// sort descending array
console.log(arr2.sort((b, a) => a - b));

// sort ascending array
console.log(arr2.sort((a, b) => a - b));


// Find the prime numbers
const checkPrime = (n) => {
    if (n < 2) {
      return false;
    } else {
      for (let i = 2; i < n - 1; i++) {
        if (n % i == 0) {
          return false;
        }
      }
      return true;
    }
};
  
  let result = [];
  arr2.forEach((n) => {
    if (checkPrime(n)) {
      result.push(n);
    }
});
  console.log(result);

//   Find the perfect numbers
const isPerfectNum = (n) => {
    let total = 0;
    if (n < 0) {
      return false;
    }
    if (n === 0) {
      return true;
    }
    if (n > 0) {
      for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            total += i;
        }
    }
      if (total === n) {
        return true;
    }
    }
};
  
  let results = [];
  arr2.forEach((n) => {
    if (isPerfectNum(n)) {
      results.push(n);
    }
});
  
  console.log(results);
