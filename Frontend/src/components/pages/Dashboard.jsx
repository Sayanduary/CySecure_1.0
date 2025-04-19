import {useState } from 'react';
import {
  PieChart, Pie, Cell, Tooltip,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Legend,
  BarChart, Bar
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalPackets: 2345,
    suspiciousPackets: 123,
    topProtocol: 'TCP',
    liveCount: 87,
    
    protocolData: [
      { protocol: 'TCP', value:255 },
      { protocol: 'UDP', value: 600 },
      { protocol: 'ICMP', value: 300 },
      { protocol: 'Other', value: 245 }
    ],
    topIPs: [
      { ip: '192.168.0.1', count: 300 },
      { ip: '10.0.0.2', count: 220 },
      { ip: '172.16.5.10', count: 350 },
      { ip: '172.16.5.10', count: 350 },
      { ip: '172.16.5.10', count: 450 },
      { ip: '172.16.5.10', count: 250 }
    ],
    trafficHistory: [
      { time: '10:00', count: 10 },
      { time: '10:05', count: 40 },
      { time: '10:10', count: 90 },
      { time: '10:15', count: 120 },
      { time: '10:20', count: 60 }
    ],
    latestPackets: [
      { timestamp: Date.now(), protocol: 'TCP', srcIP: '192.168.0.1', dstIP: '8.8.8.8', suspicious: false },
      { timestamp: Date.now(), protocol: 'UDP', srcIP: '10.0.0.2', dstIP: '8.8.4.4', suspicious: true },
      { timestamp: Date.now(), protocol: 'ICMP', srcIP: '172.16.5.10', dstIP: '1.1.1.1', suspicious: false }
    ]
  });

  return (
    <div className="p-4 font-sans  ">
      <h2 className="text-2xl font-bold mb-4">📊 Real-Time Network Dashboard</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-2  md:grid-cols-4 gap-4 mb-6">
        <Card title="Total Packets" value={stats.totalPackets} />
        <Card title="Suspicious Packets" value={stats.suspiciousPackets} />
        <Card title="Top Protocol" value={stats.topProtocol} />
        <Card title="Live Count" value={stats.liveCount} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-800  p-3 rounded-xl shadow">
          <h3 className="font-semibold text-white mb-2">Protocol Distribution</h3>
          <PieChart width={500} height={550}>

            <Pie data={stats.protocolData} dataKey="value" nameKey="protocol" cx="70%" cy="50%" outerRadius={150}>
              {stats.protocolData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl shadow">
          <h3 className="font-semibold text-white mb-2">Top IP Addresses</h3>

          <BarChart width={500} height={500} data={stats.topIPs}>
          <CartesianGrid strokeDasharray="5 5"/>
            <XAxis dataKey="ip" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#00ff78" />
          </BarChart>
        </div>
      </div>

      {/* Line Chart - Traffic Over Time */}
      <div className="bg-gray-800  p-4 rounded-xl shadow mb-6 ">
        <h3 className="font-semibold text-white mb-2">Traffic Over Time</h3>
        <LineChart width={1395} height={350} data={stats.trafficHistory}>
          <XAxis dataKey="time" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#00ff78" />
        </LineChart>
      </div>

      {/* Latest Packets */}
      <div className="bg-gray-800  p-4 rounded-xl shadow">
        <h3 className="font-semibold text-white mb-2">Latest 5 Packets</h3>
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="text-gray-600">
              <th className="py-2 text-gray-400">Time</th>
              <th className="py-2 text-gray-400">Protocol</th>
              <th className="py-2 text-gray-400">Src IP</th>
              <th className="py-2 text-gray-400">Dst IP</th>
              <th className="py-2 text-gray-400">Suspicious</th>
            </tr>
          </thead>
          <tbody>
            {stats.latestPackets.map((pkt, idx) => (
              <tr key={idx} className={pkt.suspicious ? 'bg-red-600 text-white ' : 'text-white '}>
                <td className="py-1">{new Date(pkt.timestamp).toLocaleTimeString()}</td>
                <td>{pkt.protocol}</td>
                <td>{pkt.srcIP}</td>
                <td>{pkt.dstIP}</td>
                <td>{pkt.suspicious ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-gray-800 rounded-xl shadow p-4 text-center mt-10">
      <h4 className="text-gray-400 text-sm mb-1 font-bold ">{title}</h4>
      <p className="text-xl font-bold text-green-500">{value}</p>
    </div>
  );
}
