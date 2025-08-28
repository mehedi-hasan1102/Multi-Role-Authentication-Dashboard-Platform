
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminLogin from './features/auth/AdminLogin';
import MerchantLogin from './features/auth/MerchantLogin';
import MemberLogin from './features/auth/MemberLogin';
import AdminDashboard from './features/admin/AdminDashboard';
import MerchantDashboard from './features/merchant/MerchantDashboard';
import MemberDashboard from './features/member/MemberDashboard';
import ProtectedRoute from './routes/ProtectedRoute';
import AdminRegistration from './features/auth/AdminRegistration';
import MerchantRegistration from './features/auth/MerchantRegistration';
import MemberRegistration from './features/auth/MemberRegistration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/admin" element={<AdminLogin />} />
        <Route path="/login/merchant" element={<MerchantLogin />} />
        <Route path="/login/member" element={<MemberLogin />} />
        <Route path="/register/admin" element={<AdminRegistration />} />
        <Route path="/register/merchant" element={<MerchantRegistration />} />
        <Route path="/register/member" element={<MemberRegistration />} />
        <Route path="/dashboard/admin" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />
        <Route path="/dashboard/merchant" element={<ProtectedRoute role="merchant"><MerchantDashboard /></ProtectedRoute>} />
        <Route path="/dashboard/member" element={<ProtectedRoute role="member"><MemberDashboard /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

const Home = () => (
  <div className="relative min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-4 overflow-hidden">
    {/* Blobs */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-blob"></div>
    <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-200/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

    {/* Hero Card */}
    <div className="relative z-10 w-full max-w-5xl flex flex-col lg:flex-row items-center gap-8 bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl p-8 sm:p-12 shadow-2xl">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="Illustration"
        className="w-48 sm:w-56 lg:w-64 rounded-xl shadow-lg"
      />

      <div className="flex-1 flex flex-col items-center lg:items-start gap-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center lg:text-left">
          Welcome to Our Platform
        </h1>
        <p className="text-white/90 text-sm sm:text-base text-center lg:text-left">
          Select your login type to access personalized dashboards and features.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mt-4 w-full justify-center lg:justify-start">
          {['Admin', 'Merchant', 'Member'].map((role) => (
            <div key={role} className="flex flex-col items-center gap-2">
              <h3 className="text-lg font-semibold text-white">{role}</h3>
              <div className="flex gap-2">
                <Link
                  to={`/login/${role.toLowerCase()}`}
                  className="min-w-[90px] bg-indigo-600 text-white font-semibold py-2 px-4 rounded-xl text-center transition-transform hover:scale-105 hover:shadow-lg"
                >
                  Login
                </Link>
                <Link
                  to={`/register/${role.toLowerCase()}`}
                  className="min-w-[90px] bg-white/20 text-white font-semibold py-2 px-4 rounded-xl text-center transition-transform hover:scale-105 hover:shadow-lg"
                >
                  Register
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Animations */}
    <style>
      {`
        @keyframes blob {
          0%,100%{transform:translate(0,0) scale(1);}
          33%{transform:translate(20px,-30px) scale(1.05);}
          66%{transform:translate(-15px,15px) scale(0.95);}
        }
        .animate-blob{animation:blob 7s infinite;}
        .animation-delay-2000{animation-delay:2s;}

        @keyframes float {
          0%,100%{transform:translateY(0);}
          50%{transform:translateY(-6px);}
        }
        .animate-float{animation:float 6s ease-in-out infinite;}
      `}
    </style>
  </div>
);

export default App;
