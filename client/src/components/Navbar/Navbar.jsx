import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "../Navbar/navbar.css"

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className='navbar'>
        <div className="logo">
        <Link to="/">
          <img
            className="h-logo_img"
            src={require("../../assets/img/JobMarket_2.png")}
            title="Logo GardenMap"
            alt="Logo GardenMap"
          />
        </Link>
        </div>
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
        >
            
            <Link to="/help" className='n-link-item'>
            <li className="h-nav_items"> Help </li>
            </Link>
            <Link to="/workers" className='n-link-item'>
            <li className="h-nav_items"> Workers </li>
            </Link>
            <Link to="/aboutme" className='n-link-item'>
            <li className="h-nav_items"> About Me </li>
            </Link>
            <p className="h-nav_separator" id="h-separator_login">|</p>

            <Link to="/login" className='home'>
            <li className="h-nav_login" id="h-btn"> Login </li>
            </Link>
        </ul>
        <span className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
        >
        {isMobile ? (<img
            className="h-close"
            src={require("../../assets/img/cerrar.png")}
            alt="icon close"
        />) : (<img
            className="h-open"
            src={require("../../assets/img/menu.png")}
            alt="icon open"
        />)}   
      </span>
    </nav>
  )
}

export default Navbar