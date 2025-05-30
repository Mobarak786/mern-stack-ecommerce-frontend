import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { Footer } from "./Footer";
import { api } from "../api";

// Home Component
export const Home = ({ onCheckout, isLoading, loadingId }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await api.getProducts(); // Wait for the API response
        setProducts(data); // Set the fetched products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-full h-screen ">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">My Store </h1>
        <p className="text-xl text-gray-600">
          Discover amazing Electronics products
        </p>
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg inline-block">
          <p className="text-green-800 font-medium">
            🎉 Test Mode: All payments are free!
          </p>
          <p className="text-green-600 text-sm">
            Use test card: 4242 4242 4242 4242
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onCheckout={onCheckout}
            isLoading={isLoading}
            loadingId={loadingId}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};
