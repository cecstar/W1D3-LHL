var lighthouse = process.argv[2];
var squish = lighthouse.replace(/ /g,'');

function countLetters(theStringPassedIn) {
  var position = {};
    for (var i = 0; i < theStringPassedIn.length; i++){
    position[theStringPassedIn[i]] = [];
   }
   for (var i = 0; i < theStringPassedIn.length; i++){
    position[theStringPassedIn[i]].push(i);
   }
   return position;
}
console.log(countLetters(squish));