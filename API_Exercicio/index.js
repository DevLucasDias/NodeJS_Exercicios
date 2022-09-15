const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const routes = require('./config/routes')


const app = express();

app.use(express.json())  
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())
app.use(routes)


app.listen(21262, () => {
    console.log('Express Started at http://localhost:21262')
})