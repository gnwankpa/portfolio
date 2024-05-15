const assert = require("assert");

/*
 
You are given a set of synonyms, such as (big, large) and (eat, consume)

Using this set, determine if two sentences with the same number of words are equivalent.

For example, the following two sentences are equivalent:

    "He wants to eat food."
    "He wants to consume food."

Note that the synonyms (a, b) and (a, c) do not necessarily imply (b, c): consider the case of (coach, bus) and (coach, teacher).

The number of spaces between words should not matter!

*/

const synonyms = [
  ["big", "large"],
  ["eat", "consume"],
];

// need to use a hash and recursion on next go? Hashing should remove the large space gaps (storing last word instead)
// note to test for spaces iterate through word and check if empty
/// Ok giving 30 mins to finish up starting at 1:39pm
/// yike actually finished @ 3:34... was fun figuring it out either way
/// kept logging to help walthrough my logic

function areSimilar(sentence1, sentence2) {
  let firstArr = [];
  let secArray = [];
  let matches = 0;
  let count = 0;

  let trueLength = 0;

  let currentWord = "";

  firstArr = sentence1.split(" ");
  secArray = sentence2.split(" ");

  const synCheck = (cWord, sWord, syNum) => {
    let count = 0;

    for (let synonym of synonyms[syNum]) {
      if (cWord === synonym) {
        if (count === 1) {
          if (sWord === synonyms[syNum][0]) {
            return true;
          }
        } else if (count === 0) {
          if (sWord === synonyms[syNum][1]) {
            return true;
          }
        }
      } else {
      }
      count = count + 1;
    }
    return false;
  };

  const checkFunc = (longest, shortest) => {
    longest = longest.split(" ");
    shortest = shortest.split(" ");
    for (let word of longest) {
      if (word === "" || word === " ") {
      } else {
        currentWord = word;
        trueLength = trueLength + 1;

        for (let compWord of shortest) {
          console.log({ currentWord, compWord, count, trueLength });
          if (
            currentWord === compWord ||
            synCheck(currentWord, compWord, 0) ||
            synCheck(currentWord, compWord, 1)
          ) {
            matches = matches + 1;
          } else {
          }
        }

        count = count + 1;
      }
    }

    if (matches === trueLength) {
      console.log("true", matches, sentence1, sentence2);
      return true;
    } else {
      console.log("false", matches, sentence1, sentence2);
      return false;
    }
  };

  if (sentence1.length >= sentence2.length) {
    // console.log(checkFunc(sentence1, sentence2))
    return checkFunc(sentence1, sentence2);
  } else if (sentence2.length >= sentence2.length) {
    // console.log(checkFunc(sentence2, sentence1))
    return checkFunc(sentence2, sentence1);
  } else {
    return false;
  }
}

assert(
  !areSimilar("He wants to eat food", "He wants to eat food and drink water")
);

assert(areSimilar("He wants to eat food", "He wants to consume food"));

assert(
  areSimilar(
    "He wants to eat a large bowl of food",
    "He wants to consume a big bowl of food"
  )
);

assert(areSimilar("He wants to eat    food", "He wants     to consume food"));

console.log("All Done");
