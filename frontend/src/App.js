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
import React from "react";

const products = [
  {
    id: 1,
    name: "Apple MacBook Air",
    price: 85000,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    id: 2,
    name: "iPhone 14",
    price: 72000,
    image:
      "https://images.unsplash.com/photo-1664478546384-d57ffe74a7b9",
  },
  {
    id: 3,
    name: "Sony Headphones",
    price: 4999,
    image:
      "https://images.unsplash.com/photo-1518443895471-1c7fda8a7b7d",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 6999,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 5,
    name: "Wireless Mouse",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 2999,
    image:
      "https://images.unsplash.com/photo-1585386959984-a41552231693",
  },
];

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>🛒 Online E-Commerce Store</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />

            <h3 style={{ margin: "10px 0" }}>{product.name}</h3>
            <p style={{ fontWeight: "bold" }}>₹ {product.price}</p>

            <button
              style={{
                background: "#28a745",
                color: "white",
                border: "none",
                padding: "10px",
                width: "100%",
                cursor: "pointer",
                borderRadius: "5px",
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

