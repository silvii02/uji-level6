import React from "react";
import { Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/HomePage";
import Home1Page from "./pages/Home1Page";
import LoginPage from "./pages/LoginPage";
import MenuPage from "./pages/MenuPage";
import Cart from "./pages/Cart";
import ItemCart from "./pages/ItemCart";
import DaftarPage from "./pages/DaftarPage";
import PaymentPage from "./pages/paymentPage";
import { CartProvider } from "react-use-cart";

//header dan footer


function App(){
  return(
    <div>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/home" Component={Home1Page} />
        <Route path="/LoginPage" Component={LoginPage} />
        <Route path="/MenuPage" Component={MenuPage} />
        <Route path="/Cart" Component={Cart} />
        <Route path="/ItemCart" Component={ItemCart} />
        <Route path="/PaymentPage" Component={PaymentPage} />
        <Route path="/Daftar" Component={DaftarPage} />
      </Routes>
    </div>
  );
  
}<CartProvider />

export default App;