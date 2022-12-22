import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import backBtn from '../images/back.png'
import leftBtn from '../images/left.png'

const Products = () => {
    const navigate = useNavigate()

    const { state } = useLocation()
    useEffect(() => {

        if (state) {
        }
        else {
            navigate('/')
        }
    }, [])

    // console.log(state.products)

    return (
        <>
            <div className="backBtn" onClick={() => { navigate(-1) }}>
                <img src={leftBtn} alt="Image" className='mb-2' /> <span className='fs-5 fw-bold back_text'>Previous Page</span>
            </div>

            <Container fluid>
                <Row>
                    <Col className="mainLight_banner">
                        <h1 className='text-center mb-5 text-capitalize'> {state?.series_name} </h1>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className=''>
                    {
                        state?.products?.map((val, idx) => {
                            return (
                                <Col lg={3} sm={6} xs={12} className="individual_products mb-3" style={{ order: `${val.sequence_no}`, paddingTop: '16px', paddingBottom: '16px' }}>
                                    <Link to="/productinfo" state={{ oneproduct: val }}>
                                        <center>
                                            <img src={val.images[0].url} alt="Images" className="productImage" />
                                        </center>

                                        <h3 className="text-center product_title text-capitalize">{val.product_name}</h3>
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

export default Products