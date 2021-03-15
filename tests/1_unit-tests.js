const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator

suite('Unit Tests', () => {
  test('#1 Translate Mangoes are my favorite fruit. to British English', function(done) {
      let input = 'Mangoes are my favorite fruit.';
      console.log("Running Unit test 1")
      assert.equal(translator.britishise(input),'Mangoes are my <span class="highlight">favourite</span> fruit.');
      done();
  });

  test('#2 Translate I ate yogurt for breakfast. to British English', function(done) {
    let input = 'I ate yogurt for breakfast.';
    console.log("Running Unit test 2")
    assert.equal(translator.britishise(input),'I ate <span class="highlight">yoghurt</span> for breakfast.');
    done();
  });
    
  test("#3 Translate We had a party at my friend's condo. to British English", function(done) {
    let input = "We had a party at my friend's condo.";
    console.log("Running Unit test 3")
    assert.equal(translator.britishise(input),"We had a party at my friend's "+'<span class="highlight">flat</span>.');
    done();
  });

  test("#4 Translate Can you toss this in the trashcan for me? to British English", function(done) {
    let input = "Can you toss this in the trashcan for me?";
    console.log("Running Unit test 4")
    assert.equal(translator.britishise(input),'Can you toss this in the <span class="highlight">bin</span> for me?');
    done();
  });

  test("#5 Translate The parking lot was full. to British English", function(done) {
    let input = "The parking lot was full.";
    console.log("Running Unit test 5")
    assert.equal(translator.britishise(input),'The <span class="highlight">car park</span> was full.');
    done();
  });

  test("#6 Translate Like a high tech Rube Goldberg machine. to British English", function(done) {
    let input = "Like a high tech Rube Goldberg machine.";
    console.log("Running Unit test 6")
    assert.equal(translator.britishise(input),'Like a high tech <span class="highlight">Heath Robinson device</span>.');
    done();
  }); 

  test("#7 Translate To play hooky means to skip class or work. to British Englishh", function(done) {
    let input = "To play hooky means to skip class or work.";
    console.log("Running Unit test 7")
    assert.equal(translator.britishise(input),'To <span class="highlight">bunk off</span> means to skip class or work.');
    done();
  }); 

  test("#8 Translate No Mr. Bond, I expect you to die. to British English", function(done) {
    let input = "No Mr. Bond, I expect you to die.";
    console.log("Running Unit test 8")
    assert.equal(translator.britishise(input),'No <span class="highlight">Mr</span> Bond, I expect you to die.');
    done();
  }); 

  test("#9 Translate Dr. Grosh will see you now. to British English", function(done) {
    let input = "Dr. Grosh will see you now.";
    console.log("Running Unit test 9")
    assert.equal(translator.britishise(input),'<span class="highlight">Dr</span> Grosh will see you now.');
    done();
  }); 

  test("#10 Translate Lunch is at 12:15 today. to British English", function(done) {
    let input = "Lunch is at 12:15 today.";
    console.log("Running Unit test 10")
    assert.equal(translator.britishise(input),'Lunch is at <span class="highlight">12.15</span> today.');
    done();
  });

  test("#11 Translate We watched the footie match for a while. to American English", function(done) {
    let input = "We watched the footie match for a while.";
    console.log("Running Unit test 11")
    assert.equal(translator.americanize(input),'We watched the <span class="highlight">soccer</span> match for a while.');
    done();
  });

  test("#12 Translate Paracetamol takes up to an hour to work. to American English", function(done) {
    let input = "Paracetamol takes up to an hour to work.";
    console.log("Running Unit test 12")
    assert.equal(translator.americanize(input),'<span class="highlight">Tylenol</span> takes up to an hour to work.');
    done();
  });

  test("#13 Translate First, caramelise the onions. to American English", function(done) {
    let input = "First, caramelise the onions.";
    console.log("Running Unit test 13")
    assert.equal(translator.americanize(input),'First, <span class="highlight">caramelize</span> the onions.');
    done();
  });

  test("#14 Translate I spent the bank holiday at the funfair. to American English", function(done) {
    let input = "I spent the bank holiday at the funfair.";
    console.log("Running Unit test 14")
    assert.equal(translator.americanize(input),'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.');
    done();
  });

  test("#15 Translate I had a bicky then went to the chippy. to American English", function(done) {
    let input = "I had a bicky then went to the chippy.";
    console.log("Running Unit test 15")
    assert.equal(translator.americanize(input),'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.');
    done();
  });

  test("#16 Translate I've just got bits and bobs in my bum bag. to American English", function(done) {
    let input = "I've just got bits and bobs in my bum bag.";
    console.log("Running Unit test 16")
    assert.equal(translator.americanize(input),"I've just got "+'<span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.');
    done();
  });

  test("#17 Translate The car boot sale at Boxted Airfield was called off. to American English", function(done) {
    let input = "The car boot sale at Boxted Airfield was called off.";
    console.log("Running Unit test 17")
    assert.equal(translator.americanize(input),'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.');
    done();
  });

  test("#18 Translate Have you met Mrs Kalyani? to American English", function(done) {
    let input = "Have you met Mrs Kalyani?";
    console.log("Running Unit test 18")
    assert.equal(translator.americanize(input),'Have you met <span class="highlight">Mrs.</span> Kalyani?');
    done();
  });

  test("#19 Translate Prof Joyner of King's College, London. to American English", function(done) {
    let input = "Prof Joyner of King's College, London.";
    console.log("Running Unit test 19")
    assert.equal(translator.americanize(input),'<span class="highlight">Prof.</span> Joyner of '+"King's College, London.");
    done();
  });

  test("#20 Translate Tea time is usually around 4 or 4.30. to American English", function(done) {
    let input = "Tea time is usually around 4 or 4.30.";
    console.log("Running Unit test 20")
    assert.equal(translator.americanize(input),'Tea time is usually around 4 or <span class="highlight">4:30</span>.');
    done();
  });

  test("#21 Highlight translation in Mangoes are my favorite fruit.", function(done) {
    let input = "Mangoes are my favorite fruit.";
    console.log("Running Unit test 21")
    assert.equal(translator.britishise(input),'Mangoes are my <span class="highlight">favourite</span> fruit.');
    done();
  });

  test("#22 Highlight translation in I ate yogurt for breakfast.", function(done) {
    let input = "I ate yogurt for breakfast.";
    console.log("Running Unit test 22")
    assert.equal(translator.britishise(input),'I ate <span class="highlight">yoghurt</span> for breakfast.');
    done();
  });

  test("#23 Highlight translation in We watched the footie match for a while.", function(done) {
    let input = "We watched the footie match for a while.";
    console.log("Running Unit test 23")
    assert.equal(translator.americanize(input),'We watched the <span class="highlight">soccer</span> match for a while.');
    done();
  });

  test("#24 Highlight translation in Paracetamol takes up to an hour to work.", function(done) {
    let input = "Paracetamol takes up to an hour to work.";
    console.log("Running Unit test 24")
    assert.equal(translator.americanize(input),'<span class="highlight">Tylenol</span> takes up to an hour to work.');
    done();
  });
});
