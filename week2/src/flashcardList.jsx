import Flashcard from "./flashcard";

function FlashcardList({ data, selectedId, onSelect }) {
  const flashcardListStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "50px",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
  };
  return (
    <div className="flashcard-list" style={flashcardListStyle}>
      {data &&
        data.map((item, index) => (
          <Flashcard
            key={index}
            index={index}
            item={item}
            isSelected={index === selectedId}
            onSelect={onSelect}
          />
        ))}
    </div>
  );
}

export default FlashcardList;
