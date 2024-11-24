import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext'; // Import useCart hook

export default function CheckOut() {
  const { cartItems = [], removeItem, addToCart } = useCart(); // Default cartItems to an empty array if undefined
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Recalculate the total price whenever cart items change
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, [cartItems]);

  // Function to update item quantity
  const updateQuantity = (id, action) => {
    addToCart({ id, action });
  };

  return (
    <div>
      <Navbar />
      <Header />
      <div className="container py-5">
        <h2 className="text-center">Checkout</h2>

        <div className="row">
          <div className="col-md-8">
            <h3>Your Order</h3>
            {cartItems.length === 0 ? (
              <p>No items in your cart</p>
            ) : (
              cartItems.map(item => (
                <div key={item.id} className="cart-item d-flex justify-content-between align-items-center mb-3">
                  <div className="cart-item-info">
                    <p>{item.title}</p>
                    <p>${item.price.toFixed(2)} x {item.quantity}</p>
                  </div>

                  <div className="cart-item-actions">
                    <button className="btn btn-sm btn-secondary" onClick={() => updateQuantity(item.id, 'decrement')}>-</button>
                    <button className="btn btn-sm btn-secondary" onClick={() => updateQuantity(item.id, 'increment')}>+</button>
                    <button className="btn btn-sm btn-danger" onClick={() => removeItem(item.id)}>Remove</button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="col-md-4">
            <div className="checkout-summary">
              <h4>Order Summary</h4>
              <p>Total Price: ${totalPrice.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
