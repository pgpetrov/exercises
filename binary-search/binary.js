var binarySearch = function(arr, el, left, right) {
  if (typeof left === 'undefined') {
    left = 0;
    right = arr.length - 1;
  }

  if (right < left) {
    return -1;
  }

  i = (left + right) >> 1;
  if (el > arr[i]) {
    return binarySearch(arr, el, i + 1, right);
  } else if (el < arr[i]) {
    return binarySearch(arr, el, left, i - 1);
  } else {
    return i;
  }

}

module.exports = binarySearch;
