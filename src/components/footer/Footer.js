import React from 'react';
import '../../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-column">
        <h3>COMPANY</h3>
        <ul>
          <li>
            <a href="https://maps.app.goo.gl/Fqn1vDevrJeEgJd57" target="_blank" rel="noopener noreferrer">Address</a>
          </li>
          <li>
            <a href="https://maps.app.goo.gl/Fqn1vDevrJeEgJd57" target="_blank" rel="noopener noreferrer">Rate Us On Google</a>
          </li>
          <li>Careers</li>
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms-of-use">Terms of Use</a>
          </li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>Follow us on</h3>
        <ul>
          <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>Site Credits</h3>
        <ul>
          <li>Mangalam Tiwari</li>
          <li><a href="https://www.linkedin.com/in/mangalam-tiwari-4a5b18202/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>Contact Information</h3>
        <ul>
          <li>
            <h4>Address:</h4>
            <div className='address'>
              <p>Universal Digital Studio,</p>
              <p>Shop No. 2 joban Putra Compound,</p>
              <p>Near BMC D- Ward Office Main Gate,</p>
              <p>August Kranti Marge,</p>
              <p>Nana Chowk Mumbai- 400007</p>
            </div>
          </li>
          <li>
            <h4>Phone Number:</h4>
            <div className="phone">
              <p>9987351983</p>
              <p>9324442690</p>
              <p>7977886929</p>
              <p>7738680936</p>
            </div>
          </li>
          <li>
            <h4>Email Address:</h4>
            <div className="email">
              <p>shiv.sagar@udstudio.in</p>
              <p>universaldigitalstudio@gmail.com</p>
              <p>shiv.rns@gmail.com</p>
              <p>bhanuprakasht89@gmail.com</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
