import Container from 'react-bootstrap/Container';
import {  Routes, Route } from "react-router-dom";
import About from './component/About';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Store from './component/Store';
import ShoppingProvider from './context/shoppingcart';


function App() {
  return (
    <ShoppingProvider>
    <Navbar/>
     <Container className='mb-4'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="store" element={<Store />}/>
        <Route path="about" element={< About/>}/>

      </Routes>

   </Container>
   </ShoppingProvider>
  
  );
}

export default App;
