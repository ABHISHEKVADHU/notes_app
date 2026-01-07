import React from "react";

const products = [
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Mobile", price: 25000 },
  { id: 3, name: "Headphones", price: 3000 },
];

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🛒 Simple E-Commerce Store</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              width: "200px",
              borderRadius: "8px",
            }}
          >
            <h3>{product.name}</h3>
            <p>₹ {product.price}</p>
            <button
              style={{
                background: "green",
                color: "white",
                border: "none",
                padding: "8px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

