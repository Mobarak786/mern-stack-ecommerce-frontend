import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import { Home } from "./components/Home";
import { Orders } from "./components/Orders";
import { Toast } from "./components/Toast";
import Success from "./components/Success";
import { api } from "./api/index";
import Header from "./components/Headers";
import Cancel from "./components/Cancel";

export default function ECommerceApp() {
  const [currentTab, setCurrentTab] = useState("home");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingId, setLoadingId] = useState(null);
  const [toast, setToast] = useState({
    isVisible: false,
    message: "",
    type: "success",
  });

  // checkout route to buy product
  const handleCheckout = async (product) => {
    setIsLoading(true);
    setLoadingId(product.id);

    try {
      const { checkoutUrl } = await api.checkout(product.id);
      window.location.href = checkoutUrl;
    } catch (error) {
      console.error("Checkout failed:", error);
      setToast({
        isVisible: true,
        message: "Failed to create checkout session. Please try again.",
        type: "error",
      });
    } finally {
      setIsLoading(false);
      setLoadingId(null);
    }
  };

  const closeToast = () => {
    setToast({ isVisible: false, message: "", type: "success" });
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* header component */}
        <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onCheckout={handleCheckout}
                  isLoading={isLoading}
                  loadingId={loadingId}
                />
              }
            />
            <Route path="/orders" element={<Orders />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
          </Routes>
        </main>

        {/* Toast */}
        <Toast
          message={toast.message}
          isVisible={toast.isVisible}
          onClose={closeToast}
          type={toast.type}
        />
      </div>
    </Router>
  );
}
