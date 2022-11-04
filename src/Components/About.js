import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutBanner from '../images/about_us_banner.png'
import aboutUpper from '../images/upper_banner.png';
import whoWe from '../images/who_we_are.png'
import upperFlipped from '../images/upper_flipped.png'

const About = () => {
  return (
    <>
      <Container fluid className='mb-5'>
        <Row>
          <Col className='about_col'>
            <img src={aboutBanner} alt="Image" className='img-fluid' style={{ margin: "0", padding: "0" }} />
          </Col>
        </Row>

        <Row>
          <Col className="about_banner_background">
            <img src={aboutUpper} alt="Image" />
            <h2 className="about_first_title">Our Aim</h2>
          </Col>
        </Row>

        <Row className="about_lower_content">
          <Col xs={12} sm={5} md={5} lg={5}>
            <img src={whoWe} alt="Image" width="100% !important" />
          </Col>
          <Col xs={12} sm={7} md={7} lg={7}>
            <p className="mt-3" style={{ textAlign: "justify" }}> <b> "Elite Electric Prolight Pvt. Ltd." formerly known as "New Elite Electricals" is a professional event lighting manufacturer and trader. </b> Our aim is to deliver competitively priced products that can cater to the demanding Indian market conditions for quality and stability while continuously supporting our customers with efficient after sales service so that they receive a profitable return on their investment. Originally established in 1992 as a decorative lighting distributor, our intelligent lighting series has recently shot to fame in the past decade or so with some of the best event rental companies in India who have chosen our products.</p>
          </Col>
        </Row>

        <Row>
          <Col className="about_banner_background">
            <img src={upperFlipped} alt="Image" />
            <h2 className="about_first_title1">Our Standards</h2>
          </Col>
        </Row>

        <Row className="about_lower_content">
          <Col xs={12} sm={7} md={7} lg={7}>
            <p className="mt-3" style={{ textAlign: "justify" }}> Durability is our prime focus and our manufacturing process reflects this at every point. Every single product that bears our name goes through rigorous quality checks. We also conduct batch test through artificially aging randomly selected products from each batch of lights that we manufacture.</p>
            <p className="mt-3" style={{ textAlign: "justify" }}> Luxury packaging and expensive promotional activities or even lower priced products are not what comes to mind when one thinks of Elite. The positive feedback that we receive from our customers is what drives us with a sense of pride and further pushes our already high standards of after sales service to new levels.</p>
          </Col>

          <Col xs={12} sm={5} md={5} lg={5}>
            <img src={whoWe} alt="Image" width="100% !important" />
          </Col>
        </Row>

      </Container>
    </>
  )
}

export default About