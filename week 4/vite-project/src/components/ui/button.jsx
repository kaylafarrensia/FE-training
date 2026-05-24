const variants = {
  primary: {
    backgroundColor: "#111",
    color: "#fff",
    border: "1.5px solid #111",
  },
  outline: {
    backgroundColor: "transparent",
    color: "#fff",
    border: "1.5px solid rgba(255,255,255,0.6)",
  },
  search: {
    backgroundColor: "#111",
    color: "#fff",
    border: "1.5px solid #111",
    padding: "9px 20px",
  },
};

const Button = ({
  children,
  variant = "primary",
  onClick,
  type = "button",
  style = {},
}) => {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    padding: "8px 18px",
    fontSize: "13px",
    fontWeight: "600",
    borderRadius: "6px",
    cursor: "pointer",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    whiteSpace: "nowrap",
    transition: "background 0.18s, border-color 0.18s",
    ...variants[variant],
    ...style,
  };

  return (
    <button type={type} onClick={onClick} style={base}>
      {children}
    </button>
  );
};

export default Button;
