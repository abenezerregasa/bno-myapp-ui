import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';  // Import motion
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';  // Assume custom CSS is here

const App = () => {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}  // Initial state
      animate={{ opacity: 1, scale: 1 }}  // Animate to full opacity and normal scale
      exit={{ opacity: 0 }}     // Exit animation
      transition={{ duration: 0.8 }}  // Animation duration
      style={{ backgroundColor: '#f0f8ff', padding: '2rem', borderRadius: '10px' }}  // Add background color and padding for the entire container
    >
      {/* Animated Linux Day Message */}
      <motion.h1
        className="display-4 linux-day-header"
        initial={{ opacity: 0 }}  // Fade in the text
        animate={{ opacity: 1 }}  // Fully visible
        transition={{ duration: 1.5 }}  // Animate over 1.5 seconds
        style={{ color: '#ffff', textShadow: '2px 2px #000' }}  // Use bright orange with text shadow for the main heading
      >
        <span className="typewriter">Happy Linux Day! 🎉</span>
      </motion.h1>

      <motion.p
        className="lead"
        initial={{ x: -100, opacity: 0 }}  // Slide in from the left
        animate={{ x: 0, opacity: 1 }}     // Animate to position
        transition={{ delay: 0.5, duration: 1 }}
        style={{ color: '#F73F70', fontWeight: 'bold' }}  // Use lime green color for this text with bold font
      >
        Welcome to BNO Informatica, Register now to get started!
      </motion.p>

      <motion.p
        className="sub-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ color: '#ffffff', fontStyle: 'italic' }}  // Use dodger blue with italic style for additional text
      >
        Embrace the open-source revolution with Linux and take control of your digital future.
      </motion.p>

      {/* Logo with hover effect */}
      <motion.img
        src="https://raw.githubusercontent.com/abenezerregasa/images/refs/heads/main/logo%402x.png"  // Replace with your logo's path
        alt="BNO Informatica Logo"
        className="logo"
        whileHover={{ scale: 1.1, rotate: 10 }}  // Hover effect for logo
        transition={{ type: 'spring', stiffness: 300 }}
        style={{ marginTop: '2rem', width: '150px' }}  // Adjust the size and margin of the logo
      />

      {/* Central Buttons for Register and Login */}
      <motion.div
        className="button-container"
        initial={{ opacity: 0, y: 50 }}  // Initial state
        animate={{ opacity: 1, y: 0 }}   // Animate buttons into place
        transition={{ delay: 0.8, duration: 1 }}
      >
        <Link to="/register" className="btn btn-primary btn-lg mx-2" aria-label="Register Button">
          Register
        </Link>
        <Link to="/login" className="btn btn-success btn-lg mx-2" aria-label="Login Button">
          Login
        </Link>
      </motion.div>

      {/* Footer */}
      <footer className="text-center mt-5">
        <p className="footer-text" style={{ color: '#555', fontSize: '0.9rem' }}>© 2024 BNO Informatica. All rights reserved.</p>
      </footer>
    </motion.div>
  );
};

export default App;
