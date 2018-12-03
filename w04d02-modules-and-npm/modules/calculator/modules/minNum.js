var minNum = {
  minOfArray: function(arr) {
    var min = arr[0];

    arr.forEach(function(el) {
      if (el < min) { // for min we switch the ">" for "<"
        min = el;  
      }
    })

    return min;
  }
}

module.exports = minNum;  // export to be used in index.js