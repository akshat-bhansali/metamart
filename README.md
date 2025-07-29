
<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<h1 align="center"> MetaMart – Metaverse Electronics Store</h1>

<div align="center">
  <a href="https://metamart-demo.vercel.app">
    <img src="assets/logo-metaverse.gif" alt="MetaMart Logo" width="800" height="400">
  </a>
</div>

<p align="center">
  <i>An immersive 3‑D shopping experience where gaming meets e‑commerce.</i>  
  <br />
  <a href="https://youtu.be/your-demo-link"><strong>Watch the Demo »</strong></a>
  <br />
  <br />
  <a href="https://github.com/akshat-bhansali/metamart/issues">Report Bug</a>
  ·
  <a href="https://github.com/akshat-bhansali/metamart/issues">Request Feature</a>
</p>

<!-- TABLE OF CONTENTS -->
<details>
  <summary><h2>Table of Contents</h2></summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#mission">Mission</a></li>
    <li><a href="#key-features">Key Features</a></li>
    <li><a href="#visuals">Visual Representation</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation Instructions</a></li>
        <li><a href="#example">Example Usage</a></li>
      </ul>
    </li>
    <li><a href="#folder-structure">Folder Structure</a></li>
    <li><a href="#team">Team</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

---

<h2 id="about-the-project">About The Project</h2>

MetaMart transforms traditional e‑commerce into a **metaverse‑style showroom**.  
Customers **walk, sprint, jump, and dance** through a WebGL store, inspect high‑fidelity Blender models, pop any item into **AR Quick‑Look**, and check out with **Razorpay**—all while chatting with a **Gemini AI** assistant for real‑time recommendations.

<h2 id="mission">Mission</h2>

> **Make online tech shopping feel like visiting a flagship store—fun, accessible, and inclusive for everyone.**

We push the boundaries of Web 3‑D, accessibility (color‑blind modes), and conversational AI so that any electronics retailer can deliver a next‑gen shopping journey.

---

##  Key Features

### **1. 3‑D Storefront**
Built using **React Three Fiber** and **drei**, MetaMart offers a lifelike 3‑D retail environment where users can walk, explore aisles, and interact with products just like in a physical store. Navigation works with keyboard (`W`, `A`, `S`, `D`, `SHIFT`, `SPACE`), mouse, or touch. Real-time lighting, shadows, and model animations create a dynamic experience that blends gaming with online shopping.


<img width="1512" height="893" alt="Screenshot 2025-07-30 at 12 33 28 AM" src="https://github.com/user-attachments/assets/ba9a6d21-8756-45ad-b06a-21459c71b995" />

---

### **2. AR View**
With just one tap on the **“View in AR”** button, users can preview any product in real-world space using **Quick Look on iOS** or **Scene Viewer on Android**. Models appear at full scale, allowing shoppers to examine the design, size, and aesthetics in their own surroundings. This feature enhances decision-making and bridges the gap between digital viewing and physical context.

![AR View](assets/placeholder-ar-view.png)

---

### **3. Gemini AI Assistant**
Powered by **Google Gemini 1.5-Flash**, this chatbot acts like a smart sales associate. It interprets natural language queries, finds relevant gadgets from the product catalog, and replies with structured JSON (`{ id, reply }`). The UI then renders product cards with videos, specs, and prices. This conversational approach makes shopping intuitive, personalized, and fast—especially for users seeking specific features or budgets.

![Gemini AI Assistant](assets/placeholder-ai-assistant.png)

---

### **4. Razorpay Integration**
MetaMart integrates **Razorpay** to enable quick, secure payments. When a user checks out, the backend generates a payment order using a **Next.js Route Handler** (`/api/create-order`), and the Razorpay Checkout.js widget handles cards, UPI, and wallets. This seamless integration ensures reliability and supports real-time transaction tracking, giving users confidence and convenience while completing their purchases.

![Razorpay Integration](assets/placeholder-razorpay.png)

---

### **5. Color‑Blind Modes**
To ensure full accessibility and inclusivity, MetaMart offers built-in support for three major types of color vision deficiency: **Protanopia**, **Deuteranopia**, and **Tritanopia**. Users can switch modes using an intuitive toggle control. Behind the scenes, custom **CSS filters** dynamically enhance contrast and adjust color palettes, making all UI elements and visuals readable—without altering the layout or design experience for other users.


<img width="1512" height="893" alt="Screenshot 2025-07-30 at 12 49 16 AM" src="https://github.com/user-attachments/assets/968a5787-239b-4a26-8915-3bcecafd6821" />

---

### **6. Persistent Cart + Orders**
MetaMart ensures a smooth and consistent experience by storing the user’s **cart and past orders** in `localStorage`. Even after a refresh or accidental exit, all data is retained. Users can view their previous purchases, adjust quantities, and continue shopping without interruptions. All key actions trigger **Toastify** notifications for instant feedback, improving engagement and transparency throughout the shopping flow.


<img width="1512" height="893" alt="Screenshot 2025-07-30 at 12 42 22 AM" src="https://github.com/user-attachments/assets/ea8f529f-cdb9-40d9-bc46-d04ad91d928e" />

---

### **7. Product Customiser**
Some products, like the **Samsung S23**, offer real-time customization features. Users can change the phone's back and body colors using intuitive color swatches. A **live video preview** instantly reflects the chosen combination. This interactive tool enhances personalization, boosts customer confidence, and supports direct purchase or AR viewing for the selected variant—bringing a personalized retail experience to life.


<img width="1512" height="891" alt="Screenshot 2025-07-30 at 12 43 24 AM" src="https://github.com/user-attachments/assets/c6537965-530e-4214-9067-fcd73a06d1df" />

---

### **8. On‑Screen Gamepad**
MetaMart features an **on-screen gamepad** for mobile and tablet users, mirroring traditional `WASD` keyboard controls along with emotes like sprint (`SHIFT`) and dance (`1`, `2`). The buttons are large, touch-friendly, and light up when active, providing tactile feedback. This setup ensures users on touch devices can navigate the store just as effectively as those on desktops.





https://github.com/user-attachments/assets/164a9165-4cc1-4090-952a-a84140d9c71b





---

<h2 id="built-with">Built With</h2>

| Badge | |
|-------|---|
| ![Next.js](https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge) | **App Router 14** |
| ![React Three Fiber](https://img.shields.io/badge/React%20Three%20Fiber-20232a.svg?style=for-the-badge) | WebGL rendering |
| ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC.svg?style=for-the-badge) | Styling |
| ![Ant Design](https://img.shields.io/badge/Ant%20Design-0170FE.svg?style=for-the-badge) | UI components |
| ![Razorpay](https://img.shields.io/badge/Razorpay-0984e3.svg?style=for-the-badge) | Payments |
| ![Google Generative AI](https://img.shields.io/badge/Gemini%20AI-4285F4.svg?style=for-the-badge) | Chatbot |
| ![Blender](https://img.shields.io/badge/Blender-F5792A.svg?style=for-the-badge) | 3‑D asset creation |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<h2 id="getting-started">Getting Started</h2>

These instructions will get a copy running locally for dev and testing.

<h3 id="installation">Installation Instructions</h3>

```bash
# 1 Clone
git clone https://github.com/your‑org/metamart.git
cd metamart

# 2 Install deps
npm install   # or pnpm install

# 3 Create .env.local
cp .env.example .env.local
# Fill:
# NEXT_PUBLIC_GEMINI_API_KEY=XXXXXXXX
# NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_XXXX
# NEXT_PUBLIC_RAZORPAY_KEY_SECRET=your‑secret

# 4 Run dev server
npm run dev
```

Open **http://localhost:3000** — walk into the metaverse!

<h3 id="example">Example Usage</h3>

1. Press **WASD** to move, **SHIFT** to sprint, **1 / 2** to trigger dance emotes.  
2. Click the **🤖 robot** button → ask *“Recommend me a laptop under 60k”* → Gemini returns a product.  
3. Hit **Add to Cart**, then the **🛒** FAB → pay with Razorpay test card.  
4. On mobile, tap **View in AR** to place the device on your desk.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<h2 id="folder-structure">Folder Structure</h2>

```text
metamart/
├── .next/                        # Next.js build output
├── node_modules/                # Project dependencies
├── public/                      # Static assets like images, fonts
├── src/                         # Source code
│   ├── app/
│   │   ├── api/create-order/    # Razorpay order creation route
│   │   │   └── route.js
│   │   ├── metaverse/           # Main metaverse page logic and layout
│   │   │   ├── page.js
│   │   ├── globals.css          # Global CSS (Tailwind)
│   │   ├── layout.js            # Root layout component
│   │   ├── page.js              # Entry route (likely homepage)
│   │   └── productData.jsx      # Static or dynamic product catalog
│   ├── chat/                    # Gemini AI chatbot logic and data
│   │   ├── chat.js
│   │   └── data.json
│   ├── components/              # Reusable UI components
│   │   ├── Cart/                # Cart sidebar, logic, and buttons
│   │   └── ThreeD/              # 3D scene renderer using R3F
│   └── hooks/                   # Custom React Hooks
│       └── useInput.ts          # Keyboard input handler hook
├── .gitignore
├── jsconfig.json
├── next.config.mjs              # Next.js configuration
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tailwind.config.js
├── README.md                    # Project documentation

```

---

###  Environment Variables

| Key | Description |
|-----|-------------|
| `NEXT_PUBLIC_GEMINI_API_KEY` | Google Generative AI API key |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | Razorpay publishable key |
| `NEXT_PUBLIC_RAZORPAY_KEY_SECRET` | Razorpay secret key |

---

###  Code Highlights

#### 1 – Gemini Chat Integration (`chat/gemini.js`)

```js
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

export async function resolveQuery(text) {
  if (!chat) chat = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }).startChat();
  const { response } = await chat.sendMessage(text);
  return JSON.parse(response.text()); // → { id, reply }
}
```

#### 2 – Razorpay Order Handler (`app/api/create-order/route.js`)

```js
const order = await razorpay.orders.create({
  amount: Number(amount) * 100, // convert ₹ → paise
  currency,
  receipt: uuidv4(),
});
return Response.json({ id: order.id, amount: order.amount, currency: order.currency });
```

---

##  Future Prospects

### 1. **Voice Navigation & Voice-Based Shopping**
We aim to integrate voice commands for an even more accessible and intuitive shopping experience. Users will be able to navigate the 3D space, select products, and ask questions using natural language, making the platform hands-free and inclusive for visually impaired or multitasking users.



### 2. **Multi‑User Social Shopping**
A future update will introduce multiplayer support, allowing users to enter the store together, chat via voice or text, and co-shop in real time. This social commerce layer will mimic in-store group shopping experiences, ideal for friends or families comparing gadgets together.



### 3. **Smart Product Comparison Engine**
MetaMart plans to introduce a smart comparison tool powered by AI. When users are unsure between two or more products, the system will generate side-by-side comparisons based on technical specifications, pricing, reviews, and compatibility with user preferences. This will simplify decision-making and help users confidently choose the best gadget for their needs.



### 4. **NFT‑Based Product Ownership & Loyalty Rewards**
MetaMart could incorporate blockchain elements where users receive digital **NFT receipts** or collectibles with each purchase. These NFTs may unlock loyalty rewards, early access to product launches, or even resale features within a secondary marketplace.



### 5. **Full XR (VR + AR) Compatibility**
We envision extending the MetaMart experience to **fully immersive VR headsets** such as Oculus or Apple Vision Pro. With enhanced spatial computing and gesture-based controls, users could browse, inspect, and shop in a hyper-realistic metaverse electronics store from their living room.

---


<h2 id="license">License</h2>

Distributed under the **MIT License**.  
See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
