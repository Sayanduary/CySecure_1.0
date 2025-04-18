const cySecureFeatures = {
  monitorLiveTraffic: {
    title: "Monitor Live Traffic",
    description: "Track all the network traffic that comes into and out of your system in real-time.",
    details: [
      "Monitor incoming and outgoing packets with real-time visualization.",
      "IP tracking: See the source and destination IP addresses.",
      "Protocol types: Monitor different protocols like TCP, UDP, HTTP, etc.",
      "Traffic stats: Track the volume of data being sent and received."
    ],
    useCase: "Ideal for network administrators who need to ensure that no unauthorized data is flowing in and out of their network.",
    route: "/dashboard"
  },

  detectSuspiciousActivities: {
    title: "Detect Suspicious Activities",
    description: "CySecure will monitor your network for any abnormal or potentially malicious activities.",
    details: [
      "Anomaly detection: Automatically flags traffic patterns that deviate from the norm.",
      "Alert system: Instant notifications when suspicious activities, like potential DDoS attacks or unauthorized login attempts, are detected.",
      "Threshold-based alerts: Set custom thresholds for different network metrics."
    ],
    useCase: "Helps security analysts stay ahead of potential threats by providing immediate alerts for unusual behavior.",
    route: "/alert"
  },

  viewTrafficInsights: {
    title: "View Traffic Insights",
    description: "Gain valuable insights into your network traffic with detailed analytics.",
    details: [
      "Traffic analysis: View interactive charts and graphs to understand your traffic better.",
      "Protocol distribution: See what percentage of your traffic is HTTP, TCP, UDP, and more.",
      "Top IPs: Identify the most active devices or IPs on your network.",
      "Time-based analysis: Explore traffic trends over time."
    ],
    useCase: "Network engineers can use these insights to optimize traffic flow, allocate resources effectively, and troubleshoot issues.",
    route: "/logs"
  },

};

export default cySecureFeatures;
