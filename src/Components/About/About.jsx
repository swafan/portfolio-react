import React, { useRef, useEffect, useState } from 'react'
import '../../Components/Global.css'
import './About.css'

const About = () => {
  const imgRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;
      const rect = imgRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const percentFromTop = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1);
      const newScale = 1 + 1.2 * percentFromTop; // removed -0.5
      setScale(newScale);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id='about' className='about'>
        <div className="global-section-title-box">
          <h1 className="global-title about-title">About me</h1>
        </div>
        <div className="about-para">
          <p>For the past few years, I worked in digital finance—building things, talking to traders, and making many Excel models. Lately, I’ve been turning back to the slower questions that first got under my skin in college: how language misleads, what knowledge can’t be formalized, and the importance of images.</p>
          <p>I studied philosophy and economics, with a minor in art history. I like <em>The Usual Suspects</em>, the gym, and anything written by Maggie Nelson. Some days I get stuck on ideas about technology or attention or aesthetic form, and end up making <a class="extlink" href="https://swafan.github.io/walltext-experiment/" target="_blank" rel="noopener noreferrer">weird things like this</a>.</p>
          <a href="/assets/alvin_fan_resume.pdf" download className="about-resume-btn">Download full resume</a>
        </div>
    </div>
  )
}

export default About