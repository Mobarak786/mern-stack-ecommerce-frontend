import React from "react";
import { ShoppingCart } from "lucide-react";
import { SkeletonCard } from "./SkeletonCard";

export const ProductCard = ({ product, onCheckout, isLoading, loadingId }) => {
  return (
    <div className="mt-10 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square bg-gray-100 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.productName}
          className="object-cover w-full h-full hover:scale-70 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{product.productName}</h3>
        <p className="text-2xl font-bold text-green-600 mb-3">
          ${product.price}
        </p>
        <button
          onClick={() => onCheckout(product)}
          disabled={isLoading && loadingId === product._id}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-colors"
        >
          {isLoading && loadingId === product._id ? (
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
          ) : (
            <ShoppingCart className="w-4 h-4" />
          )}
          {isLoading && loadingId === product._id
            ? "Creating checkout..."
            : "Buy Now"}
        </button>
      </div>
    </div>
  );
};
