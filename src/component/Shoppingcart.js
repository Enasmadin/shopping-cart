import React from 'react';
import Stack from 'react-bootstrap/Stack';

import Offcanvas from 'react-bootstrap/Offcanvas';
import { useShoppingCart } from '../context/shoppingcart';

 import Cartitems from './Cartitems';
 import formatcurrancy  from "./formatcuarrancy";
import Storeitems from '../data/store.json';



function Shoppingcart({isOpen}) {
const {CartItems,CloseCart} = useShoppingCart();
    
  return (
    <Offcanvas show={isOpen} onHide={CloseCart} placement="end" >
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Cart</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
    <Stack  gap={3}>
        {CartItems.map((item)=>(
            <Cartitems key={item.id} {...item}/>
            
        ))}
    </Stack>     
     <div  className='fs-5 fw-bold  ms-auto'>
        Total {" "}
        {formatcurrancy( CartItems.reduce((total,cartItem)=>{
            const item = Storeitems.find((i)=>i.id === cartItem.id );
             return  total + (item?.price || 0) * cartItem.quantity
       } ,0))}   
    </div>
     
    </Offcanvas.Body>
    </Offcanvas>
  )
}

export default Shoppingcart
