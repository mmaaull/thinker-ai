function SectionTitle({
  kicker,
  title,
  subtitle,
  align = "left",
}) {
  return (
    <div className={`mb-8 ${align === "center" ? "text-center" : ""}`}>
      {kicker && (
        <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.15em] text-primary">
          {kicker}
        </p>
      )}

      <h2 className="text-[30px] font-semibold tracking-[-0.01em] text-on-surface lg:text-[36px] lg:leading-[44px]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 max-w-3xl text-[16px] leading-[24px] text-on-surface-variant">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
