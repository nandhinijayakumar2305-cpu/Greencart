# 🛒 GreenCart

A full-stack e-commerce grocery platform — built end-to-end, from database schema to payment gateway to deployment.

**Live Demo:** https://greencart-alpha-opal.vercel.app
**Backend API:** https://greencart-backend-green.vercel.app

---

## 📖 About

GreenCart is a MERN-stack grocery delivery platform inspired by apps like BigBasket and Instacart. It supports two user roles — **buyers** who shop and place orders, and **sellers** who manage products and fulfill orders — with a clean, responsive interface for both.

---

## ✨ Features

- 🔐 **Authentication** — JWT-based auth with role-based access (Buyer, Seller, Admin)
- 🛍️ **Shopping Cart** — Add/remove items, live quantity updates, real-time subtotal calculation
- 📍 **Address Management** — Dynamic shipping address form with validation
- 💳 **Payments** — Stripe integration supporting card payments and Cash on Delivery
- 👨‍💼 **Seller Dashboard** — Add and manage products with images, pricing, offer price, and category
- ☁️ **Image Uploads** — Cloudinary integration for fast, reliable product image storage
- 📦 **Order Tracking** — Real-time order status updates (Order Placed → Shipped → Delivered)
- 🔍 **Product Discovery** — Category-based filtering and search
- 📱 **Responsive Design** — Fully functional across mobile, tablet, and desktop

---

## 🛠️ Tech Stack

**Frontend**
- React
- Vite
- Tailwind CSS
- Context API (state management)
- Axios

**Backend**
- Node.js
- Express.js
- MongoDB with Mongoose ODM
- JWT Authentication

**Third-Party Services**
- Stripe (payments)
- Cloudinary (image storage)

**Deployment**
- Frontend: Vercel
- Backend: Vercel

---

## 📂 Project Structure

```
Greencart/
├── client/     # React frontend
├── server/     # Express backend, API routes, models
└── .gitignore
```

---

## 🔌 API Routes

| Route | Purpose |
|---|---|
| `/api/user` | User registration, login, auth |
| `/api/seller` | Seller login & seller-specific actions |
| `/api/product` | Add, list, and manage products |
| `/api/cart` | Cart operations |
| `/api/address` | Add and fetch shipping addresses |
| `/api/order` | Place orders, view order history |
| `/stripe` | Stripe webhook endpoint for payment confirmation |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account (or local MongoDB instance)
- Stripe account (for payment keys)
- Cloudinary account (for image upload keys)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/nandhinijayakumar2305-cpu/Greencart.git
   cd Greencart
   ```

2. Install backend dependencies
   ```bash
   cd server
   npm install
   ```

3. Install frontend dependencies
   ```bash
   cd ../client
   npm install
   ```

4. Set up environment variables

   Create a `.env` file inside `server/` with:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_key
   CLOUDINARY_API_SECRET=your_cloudinary_secret
   ```

5. Run the development servers
   ```bash
   # In server/ (runs with nodemon)
   npm run server

   # In client/
   npm run dev
   ```

---

## 🧩 Key Challenges Solved

- Designing a product/order schema that scales cleanly across categories and inventory
- Integrating Cloudinary for seamless image uploads from the seller dashboard
- Handling Stripe webhook events securely for reliable payment confirmation
- Persisting cart state correctly across page reloads and sessions

---

## 📬 Contact

**Nandhini J**
Aspiring Full-Stack Developer | React · Node.js · MongoDB

- 💼 LinkedIn: [linkedin.com/in/nandhinij23](https://linkedin.com/in/nandhinij23)
- 📧 Email: nandhinijayakumar2305@gmail.com
- 🔗 GitHub: [github.com/nandhinijayakumar2305-cpu](https://github.com/nandhinijayakumar2305-cpu)

Open to full-stack developer opportunities — feel free to connect or reach out with feedback!
