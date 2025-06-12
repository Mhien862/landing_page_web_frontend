// src/App.jsx
import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import HomePage from "./pages/HomePage";
import InterfacePage from "./pages/InterfacePage";
import PricingPage from "./pages/PricingPage";
import ServicesPage from "./pages/ServicesPage";
import CollaborationPage from "./pages/CollaborationPage";
import ContactPage from "./pages/ContactPage";
import AdminDashboard from "./pages/AdminDashboard";
import NewsPage, { NewsDetailPage } from "./pages/NewsPage";
import "./App.css"; // File css global nếu cần
import CustomFooter from "./components/layout/Footer";

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Admin route - không có header và footer */}
          <Route path="/admin" element={<AdminDashboard />} />

          {/* Public routes - có header và footer */}
          <Route
            path="/*"
            element={
              <>
                <AppHeader />
                <Content>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/giao-dien" element={<InterfacePage />} />
                    <Route path="/bang-gia" element={<PricingPage />} />
                    <Route path="/dich-vu" element={<ServicesPage />} />
                    <Route path="/hop-tac" element={<CollaborationPage />} />
                    <Route path="/tin-tuc" element={<NewsPage />} />
                    <Route path="/tin-tuc/:id" element={<NewsDetailPage />} />
                    <Route path="/lien-he" element={<ContactPage />} />
                  </Routes>
                </Content>
                <CustomFooter />
              </>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
