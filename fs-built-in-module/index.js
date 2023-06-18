const { error } = require('console')
const fs = require('node:fs')

//reading from file synchronously
const fileContents = fs.readFileSync("./file.txt",'utf-8')
console.log(fileContents)


//reading from file asynchronously
fs.readFile('./file.txt','utf-8',(error,data)=>{
    if(error)
        console.log(error)
    else    
        console.log(data)
})

//writing to file synchronously
fs.writeFileSync('./greet.txt',"Hello Hans Anoop Raj")

const greetings = fs.readFileSync('./greet.txt','utf-8')
console.log(greetings)


//writing to the file asynchronously
fs.writeFile('./greet.txt','Hello Taikh',{flag:'a'},(err)=>{
    if(err)
        console.log(err)
    else
        console.log('content written')

})