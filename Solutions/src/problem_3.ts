{
    // Problem_3
    function countWordOccurrences(sentence: string, word: string): number {
        return sentence.toLowerCase().split(' ').filter((w) => w === word.toLowerCase()).length;
    }

    const sentence : string = "I love typescript"; const word : string = "typescript";
    // console.log(countWordOccurrences(sentence, word)); //Output: 1
}