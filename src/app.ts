import express from 'express'
import cors from 'cors'
import { toNodeHandler } from 'better-auth/node';
import { auth } from './lib/auth';
import { userRoute } from './module/user/user.route';
import dotenv from 'dotenv'

const app = express();
console.log(process.env.PORT);
console.log(process.env.BETTER_AUTH_URL);
console.log(process.env.FRONTEND_URL);
dotenv.config()

app.all("/api/auth/*splat", toNodeHandler(auth)); 

app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL, 
    credentials: true,
}))

app.get('/', (req,res)=>{
    res.send('notes are coming')
});

app.use('/api/v1', userRoute);


export default app;