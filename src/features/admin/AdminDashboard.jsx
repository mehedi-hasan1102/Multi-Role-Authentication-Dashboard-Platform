import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';

const AdminDashboard = () => {
  const { users = [], merchants = [] } = useSelector((state) => state.admin) || {};

  // Combine users and merchants from the Redux state
  const allSystemUsers = [...users, ...merchants];

  const stats = {
    totalUsers: allSystemUsers.length,
    admins: allSystemUsers.filter(u => u.role === 'admin').length, // Assuming admins might be in the users list
    members: allSystemUsers.filter(u => u.role === 'member').length,
    merchants: allSystemUsers.filter(u => u.role === 'merchant').length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 sm:p-8">
      <Header title="Admin Dashboard" />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 mt-8">
        {
          [
            { title: 'Total Users', value: stats.totalUsers },
            { title: 'Admins', value: stats.admins },
            { title: 'Members', value: stats.members },
            { title: 'Merchants', value: stats.merchants },
          ].map((stat) => (
            <div key={stat.title} className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl p-6 text-white">
              <div className="font-semibold mb-2 text-white/90">{stat.title}</div>
              <div className="text-3xl font-bold">{stat.value}</div>
            </div>
          ))
        }
      </div>

      {/* Users & Merchants Table */}
      <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl p-6 overflow-x-auto">
        <h2 className="text-xl font-bold text-white mb-4">Manage Users & Merchants</h2>
        <table className="w-full text-left text-white">
          <thead>
            <tr className="border-b border-white/30 text-white/80">
              <th className="p-3">#</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allSystemUsers.map((user, index) => (
              <tr key={user.id} className="hover:bg-white/10 transition border-b border-white/20">
                <td className="p-3">{index + 1}</td>
                <td className="p-3 font-medium">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3 capitalize">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${user.role === 'admin' ? 'bg-purple-500/50 text-purple-100' : user.role === 'merchant' ? 'bg-sky-500/50 text-sky-100' : 'bg-green-500/50 text-green-100'}`}>{user.role}</span>
                </td>
                <td className="p-3 flex justify-center gap-2">
                  <button className="bg-blue-500/70 text-white text-xs font-semibold px-3 py-1 rounded-md hover:bg-blue-600 transition">Edit</button>
                  <button className="bg-red-500/70 text-white text-xs font-semibold px-3 py-1 rounded-md hover:bg-red-600 transition">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
