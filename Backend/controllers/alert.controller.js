import Alert from '../models/alert.model.js'

// Get all alerts
export const getAlerts = async (req, res) => {
  try {
    const alerts = await Alert.find()
      .populate('packetId')
      .sort({ timestamp: -1 });
    res.status(200).json(alerts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update alert (e.g., mark as resolved)
export const updateAlert = async (req, res) => {
  try {
    const { id } = req.params;
    const alert = await Alert.findByIdAndUpdate(
      id,
      { resolved: req.body.resolved },
      { new: true }
    );
    
    if (!alert) {
      return res.status(404).json({ message: 'Alert not found' });
    }
    
    res.status(200).json(alert);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
