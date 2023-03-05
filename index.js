const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const sampleRoutes = require('./routes/clientRoutes/sampleRoutes')

// Connects the application to MongoDB
connectDB()

const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())


// Routes
app.use('/sample', sampleRoutes)
app.use('/api/guestbook', require('./routes/clientRoutes/guestBookRoutes'))
app.use('/api/about', require('./routes/adminRoutes/aboutRoutes'))
app.use('/api/home', require('./routes/adminRoutes/homePageRoutes'))
app.use('/api/section', require('./routes/adminRoutes/sectionRoutes'))


app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port: ${port}`))
