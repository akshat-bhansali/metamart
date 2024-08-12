"use client";
import { addItemToCart, getCartDetails } from "@/firebase/cart";

export default function Test() {

  return (
    <div className="flex flex-col">
    <button onClick={()=>{
        addItemToCart({name:'iPhone',model:'15 Pro',price:10000000},2)
    }}>Add Element</button>
    <button onClick={async ()=>{
        console.log("Here are details ",await getCartDetails());
    }}>Show Elements</button>

    </div>
  );
}
