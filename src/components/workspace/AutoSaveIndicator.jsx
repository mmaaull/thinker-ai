function AutoSaveIndicator() {
  return (
    <div
      className="
        mb-6
        flex
        gap-3
      "
    >
      <span
        className="
          rounded-lg
          bg-slate-800
          px-3
          py-1
          text-slate-300
        "
      >
        Session #001
      </span>

      <span
        className="
          rounded-lg
          bg-amber-500/20
          px-3
          py-1
          text-amber-400
        "
      >
        Active
      </span>
    </div>
  );
}

export default AutoSaveIndicator;
