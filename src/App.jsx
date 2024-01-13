
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Error from './components/Error'
import CartProvider from './components/Context/CartContext'
import Cart from './components/Cart/Cart'
import CheckOut from './components/CheckOut/CheckOut'
import Footer from './components/Footer/footer'


function App() {

  return (
    <div className='app'>
      <BrowserRouter>
      <CartProvider>
      <NavBar/>
      <Routes>
        <Route path={'/'} element={<ItemListContainer greeting='A STRONG WOMAN REDEFINES THE LIMITS'/>}/>
        <Route path={'/category/:id'} element={<ItemListContainer/>}/>
        <Route path={'/item/:id'} element={<ItemDetailContainer/>}/>
        <Route path={'/cart'} element={<Cart/>}/>
        <Route path={'/checkout'} element={<CheckOut/>}/>
        <Route path={'*'} element={<Error/>}/>
      </Routes>
      </CartProvider>
      <Footer/>
      </BrowserRouter>
      </div>
  )
}

export default App
