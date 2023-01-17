const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')

//connect to database
mongoose.connect('mongodb://localhost/dbOdonto')
   .then(db => console.log('DB connected'))
   .catch(err => console.log(err))
  
//import routes
const memberRoutes = require('./routes/memberRoute')
const treatmentRoutes = require('./routes/treatmentRoute')

//middleware of express
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(express.json())

//routes
app.use('/api/members', memberRoutes)
app.use('/api/treatments', treatmentRoutes)

//settings
app.set('port', process.env.PORT || 4900)

//starting server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})