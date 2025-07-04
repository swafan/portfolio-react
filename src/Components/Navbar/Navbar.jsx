import React, {useState} from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {

  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
        <ul className="nav-menu">
            {/* <li>
              <AnchorLink className='anchor-link' href='#home'>
                <p onClick={()=>setMenu("home")}>Home</p>
              </AnchorLink>
              {menu==="home"?<div className="nav-underline"></div>:null}
            </li><p>|</p> */}
            <li>
              <AnchorLink className='anchor-link' href='#about'>
                <p onClick={()=>setMenu("about")}>About Me</p>
              </AnchorLink>
              {menu==="about"?<div className="nav-underline"></div>:null}
            </li><p>|</p>
            <li>
              <AnchorLink className='anchor-link' href='#writings'>
                <p onClick={()=>setMenu("writings")}>Writings</p>
              </AnchorLink>
              {menu==="writings"?<div className="nav-underline"></div>:null}
            </li><p>|</p>
            <li>
              <AnchorLink className='anchor-link' href='#projects'>
                <p onClick={()=>setMenu("work")}>Projects</p>
              </AnchorLink>
              {menu==="work"?<div className="nav-underline"></div>:null}
            </li><p>|</p>
            <li>
              <AnchorLink className='anchor-link' href='#contact'>
                <p onClick={()=>setMenu("contact")}>Contact</p>
              </AnchorLink>
              {menu==="contact"?<div className="nav-underline"></div>:null}
            </li>
        </ul>
    </div>
  )
}

export default Navbar