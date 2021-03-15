import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import {useStateValue} from "./StateProvider";


function Checkout() {
 
const [{basket, user},dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad"
                src=""  alt="" ></img>

               <div>
               <h3>{user?.email}</h3>
               <h2 className="checkout_title">
                   Your Shopping Trolly  is empty
               </h2>
             {basket.map(item =>(
              <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}





              />


             ))}

              </div>

              <div className="checkout_right">
                  <Subtotal/>
              </div> 
            </div>
        </div>
    )
}

export default Checkout
