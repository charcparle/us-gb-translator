const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');
const translator = new Translator;

suite('Functional Tests', () => {

  test('#1 Translation with text and locale fields: POST request to /api/translate', function(done) {
    console.log('Running test #1');
    chai.request(server)
      .post('/api/translate')
      .send({"text": "carbonize", "locale":"american-to-british"})
      .end((err,res)=>{
        assert.equal(res.status, 200);
        assert.typeOf(res.body, 'object', 'Returned an Object');
        done();
      })
  });

  test('#2 Translation with text and invalid locale field: POST request to /api/translate', function(done) {
    console.log('Running test #2');
    chai.request(server)
      .post('/api/translate')
      .send({"text": "carbonize", "locale":"chinese-to-british"})
      .end((err,res)=>{
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { error: 'Invalid value for locale field' });
        done();
      })
  });

  test('#3 Translation with missing text field: POST request to /api/translate', function(done) {
    console.log('Running test #3');
    chai.request(server)
      .post('/api/translate')
      .send({"locale":"american-to-british"})
      .end((err,res)=>{
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { error: 'Required field(s) missing' });
        done();
      })
  });

  test('#4 Translation with missing locale field: POST request to /api/translate', function(done) {
    console.log('Running test #4');
    chai.request(server)
      .post('/api/translate')
      .send({"text": "carbonize"})
      .end((err,res)=>{
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { error: 'Required field(s) missing' });
        done();
      })
  });

  test('#5 Translation with empty text: POST request to /api/translate', function(done) {
    console.log('Running test #5');
    chai.request(server)
      .post('/api/translate')
      .send({"text": "","locale":"american-to-british"})
      .end((err,res)=>{
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { error: 'No text to translate' });
        done();
      })
  });

  test('#6 Translation with text that needs no translation: POST request to /api/translate', function(done) {
    console.log('Running test #6');
    chai.request(server)
      .post('/api/translate')
      .send({"text": "carbonise","locale":"american-to-british"})
      .end((err,res)=>{
        assert.equal(res.status, 200);
        assert.deepEqual(res.body.translation, "Everything looks good to me!");
        done();
      })
  });
});