import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Error from "./components/Error";
import Store from "./components/Store";
import Cart from "./components/Cart";
import "./global.css";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Product from "./components/Product";
import { AuthContextProvider } from "./context/auth";
import Login from "./components/Login";
import ProtectLogin from "./components/ProtectLogin";
import { CartContextProvider } from "./context/cart";
import Success from "./components/Success";
import Cancel from "./components/Cancel";
import Checkout from "./components/Checkout";
import ProtectCheckout from "./components/ProtectCheckout";

// For mobile development server -- http://192.168.1.4:8000 -- backend link

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Navbar />
        <CartContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store/all" element={<Store category="all" />} />
            <Route path="/store/shoes" element={<Store category="shoes" />} />
            <Route
              path="/store/clothing"
              element={<Store category="clothing" />}
            />
            <Route
              path="/store/accessories"
              element={<Store category="accessories" />}
            />
            <Route
              path="/store/fanstore"
              element={<Store category="fanstore" />}
            />
            <Route path="/product/:id" element={<Product />} />
            {/* Will be protected route by user login or not */}
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/login"
              element={
                <ProtectLogin>
                  <Login />
                </ProtectLogin>
              }
            />
            <Route
              path="/checkout"
              element={
                <ProtectCheckout>
                  <Checkout />
                </ProtectCheckout>
              }
            />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </CartContextProvider>
        <div>
          <Newsletter />
          <Footer />
        </div>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
