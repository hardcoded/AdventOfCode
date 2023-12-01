const fs = require('fs');

const fileContent = fs.readFileSync('input.txt', 'utf-8').split("\n");

const word2digit: any = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9
}

const words2digits = (str: string): string => {
    let replacedStr = str

    for (let word in word2digit) {
        const regex: RegExp = new RegExp(word, "gi")
        const replacement = word[0] + word2digit[word] + word[word.length - 1]
        replacedStr = replacedStr.replace(regex, replacement)
    }
    return replacedStr
}

let sum: number = 0

fileContent.forEach( (f: string) => {
    const lineWithDigits: string = words2digits(f)

    const numbers = lineWithDigits.split('').map(c => Number(c)).filter(c => c)
    const value = [numbers[0], numbers[numbers.length - 1]].join('')

    sum = sum + Number(value)
    
})

console.log(sum)
