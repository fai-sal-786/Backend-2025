// console.log('hello world');

var slugify = require('slugify')

let a = slugify('some string') //some string
console.log(a)

//if you prefer something other than '_' as seperator
let b = slugify('some st&&*(^node%$$^^ring', '_') // some_string
console.log(b)