import mongoose from 'mongoose'

const PacketSchema = new mongoose.Schema({
  sourceIP: {
    type: String,
    required: true
  },
  destinationIP: {
    type: String,
    required: true
  },
  protocol: {
    type: String,
    required: true,
    enum: ['TCP', 'UDP', 'ICMP', 'OTHER']
  },
  sourcePort: {
    type: Number
  },
  destinationPort: {
    type: Number
  },
  size: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  data: {
    type: Object
  }
});

export default mongoose.model('Packet', PacketSchema);