import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <>
            <Navbar bg="danger" data-bs-theme="dark">
                <Container className='d-flex'>
                    <Navbar.Brand className='mr-auto p-2' href="#home">Sports<span className='text-dark fw-medium'>wear</span></Navbar.Brand>
                    <Nav className="p-2">
                        <Nav.Link href="Inicio" className='text-white'>Inicio</Nav.Link>
                        <Nav.Link href="#Productos" className='text-white'>Productos</Nav.Link>
                        <Nav.Link href="#Contacto" className='text-white'>Contacto</Nav.Link>
                        <Nav.Link href="#Carrito" className='text-white'> <CartWidget/> </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;