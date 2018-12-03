/* the strategy of maxNum:
We loop through the array, beginning at the first element. If the current element is greater
than the last element, then it will be saved to a variable. If it is not bigger then it will
continue to the next element. This will then check every element in the array, and the result
is the biggest number. At the end of the loop we export that value.

or in other words we tell the computer:
1. remember the first element and save it as the biggest number.
2. check to see if the next element in the array is bigger then save that new number as the biggest number
3. then check the next element after that in the array.  If that number is bigger then the new number we saved
  then forget that number too and save the new new number as the largest number.
4. Keep comparing the next numbers, comparing to the saved largest number, and replacing it if it is bigger.
5. Repeat until end of the array
6. Return the biggest number at the end of the loop
*/

var maxNum = {
  maxOfArray: function(arr) {
    // save the first value as the greatest number:
    var max = arr[0];

    // loop through every element in the array:
    arr.forEach(function(el) {
      // if the current element is greater than the current max element:
      if (el > max) {
        max = el;  // then replace the max number with the current element
      }
    }) // keep looping until the end of the array.  When finished return the max:

    return max;
  }
}

module.exports = maxNum;  // export to be used in index.js