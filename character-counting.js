
// // write a function that returns all the unique characters that exist in a string
// // and reports how many instances each letter is found in the string
// //returns an object that can represent the stats for the sentence it is given: all characters found in
// //input string.

//hint: perhaps return an object where each unique character is a property of an object. and the value for that property/key should be the number of occurences for that character.

var lighthouse = process.argv[2];
var squish = lighthouse.replace(/ /g,'');

function countLetters(theStringPassedIn) {
  var counter = {};
   for (var i = 0; i < theStringPassedIn.length; i++){
    counter[theStringPassedIn[i]] = 0;
   }
  //  The below code will work! commented out for later notes.
  //   for (var i = 0; i < theStringPassedIn.length; i++){
  //   counter[theStringPassedIn[i]] += 1;
  // }
   for (var letter of theStringPassedIn){
    counter[letter] += 1;
   }
   return counter;
}
console.log(countLetters(squish));