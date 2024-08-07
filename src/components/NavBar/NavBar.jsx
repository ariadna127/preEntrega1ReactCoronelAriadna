import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import './navBar.css';
import BurgerButton from '../BurgerButton/BurgerButton';

function NavBar() {
    const [clicked, setClicked] = useState(false);
    function handleClick() {
        setClicked(!clicked);
    }

    return (
        <>
            <Navbar className='navBar' data-bs-theme="dark">
                <div className='div-navBar'>
                    <Link translate='no' className='sports' to="/">Sports<span className='text-dark fw-medium'>wear</span></Link>
                    <Nav  className="Navv">
                        <div className={`links-categoria ${clicked ? 'active' : ''}`}>
                            <Link onClick={handleClick} to="/">Home</Link>
                            <Link onClick={handleClick} to="/category/remeras">Remeras</Link>
                            <Link onClick={handleClick} to="/category/tops">Tops</Link>
                            <Link onClick={handleClick} to="/category/calzas">Calzas</Link> 
                        </div>                      
                        <div className='cart-menu'>
                            <Link to="/cart"> <CartWidget/> </Link>
                            <div className='burger-button'>
                                <BurgerButton clicked={clicked} handleClick={handleClick} />
                            </div>
                        </div>                
                    </Nav>
                </div>
                <div className={`bgDiv ${clicked ? 'active' : ''}`} ></div>
            </Navbar>
        </>
    );
}

export default NavBar;