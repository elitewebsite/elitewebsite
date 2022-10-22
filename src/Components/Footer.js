import React from 'react'
import EliteLogo from '../images/elite_logo.webp'
import fbIcon from '../images/facebook.png'
import instaIcon from '../images/instagram.png'
import linkedinIcon from '../images/linkedin.png'
import twitterIcon from '../images/twitter.png'
const Footer = () => {
  return (
    <>
        <div className="Container fluid footer_container">
          <div className="row">
            <div className="col-lg-3">
              <img src={EliteLogo} alt="Logo" height="80px" width="160px" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci laboriosam quas quisquam eaque error officia.</p>
            </div>

            <div className="col-lg-2 useful_links">
              <h5>Useful Links</h5>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blogs</a></li>
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
                <a href="#"> <img src={fbIcon} alt="" /> </a> 
                <a href="#"> <img src={instaIcon} alt="" /> </a> 
                <a href="#"> <img src={linkedinIcon} alt="" /> </a> 
                <a href="#"> <img src={twitterIcon} alt="" /> </a>
            </div>
          </div>
        </div>
    </>
  )
}

export default Footer