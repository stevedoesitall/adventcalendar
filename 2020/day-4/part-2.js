const fs = require("fs")
const { parse } = require("path")

const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]
const eyeColors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]

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
            const byr = passport.slice(passport.indexOf("byr:") + 4, passport.indexOf("byr:") + 8)
            const iyr = passport.slice(passport.indexOf("iyr:") + 4, passport.indexOf("iyr:") + 8)
            const eyr = passport.slice(passport.indexOf("eyr:") + 4, passport.indexOf("eyr:") + 8)
            const ecl = passport.slice(passport.indexOf("ecl:") + 4, passport.indexOf("ecl:") + 7)
            const pid = passport.slice(passport.indexOf("pid:") + 4, passport.indexOf("pid:") + 13) //Need to update this 

            if (
                (parseInt(byr) >= 1920 && parseInt(byr) <= 2002) &&
                (parseInt(iyr) >= 2010 && parseInt(iyr) <= 2020) &&
                (parseInt(eyr) >= 2020 && parseInt(eyr) <= 2030) &&
                (eyeColors.includes(ecl)) &&
                (parseInt(pid) > 0 && pid.length === 9)
                ) {
                    console.log(pid)
            }
        } 
    })
})