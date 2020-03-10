const express = require('express')
const app = express()
const hbs = require('hbs')

require('./hbs/helpers')


hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'))




app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'nicolas',
    })
})

app.get('/about', (req, res) => {

    res.render('about')
})


app.listen(3000)