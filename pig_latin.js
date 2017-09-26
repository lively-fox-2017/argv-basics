'use strict'

let arr = process.argv
let kata = arr.slice(2).join(' ')

let pigLatin = (word) => {
  let firstLetter = word.charAt(0);
  if(isPowel(firstLetter)){
    return word
  }else{
    for (var i = 0; i < word.length; i++) {
      if (isPowel(word[i])) {
        return `${word.substr(i)}${word.substr(0,i)}ay`;
      }
    }
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

// Your CLI code here
console.log(convert(kata))