/**
*
*/

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(x, y){
  "use strict";
  if(x > y){
    return x;
  } else{
      return y;
    }
}
console.log(max(5, 6));

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c){
  "use strict";
  if(a > b && a > c){
    return a;
}
  if(b > a && b > c){
  return b;
}
  if(c > a && c > b){
  return c;
}
}
console.log(maxOfThree(5, 6, 11));

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
  "use strict";
  var vowel= ['a', 'e', 'i', 'o', 'u'];
  if(vowel.indexOf(char) > -1){
    return true;
  }
  else{
    return false;
  }
}
console.log(isVowel('e'));

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function translate(phrase){
  var word = phrase.split('');
  var result = '';

  word.forEach(function(letter){
    if(isVowel(letter)) {
      result += letter;
    } else {
      letter = letter + 'o' + letter;
      result += letter;
    }
  });
    return result;
}

console.log(translate('this is fun'));

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(){
  "use strict";

  var number = [1, 2, 3, 4, 5];




}

console.log(sum(number));

function multiply(){
  "use strict";
  //...
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
  "use strict";
  //...
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
  "use strict";
  //...
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
  "use strict";
  //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
  "use strict";
  //...
}
