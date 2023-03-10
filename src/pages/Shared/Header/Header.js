import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { FaUserAstronaut } from "react-icons/fa";
import '../Header/Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .then(e => console.error(e))
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light mb-4">
                <Container>
                    <Navbar.Brand className='aaa'><Link to='/'>News Portal</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav className='aaa'>
                                {user?.uid ?
                                    <>
                                        <span className='mt-1 d-none d-lg-block'>{user.displayName}</span>
                                        <Button onClick={handleSignOut} variant='secondary mx-2'>Logout</Button>
                                    </>
                                    :
                                    <>
                                        <Button variant='outline-primary mx-2'><Link to='/login'>Login</Link></Button>
                                    </>
                                }
                            </Nav>
                        </Nav>
                        <Link to='/profile'>
                            {
                                user?.photoURL ?
                                    <Image
                                        roundedCircle
                                        style={{ height: '25px' }}
                                        src={user.photoURL}>
                                    </Image> :
                                    <FaUserAstronaut></FaUserAstronaut>
                            }
                        </Link>
                        <div className='d-lg-none'>
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;