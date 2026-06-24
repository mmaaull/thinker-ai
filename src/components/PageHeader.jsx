function PageHeader({
  kicker,
  title,
  description,
  actions,
}) {
  return (
    <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        {kicker && (
          <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.15em] text-primary">
            {kicker}
          </p>
        )}

        <h1 className="text-[36px] font-semibold tracking-[-0.02em] text-on-surface lg:text-[48px] lg:leading-[56px]">
          {title}
        </h1>

        {description && (
          <p className="mt-3 text-[16px] leading-[24px] text-on-surface-variant lg:text-[18px] lg:leading-[28px]">
            {description}
          </p>
        )}
      </div>

      {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
    </div>
  );
}

export default PageHeader;
