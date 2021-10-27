/*
See Readme!
## Requirements

- node >12
- npm

## Install instructions (on linux)
One by one copy and paste the following line
```bash
git clone https://gist.github.com/UnGaucho/63e2090c73eb2cce5ac3fec5322c99be.git && cd 63e2090c73eb2cce5ac3fec5322c99be && npm init -y && npm install jest && node index.js && jest
```

## To run simply type

```bash
jest
```
*/

const fs = require("fs");

fs.writeFileSync('ngram.js', `const stripe = (str) => str.match(/[^_\\W]+/g).join(' '); // Exclusion regex stripes anything not word or underscore

function ngram(str, len) {
    str = stripe(str);

    const tokens = str.split(' ');

    if (len == undefined) {
        len = tokens.length;
    } else if (!len) {
        return [];
    }

    const arr = [];

    for (let start = 0; start < tokens.length; start++) {
        arr.push([]);

        for (let end = start; end < tokens.length && end - start < len; end++) {
            arr[start].push(tokens.slice(start, end + 1).join(' '));
        }
    }

    return arr.flat();
}

if (typeof require !== 'undefined' && require.main === module) {
    length = parseInt(process.argv[2],10)
    args = process.argv.slice(3).join(' ');
    console.log(ngram(args, length))
}

module.exports = ngram`)

fs.writeFileSync('ngram.test.js', `
const ngram = require('./ngram.js');

test("ngram_implementation_passes_provided_test_case", async function() {

  const str = "Show me the code.";
  const expected = [
    "Show",
    "Show me",
    "Show me the",
    "Show me the code",
    "me",
    "me the",
    "me the code",
    "the",
    "the code",
    "code"
  ];
  
  
  const result = ngram(str);
  expect(result).toEqual(expected);
});

test("ngram_gram_param_should_limit_gram_length", async function() {

  const str = 'Gram params are cool';
  const gramSize = 3;
  
  const result = ngram(str, gramSize);

  const countGrams = gram => gram.split(' ').length;

  result.forEach(gram => expect(gramSize).toBeGreaterThanOrEqual(countGrams(gram)));
});

test("ngram_param_token_length_must_not_have_observable_effects", async function() {
  // Having a gram length larger than token quantity must not have a visibly different outcome than no param
  
  const str = "Show me the code.";

  const result = ngram(str, 10);
  const expected = ngram(str);

  expect(result).toEqual(expected);
});`);
console.log(`Hi! Setup is all done :) To run the tests simply type "jest"
 If you'd prefer checking out the code then you can peek ngram.js
 Else you can run ngram by typing "node ngram.js" followed by gram length as a number followed by your text
 Example: "node ngram.js 3 Whatever you'd like ngramed" 
 `)