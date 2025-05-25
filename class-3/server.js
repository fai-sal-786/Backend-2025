const fs =  require('fs')

console.log(fs)

console.log('starting')
// fs.writeFileSync('harry.txt', 'harry is a good boy')
// ("harry3.txt","harry is a good boy3")
fs.writeFile("harry2.txt","harry is a good boy2", ()=>{
    console.log('done')
    fs.readFile('harry2.txt',(error, data)=>{
        console.log(error, data.toString())
    })
})
fs.appendFile('harry.txt','harryrobo',(e, d)=>{
    console.log(d)
})
console.log('ending')