import "./Footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <h2>What We Design</h2>
            <ul className="footer-list">
              <li>Residential</li>
              <li>Commercial</li>
              <li>Industrial</li>
              <li>Public Spaces</li>
              <li>Custom Projects</li>
            </ul>
          </div>
          <div className="footer-right">
            <p>
              Contact us for more details about our services and how we can help
              bring your vision to life.
            </p>
            <h3>Architechts space</h3>
            <h3 className="end">Design the world For Your Dreams </h3>
            <div className="social-links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="btm-end">
        <h6>
          All house plans are copyright ©2024 by the architects and designers
          represented on our web site
        </h6>
      </div>
    </footer>
  );
}
