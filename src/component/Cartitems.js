import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Storeitems from '../data/store.json';
import formatcurrancy from"./formatcuarrancy";
import Button from 'react-bootstrap/Button';
import { useShoppingCart } from '../context/shoppingcart';

function Cartitems({id,quantity}) {
    const {removeItemFromCart} = useShoppingCart();
    const item =Storeitems.find((item)=> item.id === id) ;
    if(item== null) return null ;
        
    
   return (
    <Stack direction="horizontal" gap={2} className=" d-flex align-items-center">
      <img src={item.imagurl} alt="cart-item"  style={{ width:"125px" , height:"75px" ,objectFit:"cover"}}/>
      <div className='me-auto'> 
        <div>
            {item.name}{" "}
            {
                quantity > 1 && 
                (<span>  x {quantity} </span>)
            }
        </div>
        <div className='text-muted'>
            {formatcurrancy( item.price)}
        </div>
      </div>
      <div>
      
      </div>
      <div className='text-muted'>
            {formatcurrancy( item.price * quantity)}
        </div>
      <Button variant="outline-danger" size='sm' onClick={()=>removeItemFromCart(id)}> &times; </Button>
       

    </Stack>
  )
}

export default Cartitems
