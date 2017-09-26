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
  for (let i=0;i<sentence.length;i++) {
    result[i] = pigLatin(sentence[i])
  }

  return result.join(" ")
}

let argv = process.argv

let input = (argv) => {
  let a;
  for(let i = 0; i < argv.length; i++){
    a = argv.slice(2, i+1)
  }
  return convert(a)
}

console.log(input(argv))