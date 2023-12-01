const file = fs.readFileSync('input.txt', 'utf-8').split("\n");

let sum = 0

file.forEach( f => {
    const numbers = f.split('').map(c => Number(c)).filter(c => c)
    const value = [numbers[0], numbers[numbers.length - 1]].join('')

    sum = sum + Number(value)
})

console.log(sum)
