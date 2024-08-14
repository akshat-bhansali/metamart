"use client";
import { chat, resolveQuery } from "@/chat/chat";
import { addItemToCart, getCartDetails } from "@/components/Cart/cart";

export default function Test() {

  return (
    <div className="flex flex-col">
    <button onClick={()=>{
        // resolveQuery("I want to buy a phone can you tell me the available options in your store ?")
        addItemToCart({name:'iPhone',model:'15 Pro',price:1000},2)
    }}>Add Element</button>
    <button onClick={async ()=>{
        console.log("Here are details ",await getCartDetails());
    }}>Show Elements</button>

    </div>
  );
}
