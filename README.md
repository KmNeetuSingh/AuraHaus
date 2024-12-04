Here’s the updated **AuraHaus README** with detail# **AuraHaus** ✨🛍️  
Your one-stop digital shop for everything stylish, trendy, and convenient! Built to deliver an unmatched shopping experience, AuraHaus combines speed, security, and cool tech to keep you coming back for more.

---

## **Features** 🚀  

### **1. Authentication & Authorization 🔐**  
- **JWTs for Secure Login:** Login like a boss! We use **JSON Web Tokens (JWTs)** to secure your account.  
  - Tokens are stored safely as HTTP-only cookies (because security is 🔑).  
- **Role-based Access:**  
  - Regular users shop 🛒, admins rule the backend 👑.  

### **2. Frontend Magic 🪄**  
- **Dynamic Routing with React Router:** Easy navigation for users between login, cart, and product pages.  
- **State Management with Redux Toolkit:** Handles user authentication, cart items, and loading states like a pro.  
- **Modern UI with Chakra UI:** Built for responsiveness, accessibility, and sleek designs.  
- **Real-Time Loading States:** User-friendly indicators to keep interactions smooth.  
- **Reusable Components:** All pages share efficient, scalable React components for faster development.  

### **3. Cart That Gets You 🛒**  
- Add, remove, or update items with a click.  
- Cart info is synced in real time using **Redux Toolkit**, so no more “oops, my items disappeared” moments.  
- Persistent storage keeps your cart even when you refresh.  

### **4. Backend Hosted on Render 🌐**  
- Our backend is served up fresh via **Render**. It might need a second to wake up on the first go (we all need our beauty sleep 💤), but after that, it's full steam ahead.

### **5. Smooth UX/UI 🎨**  
- Styled with **Chakra UI** for those crisp, modern vibes.  
- Loading states and transitions handled like a pro with **Redux**.  

---

## **Tech Stack** 💻  

### **Frontend**  
- **React.js** for a fast, reactive experience.  
- **Redux Toolkit** for seamless state management.  
- **Chakra UI** for a visually stunning and accessible design system.  
- **React Router** for easy and efficient navigation.  

### **Backend**  
- **Node.js + Express.js** for robust API endpoints.  
- **MongoDB** to store your data securely.  
- **JWTs** for cutting-edge authentication.  
- **bcrypt** for secure password hashing.  

---

## **Frontend Overview** 🎨  

### **Pages**  
1. **Home Page**:  
   - Features a catalog of products fetched from the backend.  
   - Dynamic cards for each product with key details like name, price, and an **Add to Cart** button.  

2. **Login/Signup Pages**:  
   - Fully functional forms for authentication.  
   - Integrated with JWTs to log users in securely.  

3. **Cart Page**:  
   - Displays all added items with real-time syncing.  
   - Supports **item removal**, **quantity updates**, and a **checkout preview**.  

4. **404 Page**:  
   - Designed for error handling with a witty message and navigation options.

---

### **Core Features of Frontend** 🌟  
- **Redux Toolkit Integration**:  
  - Manages global states like user login, cart items, and loading indicators.  
  - Simplifies asynchronous tasks with `createAsyncThunk` for API calls.  

- **Responsive UI with Chakra UI**:  
  - Custom themes for buttons, cards, and modals to maintain consistency.  
  - Mobile-first design ensures the app looks perfect on all devices.  

- **React Router**:  
  - Configured routes for smooth navigation:  
    - `/`: Home Page  
    - `/login`: Login Page  
    - `/cart`: Cart Page  

- **Loading States**:  
  - Shimmer placeholders keep the UI engaging while data loads.  

- **Reusable Components**:  
  - **Card Components**: Used for displaying products across the app.  
  - **Form Components**: Modular input fields for authentication pages.  

---

## **Backend Overview** ⚙️  

### **Authentication Flow** 🔓  
1. **Signup & Login**:  
   - Account creation with encrypted passwords using **bcrypt**.  
   - Secure login with JWT tokens stored as HTTP-only cookies.  

2. **Protected Routes**:  
   - Cart, orders, and other personal data are locked behind authentication.  

3. **Role-based Authorization**:  
   - Admins have exclusive access to manage products.  

### **Cart Management** 🛒  
- Items are stored in MongoDB and synced with the frontend.  
- Backend ensures data integrity with robust validation.

---

## **API Endpoints** 🎯  

### **Authentication**  
- `POST /auth/signup`: Create an account.  
- `POST /auth/login`: Log in and grab a token.  
- `GET /auth/logout`: Logout securely.  

### **Cart Routes**  
- `GET /cart`: Fetch user’s cart.  
- `POST /cart`: Add items to the cart.  
- `PUT /cart/:id`: Update cart items.  
- `DELETE /cart/:id`: Remove items from the cart.  

### **Products**  
- `GET /products`: Fetch all products.  
- `GET /products/:id`: Fetch details of a specific product.  

---

## **Coming Soon** 🔮  
✨ **Google Authentication**: Seamless login with your Google account.  
✨ **Payment Gateways**: Add your favorite items to the cart and pay in style.  
✨ **Admin Dashboards**: Monitor and manage store activities efficiently.  
✨ **Wishlist Integration**: Save items you love for later.  

---

## **How to Run Locally** 🌈  

1. Clone this fire project:  
   ```bash
   git clone https://github.com/yourusername/aurahaus.git
   cd aurahaus
   ```

2. Install the magic:  
   ```bash
   npm install
   cd client && npm install
   cd ../server && npm install
   ```

3. Add your secrets:  
   Create a `.env` file in the root directory and add:  
   ```env
   PORT=5000
   MONGO_URL=<Your MongoDB URL>
   JWT_SECRET=<Your Secret Key>
   ```

4. Fire it up 🔥:  
   ```bash
   npm run dev
   ```

5. Open your browser and head to:  
   [http://localhost:3000](http://localhost:3000)  

---

## **Deployment** 🌍  
- **Frontend**: Hosted on **Vercel** for blazing-fast performance.  
- **Backend**: Deployed on **Render** (needs a second to wake up, but then runs smoothly).  

---

AuraHaus isn’t just an app; it’s a lifestyle.