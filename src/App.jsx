// src/App.jsx
import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import HomePage from "./pages/HomePage";
import InterfacePage from "./pages/InterfacePage";
import "./App.css"; // File css global nếu cần
import CustomFooter from "./components/layout/Footer";

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <AppHeader />
        <Content>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/giao-dien" element={<InterfacePage />} />
          </Routes>
        </Content>
        <CustomFooter />
      </Layout>
    </Router>
  );
}

export default App;
