import React from 'react'
import './Subtotal.css'
import NumberFormat from 'react-number-format';
import {useStateValue} from "./StateProvider";
import {getBasketTotal} from "./reducer";
import {useHistory } from "react-router-dom";


function Subtotal() {

  const history = useHistory();
  const [{basket}, dispatch] = useStateValue();
    return  <div className='Subtotal'>
        <NumberFormat
              renderText={(value)=> (
            <>
            <p>
         Subtotal ({basket.length} items):
         <strong>{value}</strong>
         </p>

         <small className="subtotal_gift">
         <input type="checkbox"/>This order
         contains a gift
         </small>
         </>
)}
 decimalScale={2}
 value={getBasketTotal(basket)}
displayType={"text"}
thousandSeparator={true}
prefix={"₹"}
/>
<button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
</div>;
    
}

export default Subtotal;
