var string = "a man a plan a canal panama"

function isPalindrome(s) {
  var stringReverse = s.replace(/ /g,'').split("").reverse().join("");
  var s = s.replace(/ /g,'')
  return s == stringReverse;
}




module.exports = isPalindrome;
