const StarFull = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="#f5a623"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const StarHalf = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="half-grad">
        <stop offset="50%" stopColor="#f5a623" />
        <stop offset="50%" stopColor="#d1d1d1" />
      </linearGradient>
    </defs>
    <path
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      fill="url(#half-grad)"
    />
  </svg>
);

const StarEmpty = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="#d1d1d1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const Rating = ({ rate, count }) => {
  const full = Math.floor(rate);
  const half = rate - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
        {Array.from({ length: full }).map((_, i) => (
          <StarFull key={`f${i}`} />
        ))}
        {half && <StarHalf />}
        {Array.from({ length: empty }).map((_, i) => (
          <StarEmpty key={`e${i}`} />
        ))}
      </div>
      <span style={{ fontSize: "12px", color: "#9e9e9e", fontWeight: "400" }}>
        ({count})
      </span>
    </div>
  );
};

export default Rating;
