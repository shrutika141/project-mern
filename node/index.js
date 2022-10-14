const express = require('express');
const path = require('path')

const app = express()
const port = process.env.PORT || 3000;


// for POST request
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.static('public'))

// route
const routes = require('./routes/index')
app.use('/', routes)

app.listen(3000, () => {
    console.log(`server is listening on ${port}`)
})