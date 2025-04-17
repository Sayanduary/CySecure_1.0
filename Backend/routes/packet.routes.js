import express from "express";
import { getPackets, createPacket } from '../controllers/packet.controller.js'


const router = express.Router();

const attachIO = (io) => (req, res, next) => {
  req.io = io;
  next();
};

const packetRoutes = (io) => {
  router.get('/', getPackets);
  router.post('/', attachIO(io), createPacket);
  
  return router;
};

export default packetRoutes;