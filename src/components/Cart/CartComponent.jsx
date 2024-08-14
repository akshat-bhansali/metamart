// components/CartComponent.js
import { deleteOrder, getCartDetails, updateItem } from '@/components/Cart/cart';
import { loadStripe } from '@stripe/stripe-js';
import { useState, useEffect } from 'react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const CartComponent = () => {
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
      // Load cart items from local storage when the component mounts
      const loadCart = getCartDetails();
      setCart(loadCart);
    }, []);
  
    const handleIncrement = (id) => {
      const updatedCart = cart.map(item => 
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      );
      setCart(updatedCart);
      updateItem({ id, qty: updatedCart.find(item => item.id === id).qty });
    };
  
    const handleDecrement = (id) => {
      const updatedCart = cart.map(item => 
        item.id === id ? { ...item, qty: Math.max(item.qty - 1, 1) } : item
      );
      setCart(updatedCart);
      updateItem({ id, qty: updatedCart.find(item => item.id === id).qty });
    };
  
    const handleDelete = (id) => {
      const updatedCart = cart.filter(item => item.id !== id);
      setCart(updatedCart);
      deleteOrder(id);
    };
  
    const handleCheckout = async (amount) => {

        const stripe = await stripePromise;
        const items = [
            {
              "name": "Product 1",
              "qty": 2,
              "price": 1500
            },
            {
              "name": "Product 2",
              "qty": 1,
              "price": 2000
            },
            {
              "name": "Product 3",
              "qty": 5,
              "price": 1000
            }
          ]
        
        // Call the API to create a Checkout Session
        const response = await fetch('/api/create-checkout-session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ items})
        });
    
        const { id } = await response.json();
    
        // Redirect to Checkout
        const { error } = await stripe.redirectToCheckout({ sessionId: id });
    
        if (error) {
          console.error('Error redirecting to Checkout:', error);
        }
    };
  
    return (
      <div className="p-4 border border-gray-300 rounded-md shadow-md max-w-md mx-auto bg-white">
        <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map(item => (
              <li key={item.id} className="flex items-center justify-between border-b border-gray-200 py-2">
                <div className="flex-1">
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-gray-600">Model: {item.model}</p>
                  <p className="text-gray-600">Price: ${item.price}</p>
                  <p className="text-gray-600">Qty: {item.qty}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleDecrement(item.id)}
                    className="bg-gray-200 text-gray-600 px-2 py-1 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="bg-gray-200 text-gray-600 px-2 py-1 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <button
            onClick={()=>handleCheckout(10000)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
          >
            Checkout
          </button>
        )}
      </div>
    );
  };
  
  export default CartComponent;