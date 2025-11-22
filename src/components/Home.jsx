import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import cup from "../assets/cup2.png";
import frappe from "../assets/greek-frappe.jpg";
import espresso from "../assets/espresso.jpg";
import latte from "../assets/latte.jpg";
import beans from "../assets/beans.jpg";
import delivery from "../assets/deliv.png";
import roast from "../assets/roast.jpg";

function Home() {
  return (
    <div>
      <div className="bg-[#774b31] min-h-screen relative overflow-hidden text-white">
        <Navbar />

        <div className="flex flex-col md:flex-row items-center justify-between px-10 md:px-36 pt-20 md:pt-32">
          <div className="text-center md:text-left md:max-w-lg">
            <h1 className="text-white text-5xl md:text-7xl font-extralight ">
              Great coffee for <br /> some joy
            </h1>
            <p className="text-white text-lg md:text-2xl font-light mt-6">
              Start your day with a freshly brewed coffee <br /> and a little
              joy
            </p>

            <Link to="/menu">
              <button className="mt-8 bg-white text-[#774b31] px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                Shop Now
              </button>
            </Link>
          </div>

          <div className="relative mt-10 md:mt-0">
            <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 w-80 h-80 bg-white rounded-full blur-3xl opacity-40"></div>
            <img src={cup} alt="cup" className="relative w-64 h-72" />
          </div>
        </div>

        <section className="px-10 md:px-36 py-20 mt-24 bg-[#ffffff] text-[#774b31]">
          <h2 className="text-4xl font-semibold mb-10 text-center">
            Featured Coffees
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <img
                src={latte}
                alt="Ice Latte"
                className="ml-6 h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Ice Latte</h3>
              <p className="text-gray-700 mb-4">3.0$</p>
              <Link to="/product/latte">
                <button className="bg-[#774b31] text-white px-4 py-2 rounded hover:bg-[#633628] transition">
                  View Details
                </button>
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <img
                src={espresso}
                alt="espresso"
                className="ml-12 h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">espresso</h3>
              <p className="text-gray-700 mb-4">2.0$</p>
              <Link to="/product/espresso">
                <button className="bg-[#774b31] text-white px-4 py-2 rounded hover:bg-[#633628] transition">
                  View Details
                </button>
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <img
                src={frappe}
                alt="Greek Frappe"
                className="ml-5 h-52 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Greek Frappe</h3>
              <p className="text-gray-700 mb-4">4.0$</p>
              <Link to="/product/frappe">
                <button className="bg-[#774b31] text-white px-4 py-2 rounded hover:bg-[#633628] transition">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="px-10 md:px-36 py-20 bg-[#774b31] text-white">
          <h2 className="text-4xl font-semibold mb-10 text-center">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <div className="w-20 h-20 mx-auto mb-4 bg-black rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={beans}
                  alt="Fresh Beans"
                  className="w-full h-full object-cover opacity-70"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fresh Beans</h3>
              <p>
                Only the freshest coffee beans roasted daily for maximum flavor.
              </p>
            </div>

            <div>
              <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={delivery}
                  alt="Fast Delivery"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p>
                Get your coffee delivered to your doorstep quickly and safely.
              </p>
            </div>

            <div>
              <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={roast}
                  alt="Roasted Daily"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Roasted Daily</h3>
              <p>
                Freshly roasted every day to bring out the perfect aroma and
                taste.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
