const API_BASE_URL = `http://localhost:3000/api`;

export const api = {
  checkout: async (productId) => {
    const response = await fetch(`${API_BASE_URL}/checkout/${productId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to create checkout session");
    }

    return response.json();
  },

  confirmOrder: async (sessionId, productId) => {
    const response = await fetch(
      `${API_BASE_URL}/order?session_id=${sessionId}&product_id=${productId}`,
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
    const response = await fetch(`${API_BASE_URL}/orders`);

    if (!response.ok) {
      throw new Error("Failed to fetch orders");
    }

    return response.json();
  },
};
