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

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Navbar />
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
            element={<Store category="fans store" />}
          />
          <Route path="/product/:id" element={<Product />} />
          {/* Will be protected route by user login or not */}
          <Route path="/cart/:userid" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <div>
          <Newsletter />
          <Footer />
        </div>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
