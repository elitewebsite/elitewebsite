import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import leftBtn from '../images/left.png'

const Series = () => {
  const { mainlight } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([])

  useEffect(() => {

    axios.get(`https://elitebackend-sage.vercel.app/admincrud/getall?mainlight=${mainlight}`).then((res) => {
      setData(res.data)
    }).catch((err) => {

    })

  }, [mainlight])

  return (
    <>
      <div>
        <div className="backBtn" onClick={() => { navigate(-1) }}>
          <img src={leftBtn} alt="Image" className='mb-2' /> <span className='fs-5 fw-bold back_text'>Previous Page</span>
        </div>

        <Container fluid>
          <Row>
            <Col>
              {/* <img src={backBtn} onClick={() => { navigate(-1) }} alt="" className='mt-2' /> */}
              <h1 className='text-center mt-5 mb-5 fw-bold'> {mainlight} </h1>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            {
              data?.map((value, index) => {
                return (
                  <Col key={index} lg={3} md={3} sm={6} xs={12} className="individual_Series mt-3 mb-5" style={{ order: `${value.sequence_no}`, paddingTop: '18px', paddingBottom: '18px' }}>
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