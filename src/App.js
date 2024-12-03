import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header"; // Phần Header giữ nguyên như cũ

// Các trang của bạn
import HomePage from "./pages/HomePage"; // Trang chủ
import ShopPage from "./pages/ShopPage"; // Trang cửa hàng
import MilkPage from "./pages/MilkPage"; // Trang sữa cho bé
import ClothesPage from "./pages/ClothesPage"; // Trang quần áo
import ToysPage from "./pages/ToysPage"; // Trang đồ chơi
import CartPage from "./pages/CartPage"; // Trang giỏ hàng

function App() {
  return (
    <Router>
      <Header />{" "}
      {/* Header giữ nguyên như cũ, hiển thị trên tất cả các trang */}
      <Routes>
        <Route path="/" element={<HomePage />} />{" "}
        {/* Trang chủ cũ vẫn làm trang chính */}
        <Route path="/shop" element={<ShopPage />} /> {/* Trang cửa hàng */}
        <Route path="/milk" element={<MilkPage />} /> {/* Trang sữa cho bé */}
        <Route path="/clothes" element={<ClothesPage />} />{" "}
        {/* Trang quần áo */}
        <Route path="/toys" element={<ToysPage />} /> {/* Trang đồ chơi */}
        <Route path="/cart" element={<CartPage />} /> {/* Trang giỏ hàng */}
      </Routes>
    </Router>
  );
}

export default App;
