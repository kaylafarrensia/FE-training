import { data } from "./data";
import { useState } from "react";
import FlashcardList from "./flashcardList";
import Header from "./header";

function App() {
  const appStyle = {
    fontFamily: "'Hanken Grotesk', sans-serif",
    color: "#ffffff",
    backgroundColor: "black",
    minHeight: "100vh",
    minWidth: "100vw",
    boxSizing: "border-box",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    overflowX: "hidden",
  };

  const [selectedId, setSelectedId] = useState(null);
  function handleToggle(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="container" style={appStyle}>
      <Header />
      <FlashcardList
        data={data}
        selectedId={selectedId}
        onSelect={handleToggle}
      />
    </div>
  );
}

export default App;
