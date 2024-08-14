// app/api/create-order/route.js
import Razorpay from 'razorpay';
import { v4 as uuidv4 } from 'uuid';

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  key_secret: process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET,
});

export async function POST(request) {
  try {
    const { amount, currency } = await request.json(); // Amount in smallest unit (e.g., paise)
    // Create an order
    const order = await razorpay.orders.create({
      amount: Number(amount)*100, // Convert amount to paise
      currency,
      receipt: uuidv4(),
    });

    return new Response(JSON.stringify({ id: order.id, currency: order.currency, amount: order.amount }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    return new Response(JSON.stringify({ error: 'Failed to create order' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
}
