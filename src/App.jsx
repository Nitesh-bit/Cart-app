import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import { CartProductProvider } from "./context/CartProductContext";

function App() {
  return (
    <CartProductProvider>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<ProductPage />} />
          <Route path="/cart" exact element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </CartProductProvider>
  );
}

export default App;
