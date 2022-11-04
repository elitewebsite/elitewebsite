import React from 'react'
import notImage from "../images/not_found.jpg"
import Row from 'react-bootstrap/esm/Row'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import { Link } from 'react-router-dom'
const Notfound = () => {
    return (
        <div className='not_found'>
            <Container>
                <Row className='align-items-center gy-3'>
                    <Col sm={6}>
                        <img src={notImage} alt="" className="not_foundimg" />
                    </Col>

                    <Col sm={6} className='left_para'>
                        <p >the page you are loking for is not valid please go back to home page</p>
                        <Link to="/">go to home</Link>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default Notfound