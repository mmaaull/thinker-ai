import { thinkingTabs } from "../../data/thinkingTabs";

function WorkspaceTabs({
  activeTab,
  setActiveTab,
}) {
  return (
    <div className="mb-8 flex flex-wrap justify-center gap-3">
      {thinkingTabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`
            rounded-full
            border
            px-6
            py-2
            text-sm
            font-medium
            transition-all
            ${
              activeTab === tab
                ? "border-primary/20 bg-primary-container text-on-primary-container shadow-lg shadow-[rgba(124,58,237,0.16)]"
                : "border-outline-variant/70 bg-surface-high text-on-surface-variant hover:bg-surface-highest hover:text-on-surface"
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default WorkspaceTabs;
