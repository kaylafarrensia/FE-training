import { useState } from "react";
import Button from "./button";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => onSearch(input.trim());
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <div
        style={{ position: "relative", display: "flex", alignItems: "center" }}
      >
        <svg
          style={{
            position: "absolute",
            left: "10px",
            color: "#9e9e9e",
            pointerEvents: "none",
          }}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="Search Products"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{
            width: "260px",
            padding: "9px 12px 9px 34px",
            fontSize: "13px",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: "#111",
            backgroundColor: "#fff",
            border: "1.5px solid #e8e8e8",
            borderRadius: "6px",
            outline: "none",
          }}
        />
      </div>
      <Button variant="search" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
