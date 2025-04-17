import Packet from "../models/packet.model.js";
import Alert from '../models/alert.model.js'


// Get all packets
export const getPackets = async (req, res) => {
  try {
    const packets = await Packet.find().sort({ timestamp: -1 }).limit(100);
    res.status(200).json(packets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new packet
export const createPacket = async (req, res) => {
  try {
    const packet = new Packet(req.body);
    const savedPacket = await packet.save();

    // Check if packet is suspicious
    checkForSuspiciousActivity(savedPacket);

    // Emit to Socket.IO for live updates
    req.io.emit('packet', savedPacket);

    res.status(201).json(savedPacket);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Helper function to check for suspicious activity
export const checkForSuspiciousActivity = async (packet) => {
  // Example suspicious IP list (in production, this would come from a database or config)
  const suspiciousIPs = ['192.168.1.100', '10.0.0.99'];

  // Check if packet is from/to a suspicious IP
  if (suspiciousIPs.includes(packet.sourceIP) || suspiciousIPs.includes(packet.destinationIP)) {
    const alert = new Alert({
      packetId: packet._id,
      alertType: 'SUSPICIOUS_IP',
      severity: 'HIGH',
      message: `Traffic detected from/to suspicious IP: ${suspiciousIPs.includes(packet.sourceIP) ? packet.sourceIP : packet.destinationIP}`
    });

    const savedAlert = await alert.save();

    // Emit alert through Socket.IO
    req.io.emit('alert', savedAlert);
  }

  // Check for unusual ports (example)
  const suspiciousPorts = [4444, 31337];
  if (suspiciousPorts.includes(packet.sourcePort) || suspiciousPorts.includes(packet.destinationPort)) {
    const alert = new Alert({
      packetId: packet._id,
      alertType: 'UNUSUAL_PORT',
      severity: 'MEDIUM',
      message: `Traffic on suspicious port: ${suspiciousPorts.includes(packet.sourcePort) ? packet.sourcePort : packet.destinationPort}`
    });

    const savedAlert = await alert.save();

    // Emit alert through Socket.IO
    req.io.emit('alert', savedAlert);
  }
};

