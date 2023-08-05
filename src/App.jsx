import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './pages/ItemListContainer';
import Header from './components/header/Header';
import Requisitos from './pages/requisitos/requisitos';
import Navbar from './components/navbar/NavBar';
import './App.css';
import ItemDetailContainer from './pages/ItemDetailContainer';
import Carrito from './pages/carrito';
import { CartProvider } from './contexto/CartContext';
import Checkout from './pages/checkout.jsx/checkout';
import Contacto from './pages/contacto/contacto';


function App() {


  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Header titulo="Peladingui Gunshop" logo={<img src="./media/testpela.png" className="logo" alt="logo de la empresa" />} />
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/requisitos' element={<Requisitos />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/carrito' element={<Carrito />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;