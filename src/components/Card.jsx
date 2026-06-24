function Card({
  children,
  className = "",
  interactive = false,
}) {
  return (
    <div
      className={`
        glass-card
        rounded-[var(--radius-card)]
        p-6
        ${interactive ? "interactive" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;
