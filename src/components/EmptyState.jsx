function EmptyState({
  title,
  description,
}) {
  return (
    <div className="py-16 text-center">
      <h3 className="mb-2 text-xl font-semibold text-on-surface">
        {title}
      </h3>

      <p className="text-on-surface-variant">
        {description}
      </p>
    </div>
  );
}

export default EmptyState;
