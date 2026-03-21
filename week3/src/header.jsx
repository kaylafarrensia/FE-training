function Header() {
  return (
    <>
      <h2 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "-8px" }}>
        Good Morning, User👋
      </h2>
      <h4 style={{ fontSize: "12px", fontWeight: "500", color: "#9D9D9D" }}>
        It's{" "}
        {new Date().toLocaleDateString("en-GB", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </h4>
    </>
  );
}

export default Header;
