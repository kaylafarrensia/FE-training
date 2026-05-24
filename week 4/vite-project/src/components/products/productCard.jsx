import { useState } from "react";
import Rating from "./rating";

const ProductCard = ({ product }) => {
  const { title, category, image, rating, price } = product;
  const [hovered, setHovered] = useState(false);
  const [bookmarkHovered, setBookmarkHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: hovered
          ? "0 8px 24px rgba(0,0,0,0.12)"
          : "0 1px 4px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.06)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "box-shadow 0.22s ease, transform 0.22s ease",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "1/1",
          backgroundColor: "#f5f5f5",
          overflow: "hidden",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            padding: "16px",
            transform: hovered ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.3s ease",
          }}
        />
        =
        <button
          onMouseEnter={() => setBookmarkHovered(true)}
          onMouseLeave={() => setBookmarkHovered(false)}
          aria-label="Bookmark product"
          style={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
            width: "30px",
            height: "30px",
            borderRadius: "6px",
            border: "1.5px solid #e8e8e8",
            backgroundColor: bookmarkHovered ? "#111" : "#fff",
            color: bookmarkHovered ? "#fff" : "#6b6b6b",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background 0.18s, color 0.18s, border-color 0.18s",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </div>

      <div
        style={{
          padding: "12px 14px 16px",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          flex: 1,
        }}
      >
        <p
          style={{
            fontSize: "11px",
            fontWeight: "500",
            color: "#9e9e9e",
            textTransform: "capitalize",
            letterSpacing: "0.02em",
          }}
        >
          {category}
        </p>
        <p
          style={{
            fontSize: "13px",
            fontWeight: "700",
            color: "#111",
            lineHeight: "1.4",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {title}
        </p>
        <Rating rate={rating.rate} count={rating.count} />
        <p
          style={{
            fontSize: "15px",
            fontWeight: "800",
            color: "#111",
            marginTop: "2px",
          }}
        >
          ${price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
