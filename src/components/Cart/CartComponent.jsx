import {
  deleteOrder,
  getCartDetails,
  updateItem,
} from "@/components/Cart/cart";
import { useState, useEffect } from "react";
import CheckoutButton from "./CheckoutButton";

const CartComponent = ({ isVisible, onClose }) => {
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);

  const loadData = () => {
    const loadCart = getCartDetails(0);
    let totalAmount = 0;
    loadCart?.forEach((i) => (totalAmount += i.qty * i.item.price));
    setAmount(totalAmount);
    setCart(loadCart ? loadCart : []);
  };

  useEffect(() => {
    loadData();
  }, [isVisible]);

  const handleIncrement = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    let totalAmount = 0;
    updatedCart.forEach((i) => (totalAmount += i.qty * i.item.price));
    setAmount(totalAmount);
    setCart(updatedCart);
    updateItem({ id, qty: updatedCart.find((item) => item.id === id).qty });
  };

  const handleDecrement = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, qty: Math.max(item.qty - 1, 1) } : item
    );
    let totalAmount = 0;
    updatedCart.forEach((i) => (totalAmount += i.qty * i.item.price));
    setAmount(totalAmount);
    setCart(updatedCart);
    updateItem({ id, qty: updatedCart.find((item) => item.id === id).qty });
  };

  const handleDelete = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    let totalAmount = 0;
    updatedCart.forEach((i) => (totalAmount += i.qty * i.item.price));
    setAmount(totalAmount);
    setCart(updatedCart);
    deleteOrder(id);
  };

  return (
    <div className="p-6 border border-gray-300 rounded-lg shadow-lg max-w-md mx-auto bg-white">
      {cart.length === 0 ? (
        <p className="text-gray-600 text-center">Your cart is empty.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between py-4"
            >
              <div className="flex items-center space-x-4">
                {/* Video Element */}
                <video
                  src={`./videos/${item.item.id}.MOV`} // Assuming you have a video URL in your item data
                  className="w-20 h-20 object-cover rounded"
                  autoPlay
                  loop
                  muted
                ></video>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.item.name}
                  </h3>
                  <p className="text-gray-600">₹{item.item.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleDecrement(item.id)}
                  className="bg-gray-200 text-gray-600 px-3 py-1 rounded hover:bg-gray-300 transition"
                >
                  -
                </button>
                <span className="text-lg font-semibold text-gray-800">
                  {item.qty}
                </span>
                <button
                  onClick={() => handleIncrement(item.id)}
                  className="bg-gray-200 text-gray-600 px-3 py-1 rounded hover:bg-gray-300 transition"
                >
                  +
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <div className="mt-6 border-t border-gray-200 pt-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">Total:</h3>
            <h3 className="text-lg font-semibold text-gray-800">₹{amount}</h3>
          </div>
          {amount > 0 && <CheckoutButton cost={amount} success={onClose} />}
        </div>
      )}
    </div>
  );
};

export default CartComponent;
