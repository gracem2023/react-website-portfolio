import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Let's get in touch!
        </p>
        <p className='footer-subscription-text'>
          Contact me about a project or just to say a friendly hello:)
        </p>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <Link to='/about'>About Me</Link>
          </div>
          <div class='footer-link-items'>
          <a href='mailto:gmoussouri3@gatech.edu' target='_blank' rel='noopener noreferrer'>Email Me</a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <Link to='/work'>View My Work</Link>
          </div>
          <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
          <a href='https://www.linkedin.com/in/grace-moussouri/' target='_blank' rel='noopener noreferrer'>View My LinkedIn</a>
          </div>
        </div>
        </div>
    </div>
    </div>
  );
}

export default Footer;