const fs = require("fs")

const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]
const eyeColors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]
let totalValids = 0

fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) throw err

    const input = data.split("\n")
    const passports = []
    let passStart = ""
    input.forEach(item => {
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
            const getField = (field) => {
                let fieldVar = passport.slice(passport.indexOf(field + ":") + 4)

                if (fieldVar.indexOf(" ") !== -1) {
                    fieldVar = fieldVar.slice(0, fieldVar.indexOf(" "))
                }

                return fieldVar
            }

            //Birth year check
            const byr = getField("byr")
            let byrStatus = false

            if (parseInt(byr) >= 1920 && parseInt(byr) <= 2002) {
                byrStatus = !byrStatus
            }

            //Issue year check
            const iyr = getField("iyr")
            let iyrStatus = false

            if (parseInt(iyr) >= 2010 && parseInt(iyr) <= 2020) {
                iyrStatus = !iyrStatus
            }

            //Expiration year check
            const eyr = getField("eyr")
            let eyrStatus = false

            if (parseInt(eyr) >= 2020 && parseInt(eyr) <= 2030) {
                eyrStatus = !eyrStatus
            }

            //Eye color check
            const ecl = getField("ecl")
            let eclStatus = false

            if (eyeColors.includes(ecl)) {
                eclStatus = !eclStatus
            }

            //Passport ID Check
            const pid = getField("pid")
            let pidStatus = false

            if (parseInt(pid) > 0 && pid.length === 9) {
                pidStatus = !pidStatus
            }

            //Hair color check
            const hcl = getField("hcl")
            let hclStatus = false
            const regex = /[a-f0-9]/g

            if (hcl.slice(0, 1) === "#" && hcl.slice(1).search(regex) !== -1 && hcl.length === 7) {
                hclStatus = !hclStatus
            }

            //Height check
            const hgt = getField("hgt")
            let hgtStatus = false

            const unit = hgt.slice(hgt.length - 2)
            const hgtVal = parseInt(hgt.slice(0, hgt.indexOf(unit)))

            if (unit === "cm" &&
                hgtVal >= 150 &&
                hgtVal <= 193
            ) {
                hgtStatus = !hgtStatus
            } else if (unit === "in" &&
                hgtVal >= 59 &&
                hgtVal <= 76
            ) {
                hgtStatus = !hgtStatus
            }

            if (byrStatus && iyrStatus && eyrStatus && eclStatus && pidStatus && hgtStatus && hclStatus) {
                totalValids++
            }
        } 
    })
    console.log(totalValids)
})