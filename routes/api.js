'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      console.log(req.body)
      if (req.body.locale==undefined || req.body.text==undefined) {
        console.log({ error: 'Required field(s) missing' });
        res.json({ error: 'Required field(s) missing' });
        return;
      }
      if (req.body.text.length==0){
        console.log({ error: 'No text to translate' });
        res.json({ error: 'No text to translate' });
        return;
      }
      
      let src = req.body.text
      console.log(`input: ${src}`);
      console.log(`src.length: ${src.length}`)


      //american-to-british,british-to-american
      let lang = req.body.locale;
      let regex = /[\w]+/;
      let result = "";

      if (lang=="british-to-american"){
        result = translator.americanize(src);
      } else if (lang=="american-to-british"){
        result = translator.britishise(src);
      } else {
        res.json({ error: 'Invalid value for locale field' });
        return;
      }
      console.log(`result: ${result}`)
      if (result == src) result = "Everything looks good to me!";
      res.json({'text':src, 'translation':result});
    });
};
