import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css"; // Include your styles if any

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    phone: "",
    otp: "", // New state to store OTP input
  });

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false); // To check if OTP was sent
  const [isOtpVerified, setIsOtpVerified] = useState(false); // To check if OTP is verified
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validatePhoneNumber = (phone) => /^[0-9]{10}$/.test(phone);

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/verify-otp", {
        phone: formData.phone,
        otp: formData.otp,
      });
      if (response.data.success) {
        setIsOtpVerified(true); // OTP verified
        setMessage(response.data.message);
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Error during OTP verification");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setMessage(""); // Clear message

    if (!validatePhoneNumber(formData.phone)) {
      setError("Invalid phone number. Must be 10 digits.");
      return;
    }

    // If OTP is not verified yet, show error
    if (!isOtpVerified) {
      setError("Please verify your OTP first.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/signup", formData);
      setMessage(response.data.message);
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      console.error("Signup error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Error during signup");
    }
  };

  const handleSendOtp = async () => {
    setError(""); // Clear previous errors
    setMessage(""); // Clear message

    const formattedPhone = `+${formData.phone}`; // Format phone number to E.164 format
    if (!validatePhoneNumber(formData.phone)) {
      setError("Invalid phone number. Must be 10 digits.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/send-otp", {
        phone: formattedPhone,
      });
      setMessage(response.data.message);
      setIsOtpSent(true); // OTP sent
    } catch (err) {
      setError(err.response?.data?.message || "Error sending OTP");
    }
  };

  return (
    <div className="signup-page">
      <div className="card1">
        <h2>Sign Up</h2>
        {message && <div className="success-message">{message}</div>}
        {error && <div className="error-message">{error}</div>}
  
        {!isOtpSent ? (
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>
            <button type="button" onClick={handleSendOtp}>
              Send OTP
            </button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit}>
            <div className="input-group">
              <label htmlFor="otp">OTP</label>
              <input
                type="text"
                id="otp"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                placeholder="Enter OTP"
                required
              />
            </div>
            <button type="submit">Verify OTP</button>
          </form>
        )}
  
        {isOtpVerified && (
          <button onClick={handleSubmit} disabled={!isOtpVerified}>
            Sign Up
          </button>
        )}
      </div>
    </div>
  );
};  
export default Signup;
