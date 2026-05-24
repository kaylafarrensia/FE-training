import { useEffect, useState } from "react";
import ProductCard from "./productCard";
import SearchBar from "../ui/searchbar";

const ProductGrid = ({ searchQuery, setSearchQuery }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSearch, setActiveSearch] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok)
          throw new Error(`Failed to fetch products (${res.status})`);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message || "Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleSearch = (query) => {
    setActiveSearch(query);
    setSearchQuery(query);
  };

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(activeSearch.toLowerCase()),
  );

  return (
    <section style={{ backgroundColor: "#fff", padding: "40px 0 60px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>
        {/* Top row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "28px",
          }}
        >
          <h2
            style={{
              fontSize: "22px",
              fontWeight: "800",
              color: "#111",
              letterSpacing: "-0.02em",
            }}
          >
            Products
          </h2>
          <SearchBar onSearch={handleSearch} />
        </div>

        {loading && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "14px",
              padding: "72px 0",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                border: "3px solid #e8e8e8",
                borderTopColor: "#111",
                borderRadius: "50%",
                animation: "spin 0.8s linear infinite",
              }}
            />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            <p style={{ fontSize: "14px", color: "#6b6b6b" }}>
              Loading products…
            </p>
          </div>
        )}

        {!loading && error && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "14px",
              padding: "72px 0",
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#e53e3e"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <p
              style={{
                fontSize: "14px",
                color: "#c53030",
                textAlign: "center",
              }}
            >
              {error}
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: "8px 20px",
                backgroundColor: "#111",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                fontSize: "13px",
                fontWeight: "600",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                cursor: "pointer",
              }}
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && filtered.length === 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "14px",
              padding: "72px 0",
            }}
          >
            <svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9e9e9e"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <p
              style={{
                fontSize: "14px",
                color: "#6b6b6b",
                textAlign: "center",
              }}
            >
              No products found for "<strong>{activeSearch}</strong>"
            </p>
          </div>
        )}

        {!loading && !error && filtered.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
          >
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
