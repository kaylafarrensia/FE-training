import { useState } from "react";
import heroImage from "../../assets/shoe.jpg";

const navItems = [
  {
    label: "Products",
    icon: (
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
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
  },
  {
    label: "Inspiration",
    icon: (
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
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    label: "Service",
    icon: (
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
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    label: "Support",
    icon: (
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
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
];

const NavPill = ({ label, icon }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="#"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "6px 14px",
        backgroundColor: hovered
          ? "rgba(255,255,255,0.22)"
          : "rgba(255,255,255,0.12)",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.22)"}`,
        borderRadius: "999px",
        color: "rgba(255,255,255,0.9)",
        fontSize: "12.5px",
        fontWeight: "500",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        transition: "background 0.18s, border-color 0.18s",
        textDecoration: "none",
      }}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
};

const OutlineBtn = ({ children }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "7px 18px",
        backgroundColor: hovered ? "rgba(255,255,255,0.1)" : "transparent",
        border: `1.5px solid ${hovered ? "#fff" : "rgba(255,255,255,0.6)"}`,
        borderRadius: "6px",
        color: "#fff",
        fontSize: "13px",
        fontWeight: "600",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        cursor: "pointer",
        transition: "background 0.18s, border-color 0.18s",
      }}
    >
      {children}
    </button>
  );
};

const Header = () => (
  <header
    style={{
      position: "relative",
      width: "100%",
      minHeight: "420px",
      backgroundColor: "#1a1a1a",
      backgroundImage: `url(${heroImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center 40%",
      backgroundRepeat: "no-repeat",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.38) 50%, rgba(0,0,0,0.72) 100%)",
        zIndex: 0,
      }}
    />

    <div
      style={{
        position: "relative",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        flex: 1,
        maxWidth: "1100px",
        margin: "0 auto",
        width: "100%",
        padding: "0 32px",
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          paddingTop: "20px",
        }}
      >
        {navItems.map((item) => (
          <NavPill key={item.label} {...item} />
        ))}
      </nav>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "36px 0 28px",
          maxWidth: "600px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: "800",
            color: "#fff",
            lineHeight: "1.22",
            letterSpacing: "-0.02em",
            marginBottom: "14px",
          }}
        >
          Your One-Stop Shop for Everyday
          <br />
          Essentials and Unique Finds.
        </h1>
        <p
          style={{
            fontSize: "12.5px",
            color: "rgba(255,255,255,0.72)",
            lineHeight: "1.65",
            maxWidth: "480px",
          }}
        >
          Explore a seamless shopping experience with fast delivery, exceptional
          customer service, and exclusive deals that make every purchase
          worthwhile. Shop smart, shop easy, shop with ShopSphere!
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 0 20px",
          borderTop: "1px solid rgba(255,255,255,0.14)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <OutlineBtn>Categories</OutlineBtn>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
              color: "rgba(255,255,255,0.75)",
              fontWeight: "500",
            }}
          >
            {["Men", "Women", "Accessories", "Sale"].map((item, i, arr) => (
              <span
                key={item}
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                {item}
                {i < arr.length - 1 && (
                  <span
                    style={{ color: "rgba(255,255,255,0.4)", fontSize: "10px" }}
                  >
                    •
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
        <OutlineBtn>Contact Us</OutlineBtn>
      </div>
    </div>
  </header>
);

export default Header;
