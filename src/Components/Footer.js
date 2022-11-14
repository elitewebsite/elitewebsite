import React from 'react'
import EliteLogo from '../images/elite_logo.webp'
import fbIcon from '../images/facebook.png'
import instaIcon from '../images/instagram.png'
import linkedinIcon from '../images/linkedin.png'
import twitterIcon from '../images/twitter.png'
import pinterestIcon from '../images/pinterest.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <div className="Container fluid footer_container" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-lg-3 footer_logo">
            <img src={EliteLogo} alt="Logo" height="80px" width="160px" />
            <p style={{ textAlign: 'justify', width: '85%' }}>The Company brings you to the most vivid and exquisite luxury lighting series you’ve ever laid your eyes on. Professional event lighting manufacturer and trader.</p>
          </div>

          <div className="col-lg-2 useful_links">
            <h5>Useful Links</h5>
            <ul>
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about">
                  About
                </Link>
              </li>

              <li>
                <Link to="/gallery">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  Contact
                </Link>
              </li>
              <li><a href="https://muchmark.in" target="_blank">MuchMark</a></li>
            </ul>
          </div>

          <div className="col-lg-4 contact_us">
            <h5>Contact Us</h5>
            <ul>
              <li><b> Address:</b> Electric Prolight Pvt Ltd, 1847-1/2/3,1848, <br /> 1st Floor, 'C' Ward, Khatik Chowk, Kolhapur.416012</li>
              <li><b>Phone:</b> +91 8888628880</li>
              <li> <b>Email ID:</b> eliteele.sales@gmail.com</li>
            </ul>
          </div>

          <div className="col-lg-3 social_links">
            <h5 className='mb-3'>Follow Us @</h5>
            <a href="https://www.facebook.com/EliteElectricals/" target="_blank"> <img src={fbIcon} alt="Image" /> </a>
            <a href="https://www.instagram.com/elite_electrics_/" target="_blank"> <img src={instaIcon} alt="Image" /> </a>
            <a href="https://www.linkedin.com/company/elite-shinde-electrics/" target="_blank"> <img src={linkedinIcon} alt="Image" /> </a>
            <a href="https://twitter.com/Elite19920401" target="_blank"> <img src={twitterIcon} alt="Image" /> </a>
            <a href="https://in.pinterest.com/socialelite6637/" target="_blank"> <img src={pinterestIcon} alt="Image" /> </a>
            
            <h5 className='mt-4'>All Rights Reserved</h5 >
          </div>

        </div>
      </div>
    </>
  )
}

export default Footer