import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import EliteLogo from '../images/elite_logo.webp'
import axios from 'axios'
import { Link } from 'react-router-dom'

function NavBar() {

    const [main, setMain] = useState([])

    useEffect(() => {
        axios.get('https://elitebackend.vercel.app/admincrud/getlightcategory').then((res) => {
            setMain(res.data)
        })
    },[])

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className="ms-1">
                        <img src={EliteLogo} alt="Logo" height="80px" width="160px" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>

                            <NavDropdown title="Products" id="collasible-nav-dropdown">
                                {
                                    main.map((value, index) => {
                                        return (
                                            <div className='d-flex g-4'>
                                                <img src={value.url} alt="Image" style={{ width: "30px", height: "30px", borderRadius: "80px", marginLeft: "9px", marginTop: "8px" }} />
                                                <NavDropdown.Item>
                                                    <Link to={`/series/${value.name}`}>
                                                        {value.name}
                                                    </Link>
                                                </NavDropdown.Item>
                                            </div>
                                        )
                                    })
                                }
                            </NavDropdown>

                            <Nav.Link href="#gallery">Gallery</Nav.Link>
                            <Nav.Link href="#blogs">Blogs</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>

                        <Nav>
                            <Nav.Link href="#call">Call +91 1234567890</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </>
    );
}

export default NavBar;