import Sidebar from "../components/Sidebar";
// RightPanel moved to dedicated page per request

function MainLayout({ children }) {
  return (
    <div
      className="
        min-h-screen
        bg-background
        text-on-surface
      "
    >
      <Sidebar />

      <main
        className="
          min-h-screen
          px-4
          py-6
          lg:ml-[280px]
          lg:mr-[320px]
          lg:px-8
          lg:py-8
        "
      >
        <div className="lg:hidden mb-6 flex items-center justify-between rounded-2xl border border-outline-variant/70 bg-[rgba(13,28,45,0.9)] px-4 py-3 backdrop-blur-xl">
          <div className="text-sm font-semibold tracking-tight text-on-surface">
            COGNITIVA
          </div>

          <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-on-surface-variant">
            Thinking Workspace
          </div>
        </div>

          {children}
        </main>

      </div>
  );
}

export default MainLayout;
