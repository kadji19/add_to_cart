import React from 'react'
import Home from './Home'
import Cart from './Cart'
import { CartProvider } from 'react-use-cart'

function Vente() {
  return (
    <div>
        <CartProvider>
        <Home />
        <Cart />
        </CartProvider>
         
    </div>
  )
}

export default Vente