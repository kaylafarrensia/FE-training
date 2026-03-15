function Flashcard({ item, index, isSelected, onSelect }) {
  const flashcardStyle = {
    position: "relative",
    borderRadius: "8px",
    padding: "10px 10px",
    width: "310px",
    height: "170px",
    backgroundColor: "#252525",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    border: isSelected ? "1px solid #FFD6A8" : "1px solid #414141",
    transition: "all 1.2s ease",
  };

  const difficultyWidth = item.difficulty === "Medium" ? "99px" : "86px";

  let color = "";
  let highlight = "";

  if (item.difficulty === "Easy") {
    color = "#223851";
    highlight = "#97E3FF";
  } else if (item.difficulty === "Medium") {
    color = "#4A422F";
    highlight = "#FFCE97";
  } else {
    color = "#522727";
    highlight = "#FF9797";
  }

  return (
    <div
      className={`card ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(index)}
      style={flashcardStyle}
    >
      {isSelected ? (
        <div className="answer">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              marginBottom: "20px",
            }}
          >
            <h5
              style={{
                fontSize: "10px",
                color: "#C9C9C9",
                textAlign: "left",
                fontWeight: "500",
                marginBottom: "-8px",
              }}
            >
              Answer :
            </h5>
            <div
              style={{
                fontSize: "10px",
                fontWeight: "600",
                width: "60px",
                height: "22px",
                backgroundColor: color,
                color: highlight,
                border: `1px solid ${highlight}`,
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "30px",
                position: "absolute",
                top: "20px",
                right: "20px",
              }}
            >
              {item.difficulty}
            </div>
          </div>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              textAlign: "left",
              maxWidth: "256px",
              marginBottom: "-8px",
            }}
          >
            {item.question}
          </h3>
          <p
            style={{
              fontSize: "14px",
              color: "#C9C9C9",
              fontWeight: "500",
              textAlign: "left",
              maxWidth: "256px",
            }}
          >
            {item.answer}
          </p>
        </div>
      ) : (
        <div className="question">
          <h5
            style={{
              fontSize: "10px",
              color: "#C9C9C9",
              fontWeight: "500",
              marginBottom: "-10px",
            }}
          >
            Question {index + 1}
          </h5>
          <h3
            style={{ fontSize: "20px", fontWeight: "600", maxWidth: "265px" }}
          >
            {item.question}
          </h3>
          <div
            className="difficulty"
            style={{
              fontSize: "14px",
              border: `1px solid ${highlight}`,
              borderRadius: "100px",
              fontWeight: "600",
              padding: "5px 0px",
              margin: "0 auto",
              justifyContent: "space-between",
              height: "22px",
              width: difficultyWidth,
              backgroundColor: color,
              color: highlight,
            }}
          >
            {item.difficulty}
          </div>
        </div>
      )}
    </div>
  );
}
export default Flashcard;
