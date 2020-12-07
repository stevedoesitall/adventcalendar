const fs = require("fs")

fs.readFile("input.txt", "utf-8", (err, data) => {
    let totalValids = 0
    if (err) throw err
    const input = data.split("\n")

    input.forEach((line) => {
        const startNum = parseInt(line.slice(line, line.indexOf("-")))
        const endNum = parseInt(line.slice(line.indexOf("-") + 1, line.indexOf(" ")))
        const key = line.slice(line.indexOf(" ") + 1, line.indexOf(": "))
        const password = line.slice(line.indexOf(": ") + 2).split('')

        let keyCount = 0

        password.forEach(letter => {
            if (letter === key) {
                keyCount++
            }
        })
        
        if (keyCount >= startNum && keyCount <= endNum) {
            totalValids++
        }
    })
    console.log("TOTAL:", totalValids)
})