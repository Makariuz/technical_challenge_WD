const express = require('express')
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json())

app.get('/', (req,res) => {
    res.send('Check main website!!')
})

const phoneRoutes = require('./routes/phones.routes')
app.use('/phones', phoneRoutes)

app.listen(4000)