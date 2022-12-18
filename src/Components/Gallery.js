import React from 'react'
import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

const Gallery = () => {
  const [galleryimg, setGalleryimg] = useState([]);

  useEffect(() => {
    axios.get("https://elitebackend-sage.vercel.app/dynamicgallery/getgallery").then((res) => {
      setGalleryimg(res.data);
    }).catch((err) => { })
  }, [])


  return (
    <>
      <Container className='mt-5'>
        <Row className="g-4">
          {
            galleryimg?.map((val, indx) => {
              return (
                <Col xs={6} sm={6} md={3} lg={3} >
                  <img src={val.image.url} className="img-fluid" alt="image" />
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </>
  )
}

export default Gallery