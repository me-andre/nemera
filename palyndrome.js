const word = [18, 14, 5, 13, 5, 17, 0];

const truePalyndrome = "довод";
const notPalyndrome = "впесин";

const isPalyndrome = (word) => {
    for (let i = 0; i < Math.floor(word.length / 2); i++) {
        const left = word[i];
        const right = word[word.length - 1 - i];
        if (left !== right) {
            return false;
        }
    }
    return true;
};

const isPalyndromeStupid = (word) => {
    const reversed = word.split('').reverse().join('');
    return word === reversed;
};

const latinAlphabet = "abcdefghijklmnopqrstvuwxyz";
const minWordLength = 1;
const maxWordLength = latinAlphabet.length;

const generateWord = () => {
    const randomNumber = Math.random();
    const wordLength = minWordLength + Math.floor(randomNumber * (maxWordLength - minWordLength));
    const wordChars = [];
    for (let i = 0; i < wordLength; i++) {
        const randomChar = latinAlphabet[ Math.floor(Math.random() * latinAlphabet.length) ];
        wordChars.push(randomChar);
    }
    return wordChars.join("");
};

const wordsCount = 1000000;
const randomWords = [];
for (let i = 0; i < wordsCount; i++) {
    randomWords.push(generateWord());
}

console.time('isPalyndrome');
for (let i = 0; i < randomWords.length; i++) {
    isPalyndrome(randomWords[i]);
}
console.timeEnd('isPalyndrome');

console.time('isPalyndromeStupid');
for (let i = 0; i < randomWords.length; i++) {
    isPalyndromeStupid(randomWords[i]);
}
console.timeEnd('isPalyndromeStupid');
