const express = require('express')
const app = express()
app.use('/image',express.static(__dirname + '/image'));
console.log('service is opening')

app.listen(3000);