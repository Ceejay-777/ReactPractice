function addTwo(num: number): number {
    return num + 2
    // return "hello"
}

function getUpper(val: string) {
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, hasPaid: boolean) {

}

const loginUser = (name: string, email: string, hasPaid: boolean = false) => {}

let value = addTwo(5)
getUpper("ceejay")
signUpUser("Ceejay", "ceoj@jhi.com", false)
loginUser("ceejay", "kdh@jdj.com")

function getValue(myVal: number): boolean | string{
    if(myVal > 5) {
        return true
    }
    return "200 OK"
}

const getHello = (s: string): string => {
    return ''
}

// const heroes = ["thor", "spiderman", "ironman"]
const heroes = [1, 2, 3]

heroes.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errMsg: string): void{
    console.log(errMsg)
}

function handleError(errMsg: string): never{
    throw new Error(errMsg)
}






export {}