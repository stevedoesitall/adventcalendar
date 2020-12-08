const fs = require("fs")

fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) throw err
    const input = data.split("\n")
    const forest = input.map(line => line.split(""))

    let totalTrees = 0
    let space = 0

    forest.forEach((row, index) => {        
        const getRows = () => {
            if (!row[space]) {
                row = [...row, ...row]
                getRows(row, space)
            } else if (row[space] === "#") {
                totalTrees++
            }
        }
        getRows()
        space = space + 3
    })

    console.log(`There are ${totalTrees} total trees.`)

})