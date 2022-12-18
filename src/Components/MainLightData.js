import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom'
import leftBtn from '../images/left.png'

const MainLightData = () => {
    const navigate = useNavigate()

    const [mainlightname, setMainlightname] = useState([])

    useEffect(() => {
        axios.get("https://elitebackend-sage.vercel.app/admincrud/getlightcategory").then((res) => {
            setMainlightname(res.data)
        }).catch((err) => { })
    }, [])



    return (
        <>
            <div className="backBtn" onClick={() => { navigate(-1) }}>
                <img src={leftBtn} alt="Image" className='mb-2' /> <span className='fs-5 fw-bold back_text'>Previous Page</span>
            </div>
            <Container fluid>
                <Row>
                    <Col>
                        <h1 className='text-center mt-5 mb-5 fw-bold'> Products </h1>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    {
                        mainlightname?.map((value, index) => {
                            return (
                                <Col lg={4} md={4} sm={6} xs={12} className="individual_Series mainlight-names mt-3 mb-5" style={{ order: `${value.sequence_no}`, paddingTop: '18px', paddingBottom: '18px' }}>
                                    <Link to={`/series/${value.name}`} state={{ products: value.products, series_name: value.series }}>
                                        <center>
                                            <img src={value.url} alt="Iamge" className='img-fluid' />
                                        </center>
                                        <h3 className='mt-3 series_title featured_main_title text-center'>
                                            {value.name}
                                        </h3>
                                    </Link>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export default MainLightData