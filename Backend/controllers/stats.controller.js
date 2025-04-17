import Packet from "../models/packet.model.js";

// Get network statistics
export const getStats = async (req, res) => {
  try {
    // Get protocol distribution
    const protocolStats = await Packet.aggregate([
      {
        $group: {
          _id: '$protocol',
          count: { $sum: 1 },
          totalSize: { $sum: '$size' }
        }
      }
    ]);

    // Get top source IPs
    const topSourceIPs = await Packet.aggregate([
      {
        $group: {
          _id: '$sourceIP',
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } },
      { $limit: 5 }
    ]);

    // Get top destination IPs
    const topDestIPs = await Packet.aggregate([
      {
        $group: {
          _id: '$destinationIP',
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } },
      { $limit: 5 }
    ]);

    // Get packet count over time (hourly for the last 24 hours)
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const trafficOverTime = await Packet.aggregate([
      {
        $match: {
          timestamp: { $gte: twentyFourHoursAgo }
        }
      },
      {
        $group: {
          _id: {
            year: { $year: '$timestamp' },
            month: { $month: '$timestamp' },
            day: { $dayOfMonth: '$timestamp' },
            hour: { $hour: '$timestamp' }
          },
          count: { $sum: 1 },
          totalSize: { $sum: '$size' }
        }
      },
      { $sort: { '_id.year': 1, '_id.month': 1, '_id.day': 1, '_id.hour': 1 } }
    ]);

    res.status(200).json({
      protocolStats,
      topSourceIPs,
      topDestIPs,
      trafficOverTime
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

