const fs = require("fs")

fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) throw err
    const input = data.split("\n\n")

    let totalAnswers = 0

    input.forEach(line => {
        const group = line.split("\n")
        let sameAnswers = []

        group.forEach((response, index) => {
            const answers = response.split("")
            if (index === 0) {
                sameAnswers = [...answers]
            } else {
                sameAnswers = sameAnswers.filter(answer => answers.includes(answer))
            }
            if (index === (group.length-1)) {
                totalAnswers += sameAnswers.length
            }
        })
    })
    console.log(totalAnswers)
})