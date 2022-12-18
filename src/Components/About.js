import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutBanner from '../images/about_us_banner.png'
import axios from 'axios';

const About = () => {

  const [aboutdata, setAboutdata] = useState([]);
  useEffect(() => {
    axios.get("https://elitebackend-sage.vercel.app/apiforabout/getaboutdetails").then((res) => {
      setAboutdata(res.data)
    }).catch((err) => { })
  }, [])

  return (
    <>
      <Container fluid className='mb-5'>
        {
          aboutdata.about?.map((val, ind) => {
            return (
              <div>

                {/* Title 1 Content */}
                <Container fluid>
                  <Row className={`about_lower_content${ind} g-3`}>
                    <Col xs={12} sm={6} md={6} lg={6} className="about_lower_content_col">
                      <img src={val.image.url} alt="Image" width="100%"  />
                    </Col>

                    <Col xs={12} sm={6} md={6} lg={6} className="about_lower_content_p" >
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <p className="about-title">{val.title}</p>
                        <p className="mt-3 about-description" style={{ textAlign: "justify" }}> {val.content} </p>
                      </div>
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