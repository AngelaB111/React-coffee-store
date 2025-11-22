import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import roastImg from "../assets/beans.jpg";

function About() {
  return (
    <div className="bg-[#faf7f2] text-[#513525] ">
      <Navbar />
      <div className="text-center bg-[#faf7f2]  text-[#513525]">
        <h1 className="text-5xl font-semibold ">Our Story</h1>
        <p className="mt-4 text-lg font-light">
          Brewing Joy, One Cup at a Time
        </p>
      </div>

      <section className="px-10 md:px-36 py-16 flex flex-col md:flex-row items-center gap-10">
        <img
          src={roastImg}
          alt="Roasting Beans"
          className="rounded-xl shadow-lg w-full md:w-1/2 object-cover"
        />

        <div className="md:w-1/2 text-[#4a3728]">
          <h2 className="text-3xl font-semibold mb-4">
            The Heart of Our Coffee
          </h2>
          <p className="leading-relaxed text-lg text-[#816148]">
            Founded with a passion for perfecting every cup, Coffee O’Clock
            began as a small dream fueled by big flavors.
            <br />
            <br />
            Our mission is simple: deliver freshly brewed joy using responsibly
            sourced beans, roasted daily with care. From our cozy beginnings to
            our expanding menu, we’re committed to quality, community, and the
            love of great coffee.
          </p>
        </div>
      </section>

      <section className="bg-[#513525] px-10 md:px-36 py-16">
        <h2 className="text-3xl font-semibold text-center text-[#faf7f2] mb-10">
          Our Journey
        </h2>

        <div className="space-y-8 border-l-4 border-[#faf7f2] pl-6 ml-4">
          <div>
            <h3 className="text-xl font-semibold text-[#faf7f2]">
              2020 — Founded
            </h3>
            <p className="text-[#f6dfb9]">
              Our coffee shop first opened its doors, serving freshly brewed
              classics.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#faf7f2]">
              2021 — Roasted Our Own Beans
            </h3>
            <p className="text-[#f6dfb9]">
              We began roasting in-house to guarantee unmatched freshness and
              flavor.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#faf7f2]">
              2022 — Online Delivery Launched
            </h3>
            <p className="text-[#f6dfb9]">
              Bringing our coffee right to your doorstep with fast, reliable
              delivery.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
