import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import './navBar.css';

function NavBar() {
    return (
        <>
            <Navbar className='navBar' data-bs-theme="dark">
                <Container className='d-flex'>
                    <Link translate='no' className='mr-auto p-2 sports' to="/">Sports<span className='text-dark fw-medium'>wear</span></Link>
                    <Nav  className="p-2 gap-4 Navv">
                        <Link to="/">Home</Link>
                        <Link to="/category/remeras">Remeras</Link>
                        <Link to="/category/tops">Tops</Link>
                        <Link to="/category/calzas">Calzas</Link>
                        <Link to="/cart"> <CartWidget/> </Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;