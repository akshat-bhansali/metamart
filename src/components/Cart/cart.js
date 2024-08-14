// Helper functions for local storage
const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  console.log("Get Cart", cart);
  return cart ? JSON.parse(cart) : [];
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Function to add an item to the cart
export const addItemToCart = (item, qty) => {
  try {
    const cart = getCartFromLocalStorage();
    const newOrder = {
      id: Date.now().toString(), // Generate a unique ID for the order
      item: item,
      qty: qty,
      status: "Order Placed",
      pay_status: "Not Paid",
      pay_url: "",
    };
    cart.push(newOrder);
    saveCartToLocalStorage(cart);
    console.log("Order added with ID: ", newOrder.id);
    return newOrder.id;
  } catch (error) {
    console.error("Error adding order: ", error);
  }
};

// Function to update an item in the cart
export const updateItem = (updatedOrder) => {
  try {
    const cart = getCartFromLocalStorage();
    const orderIndex = cart.findIndex((order) => order.id === updatedOrder.id);

    if (orderIndex !== -1) {
      cart[orderIndex] = { ...cart[orderIndex], ...updatedOrder };
      saveCartToLocalStorage(cart);
      console.log("Order updated with ID: ", updatedOrder.id);
      return updatedOrder.id;
    } else {
      console.error("Order not found");
    }
  } catch (error) {
    console.error("Error updating order: ", error);
  }
};

// Function to get cart details
export const getCartDetails = () => {
  try {
    const cart = getCartFromLocalStorage();
    return cart;
  } catch (error) {
    console.error("Error retrieving cart details: ", error);
  }
};

// Function to delete an order from the cart
export const deleteOrder = (orderId) => {
  try {
    const cart = getCartFromLocalStorage();
    const updatedCart = cart.filter((order) => order.id !== orderId);

    if (cart.length !== updatedCart.length) {
      saveCartToLocalStorage(updatedCart);
      console.log("Order deleted with ID: ", orderId);
      return true;
    } else {
      console.error("Order not found");
      return false;
    }
  } catch (error) {
    console.error("Error deleting order: ", error);
  }
};
