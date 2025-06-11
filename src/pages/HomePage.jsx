// src/pages/HomePage.jsx
import React from "react";

// Import các section
import Hero from "../components/sections/HeroBanner";
import ServicesByIndustry from "../components/sections/ServicesByIndustry";
import Benefits from "../components/sections/Benefits";
import Features from "../components/sections/Features";
import Services from "../components/sections/Services";
import FAQ from "../components/sections/FAQ";
import Customers from "../components/sections/Customers";
import SoftwareServices from "../components/sections/SoftwareServices";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";
// Import các section khác ở đây...
// import Benefits from '../components/sections/Benefits';
// import Features from '../components/sections/Features';

// Component mẫu cho các section chưa làm
const PlaceholderSection = ({ title }) => (
  <div
    style={{
      padding: "50px 20px",
      textAlign: "center",
      background: "#f9f9f9",
      borderBottom: "1px solid #eee",
    }}
  >
    <h2>{title}</h2>
    <p>Nội dung sẽ được cập nhật sớm.</p>
  </div>
);

const HomePage = () => {
  return (
    <>
      <Hero />
      <ServicesByIndustry />
      <Benefits />
      <Features />
      <Services />
      <FAQ />
      <Customers />
      <SoftwareServices />
      <Contact />
    </>
  );
};

export default HomePage;
