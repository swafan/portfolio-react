import React, { useRef, useEffect, useState } from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import linkedin_icon from '../../assets/linkedin.svg'
  // converted from png from: <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by riajulislam - Flaticon</a>
import paper_icon from '../../assets/paper.svg'
  // converted from png from: <a href="https://www.flaticon.com/free-icons/contract" title="contract icons">Contract icons created by Pixel perfect - Flaticon</a>
import alvin_profile_pic from '../../assets/alvin_profile_pic.jpg'
import alvin_profile_pic_small from '../../assets/alvin_profile_pic_small.jpg'
import '../../Components/Global.css'

const Contact = () => {
  const invisibleBoxRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [result, setResult] = useState(""); // added result state

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('contact');
      if (!section || !invisibleBoxRef.current) return;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // When 80% of the contact section is visible from the top
      if (rect.top < vh * 0.1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    if (!name || !email) {
      setResult("Please enter your name and email.");
      return;
    }
    setResult("Sending....");
    const formData = new FormData(form);

    formData.append("access_key", "fb87068b-af16-4a5e-87b7-fd637edecb17");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      form.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='contact'>

      <img className='contact-bg-pic' src={alvin_profile_pic} alt="Alvin's profile" />

      <div
        className={`contact-invisible-box${scrolled ? ' contact-invisible-box-in' : ''}`}
        ref={invisibleBoxRef}
      >
        <div className="contact-title-overlay">
          <div className="global-section-title-box">
            <h1 className="global-title contact-title">Let's Chat!</h1>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-card-content-row">
            <div className="contact-card-left">
              <img
                src={alvin_profile_pic_small}
                alt="Alvin profile small"
                className="contact-profile-pic-small"
              />
              <p className="contact-intro">
                Please feel free to reach out if you want to chat about anything: AI, philosophy, Manchester United, finance, teaching...
              </p>
              <div className="contact-details-row">
                <div className="contact-detail">
                  <a className="extlink" href="mailto:alvin.shuwai@gmail.com">
                    <img src={mail_icon} alt="" /> <span>alvin.shuwai@gmail.com</span>
                  </a>
                </div>
                <div className="contact-detail">
                  <a className="extlink" href="https://linkedin.com/in/shu-wai-alvin-fan" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin_icon} alt="" /> <span>linkedin.com/in/shu-wai-alvin-fan</span>
                  </a>
                </div>
                <div className="contact-detail">
                  <a className="extlink" href="https://swafan.substack.com" target="_blank" rel="noopener noreferrer">
                    <img src={paper_icon} alt="" /> <span>swafan.substack.com</span>
                  </a>
                </div>
              </div>
            </div>
            <form onSubmit={onSubmit} className="contact-card-right">
              <label>Your Name</label>
              <input type="text" placeholder='Enter your name' name='name' />
              <label>Your Email</label>
              <input type="email" placeholder='Enter your email' name='email' />
              <label>Write your message here</label>
              <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
              <button type='submit' className="contact-submit">Submit</button>
              {result && <div className="contact-result-message">{result}</div>} {/* show result message here */}
            </form>
          </div>
          <div className="contact-card-bottom-text">
            <hr />
            <p>© 2025 Shu Wai Alvin Fan. All rights reserved. No redistribution or onward sharing permitted.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact