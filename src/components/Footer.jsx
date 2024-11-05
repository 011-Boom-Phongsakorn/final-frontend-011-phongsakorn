import React, { useState } from "react";

// Footer Component
const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log("Subscribed with email:", email);
    setEmail(""); // Clear email input after submission
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Newsletter Subscription Form */}
        <div style={styles.newsletter}>
          <h3 style={styles.newsletterTitle}>Subscribe to our Newsletter</h3>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
            <button type="submit" style={styles.button}>
              Subscribe
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div style={styles.links}>
          <h4 style={styles.linksTitle}>Quick Links</h4>
          <ul style={styles.list}>
            <li>
              <a href="/home" style={styles.link}>
                Home
              </a>
            </li>
            <li>
              <a href="/about" style={styles.link}>
                About
              </a>
            </li>
            <li>
              <a href="/services" style={styles.link}>
                Services
              </a>
            </li>
            <li>
              <a href="/contact" style={styles.link}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Popular Services */}
        <div style={styles.services}>
          <h4 style={styles.servicesTitle}>Popular Services</h4>
          <ul style={styles.list}>
            <li>
              <a href="/web-design" style={styles.link}>
                Web Design
              </a>
            </li>
            <li>
              <a href="/seo" style={styles.link}>
                SEO
              </a>
            </li>
            <li>
              <a href="/app-development" style={styles.link}>
                App Development
              </a>
            </li>
            <li>
              <a href="/digital-marketing" style={styles.link}>
                Digital Marketing
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div style={styles.contact}>
          <h4 style={styles.contactTitle}>Contact Us</h4>
          <p style={styles.contactText}>1234 Street Name, City, Country</p>
          <p style={styles.contactText}>Email: info@example.com</p>
          <p style={styles.contactText}>Phone: +1 (123) 456-7890</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={styles.footerBottom}>
        <p style={styles.footerText}>
          &copy; 2024 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// Styles
const styles = {
  footer: {
    backgroundColor: "#fedcff",
    color: "#fff",
    padding: "40px 0",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    flexWrap: "wrap",
  },
  newsletter: {
    flex: 1,
    marginRight: "20px",
    marginBottom: "20px",
  },
  newsletterTitle: {
    marginBottom: "10px",
    fontSize: "1.2rem",
  },
  form: {
    display: "flex",
    justifyContent: "space-between",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    width: "70%",
    marginRight: "10px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#00aaff",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "5px",
  },
  links: {
    flex: 1,
    marginRight: "20px",
    marginBottom: "20px",
  },
  linksTitle: {
    fontSize: "1.2rem",
    marginBottom: "10px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    marginBottom: "5px",
    display: "block",
  },
  services: {
    flex: 1,
    marginRight: "20px",
    marginBottom: "20px",
  },
  servicesTitle: {
    fontSize: "1.2rem",
    marginBottom: "10px",
  },
  contact: {
    flex: 1,
    marginBottom: "20px",
  },
  contactTitle: {
    fontSize: "1.2rem",
    marginBottom: "10px",
  },
  contactText: {
    margin: "5px 0",
  },
  footerBottom: {
    marginTop: "30px",
    paddingTop: "10px",
    borderTop: "1px solid #444",
  },
  footerText: {
    fontSize: "0.9rem",
    color: "#bbb",
  },
};

export default Footer;
