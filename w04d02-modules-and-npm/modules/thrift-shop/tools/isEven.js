var isEven = {
  evenDetector: function(num) {
    if (num % 2 === 0) {
      console.log(`${num} is even!`);
    } else {
      console.log(`${num} is odd!`);
    }
  }
}

module.exports = isEven;