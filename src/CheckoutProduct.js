import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
    return (

        <div className="checkoutProduct">
            <img src={image} alt='ok' className='checkoutProduct__image' />

            <div className="checkProduct__info">
                <p className='checkoutProduct__title'>ok</p>


                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}

                </div>
                <button>REmove</button>
            </div>

            
        </div>
        
    )
}

export default CheckoutProduct