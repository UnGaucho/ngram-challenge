# Coding challenge n-gram

## Intro

Had this challenge for a job interview. 

Algorithm does a single pass breaking on ngram length and using built in js functions which are pretty optimized already.

While I could've used a Tree based approach I used a stack based solution using indexes.

During my tests this was much more performant but more benchmarking should be done. I assume it has to do with CPU cache being used much more effectively.

Finally it was specifically they wanted a single file private gist with short installation instructions. This is all at `index.js` and the reason this project has a minimal package.json

Project is dependency free (except for Jest required to run the tests)
### Install on GNU/Linux

Make sure you already have
```
node >12
npm
git
```
Two options: 

(Recommended)
```
$ git clone
$ cd
$ npm install
$ jest
```
Or (not recommended) 

Use the provided instructions at index.js

#### To run:

Typing "node ngram.js" followed by gram length as a number followed by your text

Example:
```
node ngram.js 3 Whatever you'd like ngramed
```

### Challenge Requirements
N-grams are a contiguous sequence of n words from a string of text, and have many applications from full-text search indexes to machine learning.

You'll generate a set of every permutation of contiguous n-grams from a string of text, from 1-gram to n-grams where n is the number of words in the string

- Program in the language for the position for which you are applying
- Strip punctuation
- Include tests
- Write a single code file that includes both the application and tests
As comments in the code file, include installation instructions & instructions for how to run your test and run your code
Applicaiton accepts a parameter to generate n-grams from the parameter

### Example
```js
"Hello there admiral Kenobi."
```

#### Returns
```js
[
  "Hello",
  "Hello there",
  "Hello there admiral",
  "Hello there admiral Kenobi",
  "there",
  "there admiral",
  "there admiral Kenobi",
  "admiral",
  "admiral Kenobi",
  "Kenobi"
]
```