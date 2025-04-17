

export const parsePacket = (rawPacketData) => {
  // In a real implementation, this would parse binary packet data
  // For now, we'll assume rawPacketData is already a structured object

  const packet = {
    sourceIP: rawPacketData.src || '0.0.0.0',
    destinationIP: rawPacketData.dst || '0.0.0.0',
    protocol: determineProtocol(rawPacketData),
    size: rawPacketData.size || 0,
    timestamp: new Date(),
    data: {}
  };

  // Add protocol-specific details
  if (packet.protocol === 'TCP' || packet.protocol === 'UDP') {
    packet.sourcePort = rawPacketData.sport || 0;
    packet.destinationPort = rawPacketData.dport || 0;
    packet.data.flags = rawPacketData.flags;
  } else if (packet.protocol === 'ICMP') {
    packet.data.type = rawPacketData.type;
    packet.data.code = rawPacketData.code;
  }

  return packet;
};

const determineProtocol = (data) => {
  // In a real implementation, this would check protocol numbers
  // For simplicity, we'll use the provided protocol field
  if (data.protocol === 6) return 'TCP';
  if (data.protocol === 17) return 'UDP';
  if (data.protocol === 1) return 'ICMP';
  return 'OTHER';
};

