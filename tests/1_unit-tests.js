const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
    suite("Translate to British English", () => {
        test("Mangoes are my favorite fruit. to British English", (done) => {
            assert.equal(
                translator.toBritishEnglish("Mangoes are my favorite fruit.")[0], 
                "Mangoes are my favourite fruit."
            );
            done();
        })
        test("I ate yogurt for breakfast. to British English", (done) => {
            assert.equal(
                translator.toBritishEnglish("I ate yogurt for breakfast.")[0], 
                "I ate yoghurt for breakfast."
            );
            done();
        })
        test("We had a party at my friend's condo. to British English", (done) => {
            assert.equal(
                translator.toBritishEnglish("We had a party at my friend's condo.")[0], 
                "We had a party at my friend's flat."
            );
            done();
        })
        test("Can you toss this in the trashcan for me? to British English", (done) => {
            assert.equal(
                translator.toBritishEnglish("Can you toss this in the trashcan for me?")[0], 
                "Can you toss this in the bin for me?"
            );
            done();
        })
        test("The parking lot was full. to British English", (done) => {
            assert.equal(
                translator.toBritishEnglish("The parking lot was full.")[0], 
                "The car park was full."
            );
            done();
        })
        test("Like a high tech Rube Goldberg machine. to British English", (done) => {
            assert.equal(
                translator.toBritishEnglish("Like a high tech Rube Goldberg machine.")[0], 
                "Like a high tech Heath Robinson device."
            );
            done();
        })
        test("To play hooky means to skip class or work. to British English", (done) => {
            assert.equal(
                translator.toBritishEnglish("To play hooky means to skip class or work.")[0], 
                "To bunk off means to skip class or work."
            );
            done();
        })
        test("No Mr. Bond, I expect you to die. to British English", (done) => {
            assert.equal(
                translator.toBritishEnglish("No Mr. Bond, I expect you to die.")[0], 
                "No Mr Bond, I expect you to die."
            );
            done();
        })
        test("Dr. Grosh will see you now. to British English", (done) => {
            assert.equal(
                translator.toBritishEnglish("Dr. Grosh will see you now.")[0], 
                "Dr Grosh will see you now."
            );
            done();
        })
        test("Lunch is at 12:15 today. to British English", (done) => {
            assert.equal(
                translator.toBritishEnglish("Lunch is at 12:15 today.")[0], 
                "Lunch is at 12.15 today."
            );
            done();
        })
        test("We watched the footie match for a while. to American English", (done) => {
            assert.equal(
                translator.toAmericanEnglish("We watched the footie match for a while.")[0], 
                "We watched the soccer match for a while."
            );
            done();
        })
        test("Paracetamol takes up to an hour to work. to American English", (done) => {
            assert.equal(
                translator.toAmericanEnglish("Paracetamol takes up to an hour to work.")[0], 
                "Tylenol takes up to an hour to work."
            );
            done();
        })
        test("First, caramelise the onions. to American English", (done) => {
            assert.equal(
                translator.toAmericanEnglish("First, caramelise the onions.")[0], 
                "First, caramelize the onions."
            );
            done();
        })
        test("I spent the bank holiday at the funfair. to American English", (done) => {
            assert.equal(
                translator.toAmericanEnglish("I spent the bank holiday at the funfair.")[0], 
                "I spent the public holiday at the carnival."
            );
            done();
        })
        test("I had a bicky then went to the chippy. to American English", (done) => {
            assert.equal(
                translator.toAmericanEnglish("I had a bicky then went to the chippy.")[0], 
                "I had a cookie then went to the fish-and-chip shop."
            );
            done();
        })
        test("I've just got bits and bobs in my bum bag. to American English", (done) => {
            assert.equal(
                translator.toAmericanEnglish("I've just got bits and bobs in my bum bag.")[0], 
                "I've just got odds and ends in my fanny pack."
            );
            done();
        })
        test("The car boot sale at Boxted Airfield was called off. to American English", (done) => {
            assert.equal(
                translator.toAmericanEnglish("The car boot sale at Boxted Airfield was called off.")[0], 
                "The swap meet at Boxted Airfield was called off."
            );
            done();
        })
        test("Have you met Mrs Kalyani? to American English", (done) => {
            assert.equal(
                translator.toAmericanEnglish("Have you met Mrs Kalyani?")[0], 
                "Have you met Mr.s Kalyani?"
            );
            done();
        })
        test("Prof Joyner of King's College, London. to American English", (done) => {
            assert.equal(
                translator.toAmericanEnglish("Prof Joyner of King's College, London.")[0], 
                "Prof. Joyner of King's College, London."
            );
            done();
        })
        test("Tea time is usually around 4 or 4.30. to American English", (done) => {
            assert.equal(
                translator.toAmericanEnglish("Tea time is usually around 4 or 4.30.")[0], 
                "T"
            );
            done();
        })
        
        suite("Highlight Translation", function() {
            test("Highlight translation in Mangoes are my favorite fruit", function(done) {
                assert.equal(
                    translator.toBritishEnglish("Mangoes are my favourite fruit")[1],
                    'a'
                );
                done();
            })

            test("Highlight translation in I ate yogurt for breakfast.", function(done) {
                assert.equal(
                    translator.toBritishEnglish("I ate yogurt for breakfast.")[1],
                    'I ate <span class="highlight">yoghurt</span> for breakfast.'
                );
                done();
            })

            test("Highlight translation in We watched the footie match for a while.", function(done) {
                assert.equal(
                    translator.toAmericanEnglish("We watched the footie match for a while.")[1],
                    'We watched the <span class="highlight">soccer</span> match for a while.'
                );
                done();
            })

            test("Highlight translation in Paracetamol takes up to an hour to work.", function(done) {
                assert.equal(
                    translator.toBritishEnglish("Paracetamol takes up to an hour to work.")[1],
                    'a'
                );
                done();
            })
        })

    })
});
