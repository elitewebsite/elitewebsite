import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Contacbanner from "../images/CarouselImages/contactus.jfif"
import Getbanner from "../images/CarouselImages/getintouch.jfif"
import Reachbanner from "../images/CarouselImages/reachiusat.jfif"


const Contact = () => {
  return (
    <div>
      <div className="contact_banner">
        <img src={Contacbanner} alt="" />
        <img src={Reachbanner} alt="" />
      </div>
      <div className="contact_cards">

        <Container fluid>
          <Row className='gx-4 gy-3'>
            <Col sm={6} md={3}>
              <div className='contact_card' >
                <p className='title' style={{ backgroundColor: "#fde7dc", color: "black" }}>Head Office</p>
                <div className="lower_details">
                  <p className='lower-title'>ELITE ELECTRIC PROLIGHT PVT LTD</p>
                  <p className='others'>1847-1/2/3,1848, 1st Floor, 'C' Ward,
                    Opp. Mutton Market, Khatik Chowk,
                    Kolhapur. 416012
                  </p>
                  <span classname='others'>eliteele.sales@gmail.com</span>
                  <p className='others'> 0231 2644241 | 0231 2643780
                    +91 9850125797 | +91 8888628880</p>
                </div>
              </div>
            </Col>
            <Col sm={6} md={3}>
              <div className='contact_card' >
                <p className='title' style={{ backgroundColor: "#d8dae1", color: "black" }}>Kolhapur Branch</p>
                <div className="lower_details">
                  <p className='lower-title'>NEW ELITE ELECTRICALS</p>
                  <p className='others'>847 Shop No 1, 'C' Ward Opp. Mutton Market, Khatik Chowk, Kolhapur. 416012
                  </p>
                  <span classname='others'>eliteele.sales@gmail.com</span>
                  <p className='others'> 0231 2641220 | +91 8888618880</p>
                </div>

              </div>
            </Col>
            <Col sm={6} md={3}>
              <div className='contact_card'>
                <p className='title' style={{ backgroundColor: "#d8dae1", color: "black" }}>Sangli Branch</p>
                <div className="lower_details" >
                  <p className='lower-title'>NEW ELITE LIGHT HOUSE
                  </p>
                  <p className='others'>1627, Bhui Galli Corner, Khan Bhag, Panchmukhi Maruti Road, Sangli. 416416
                  </p>
                  <span classname='others'>newelite1627@gmail.com
                  </span>
                  <p className='others'> 0233 2376206 | +91 9423868970, +91 9422615370
                  </p>
                </div>

              </div>
            </Col>
            <Col sm={6} md={3}>
              <div className='contact_card'>

                <p className='title' style={{ backgroundColor: "#d8dae1", color: "black" }}>Mumbai Branch</p>
                <div className="lower_details">
                  <p className='lower-title'>SHREE VINAYAK ELECTRICALS</p>
                  <p className='others'>Office No.4-5, 3rd Floor, Lohar Chawl, Kantilal M Sharma Marg, Kalbadevi, Mumbai. 400002
                  </p>
                  <span> mailto:rakesh.eliteele@gmail.com
                  </span>
                  <p className='others'> 022 22050564 & +91 8369258669, +91 8888628880 </p>
                </div>

              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="form_and_map">
        <img src={Getbanner} alt="" />
        <Container fluid>
          <Row className='gy-3'>
            <Col sm={6}>
              <div className="form mt-4">
                <input type="text" name="" placeholder='Enter your name' id="" />
                <input type="email" name="" placeholder='Enter your email' id="" />
                <input type="text" name="" placeholder="Type your message" id="message" />
                <button type='submit'>Submit</button>
              </div>
            </Col>
            <Col sm={6}>
              <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=New%20Elite%20Electricals,%201847,c,Opp%20Muttan%20Market,%20Khatik%20Chowk,,%20Kolhapur,%20Maharashtra%20Kolhapur+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='#'>.</a>
            </Col>
          </Row>
        </Container>
      </div>

    </div>
  )
}

export default Contact