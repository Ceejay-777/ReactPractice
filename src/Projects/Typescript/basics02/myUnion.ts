let score: number | string = 33

score = 44
score = "55"

type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let Ceejay: User | Admin = {name: "Ceejay", id: 2324}
Ceejay = {username: "HC", id: 2324}

// const getDbId = (id: number | string) => {
//     // Making some API calls
//     console.log(`DB id is: ${id}`)
// }

getDbId(3)
getDbId("3")

function getDbId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase()
    }
};

//array

const data: number[] = [1, 2, 3, 4]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number | boolean)[] = ["1", "2", true, 3]

let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"
// seatAllotment = "crew"

export {}