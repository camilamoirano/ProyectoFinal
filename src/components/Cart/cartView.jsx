
import React from 'react';
import { useContext } from "react";
import { cartContext } from "../../context/cartContext.jsx"
import { Link } from 'react-router-dom';
import Button from '../Button/Button.jsx'; 
import "./cartView.css"


function Cart() {
  const context = useContext(cartContext);
  const { cart, deleteItem, emptyCart, getItemsTotalPrice } = context;
  

  if (cart.length === 0) {
    return <div className="emptyCart">
               <h1 className='empty'>Tu carrito esta vacio...
                    <Link className="linkHome" to={"/"}>
                      <Button>Seguir comprando</Button>
                    </Link>
              </h1>
           </div>
  }

  return (
    <div className="cartViewContainer">
      <h2 className="cartName">Tu carrito de compras:</h2>
      <div>
        {cart.map(item => (
          <div classNAme="cartItem" key={item.id}>
            <div className="cartView-Img">
              <img style={{maxWidth: 200, maxHeight: 200}} src={item.img} alt={item.title} />
            </div>
            <div classNAme="cartDescription">
              <h2 className='cartTitle'>{item.title}</h2>
              <div className='cartInfo'>
                <p>${item.price}</p>
                <p>Cantidad: {item.count}</p>
              </div>
              
              <Button onClick={() => deleteItem(item.id)}>Eliminar producto</Button>
            </div>
          </div>
        ))}
      </div>
      <h2 className="cartTotal">Total: ${getItemsTotalPrice()}</h2>
      <div className="botonesCart">
        <Button onClick={emptyCart}>Vaciar carrito</Button>
        <Button>Finalizar Compra</Button>
      </div>
     
    </div>
  )
}

export default Cart