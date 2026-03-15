function Header() {
  return (
    <div>
      <h3
        style={{
          fontFamily: "'Hanken Grotesk', sans-serif",
          fontSize: "13px",
          color: "#D7D7D7",
          border: "1px solid #414141",
          borderRadius: "37px",
          padding: "8px 8px",
          maxWidth: "260px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          fontWeight: "500",
          marginTop: "30px",
        }}
      >
        From Beginner to Advanced Questions
      </h3>
      <div
        className="header"
        style={{
          fontFamily: "'Hanken Grotesk', sans-serif",
          fontSize: "18px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "17px",
          marginTop: "-15px",
          marginBottom: "-42px",
          fontWeight: "600",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
          style={{ width: "55px", height: "48px" }}
        />
        <h1 style={{ fontSize: "48px" }}>The React Flash Cards.</h1>
      </div>
      <h4
        style={{
          fontFamily: "'Hanken Grotesk', sans-serif",
          fontSize: "15px",
          color: "#9D9D9D",
          fontWeight: "500",
          marginBottom: "40px",
        }}
      >
        Test your react knowledge by answering the flashcards below
      </h4>
    </div>
  );
}

export default Header;
