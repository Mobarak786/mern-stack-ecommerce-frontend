// components/Header.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function Header({ currentTab, setCurrentTab }) {
  const navigate = useNavigate();

  const handleRoute = () => {
    setCurrentTab("orders");
    navigate("/orders");
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">TechStore</span>
          </div>
          <nav className="flex space-x-8">
            <button
              onClick={() => {
                setCurrentTab("home");
                navigate("/");
              }}
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                currentTab === "home"
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Home
            </button>
            <button
              onClick={handleRoute}
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                currentTab === "orders"
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Orders
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
