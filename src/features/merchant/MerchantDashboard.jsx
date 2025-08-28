import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { setPurchaseApprovalLoading, clearPurchaseApprovalLoading, approvePurchase } from './merchantSlice';

const MerchantDashboard = () => {
  const [customer, setCustomer] = useState(null);
  const dispatch = useDispatch();
  const { purchases, notifications, analytics, purchaseApprovalLoading } = useSelector((state) => state.merchant);

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    setCustomer(search ? { name: search, points: Math.floor(Math.random() * 1000) } : null);
  };

  const handleApprove = (purchaseId) => {
    dispatch(setPurchaseApprovalLoading(purchaseId));
    setTimeout(() => {
      dispatch(approvePurchase(purchaseId));
      dispatch(clearPurchaseApprovalLoading(purchaseId));
    }, 1500); // Simulate network delay
  };

  const chartData = analytics || [
    { day: 'Mon', sales: 1200, orders: 15 },
    { day: 'Tue', sales: 1500, orders: 20 },
    { day: 'Wed', sales: 1300, orders: 18 },
    { day: 'Thu', sales: 1700, orders: 25 },
    { day: 'Fri', sales: 1600, orders: 22 },
    { day: 'Sat', sales: 1800, orders: 28 },
    { day: 'Sun', sales: 2000, orders: 30 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 sm:p-8">
      <Header title="Merchant Dashboard" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {/* Approve Purchases */}
        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Approve Purchases</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-white">
              <thead>
                <tr className="border-b border-white/30">
                  <th className="p-3">Customer</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Date</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {purchases.map((p) => (
                  <tr key={p.id} className="border-b border-white/20 hover:bg-white/10 transition">
                    <td className="p-3">{p.customer}</td>
                    <td className="p-3">${p.amount}</td>
                    <td className="p-3">{p.date}</td>
                    <td className="p-3 text-center">
                      <button 
                        onClick={() => handleApprove(p.id)}
                        disabled={purchaseApprovalLoading[p.id]}
                        className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-md hover:bg-green-600 transition w-20 flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {purchaseApprovalLoading[p.id] ? (
                          <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        ) : (
                          'Approve'
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Lookup Customer */}
        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Lookup Customer</h2>
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="search"
              placeholder="Customer name or email…"
              className="flex-grow w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
              required
            />
            <button className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900 transition">Search</button>
          </form>
          {customer && (
            <div className="mt-4 p-4 bg-white/10 rounded-lg text-white shadow-inner">
              <p><strong>Name:</strong> {customer.name}</p>
              <p><strong>Points:</strong> {customer.points}</p>
            </div>
          )}
        </div>
        {/* Set Contribution Rate */}
        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Set Contribution Rate</h2>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="number"
              placeholder="Contribution Rate (%)"
              className="flex-grow w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
              required
              min="0"
              max="100"
            />
            <button className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900 transition">Set Rate</button>
          </form>
        </div>
        {/* Notifications */}
        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Notifications</h2>
          <ul className="space-y-3">
            {notifications.map((n) => (
              <li key={n.id} className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition cursor-pointer text-white">
                {n.message}
              </li>
            ))}
          </ul>
        </div>
        {/* Weekly Sales & Orders Chart */}
        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl p-6 lg:col-span-2">
          <h2 className="text-xl font-bold text-white mb-4">Weekly Sales & Orders</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <CartesianGrid stroke="#ffffff33" strokeDasharray="5 5" />
              <XAxis dataKey="day" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip contentStyle={{ backgroundColor: 'rgba(255,255,255,0.8)', color: '#000' }} />
              <Line type="monotone" dataKey="sales" stroke="#10b981" strokeWidth={3} activeDot={{ r: 6 }} />
              <Line type="monotone" dataKey="orders" stroke="#f97316" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default MerchantDashboard;
