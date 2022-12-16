function isPalindrome(word) {
  // Write your algorithm here
  if (word.split('').reverse().join('') === word){
    return true
  }
  else {
    return false
  }
}

/* 
  Add your pseudocode here
  make function that returns true if reading back
  false if not
  //reads the same forwards and backwards
*/

/*
  Add written explanation of your solution here
  //Function accepts one argument that's a string
  //needs to be a palindrome
  //return true if palindrome(mom, bob)
  //return false if not (cool, stop)
  Then the if...else statement is used to check if the string and the reversed string are equal. 
  //split() converts string into array, 
  //reverse() reverses position in an array
  //join()brings reversed array together
  If they are equal, the string is a palindrome.
  via https://www.programiz.com/javascript/examples/palindrome
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("=>", isPalindrome("dad"));
  console.log("=>", isPalindrome("mmm"));
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("=>", isPalindrome("jump"))
  console.log("=>", isPalindrome("begin"))
}

module.exports = isPalindrome;
