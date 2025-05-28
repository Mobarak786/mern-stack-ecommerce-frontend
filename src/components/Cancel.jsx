import React from "react";
import { useNavigate } from "react-router-dom";

const Cancel = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-red-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Payment Cancelled
        </h2>
        <p className="text-gray-700 mb-6">
          Your payment was cancelled or failed. You can try again later.
        </p>
        <button
          onClick={() => navigate("/")}
          className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Cancel;
