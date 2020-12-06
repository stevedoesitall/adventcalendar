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

        if (
            (password[startNum - 1] === key && password[endNum - 1] !== key) ||
            (password[startNum - 1] !== key && password[endNum - 1] === key) 
        ) {
            totalValids++
        }
    })
    console.log("TOTAL", totalValids)
})