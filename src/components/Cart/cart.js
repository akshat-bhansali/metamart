// Helper functions for local storage
const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Function to add an item to the cart
export const addItemToCart = (item, qty) => {
  console.log("Entered the function !")
  try {
    const cart = getCartFromLocalStorage();
    let flag = false;
    let obj;
    cart.filter((value)=>value.status==0).forEach((order)=>
    {
      if(order.item.id == item.id)
      {
        flag = true;
        obj = order;
      
      }
    })
    if(flag)
    {
      let temp = Number(obj.qty);
      obj.qty=temp+1;
      console.log("Order already existed !", obj)
      updateItem(obj);
      return;
    }
    const newOrder = {
      id: Date.now().toString(), // Generate a unique ID for the order
      item: item,
      qty: qty,
      status: 0,
      // 0 -> Order Placed
      // 1 -> Completed
      // 2 -> Canceled
      paid: false,
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

export const checkoutAll = () => {
  try {
    const cart = getCartFromLocalStorage();
    saveCartToLocalStorage(
      cart.map((order)=>
        {
          if(order.status)return order;
          order.status = 1;
          order.paid = 1;
          return order;
        }
      
      )
    
    )
  } catch (error) {
    console.error("Error updating order: ", error);
  }
};

// Function to get cart details
export const getCartDetails = (status=null) => {
  try {
    const cart = getCartFromLocalStorage();
    console.log("Cart ",cart);
    if(status!=null)return cart.filter((v)=>v.status == status)
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