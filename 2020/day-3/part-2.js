const fs = require("fs")

fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) throw err
    const input = data.split("\n")
    const forest = input.map(line => line.split(""))
    const slopes = [
        {right: 1, down: 1, totalTrees: 0},
        {right: 3, down: 1, totalTrees: 0},
        {right: 5, down: 1, totalTrees: 0},
        {right: 7, down: 1, totalTrees: 0},
        {right: 1, down: 2, totalTrees: 0},
    ]

    slopes.forEach(slope => {
        let space = 0
        forest.forEach((row, index) => {      
            if (index % slope.down === 0) {
                const getRows = () => {
                    if (!row[space]) {
                        row = [...row, ...row]
                        getRows(row, space)
                    } else if (row[space] === "#") {
                        slope.totalTrees++
                    }
                }
                getRows()
                space = space + slope.right
            }
        })
    })

    const totalTrees = slopes.reduce((accumulator, currentValue) => {
        return accumulator * currentValue.totalTrees
    }, 1)

    console.log(totalTrees)
})