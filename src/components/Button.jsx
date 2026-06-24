function Button({
  as: Component = "button",
  children,
  variant = "primary",
  onClick,
  className = "",
  type = "button",
  ...props
}) {
  const variants = {
    primary:
      "bg-primary-container text-on-primary-container shadow-lg shadow-[rgba(124,58,237,0.16)] hover:shadow-[rgba(124,58,237,0.24)]",
    secondary:
      "bg-surface-high text-on-surface border border-outline-variant hover:bg-surface-highest",
    outline:
      "border border-outline-variant text-on-surface hover:bg-surface-high/70",
    ghost:
      "text-on-surface-variant hover:text-on-surface hover:bg-surface-high/70",
  };

  return (
    <Component
      {...props}
      type={Component === "button" ? type : undefined}
      onClick={onClick}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        px-5
        py-3
        text-sm
        font-medium
        transition-all
        duration-200
        active:scale-[0.98]
        ${variants[variant] ?? variants.primary}
        ${className}
      `}
    >
      {children}
    </Component>
  );
}

export default Button;
