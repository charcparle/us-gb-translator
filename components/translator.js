const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
  americanize(input){
    let [words, nonWords] = this.separateWords(input);
    words = words.map(word=>{
      let original = word;
      word = word.toLowerCase();
      let rtn = Object.keys(americanToBritishSpelling).find(k=>americanToBritishSpelling[k]==word);
      if (rtn!=undefined){
        return this.highlight(rtn);
      } else {
        rtn = Object.keys(americanToBritishTitles).find(k=>americanToBritishTitles[k]==word);
        if (rtn!=undefined) {
          rtn = rtn[0].toUpperCase().concat(rtn.slice(1,))
          return this.highlight(rtn);
        } else {
          return original;
        }
      }
    })
    let regex = /[\w]+/;
    let translated = regex.test(input[0])? this.combineWords(words,nonWords) : this.combineWords(nonWords,words);
    translated = this.langSpecify(translated, britishOnly);
    translated = this.changeTimeFormat(translated,".",":");
    return translated;
  }

  britishise(input){
    let [words, nonWords] = this.separateWords(input);
    words = words.map(word=>{
      let original = word;
      word = word.toLowerCase();
      let rtn = americanOnly[word];
      if (rtn!=undefined){
        console.log('flag - americanOnly')
        return this.highlight(rtn);
      } else {
        rtn = americanToBritishSpelling[word]
        if (rtn!=undefined){
          console.log('flag - americanToBritishSpelling')
          return this.highlight(rtn);
        } else {
          rtn = americanToBritishTitles[word]
          if (rtn!=undefined){
            console.log('flag - americanToBritishTitles')
            return this.highlight(rtn);
          } else {
            return original;
          }
        }
      }
    })
    let regex = /[\w]+/;
    let translated = regex.test(input[0])? this.combineWords(words,nonWords) : this.combineWords(nonWords,words);
    translated = this.langSpecify(translated,americanOnly);
    translated = this.langSpecify(translated, americanToBritishTitles);
    translated = this.changeTimeFormat(translated,":",".");
    return translated;
  }

  changeTimeFormat (input,from,to){
    let re = new RegExp("\\d\\d"+(from=='.'?'\\.':from)+"\\d\\d",'g'); //double slashes to escape the dot character, otherwise it matches any character 
    let replacer = new RegExp(to);
    let found = input.match(re);
    let rtn = input;
    //console.log(re);
    //console.log(typeof(found));
    //console.log(found)
    if (found){
      found.forEach(f=>{
        //console.log(f)
        replacer = this.highlight(f.replace(from,to));
        //console.log(`replacer: ${replacer}`)
        rtn = rtn.replace(f,replacer)
      })
    }
    return rtn; 
  }


  langSpecify (input, sourceLangOnly) {
    let rtn = input;
    Object.keys(sourceLangOnly).forEach(key=>{
      let foundInput = input.toLowerCase().match(key);
      if (foundInput) {
        let place = foundInput.index;
        let wordChar = /\w/;
        if ((place==0 || !wordChar.test(input[place-1])) && !wordChar.test(input[place+key.length])){
          let replacer=sourceLangOnly[key];
          //for titles
          if (sourceLangOnly == americanToBritishTitles) replacer = americanToBritishTitles[key][0].toUpperCase().concat(americanToBritishTitles[key].slice(1,));
          //
          let re = new RegExp(key,'i')
          rtn = rtn.replace(re, this.highlight(replacer));
        }
      }
    })
    return rtn;
  }


  separateWords(input){
    let wordChar = /[\W\s]+/;
    let nonWordChar = /[^\W\s]+/;
    let words = input.split(wordChar);
    //console.log(words)
    let nonWords = input.split(nonWordChar);
    words = words.filter(x=>x.length>0)
    nonWords = nonWords.filter(x=>x.length>0)
    return [words, nonWords];
  }

  combineWords(firstArr,secondArr){
    let result="";
    let loop = firstArr.length>=secondArr.length? firstArr.length : secondArr.length;
    for (let i=0;i<loop;i++){
      if (firstArr[i]) result = result.concat(firstArr[i]);
      if (secondArr[i]) result = result.concat(secondArr[i]);
      //console.log(result);
    }
    return result;
  }

  highlight(input){
    return '<span class="highlight">'+input+'</span>';
  }
}

module.exports = Translator;