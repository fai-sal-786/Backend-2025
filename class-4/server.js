require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

//app.get or app.post or app.put or app.delete(Path, handlier)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res)=> {
    res.send('<h1>please login faisal aur code</h1>')
})

app.get('/twitter', (req, res)=>{
    res.send('faisaldotcom')
})

app.get('/youtube', (req, res)=>{
    res.send('<h2>faisal aur code')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
