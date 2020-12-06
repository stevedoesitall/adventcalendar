const fs = require("fs")

fs.readFile("input.txt", "utf-8", (err, data) => {
    let totalValids = 0
    if (err) throw err
    const dataArray = data.split("\n")

    dataArray.forEach((value) => {
        const startNum = parseInt(value.slice(value, value.indexOf("-")))
        const endNum = parseInt(value.slice(value.indexOf("-") + 1, value.indexOf(" ")))
        const key = value.slice(value.indexOf(" ") + 1, value.indexOf(": "))
        const password = value.slice(value.indexOf(": ") + 2).split('')

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
    console.log("TOTAL", totalValids)
})