import React from 'react' ;
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useShoppingCart } from '../context/shoppingcart';
import formatcurrancy  from "./formatcuarrancy";

const Storeitems = ({id,price,imagurl,name}) => {
  const {getItemQuantity,increaseQuantity,decreaseQuantity,removeItemFromCart} = useShoppingCart()
    const quantity = getItemQuantity(id); 
     
  return (
    <Card className='h-100' >
    <Card.Img variant="top" src={imagurl}  style={{ height: '200px' ,objectFit:"cover"}}/>
    <Card.Body>
      <Card.Title className='d-flex justify-content-between align-items-baseline '>
           <span className='fs-3'> {name} </span>
           <span className='text-muted me-2'> {formatcurrancy(price)} </span>
        </Card.Title>
       <div className='mt-auto'>
          {quantity=== 0 ?(
          <Button variant="primary" className='w-100' onClick={()=> increaseQuantity(id)} >Add To Cart </Button>) : 
          <div className='d-flex  align-items-center flex-column' style={{ gap:"0.5rem" }}> 
            <div className='d-flex' style={{ gap:"0.5rem" }}>
                 <Button  onClick={()=>increaseQuantity(id)}>+</Button>
                 <span className='fs-3'> {quantity} in cart </span>
                 <Button  onClick={()=> decreaseQuantity(id)}>-</Button>
            </div>
            <Button variant="danger" size="sm" onClick={()=>removeItemFromCart(id)}> Remove </Button>
          </div> }
       </div>
      
    </Card.Body>
  </Card>
  )
}

export default Storeitems
