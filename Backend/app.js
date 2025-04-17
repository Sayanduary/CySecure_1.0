import express from 'express'
import cors from 'cors';
import cookieParser from 'cookie-parser'
import http from 'http'
import { Server } from 'socket.io';


const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

app.use(cors({
  origin: "http://localhost:5173",  // your frontend origin
  credentials: true,                // allow cookies / auth headers
}));


app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser());

import packetRoutes from './routes/packet.routes.js'
import alertRoutes from './routes/alert.routes.js'
import statsRoute from './routes/stats.routes.js'


app.use('/api/v1/packets', packetRoutes(io))
app.use('/api/v1/alert', alertRoutes)
app.use('/api/v1/stats', statsRoute)





io.on('connection', (socket) => {
  console.log('New client connected');
  
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error' });
});


export { app }