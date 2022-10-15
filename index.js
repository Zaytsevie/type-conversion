// string
const name = "Igor"
console.log(Number(name), String(name), Boolean(name))

// number
const age = 37
console.log(Number(age), String(age), Boolean(age))


// boolean
const russian = true
console.log(Number(russian), String(russian), Boolean(russian))

// null
const hungry = null
console.log(Number(hungry), String(hungry), Boolean(hungry))

// undefined
let liveIn
console.log(Number(liveIn), String(liveIn), Boolean(liveIn))

// object
const myInfo = {
    myName: "Igor",
    myAge: 37,
    iAmRussian: true,
}
console.log(Number(myInfo), String(myInfo), Boolean(myInfo))

// symbol
// const id = Symbol("id")
// console.log(Number(id), String(id), Boolean(id))

// bigint :))) smile
const howMuchMoneyIneed = 10000000000n
console.log(Number(howMuchMoneyIneed), String(howMuchMoneyIneed), Boolean(howMuchMoneyIneed))
