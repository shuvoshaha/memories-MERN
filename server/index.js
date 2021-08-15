import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import  dotenv from 'dotenv'
import postRoutes from './routes/route.js'
import userRoute from './routes/user.js'
dotenv.config()

const port = process.env.PORT || 5000;

// App config
const app = express()
const router = express.Router()

// Middleware
app.use(router)
app.use(cors())
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb',  extended: true }))

app.use('/posts', postRoutes)
app.use('/user', userRoute)

const connection_url = 'mongodb+srv://sks007:sKs007...@freecluster.abbdz.mongodb.net/central?retryWrites=true&w=majority'

// mongoDB connection
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
    
})
.then(res => console.log("Mongo is  connected"))
.catch(err => {console.log("Mongo is not connected")})

// clear console error
mongoose.set("useFindAndModify", false)

app.listen(port, () => {
    console.log(`Node is running on port ${port}`)
}) 




