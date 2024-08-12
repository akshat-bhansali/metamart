import { addDoc, collection, getDocs, updateDoc, query, where } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import firebase_app, { auth, db } from "./firebaseApp";

const user = auth.currentUser;
const cartCollection = collection(db, 'cart');

export const addItemToCart = async (item,qty) =>
{
    try {
        const docRef = await addDoc(cartCollection, {
          userId: user.uid,
          userEmail: user.email,
          item: item,   
          qty: qty,
          status : "Order Placed",
          pay_status : "Not Paid",
          pay_url : ""
        });
        console.log("Order added with ID: ", docRef.id);
        return docRef.id; 
      } catch (error) {
        console.error("Error adding order: ", error);
      }
}

export const updateItem = async (order) =>
{
    try {
        const docRef = await updateDoc(cartCollection, order);
        console.log("Order updated with ID: ", docRef.id);
        return docRef.id; 
      } catch (error) {
        console.error("Error updating order: ", error);
      }
}

export const getCartDetails = async () =>
{
    const querySnapshot = await getDocs(query(cartCollection,where('userId','==',user.uid)));
    const temporaryArr = [];
    querySnapshot.forEach((doc) => {
        temporaryArr.push(doc.data());
    });
    return temporaryArr;
};
  