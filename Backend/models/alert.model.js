import mongoose from "mongoose";

const AlertSchema = new mongoose.Schema({
  packetId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Packet',
    required: true
  },
  alertType: {
    type: String,
    required: true,
    enum: ['SUSPICIOUS_IP', 'UNUSUAL_PORT', 'HIGH_TRAFFIC', 'OTHER']
  },
  severity: {
    type: String,
    required: true,
    enum: ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL']
  },
  message: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  resolved: {
    type: Boolean,
    default: false
  }
});

export default mongoose.model('Alert', AlertSchema);