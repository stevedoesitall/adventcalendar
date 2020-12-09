const fs = require("fs")

fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) throw err
    const input = data.split("\n")

    const myBag = "shiny gold bag"
    const totalBagColors = [ myBag ]

    const findBags = () => {
        const currentBagCount = totalBagColors.length
        input.forEach(rule => {
            const bag = rule.slice(0, rule.indexOf("bags") + 3)
            const contents = rule.slice(rule.indexOf("contain") + 7)
            const overlap = totalBagColors.filter(bagItem => contents.includes(bagItem))

            if (overlap.length > 0 && !totalBagColors.includes(bag)) {
                totalBagColors.push(bag)
            }
        })

        if (currentBagCount === totalBagColors.length) {
            console.log(`There are ${currentBagCount - 1} total bags.`)
        } else {
            console.log("Finding bags...", currentBagCount)
            findBags()
        }
    }

    findBags()
})