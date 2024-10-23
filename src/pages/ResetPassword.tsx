import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://bno-client-registration-57cf2c5fd63c.herokuapp.com/api/reset-password', { email });
      setMessage(response.data.message); // Show success message
      setError(''); // Clear any errors
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to send reset email.');
      setMessage(''); // Clear any success message
    }
  };

  return (
    <motion.div
      className="container d-flex justify-content-center align-items-center vh-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="col-md-6">
        <div className="card p-4 shadow-sm">
          <h2 className="text-center mb-4">Reset Password</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="email">Enter your email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Send Reset Link
            </button>
            {message && <div className="text-success text-center mt-3">{message}</div>}
            {error && <div className="text-danger text-center mt-3">{error}</div>}
          </form>

          <div className="text-center mt-4">
            <Link to="/" className="btn btn-secondary">Back to Home</Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResetPassword;
