function mergeSort(s, e, arr) {
  if (s >= e) {
    return;
  }
  let m = s + parseInt((e - s) / 2);
  mergeSort(s, m, arr);
  mergeSort(m + 1, s, arr);
  merge(s, e, m, arr);
}

function merge(l, r, m, arr) {
  //length of array
  let n1 = m - l + 1;
  let n2 = r - m;

  //temp array;
  let left = new Array(n1);
  let right = new Array(n2);

  for (let i = 0; i < n1; i++) {
    left[i] = arr[l + i];
  }
  for (let i = 0; i < n2; i++) {
    right[i] = arr[m + 1 + i];
  }

  //potiners

  //initial index of temp arrays
  let i = 0;
  let j = 0;

  //intial index of merged array
  let k = 0;

  //   console.log(left.length);
  //   console.log(right.length); //[0, 1, 1, 2], [3, 5, 8, 13]
  while (i < n1 && j < n2) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }
  while (i < n1) {
    arr[k] = left[i];
    i++;
    k++;
  }
  while (j < n2) {
    arr[k] = right[j];
    j++;
    k++;
  }
}

// console.log(merge([0, 1, 1, 2], [3, 5, 8, 13]));
// console.log(mergeSort([0, 1, 1, 2, 3, 5, 8, 13]));
let arr = [105, 79, 100, 110];
mergeSort(0, arr.length - 1, arr);
console.log(arr);
