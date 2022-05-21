const express = require('express')


const app = express();

app.use(express.json())

app.get('/', (req,res) => {
    res.send('Check main website!!')
})

const phoneRoutes = require('./routes/phones.routes')
app.use('/phones', phoneRoutes)

app.listen(4000)