
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartWidget from './components/CartWidget/CartWidget'
import Error from './components/Error'



function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path={'/'} element={<ItemListContainer greeting='A STRONG WOMAN REDEFINES THE LIMITS'/>}/>
        <Route path={'/category/:id'} element={<ItemListContainer/>}/>
        <Route path={'/item/:id'} element={<ItemDetailContainer/>}/>
        <Route path={'/cart'} element={<CartWidget/>}/>
        <Route path={'*'} element={<Error/>}/>
      </Routes>
      
      </BrowserRouter>
      
    </>
  )
}

export default App
