
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
});