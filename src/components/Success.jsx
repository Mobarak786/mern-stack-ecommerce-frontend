import React, { useState, useEffect } from "react";
import { api } from "../api/index";
import { Link } from "react-router-dom";

const Success = () => {
  const [order, setOrder] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = new URL(window.location.href);
    const sessionId = url.searchParams.get("session_id");
    const productId = url.searchParams.get("product_id");

    if (sessionId && productId) {
      const confirmOrder = async () => {
        try {
          const result = await api.confirmOrder(sessionId, productId);
          if (result.success) {
            setOrder(result.order);

            // Clean URL and redirect after delay
            window.history.replaceState({}, "", "/success");
            // setTimeout(() => navigate("/orders"), 5000);
          } else {
            setError("Failed to confirm order.");
          }
        } catch (err) {
          setError("Something went wrong.");
        }
      };

      confirmOrder();
    } else {
      setError("Missing payment details in URL.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold text-center mb-4">
          {order
            ? "✅ Order Confirmed!"
            : error
            ? "❌ Error"
            : "⏳ Processing..."}
        </h2>
        {error && <p className="text-red-600 text-center">{error}</p>}
        {order && (
          <div className="flex flex-col justify-center items-center ">
            <p>
              <strong>ID:</strong> ${order._id}
            </p>
            <p>
              <strong>Product:</strong> {order.productName}
            </p>
            <p>
              <strong>Price:</strong> {order.amount}
            </p>
            <p>
              <strong>Status:</strong> {order.status}
            </p>
            <Link to={"/orders"}>
              <button className="p-2 mt-3 bg-green-500 text-white rounded-xl">
                Go to orders section
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Success;
