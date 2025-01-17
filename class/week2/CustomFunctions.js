function printhello(name){
    console.log(`Hello ${name}`)
}

const printgoodbye = (name) => {
    console.log(`good bye ${name}`)
}

const printafternoon = (name) => {
    return `good afternoon ${name}`   
}

module.exports = {printhello, printgoodbye, printafternoon}