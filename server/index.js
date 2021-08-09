import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import  dotenv from 'dotenv'
import postRoutes from './routes/route.js'
dotenv.config()

const port = process.env.PORT || 5000;

// App config
const app = express()
const router = express.Router()

// Middleware
app.use(router)
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/posts', postRoutes)


// mongoDB connection
mongoose.connect(process.env.CON, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    
})
.then(
    app.listen(port, () => {
    console.log(`Node is running on port ${port}`)
}) )
.catch(err => {console.log("Mongo is not connected")})

// clear console error
mongoose.set("useFindAndModify", false)






