// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import VerifyOtp from './pages/VerifyOtp';
function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="bg-blue-600 p-4 text-white">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-xl font-bold">
              <Link to="/">E-commerce</Link>
            </div>
            <div>
              <Link
                to="/signup"
                className="bg-white text-blue-600 px-4 py-2 rounded mr-2 hover:bg-blue-100"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100"
              >
                Login
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="container mx-auto p-4 text-center">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <h1 className="text-3xl font-semibold mt-4">Welcome to Our E-commerce Site</h1>
                  <p className="mt-2 text-gray-700">Explore our collection of amazing products!</p>
                </div>
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verify-otp" element={<VerifyOtp />} /> 
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
