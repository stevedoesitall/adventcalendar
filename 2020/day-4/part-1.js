const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]

const fs = require("fs")

fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) throw err

    let totalValids = 0
    const dataArray = data.split("\n")
    const passports = []
    let passStart = ""
    dataArray.forEach(item => {
        if (item != "") {
            passStart = passStart + item + " "
        } else {
            passports.push(passStart)
            passStart = ""
        }
    })

    passports.forEach(passport => {
        let totalFields = 0
        requiredFields.forEach(field => {
            if (passport.indexOf(field) !== -1) {
                totalFields++
            }
        })
        if (totalFields === requiredFields.length) {
            totalValids++
        } 
    })
    console.log(totalValids)
})