import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutBanner from '../images/about_us_banner.png'
import aboutUpper from '../images/upper_banner.png';
import whoWe from '../images/who_we_are.png'
import upperFlipped from '../images/upper_flipped.png'

const About = ({ aboutInfo }) => {

  console.log(aboutInfo)
  return (
    <>
      <Container fluid className='mb-5'>
        <Row>
          <Col sm={12} md={12} lg={12} className='about_col'>
            <img src={aboutBanner} alt="Image" className='img-fluid' style={{ margin: "0", padding: "0" }} />
          </Col>
        </Row>

        {
          aboutInfo?.map((val, ind) => {
            return (
              <div>
                {/* Our Aim Title */}
                <Row>
                  <Col className="about_banner_background">
                    <img src={aboutUpper} alt="Image" />
                    <h2 className="about_first_title">{val.title}</h2>
                  </Col>
                </Row>

                {/* Title 1 Content */}
                <Container>
                  <Row className={`about_lower_content${ind}`}>
                    <Col xs={12} sm={5} md={5} lg={5} className="about_lower_content_col">
                      <img src={val.img} alt="Image" width="100%" />
                    </Col>

                    <Col xs={12} sm={7} md={7} lg={7} className="about_lower_content_p">
                      <p className="mt-3" style={{ textAlign: "justify" }}> {val.content} </p>
                    </Col>
                  </Row>
                </Container>
              </div>
            )
          })
        }


      </Container>
    </>
  )
}

export default About