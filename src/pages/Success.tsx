import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';  // Import motion
import 'bootstrap/dist/css/bootstrap.min.css';

const Success = () => {
  const location = useLocation();
  const message = location.state?.message || 'Success!';

  return (
    <motion.div
      className="container d-flex justify-content-center align-items-center vh-100"
      initial={{ opacity: 0 }}  // Start with opacity 0
      animate={{ opacity: 1 }}  // Animate to full opacity
      exit={{ opacity: 0 }}     // Exit with fade-out
      transition={{ duration: 0.5 }}  // Animation duration
    >
      <div className="col-md-6">
        <div className="card p-4 shadow-sm text-center">
          <h2 className="text-success mb-4">{message}</h2>  {/* Display welcome message */}
          <p>You have successfully registered or logged in.</p>
          
          {/* Beautiful button that leads to the main website */}
          <div className="text-center mt-4">
            <a href="https://bnoinformatica.com" className="btn btn-primary btn-lg" style={{ padding: '10px 20px' }}>
              Visit Our Website
            </a>
          </div>

          {/* Back to Home Button */}
          <div className="text-center mt-3">
            <Link to="/" className="btn btn-secondary">Back to Home</Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Success;
