# **AuraHaus** ✨🛍️  
Your one-stop digital shop for everything stylish, trendy, and convenient! Built to deliver an unmatched shopping experience, AuraHaus combines speed, security, and cool tech to keep you coming back for more.

---

## **Features** 🚀  

### **1. Authentication & Authorization 🔐**  
- **JWTs for Secure Login:** Login like a boss! We use **JSON Web Tokens (JWTs)** to secure your account.  
  - Tokens are stored safely as HTTP-only cookies (because security is 🔑).  
- **Role-based Access:**  
  - Regular users shop 🛒, admins rule the backend 👑.

### **2. Cart That Gets You 🛒**  
- Add items to your cart with a click. Remove them? Even easier.  
- Cart info is synced in real time using **Redux Toolkit**, so no more “oops, my items disappeared” moments.  
- Works seamlessly between sessions (because who shops all at once?).

### **3. Backend Hosted on Render 🌐**  
- Our backend is served up fresh via **Render**. It might need a second to wake up on the first go (we all need our beauty sleep 💤), but after that, it's full steam ahead.

### **4. Smooth UX/UI 🎨**  
- Styled with **Chakra UI** for those crisp, modern vibes.  
- Loading states and transitions handled like a pro with **Redux**.  

---

## **Tech Stack** 💻  

### **Frontend**  
- **React.js** for that fast and reactive experience.  
- **Chakra UI** for responsive, sleek designs.  
- **Redux Toolkit** for state management that just works.  

### **Backend**  
- **Node.js + Express.js** for a powerful API engine.  
- **MongoDB** to store your data securely.  
- **JWTs** for cutting-edge authentication.  
- **bcrypt** to hash passwords like a pro hacker (but good).  

---

## **How AuraHaus Works** ⚙️  

### **Authentication Flow** 🔓  
1. **Signup & Login**:  
   - You create an account (or log in like a boss).  
   - We hash your password with **bcrypt** for ultimate security.  
   - A JWT token is sent to your browser for authenticated sessions.  

2. **Protected Routes**:  
   - Wanna access your cart or order history? Log in first!  
   - Admins get exclusive powers like managing products.  

3. **Logout**:  
   - Clears your token and logs you out in style.  

### **Authorization** 🎟️  
Admins can view and manage products, while users get access to their personalized data and shopping cart.  

### **Cart Management** 🛒  
- Built with **Redux** for ultra-fast updates.  
- Backend keeps everything in sync, so you’ll never lose your goodies.  

---

## **API Endpoints** 🎯  

### **Authentication**  
- `POST /auth/signup`: Create an account.  
- `POST /auth/login`: Log in and grab a token.  
- `GET /auth/logout`: Logout like a pro.  

### **Cart Routes**  
- `GET /cart`: Fetch your cart.  
- `POST /cart`: Add items.  
- `PUT /cart/:id`: Update cart items.  
- `DELETE /cart/:id`: Delete items (bye-bye).  

### **Products**  
- `GET /products`: All products, all vibes.  
- `GET /products/:id`: Grab product details.  

---

## **Coming Soon** 🔮  
✨ **Google Authentication** for one-click sign-ins.  
✨ **Payment Gateways** to keep your checkout smoother than butter.  
✨ **Admin Dashboards** because power deserves clarity.  
✨ **Faster Hosting** so Render’s sleepy vibes don’t slow you down.  

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
- Backend: Hosted on **Render** (it naps sometimes, but it’s reliable).  
- Frontend: Deployed on **Vercel** for speed and scalability.  

---

AuraHaus isn’t just a project; it’s a vibe. 💜 Questions or collab ideas? Hit us up! 🛠️  

