const API_BASE_URL_PRODUCTION =
  "https://mern-stack-ecommerce-backend-production.up.railway.app/api";

const API_BASE_URL_DEVELOPMENT = "http://localhost:3000/api";

export const api = {
  checkout: async (productId) => {
    const response = await fetch(
      `${API_BASE_URL_PRODUCTION}/checkout/${productId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to create checkout session");
    }

    return response.json();
  },

  confirmOrder: async (sessionId, productId) => {
    const response = await fetch(
      `${API_BASE_URL_PRODUCTION}/order?session_id=${sessionId}&product_id=${productId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to confirm order");
    }

    return response.json();
  },

  getOrders: async () => {
    const response = await fetch(`${API_BASE_URL_PRODUCTION}/orders`);

    if (!response.ok) {
      throw new Error("Failed to fetch orders");
    }

    return response.json();
  },
  getProducts: async () => {
    const response = await fetch(`${API_BASE_URL_PRODUCTION}/allProducts`);

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    return response.json();
  },
};
