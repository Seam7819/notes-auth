import express from 'express'
import cors from 'cors'
import { toNodeHandler } from 'better-auth/node';
import { auth } from './lib/auth';

const app = express();


app.all("/api/auth/*splat", toNodeHandler(auth)); 

app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL, 
    credentials: true,
}))

app.get('/', (req,res)=>{
    res.send('notes are coming')
})


export default app;