const fs = require("fs")

fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) throw err
    const input = data.split("\n\n")

    const totalAnswers = input.reduce((accumulater, currentValue) => {
        const uniques = new Set(currentValue.split(""))
        uniques.delete("\n")
        return accumulater + uniques.size
    }, 0)

    console.log(totalAnswers)
    
})