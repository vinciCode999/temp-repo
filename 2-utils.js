//module - encapsuated code 
//every file in node is a module

const greet = (name) => {
    console.log(`hello ${name}`)
}

module.exports = greet
