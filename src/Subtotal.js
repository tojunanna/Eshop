import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(vaule) => (
                    <>
                        <p>
                            Subtotal (0 items): <strong>$0</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkout" /> This order contains a gift
                        </small>

                    </>
                )}

                decimalScale={2}
                vaule={0}
                displayType={"text"}
              
            />

        </div>
    );
}

export default Subtotal;