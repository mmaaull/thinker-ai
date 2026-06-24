import IconSymbol from "./ui/IconSymbol";

function GreetingHeader() {
  return (
    <header className="mb-12 flex items-center justify-between">
      <div>
        <h2 className="text-headline-lg font-bold text-on-surface">
          Good Afternoon, Faiz 👋
        </h2>
        <p className="text-body-lg text-on-surface-variant">
          What would you like to think critically about today?
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button className="rounded-full p-2.5 text-on-surface-variant transition-colors hover:bg-surface-container">
          <IconSymbol size={20}>notifications</IconSymbol>
        </button>
        <button className="rounded-full border border-outline-variant px-5 py-2 font-label-md text-on-surface transition-all hover:bg-surface-container">
          Upgrade
        </button>
      </div>
    </header>
  );
}

export default GreetingHeader;
