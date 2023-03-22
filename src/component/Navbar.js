  import React from 'react';
  import Container from 'react-bootstrap/Container';
  import Nav from 'react-bootstrap/Nav';
  import {Button, Navbar as NavbarBs } from 'react-bootstrap';
  import { NavLink } from 'react-router-dom';
  import { useShoppingCart } from '../context/shoppingcart';

  
  function Navbar() {
     const {openCart,cartQuantity} = useShoppingCart();
    return (
        <NavbarBs className='bg-white shadow-sm'>
        <Container>
    
             <Nav className="me-auto">
              <Nav.Link  as={NavLink} to ="/">   Home </Nav.Link>
              <Nav.Link  as={NavLink} to="store"> Store </Nav.Link>
              <Nav.Link  as={NavLink} to="About"> About </Nav.Link>
            </Nav>
            <Button variant="outline-primary rounded-circle" style={{ width:"3rem" ,height:"3rem",position:"relative" }} onClick={openCart}>
            <i className ="fa-sharp fa-solid fa-cart-shopping" />
           
                <div className='d-flex justify-content-center align-items-center rounded-circle bg-danger' style={{ position:"absolute" ,bottom:0,width:"1.5rem" , height:"1.5rem" ,right:"0",color:"white" ,transform:"translate(25%,25%)" }} >
                 {cartQuantity}
                </div>
            </Button>
        </Container>
       
      </NavbarBs>
    
   
   
    )
  }
  
  export default Navbar
  