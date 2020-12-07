const fs = require("fs")
const seatIDs = []

fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) throw err
    const input = data.split("\n")
    input.forEach(pass => {
        let rows = Array.from(Array(128).keys())
        let columns = Array.from(Array(8).keys())

        const row = pass.slice(0, 7).split("")
        const column = pass.slice(7).split("")
        
        row.forEach(letter => {
            if (letter === "F") {
                rows = rows.slice(0, rows.length / 2)
            } else if (letter === "B") {
                rows = rows.slice(rows.length / 2)
            }
        })

        column.forEach(letter => {
            if (letter === "L") {
                columns = columns.slice(0, columns.length / 2)
            } else if (letter === "R") {
                columns = columns.slice(columns.length / 2)
            }
        })

        seatIDs.push((rows[0] * 8) + columns[0])
    })

    const seatIDsSorted = seatIDs.sort((a, b) => b - a)

    console.log(seatIDsSorted[0])
})