const express = require('express')
const app = express()

app.get('/register', function(req, res) {
    res.send('express')
})


app.listen(3000, function() {
    console.log('欢迎访问:http://localhost:8000')
})
