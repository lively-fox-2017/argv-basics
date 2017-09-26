'use strict'

let pigLatin = (word) => {//nambahin ay
  let firstLetter = word.charAt(0);
  if(isPowel(firstLetter)){
    return word
  }else{
    return `${word.substr(1)}${firstLetter}ay`;
  }
}

let isPowel = (char) => {//misah aioueo
  return (/^[aeiou]$/i).test(char);
}

let convert = (sentence) => {//misah
  let result = []
  let words = sentence.trim().split(/\s+/g)
  for (let i=0;i<words.length;i++) {
    result[i] = pigLatin(words[i])
  }
  return result.join(" ")
}
let tampung=""
let arr=process.argv
for(let i=2;i<arr.length;i++){//kenapa ini 2??
  tampung+=arr[i]+' '
  // console.log(arr)
}
console.log(convert(tampung))
// Your CLI code here
