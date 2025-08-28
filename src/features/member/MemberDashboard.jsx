import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Header from '../../components/Header';

const MemberDashboard = () => {
  const { points } = useSelector((state) => state.member);

  // Sample weekly chart data
  const chartData = [
    { day: 'Mon', earned: 10, redeemed: 5 },
    { day: 'Tue', earned: 15, redeemed: 3 },
    { day: 'Wed', earned: 12, redeemed: 6 },
    { day: 'Thu', earned: 20, redeemed: 8 },
    { day: 'Fri', earned: 18, redeemed: 7 },
    { day: 'Sat', earned: 22, redeemed: 10 },
    { day: 'Sun', earned: 25, redeemed: 12 },
  ];

  const stats = [
    { title: 'Total Points', value: points.total },
    { title: 'Points Earned', value: points.earned },
    { title: 'Points Redeemed', value: points.redeemed },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8">
      <Header title="Member Dashboard" />

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl p-6 text-white">
            <div className="font-semibold mb-2">{stat.title}</div>
            <div className="text-3xl">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Weekly Points Chart */}
      <div className="mt-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl p-6 text-white">
        <h2 className="text-xl font-semibold mb-4">Weekly Points Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid stroke="#ffffff33" strokeDasharray="5 5" />
            <XAxis dataKey="day" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip contentStyle={{ backgroundColor: 'rgba(255,255,255,0.9)', color: '#000' }} />
            <Line type="monotone" dataKey="earned" stroke="#10b981" strokeWidth={3} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="redeemed" stroke="#f97316" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MemberDashboard;
