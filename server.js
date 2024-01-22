let path = require("path")
let express = require("express");

const app = express()

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) =>{
    console.log('a')
})

app.listen(5000)

