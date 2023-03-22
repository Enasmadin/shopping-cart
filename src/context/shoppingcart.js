
import { createContext, useContext, useEffect, useState } from 'react';
import Shoppingcart from '../component/Shoppingcart';


 const ShoppingCartContext = createContext({});
 const intialCartitems = localStorage.getItem("shopping-cart")? JSON.parse(localStorage.getItem("shopping-cart")):[];

 const  ShoppingProvider =({children})=> {
  const [CartItems, setCartItems] = useState(intialCartitems);
  const [isOpen,setisOpen]= useState(false);

  useEffect(()=>{
    localStorage.setItem("shopping-cart",JSON.stringify(CartItems))
  }
  ,[CartItems])

  const openCart = ()=>{
     setisOpen(true);
  }
  const CloseCart = ()=>{
    setisOpen(false);
  }
  const cartQuantity = CartItems.reduce((quantity,item)=>item.quantity + quantity,0)

  const getItemQuantity =(id)=>
  
  {
   
    return CartItems.find((item)=> item.id === id )?.quantity || 0 ; 
  }
   const increaseQuantity = (id)=>{
   
    setCartItems((cuartItems)=>{
       if(cuartItems.find((item)=>item.id === id ) == null){
        return [...cuartItems,{id ,quantity:1}]
       }
       else{
        return cuartItems.map((item) =>{
            if(item.id === id){
              return{...item, quantity:item.quantity+1}  
            }
            else{
                return item 
            }
        })
       }
    
    }
   
    ) 
  }
  const  decreaseQuantity = (id)=>{
    setCartItems((cuartItems)=>{
       if(cuartItems.find((item)=>item.id === id ) == null){
        return cuartItems.filter((item)=> item.id !==id )
       }
       else{
        return  cuartItems.map((item)=>{
            if(item.id === id){
              return{...item,quantity:item.quantity-1} 
            }
        })
       }
    })
   
  }
  const removeItemFromCart=(id) =>{
    setCartItems((cuartItems)=>{
      return cuartItems.filter((item)=> item.id !== id );
    })
  }
   return (
    <ShoppingCartContext.Provider value={{CartItems,increaseQuantity,decreaseQuantity,getItemQuantity,removeItemFromCart,openCart,CloseCart,cartQuantity}}>
        {children }
        {/* <Shoppingcarts openCart={openCart}/> */}
        <Shoppingcart isOpen={isOpen}/>
    </ShoppingCartContext.Provider>
    );
  }
  export default ShoppingProvider ;
  export const useShoppingCart = ()=>{
    return useContext(ShoppingCartContext);
  }

