const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
  americanize(word){
    let original = word;
    word = word.toLowerCase();
    let rtn = britishOnly[word];
    if (rtn!=undefined){
      return rtn;
    } else {
      rtn = Object.keys(americanToBritishSpelling).find(k=>americanToBritishSpelling[k]==word);
      if (rtn!=undefined){
        return rtn;
      } else {
        rtn = Object.keys(americanToBritishTitles).find(k=>americanToBritishTitles[k]==word);
        if (rtn!=undefined) {
          rtn = rtn[0].toUpperCase().concat(rtn.slice(1,))
          return rtn;
        } else {
          return original;
        }
      }
    }
  }

  britishise(word){
    let original = word;
    word = word.toLowerCase();
    let rtn = americanOnly[word];
    if (rtn!=undefined){
      return rtn;
    } else {
      rtn = americanToBritishSpelling[word]
      if (rtn!=undefined){
        return rtn;
      } else {
        rtn = americanToBritishTitles[word]
        if (rtn!=undefined){
          return rtn;
        } else {
          return original;
        }
      }
    }
  }

  britishiseTitles (input) {
    let rtn = "";
    Object.keys(americanToBritishTitles).forEach(title=>{
      //console.log(input);
      console.log(`americanToBritishTitles[title]: ${americanToBritishTitles[title]}`);
      rtn = input.replace(title, americanToBritishTitles[title]);
    })
    return rtn;
  }

  separateWords(input){
    let wordChar = /[\W\s]+/;
    let nonWordChar = /[^\W\s]+/;
    let words = input.split(wordChar);
    let nonWords = input.split(nonWordChar);
    words = words.filter(x=>x.length>0)
    nonWords = nonWords.filter(x=>x.length>0)
    return [words, nonWords];
  }
}

module.exports = Translator;