import { ProductCard } from "./ProductCard";
import { PRODUCTS } from "../../Utils/Products";
import { Footer } from "./Footer";

// Home Component
export const Home = ({ onCheckout, isLoading, loadingId }) => (
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
      {PRODUCTS.map((product) => (
        <ProductCard
          key={product.id}
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
