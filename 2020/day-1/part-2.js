const fs = require("fs")
const total = 2020

fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) throw err
    const dataArray = data.split("\n")

    dataArray.forEach((firstNum) => {
        dataArray.forEach((secondNum) => {
            dataArray.forEach((thirdNum) => {
                if (parseInt(firstNum) + parseInt(secondNum) + parseInt(thirdNum) === total) {
                    console.log(`The answer is ${firstNum * secondNum * thirdNum}`)
                }
            })
        })
    })
})