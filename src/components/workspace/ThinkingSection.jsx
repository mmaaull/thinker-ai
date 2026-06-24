function ThinkingSection({
  title,
  placeholder,
}) {
  return (
    <div className="mb-6">
      <h3 className="mb-3 text-[18px] font-semibold leading-[28px] text-on-surface">
        {title}
      </h3>

      <textarea
        rows={5}
        placeholder={placeholder}
        className="
          w-full
          resize-none
          rounded-2xl
          border
          border-outline-variant/70
          bg-surface-low
          p-4
          text-sm
          leading-relaxed
          text-on-surface
          outline-none
          transition-colors
          placeholder:text-on-surface-variant/50
          focus:border-primary/50
          focus:ring-2
          focus:ring-primary/20
        "
      />
    </div>
  );
}

export default ThinkingSection;
