import React, { useState, useEffect } from "react";

/* ===========================
   MOCK PRODUCT DATA
=========================== */
const PRODUCTS = [
  { id: 1, name: "MacBook Air", price: 85000, category: "Laptop" },
  { id: 2, name: "iPhone 14", price: 72000, category: "Mobile" },
  { id: 3, name: "Headphones", price: 4999, category: "Accessories" },
  { id: 4, name: "Smart Watch", price: 6999, category: "Accessories" },
  { id: 5, name: "Keyboard", price: 3499, category: "Accessories" },
  { id: 6, name: "Mouse", price: 999, category: "Accessories" },
  { id: 7, name: "DSLR", price: 45000, category: "Camera" },
  { id: 8, name: "Tablet", price: 25000, category: "Tablet" },
];

/* ===========================
   HEADER COMPONENT
=========================== */
function Header({ cartCount }) {
  return (
    <header style={styles.header}>
      <h1>🛒 DevOps E-Commerce</h1>
      <div>Cart Items: {cartCount}</div>
    </header>
  );
}

/* ===========================
   PRODUCT CARD
=========================== */
function ProductCard({ product, onAdd }) {
  return (
    <div style={styles.card}>
      <h3>{product.name}</h3>
      <p>₹ {product.price}</p>
      <p>{product.category}</p>
      <button onClick={() => onAdd(product)}>Add to Cart</button>
    </div>
  );
}

/* ===========================
   PRODUCT LIST
=========================== */
function ProductList({ products, onAdd }) {
  return (
    <div style={styles.grid}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={onAdd} />
      ))}
    </div>
  );
}

/* ===========================
   CART COMPONENT
=========================== */
function Cart({ cart, onRemove }) {
  return (
    <div style={styles.cart}>
      <h2>🧺 Cart</h2>
      {cart.length === 0 && <p>No items in cart</p>}
      {cart.map((item, index) => (
        <div key={index} style={styles.cartItem}>
          <span>{item.name}</span>
          <span>₹ {item.price}</span>
          <button onClick={() => onRemove(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

/* ===========================
   FILTER BAR
=========================== */
function FilterBar({ setCategory, setSort }) {
  return (
    <div style={styles.filter}>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="ALL">All</option>
        <option value="Laptop">Laptop</option>
        <option value="Mobile">Mobile</option>
        <option value="Accessories">Accessories</option>
        <option value="Camera">Camera</option>
        <option value="Tablet">Tablet</option>
      </select>

      <select onChange={(e) => setSort(e.target.value)}>
        <option value="ASC">Price Low → High</option>
        <option value="DESC">Price High → Low</option>
      </select>
    </div>
  );
}

/* ===========================
   MAIN APP
=========================== */
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("ALL");
  const [sort, setSort] = useState("ASC");

  /* MOCK API CALL */
  useEffect(() => {
    setTimeout(() => {
      setProducts(PRODUCTS);
    }, 500);
  }, []);

  /* FILTER + SORT LOGIC */
  const filteredProducts = products
    .filter((p) => category === "ALL" || p.category === category)
    .sort((a, b) =>
      sort === "ASC" ? a.price - b.price : b.price - a.price
    );

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
  };

  return (
    <div style={styles.app}>
      <Header cartCount={cart.length} />
      <FilterBar setCategory={setCategory} setSort={setSort} />
      <ProductList products={filteredProducts} onAdd={addToCart} />
      <Cart cart={cart} onRemove={removeFromCart} />
    </div>
  );
}

/* ===========================
   STYLES (INLINE)
=========================== */
const styles = {
  app: { fontFamily: "Arial", padding: 20 },
  header: {
    display: "flex",
    justifyContent: "space-between",
    background: "#222",
    color: "#fff",
    padding: 15,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 15,
    marginTop: 20,
  },
  card: {
    border: "1px solid #ddd",
    padding: 15,
    borderRadius: 8,
  },
  filter: {
    display: "flex",
    gap: 10,
    marginTop: 15,
  },
  cart: {
    marginTop: 30,
    borderTop: "2px solid #000",
    paddingTop: 10,
  },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 8,
  },
};

export default App;

