import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductGrid from "./ProductGrid";


function Menu() {
  return (
    <div className="bg-[#faf7f2] min-h-screen">
      <Navbar />
      <ProductGrid />
      <Footer />
    </div>
  );
}

export default Menu;
