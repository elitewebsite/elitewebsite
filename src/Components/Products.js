import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
            <h1>{state?.series_name}</h1>

            <Container className="mt-5 mb-5">
                <Row>
                    {
                        state?.products?.map((val, idx) => {
                            return (
                                <Col lg="3" sm="6" xs="6" className="individual_products">
                                    <Link to="/productinfo" state={{ oneproduct: val }}>
                                        <center>
                                            <img src={val.images[0]} alt="Iamges" />
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