const {readFile} = require('fs/promises');

const myFunction = async()=>{
    const result = await readFile('daksh.txt','binary')
    console.log(result)
}

myFunction()
console.log("2nd data")