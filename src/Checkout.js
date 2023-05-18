import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div ClassName="checkout">
      <div ClassName="checkout_left">
        <img
          ClassName="checkout_ad"
          src="img/https://i.pinimg.com/originals/44/f6/a2/44f6a288b44fdc9ca5e49511d352b655.png"
          alt=""
        />

        <div>
          <h2 className="checkout_tittle">Your shopping Basket</h2>

          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
        </div>
      </div>
      <div className="checkout_right">
        <subtotal />
      </div>
    </div>
  );
}

export default Checkout;
