 

 
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
    >
      {/* Animated Linux Day Message */}
      <motion.h1
        className="display-4 linux-day-header text-primary"  // Added some Bootstrap classes for fancy text
        initial={{ opacity: 0 }}  // Fade in the text
        animate={{ opacity: 1 }}  // Fully visible
        transition={{ duration: 1.5 }}  // Animate over 1.5 seconds
      >
        <span className="typewriter">Happy Linux Day! 🎉</span>
      </motion.h1>

      <motion.p
        className="lead text-secondary"
        initial={{ x: -100, opacity: 0 }}  // Slide in from the left
        animate={{ x: 0, opacity: 1 }}     // Animate to position
        transition={{ delay: 0.5, duration: 1 }}
      >
        Welcome to BNO Informatica, Register now to get started!
      </motion.p>

      <motion.p
        className="sub-text text-muted"  // Additional call-to-action text
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
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
        <p className="footer-text">© 2024 BNO Informatica. All rights reserved.</p>
      </footer>
    </motion.div>
  );
};

export default App;
