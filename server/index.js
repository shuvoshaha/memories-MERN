import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import  dotenv from 'dotenv'
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


// mongoDB connection
mongoose.connect(process.env.CON, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(res => { console.log('Mongo is connected') })
.catch(err => {console.log("Mongo is not connected")})

app.get('/', (req, res) =>{
    res.send("Hello world")
})

app.listen(port, () =>{
    console.log(`Node is running on port ${port}`)
})



