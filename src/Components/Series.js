import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mainlightBanner from '../images/mainlightBanner.png'
import seriesBanner from '../images/product_banner.png'

const Series = () => {
  const { mainlight } = useParams()

  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`https://elitebackend.vercel.app/admincrud/getall?mainlight=${mainlight}`).then((res) => {
      setData(res.data)
    }).catch((err) => {
      console.log(err)
    })

  }, [mainlight])

  return (
    <>
      <div>
        <Container fluid>
          <Row>
            <Col className="mainLight_banner">
              <img src={mainlightBanner} alt="Image" class="img-fluid" />
              <h1 className='mainLight_title'> {mainlight} </h1>
            </Col>
          </Row>

          <Row>
            <img src={seriesBanner} alt="Image" />
          </Row>
        </Container>

        <Container>
          <Row>
            {
              data?.map((value, index) => {
                return (
                  <Col lg={3} sm={6} xs={6} className="individual_Series mt-3 mb-5">
                    <Link to="/products" state={{ products: value.products, series_name: value.series }}>
                      <center>
                        <img src={value.url} alt="Iamge" className='img-fluid' />
                      </center>
                      <h3 className='mt-3 series_title text-center'>
                        {value.series}
                      </h3>
                    </Link>
                  </Col>
                )
              })
            }
          </Row>
        </Container>

      </div>
    </>
  )
}

export default Series