import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { login, setLoading } from './authSlice';

const MerchantLogin = () => {
  const [storeDetails, setStoreDetails] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [loginWithOtp, setLoginWithOtp] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    setTimeout(() => {
      const token = 'fake-merchant-token';
      const role = 'merchant';
      dispatch(login({ token, role }));
      dispatch(setLoading(false));
      navigate('/dashboard/merchant');
    }, 1000);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-4 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-200/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col lg:flex-row-reverse items-center gap-10 animate-float">
        
        {/* Text section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
            Merchant Login
          </h1>
          <p className="text-white/90 text-sm sm:text-base">
            Sign in to manage your store, track purchases, and view customer activity securely.
          </p>
        </div>

        {/* Login card */}
        <div className="w-full max-w-sm bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl shadow-2xl p-6 sm:p-8 flex flex-col items-center">
          <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Store Details */}
            <div className="flex flex-col">
              <label className="text-white/90 mb-1">Store Name or ID</label>
              <input
                type="text"
                placeholder="Enter your store name or ID"
                className="w-full px-4 py-3 rounded-xl bg-white/30 text-white placeholder-white/70 border border-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                required
                value={storeDetails}
                onChange={(e) => setStoreDetails(e.target.value)}
              />
            </div>

            {/* Password or OTP */}
            {loginWithOtp ? (
              <div className="flex flex-col">
                <label className="text-white/90 mb-1">OTP</label>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="w-full px-4 py-3 rounded-xl bg-white/30 text-white placeholder-white/70 border border-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
            ) : (
              <div className="flex flex-col">
                <label className="text-white/90 mb-1">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl bg-white/30 text-white placeholder-white/70 border border-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-4 w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl flex justify-center items-center transition disabled:opacity-50"
            >
              {loading && (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          {/* Toggle login type */}
          <button
            onClick={() => setLoginWithOtp(!loginWithOtp)}
            className="mt-4 text-white/90 underline hover:text-white transition"
          >
            {loginWithOtp ? 'Login with Password' : 'Login with OTP'}
          </button>

          <p className="text-sm text-white/80 mt-4">
            Don't have an account? {" "}
            <Link to="/register/merchant" className="font-medium text-white hover:underline">Register here</Link>
          </p>

          {/* Back to Home */}
          <Link
            to="/"
            className="mt-4 px-6 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white hover:bg-white/30 flex items-center justify-center transition text-sm"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes blob {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(20px, -30px) scale(1.05); }
            66% { transform: translate(-15px, 15px) scale(0.95); }
          }
          .animate-blob { animation: blob 7s infinite; }
          .animation-delay-2000 { animation-delay: 2s; }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
        `}
      </style>
    </div>
  );
};

export default MerchantLogin;