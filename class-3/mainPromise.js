import fs from "fs/promises"

let a = await fs.readFile('harry.txt')
let b = await fs.appendFile('harry.txt','\n\n\n\nTHIS IS AMAZING PROMISE of harry')

console.log(a.toString(), b)