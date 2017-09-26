'use strict'

class Piglatin {
  constructor(word) {
    this.hasil = this.convert(word)
  }

  pigLatin(kata) {
    let firstLetter = kata.charAt(0)
    if (this.isPowel(firstLetter)) {
      return kata
    } else {
      for (var i=0; i<kata.length; i++) {
        if (this.isPowel(kata.charAt(i)) === true) {
          return `${kata.substr(i)}${kata.substr(0,i)}ay `
        }
      }
    }
  }

  isPowel(hurufPertama) {
    return (/^[aeiou]$/i).test(hurufPertama)
  }

  convert(sentence) {
    let result = []
    // this.words = sentence.trim().split(/\s+/g)
    for (let i=0;i<sentence.length;i++) {
      result[i] = this.pigLatin(sentence[i])
    }
    // for (let i=0;i<sentence.length;i++) {
    //   result[i] = this.pigLatin(sentence[i])
    // }
    return result.join('')
  }

}


// Your CLI code here
let arr = process.argv
let values = arr.slice(2)
// console.log(values)

let obj = {
  word: values
}
console.log(obj.word)

let kata = new Piglatin(obj.word)
console.log(kata)

// Add Comment