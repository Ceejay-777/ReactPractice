import React, { useEffect } from 'react'

const Console = () => {
    useEffect(() => {
        // console.log(["First item", "Second item", "Third item", "Fourth item"])
        // console.dir(["First item", "Second item", "Third item", "Fourth item"])

        // console.table(["First item", "Second item", "Third item", "Fourth item"])
        // console.table({"employee1": "John", "employee2":"Rita", "employee3" : "Dave"})

        // console.log("Outer level")

        // console.group("Fruits group")
        // console.log("Mangoes")
        // console.log("Bananas")
        // console.log("Apples")
        // console.log("Figs")
        // console.groupEnd()

        // console.group("Cars group")
        // console.log("Ferarri")
        // console.log("Mercedes")
        // console.log("Ford")
        // console.groupEnd()

        // console.log("Back to outer level")

        console.time("time_record_06")
        for (let i = 0; i <= 6; i++) {
            console.log(i)
        }
        console.timeEnd("time_record_06")
    }, [])
  return (
    <div>console</div>
  )
}

export default Console