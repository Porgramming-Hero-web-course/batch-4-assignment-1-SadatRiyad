"use strict";
{
    // Problem_3
    function countWordOccurrences(sentence, word) {
        return sentence.toLowerCase().split(' ').filter((w) => w === word.toLowerCase()).length;
    }
    const sentence = "I love typescript";
    const word = "typescript";
    // console.log(countWordOccurrences(sentence, word)); //Output: 1
}
