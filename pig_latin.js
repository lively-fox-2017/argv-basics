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
  //console.log((/^[aeiou]$/i).test(char))
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
//console.log(convert('hello world'))
let inputSentence = process.argv
let result = ''
for(let i=2; i<inputSentence.length; i++){
  result+=inputSentence[i]+ ' '
}

console.log(convert(result))
