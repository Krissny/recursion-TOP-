//Iterative method fibbonacci
function fibonacci(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === 1) {
      arr.push(i);
    } else {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  }
  return arr;
}

//For printing the fibonacci numbers, not for finding nth fibbonaci number
function fibrec(n1, n2, n) {
  if (n > 2) {
    let n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
    console.log(n3);
    fibrec(n1, n2, n - 1);
    return;
  }
}

console.log(0);
console.log(1);
fibrec(0, 1, 8);
