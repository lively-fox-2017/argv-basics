'use strict'

let pigLatin = (word) => {
  let firstLetter = word.charAt(0);
  if(isPowel(firstLetter)){
    return word
  }else{
    return `${word.substr(1)}${firstLetter}ay`;
  }
}

let isPowel = (char) => {
  return (/^[aeiou]$/i).test(char);
}

let convert = (sentence) => {
  let result = []
  let words = sentence.trim().split(/\s+/g)
  for (let i=0;i<words.length;i++) {
    result[i] = pigLatin(words[i])
  }

  return result.join(" ")
}

var argv = process.argv.slice(2) // menghasilkan array
console.log(pigLatin(argv[0]));
console.log(pigLatin(argv[1]));
console.log(isPowel(argv[0]));
console.log(convert(argv.join(' ')));

// Your CLI code here
// node pig_latin.js hello world
