import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">About Us</h5>
            <p>
              This is a simple contact form application built with React and Bootstrap 5.
              Feel free to use it for any demo purposes.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Useful Links</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#!" className="text-dark">Home</a></li>
              <li><a href="#!" className="text-dark">About</a></li>
              <li><a href="#!" className="text-dark">Contact</a></li>
              <li><a href="#!" className="text-dark">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="mailto:info@example.com" className="text-dark">info@example.com</a></li>
              <li><a href="tel:+123456789" className="text-dark">+123 456 789</a></li>
              <li><a href="#!" className="text-dark">Support</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © 2024 Copyright:
        <a className="text-dark" href="https://yourwebsite.com"> YourWebsite.com</a>
      </div>
    </footer>
  );
};

export default Footer;
