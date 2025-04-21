import { useState } from 'react';
import {
  PieChart, Pie, Cell, Tooltip,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Legend,
  BarChart, Bar
} from 'recharts';

const COLORS = ['#00ff58','#FFBB28', '#6600ff',  '#ff0032'];

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalPackets: 2345,
    suspiciousPackets: 123,
    topProtocol: 'TCP',
    liveCount: 87,

    protocolData: [
      { protocol: 'TCP', value: 255 },
      { protocol: 'UDP', value: 600 },
      { protocol: 'ICMP', value: 300 },
      { protocol: 'Other', value: 245 }
    ],
    topIPs: [
      { ip: '192.168.0.1', count: 300 },
      { ip: '10.0.0.2', count: 220 },
      { ip: '172.16.5.10', count: 350 },
      { ip: '192.168.0.4', count: 450 },
      { ip: '10.0.0.9', count: 250 }
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
    <div className="p-4 font-sans bg-gray-900 min-h-screen text-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">📊 Real-Time Network Dashboard</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card title="Total Packets" value={stats.totalPackets} />
        <Card title="Suspicious Packets" value={stats.suspiciousPackets} />
        <Card title="Top Protocol" value={stats.topProtocol} />
        <Card title="Live Count" value={stats.liveCount} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Pie Chart */}
        <div className="bg-gray-800 p-4 rounded-xl shadow w-full flex justify-center">
          <div className="w-full flex justify-center flex-col items-center">
            <h3 className="font-semibold text-white text-2xl  text-center">Protocol Distribution</h3>
            <PieChart width={400} height={400}>
              <Pie
                data={stats.protocolData}
                dataKey="value"
                nameKey="protocol"
                cx="50%"
                cy="50%"
                outerRadius={150}
                label
                stroke="#dedee3"
              >
                {stats.protocolData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        </div>

        
        <div className="bg-gray-800 p-4 rounded-xl shadow w-full overflow-auto">
          <h3 className="font-semibold text-white text-2xl   mb-4 text-center">Top IP Addresses</h3>
          <BarChart width={700} height={370} data={stats.topIPs}>
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="ip"  />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#6500ff" />
          </BarChart>
        </div>
      </div>

      
      <div className="bg-gray-800 p-4 rounded-xl shadow mb-8 overflow-auto">
        <h3 className="font-semibold text-white mb-4 text-center text-2xl">Traffic Over Time</h3>
        <LineChart width={1600} height={350} data={stats.trafficHistory}>
          <XAxis dataKey="time" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#00ff78" />
        </LineChart>
      </div>

      
      <div className="bg-gray-800 p-4 rounded-xl shadow overflow-auto">
        <h3 className="font-semibold text-white mb-4 text-center text-2xl ">Latest 5 Packets</h3>
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="text-gray-400 border-b border-gray-600">
              <th className="py-2 px-2">Time</th>
              <th className="py-2 px-2">Protocol</th>
              <th className="py-2 px-2">Src IP</th>
              <th className="py-2 px-2">Dst IP</th>
              <th className="py-2 px-2">Suspicious</th>
            </tr>
          </thead>
          <tbody>
            {stats.latestPackets.map((pkt, idx) => (
              <tr key={idx} className={pkt.suspicious ? 'bg-red-600 text-white' : 'text-white'}>
                <td className="py-2 px-2">{new Date(pkt.timestamp).toLocaleTimeString()}</td>
                <td className="px-2">{pkt.protocol}</td>
                <td className="px-2">{pkt.srcIP}</td>
                <td className="px-2">{pkt.dstIP}</td>
                <td className="px-2">{pkt.suspicious ? 'Yes' : 'No'}</td>
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
    <div className="bg-gray-800 rounded-xl shadow p-4 text-center mt-5">
      <h4 className="text-gray-400 text-sm mb-1 font-semibold">{title}</h4>
      <p className="text-xl font-bold text-green-400">{value}</p>
    </div>
  );
}