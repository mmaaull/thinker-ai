function IconSymbol({
  children,
  filled = false,
  className = "",
  size = 24,
  weight = 600,
  grade = 0,
  opsz = 24,
  ...props
}) {
  return (
    <span
      {...props}
      className={`material-symbols-outlined ${className}`}
      style={{
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opsz}`,
        fontSize: size,
      }}
    >
      {children}
    </span>
  );
}

export default IconSymbol;
