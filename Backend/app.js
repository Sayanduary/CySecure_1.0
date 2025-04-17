import express from 'express'
import cors from 'cors';
import cookieParser from 'cookie-parser'

const app = express();

app.use(cors({
  origin: "http://localhost:5173",  // your frontend origin
  credentials: true,                // allow cookies / auth headers
}));


app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser());




export {app}