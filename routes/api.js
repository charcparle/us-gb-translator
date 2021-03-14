'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let src = req.body.text
      console.log(src);
      if (src.length==0){
        res.json({ error: 'No text to translate' });
        return;
      }

      //american-to-british,british-to-american
      let lang = req.body.locale;
      let regex = /[\w]+/;
      let result = "";
      /*
      let [words, nonWords] = translator.separateWords(src);
      console.log(words);
      console.log(nonWords);
      */

      if (lang=="british-to-american"){
        //words = words.map(x=>translator.americanize(x));
        result = translator.americanize(src);
      } else if (lang=="american-to-british"){
        result = translator.britishise(src);
      } else {
        res.json({ error: 'Invalid value for locale field' });
        return;
      }
      /*
      let loop = words.length>=nonWords.length? words.length : nonWords.length;
      console.log(`loop: ${loop}`);

      if (regex.test(src[0])){
        for (let i=0;i<loop;i++){
          if (words[i]) result = result.concat(words[i]);
          if (nonWords[i]) result = result.concat(nonWords[i]);
          console.log(result);
        }
      } else {
        for (let i=0;i<loop;i++){
          if (nonWords[i]) result = result.concat(nonWords[i]);
          if (words[i]) result = result.concat(words[i]);
          console.log(result);
        }
      }
      result = translator.britishiseTitles(result);
      */
      console.log(result)
      res.json({'translation':result});
    });
};
