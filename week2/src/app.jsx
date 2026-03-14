import { data } from "./data";
import { useState } from "react";
import Flashcard from "./flashcard";
import FlashcardList from "./flashcardList";

function App() {
  const appStyle = {
    fontFamily: "'Hanken Grotesk', sans-serif",
    color: "#ffffff",
    background: "black",
    minHeight: "100vh",
    width: "100%",
    margin: 0,
    padding: "40px",
    boxSizing: "border-box",
    textAlign: "center",
  };
  const [selectedId, setSelectedId] = useState(null);
  function handleToggle(id) {
    setSelectedId(id !== selectedId ? id : null);
  }
  return (
    <div className="container" style={appStyle}>
      <h3 style={{ fontSize: "16px", color: "#D7D7D7" }}>
        From Beginner to Advanced Questions
      </h3>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React Logo"
        style={{ width: "68px", height: "61px" }}
      />
      <h1 style={{ fontSize: "48px" }}>The React Flash Cards.</h1>
      <h4 style={{ fontSize: "16px", color: "#D7D7D7" }}>
        Test your react knowledge by answering the flashcards below
      </h4>
      <FlashcardList
        data={data}
        selectedId={selectedId}
        onSelect={handleToggle}
      />
    </div>
  );
}

export default App;
