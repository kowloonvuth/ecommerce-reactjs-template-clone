import React, { useEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Checkout() {
  const { cart, addToCart, removeFromCart, deleteFromCart } = useCart();
  const paypalRef = useRef(null); // To track if PayPal button is rendered

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  useEffect(() => {
    if (paypalRef.current) return; // Prevent multiple renders

    if (window.paypal) {
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: totalPrice,
                  },
                },
              ],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              alert(`Transaction completed by ${details.payer.name.given_name}`);
              console.log(details);
            });
          },
          onError: (err) => {
            console.error('PayPal Error:', err);
          },
        })
        .render('#paypal-button-container');
      
      paypalRef.current = true; // Mark PayPal as rendered
    }
  }, [totalPrice]);

  return (
    <>
      <Navbar />
      <Header />
      <div className="container py-5">
        <h1 className="mb-4">Checkout</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty. Add some products first!</p>
        ) : (
          <>
            <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>{item.quantity}</td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </button>
                      <button
                        className="btn btn-sm btn-secondary mx-2"
                        onClick={() => removeFromCart(item.id)}
                      >
                        -
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => deleteFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4">
              <h3>Total: ${totalPrice}</h3>
              <div id="paypal-button-container"></div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
