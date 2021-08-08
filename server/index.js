import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';


// App config
const app = express()
const router = express.Router()

// mongoDB connection
mongoose.connect()