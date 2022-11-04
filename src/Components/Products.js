import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mainlightBanner from '../images/mainlightBanner.png'
import productsBanner from '../images/individual_products_banner.png'
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
    return (
        <>
            <Container fluid>
                <Row>
                    <Col className="mainLight_banner">
                        <img src={mainlightBanner} alt="Image" class="img-fluid" />
                        <h1 className='mainLight_title'> {state?.series_name} </h1>
                    </Col>
                </Row>

                <Row>
                    <img src={productsBanner} alt="Image" />
                </Row>
            </Container>

            <Container>
                <Row>
                    {
                        state?.products?.map((val, idx) => {
                            return (
                                <Col lg={3} sm={6} xs={6} className="individual_products mb-3">
                                    <Link to="/productinfo" state={{ oneproduct: val }}>
                                        <center>
                                            <img src={val.images[0]} alt="Images" className="productImage"/>
                                        </center>

                                        <h3 class="text-center product_title">{val.product_name}</h3>
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