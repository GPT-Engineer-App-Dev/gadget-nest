import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.linksContainer}>
        <a href="/privacy-policy" style={styles.link}>Privacy Policy</a>
        <a href="/terms-of-service" style={styles.link}>Terms of Service</a>
        <a href="/contact-us" style={styles.link}>Contact Us</a>
      </div>
      <div style={styles.socialMediaContainer}>
        <a href="https://facebook.com" style={styles.socialMediaIcon}>Facebook</a>
        <a href="https://twitter.com" style={styles.socialMediaIcon}>Twitter</a>
        <a href="https://instagram.com" style={styles.socialMediaIcon}>Instagram</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '20px',
    backgroundColor: '#f1f1f1',
    textAlign: 'center',
  },
  linksContainer: {
    marginBottom: '10px',
  },
  link: {
    margin: '0 10px',
    textDecoration: 'none',
    color: '#000',
  },
  socialMediaContainer: {
    marginTop: '10px',
  },
  socialMediaIcon: {
    margin: '0 10px',
    textDecoration: 'none',
    color: '#000',
  },
};

export default Footer;