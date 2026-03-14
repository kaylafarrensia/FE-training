function Flashcard({ item, index, isSelected, onSelect }) {
  const flashcardStyle = {
    border: "1px solid white",
    borderRadius: "10px",
  };
  return (
    <div
      className={`card ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(index)}
      style={flashcardStyle}
    >
      {isSelected ? (
        <div className="answer">
          <h5 style={{ fontSize: "12px", color: "#C9C9C9" }}>Answer:</h5>
          <h3 style={{ fontSize: "20px" }}>{item.question}</h3>
          <p style={{ fontSize: "16px", color: "#C9C9C9" }}>{item.answer}</p>
          <div className="difficulty" style={{ fontSize: "12px" }}>
            {item.difficulty}
          </div>
        </div>
      ) : (
        <div className="question">
          <h5 style={{ fontSize: "12px", color: "#C9C9C9" }}>
            Question {index + 1}
          </h5>
          <h3 style={{ fontSize: "24px" }}>{item.question}</h3>
          <div className="difficulty" style={{ fontSize: "16px" }}>
            {item.difficulty}
          </div>
        </div>
      )}
    </div>
  );
}
export default Flashcard;
