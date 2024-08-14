// components/CheckoutButton.js
import { useState } from 'react';

const CheckoutButton = (cost) => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    try {
      // Request an order from the server
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount:100, currency: 'INR' }), // Example amount in INR
      });

      const { id, currency, amount } = await response.json();

      // Razorpay options
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Your Razorpay key ID
        amount: amount,
        currency: currency,
        name: 'Your Company',
        description: 'Test Transaction',
        order_id: id,
        handler: function (response) {
          alert('Payment successful');
          // Handle successful payment here
        },
        prefill: {
          name: 'John Doe',
          email: 'johndoe@example.com',
        },
        theme: {
          color: '#F37254',
        },
      };

      // Load Razorpay Checkout script
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error('Error initiating payment:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      {loading ? 'Processing...' : 'Pay Now'}
    </button>
  );
};

export default CheckoutButton;
