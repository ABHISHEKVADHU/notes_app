import React, { useState, useEffect } from "react";

/* ===========================
   PRODUCT DATA
=========================== */
const PRODUCTS = [
  {
    id: 1,
    name: "MacBook Air M1",
    price: 85000,
    category: "Laptop",
    image:
      "https://rukminim2.flixcart.com/image/416/416/kruyw7k0/computer/n/d/w/na-thin-and-light-laptop-apple-original-imag5jt7zpmhsrpm.jpeg",
  },
  {
    id: 2,
    name: "iPhone 14",
    price: 72000,
    category: "Mobile",
    image:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/d/9/-original-imaghx9qkugtbfrn.jpeg",
  },
  {
    id: 3,
    name: "Boat Headphones",
    price: 4999,
    category: "Accessories",
    image:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/j/q/1/-original-imaghbdup9jbrdzh.jpeg",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 6999,
    category: "Accessories",
    image:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/8/x/0/-original-imagkqcqz6bg3zfy.jpeg",
  },
];

/* ===========================
   HEADER
=========================== */
function Header({ cartCount, search, setSearch }) {
  return (
    <div style={styles.header}>
      <h2>🛍 Flipkart DevOps</h2>
      <input
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.search}
      />
      <div>🛒 {cartCount}</div>
    </div>
  );
}

/* ===========================
   PRODUCT CARD
=========================== */
function ProductCard({ product, onAdd }) {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h4>{product.name}</h4>
      <p style={styles.price}>₹ {product.price}</p>
      <span style={styles.category}>{product.category}</span>
      <button style={styles.btn} onClick={() => onAdd(product)}>
        Add to Cart
      </button>
    </div>
  );
}

/* ===========================
   CART
=========================== */
function Cart({ cart, increase, decrease }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div style={styles.cart}>
      <h3>🧺 Cart</h3>
      {cart.length === 0 && <p>No items</p>}

      {cart.map((item) => (
        <div key={item.id} style={styles.cartItem}>
          <span>{item.name}</span>
          <div>
            <button onClick={() => decrease(item.id)}>-</button>
            <span style={{ margin: "0 8px" }}>{item.qty}</span>
            <button onClick={() => increase(item.id)}>+</button>
          </div>
          <span>₹ {item.price * item.qty}</span>
        </div>
      ))}

      <h4>Total: ₹ {total}</h4>
    </div>
  );
}

/* ===========================
   MAIN APP
=========================== */
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setProducts(PRODUCTS);
  }, []);

  const addToCart = (product) => {
    const found = cart.find((i) => i.id === product.id);
    if (found) {
      setCart(
        cart.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const increase = (id) => {
    setCart(
      cart.map((i) =>
        i.id === id ? { ...i, qty: i.qty + 1 } : i
      )
    );
  };

  const decrease = (id) => {
    setCart(
      cart
        .map((i) =>
          i.id === id ? { ...i, qty: i.qty - 1 } : i
        )
        .filter((i) => i.qty > 0)
    );
  };

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Header
        cartCount={cart.length}
        search={search}
        setSearch={setSearch}
      />

      <div style={styles.grid}>
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={addToCart} />
        ))}
      </div>

      <Cart cart={cart} increase={increase} decrease={decrease} />
    </div>
  );
}

/* ===========================
   STYLES
=========================== */
const styles = {
  header: {
    background: "#2874f0",
    color: "#fff",
    padding: 15,
    display: "flex",
    alignItems: "center",
    gap: 10,
    justifyContent: "space-between",
  },
  search: {
    padding: 6,
    width: 250,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 20,
    padding: 20,
  },
  card: {
    border: "1px solid #ddd",
    padding: 15,
    borderRadius: 8,
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    height: 180,
    objectFit: "contain",
  },
  price: {
    fontWeight: "bold",
    color: "#388e3c",
  },
  category: {
    fontSize: 12,
    color: "#555",
  },
  btn: {
    background: "#ff9f00",
    border: "none",
    padding: 8,
    marginTop: 10,
    cursor: "pointer",
    fontWeight: "bold",
  },
  cart: {
    borderTop: "2px solid #000",
    padding: 20,
  },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 8,
  },
};

export default App;

