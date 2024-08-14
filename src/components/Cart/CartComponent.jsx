// components/CartComponent.js
import { deleteOrder, getCartDetails, updateItem } from '@/components/Cart/cart';
import { loadStripe } from '@stripe/stripe-js';
import { useState, useEffect } from 'react';
import CheckoutButton from './CheckoutButton';

const CartComponent = ({isVisible}) => {
    const [cart, setCart] = useState([]);
    const [amount,setAmount] = useState(0); 
    const loadData = ()=>{
        const loadCart = getCartDetails(0);
        let amount = 0;
        loadCart?.forEach((i)=>amount+=(i.qty*i.item.price))
        setAmount(amount);
        setCart(loadCart ? loadCart : []);
    }
    useEffect(() => {
      // Load cart items from local storage when the component mounts
      loadData();
    }, [isVisible]);
  
    const handleIncrement = (id) => {
      const updatedCart = cart.map(item => 
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      );
      let amount = 0;

      updatedCart.forEach((i)=>{
        amount+=(i.qty*i.item.price);
    })
      setAmount(amount);
      setCart(updatedCart);
      updateItem({ id, qty: updatedCart.find(item => item.id === id).qty });
    };
  
    const handleDecrement = (id) => {
      const updatedCart = cart.map(item => 
        item.id === id ? { ...item, qty: Math.max(item.qty - 1, 1) } : item
      );
      let amount = 0;
      updatedCart.forEach((i)=>amount+=(i.qty*i.item.price))
      setAmount(amount);
      setCart(updatedCart);
      updateItem({ id, qty: updatedCart.find(item => item.id === id).qty });
    };
  
    const handleDelete = (id) => {
      const updatedCart = cart.filter(item => item.id !== id);
      setCart(updatedCart);
      deleteOrder(id);
    };
  
    return (
      <div className="p-4 border border-gray-300 rounded-md shadow-md max-w-md mx-auto bg-white">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map(item => (
              <li key={item.id} className="flex items-center justify-between border-b border-gray-200 py-2">
                <div className="flex-1">
                  <h3 className="text-lg font-medium">{item.item.name}</h3>
                  <p className="text-gray-600">Model: {item.item.model}</p>
                  <p className="text-gray-600">Price: ${item.item.price}</p>
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
        {cart?.length > 0 && (
            <div>
            <div className='flex justify-between'>
            <h3 className="text-lg font-medium">Total :</h3>
            <h3 className="text-lg font-medium">{amount}</h3>
            </div>
          {amount && <CheckoutButton cost={amount} success={loadData}/>}
            </div>
        )}
      </div>
    );
  };
  
  export default CartComponent;