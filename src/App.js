// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header"; // Giả sử bạn đã có Header

// Các trang của bạn
import HomePage from "./pages/HomePage"; // Trang chủ cũ
import NewHomePage from "./pages/NewHomePage"; // Trang chủ mới
import MilkPage from "./pages/MilkPage"; // Trang sữa
import ClothesPage from "./pages/ClothesPage"; // Trang quần áo
import ToysPage from "./pages/ToysPage"; // Trang đồ chơi
import CartPage from "./pages/CartPage"; // Trang giỏ hàng

function App() {
  return (
    <Router>
      <Header /> {/* Phần Header sẽ luôn hiển thị trên mọi trang */}
      <Routes>
        <Route path="/new-home" element={<NewHomePage />} />{" "}
        <Route path="/" element={<HomePage />} /> {/* Trang chủ cũ */}
        {/* Trang chủ mới */}
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
