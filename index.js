import express from 'express';
// import dotenv from 'dotenv';
// dotenv.config();
import 'dotenv/config';
import connectDB from './config/db.js';
import studentRoutes from './routes/studentsRoutes.js';

const app = express();

// middleware
app.use(express.json());

// connection
connectDB();

app.get('/', (req, res)=>{
    res.send("Hello World");
})

app.use('/api/students', studentRoutes);


app.listen(3000, ()=>{
    console.log("running ...");
})