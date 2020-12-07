const fs = require("fs")
const total = 2020

fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) throw err
    const input = data.split("\n")

    for (const line of input) {
        const num = parseInt(line)
        const remainder = total - num
        if (input.includes(remainder.toString())) {
            console.log(`The answer is ${remainder * num}`)
            break
        }
    }
})