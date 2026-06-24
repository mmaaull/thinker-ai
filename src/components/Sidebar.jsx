import { NavLink } from "react-router-dom";

import Button from "./Button";
import Logo from "./Logo";
import IconSymbol from "./ui/IconSymbol";

import { sidebarMenu } from "../data/sidebarMenu";
import { recentSessions } from "../data/recentSessions";

function Sidebar() {
  return (
    <aside
      className="
        panel-shell
        hidden
        h-screen
        w-[280px]
        flex-col
        border-r
        border-outline-variant
        lg:fixed
        lg:left-0
        lg:top-0
        lg:flex
      "
    >
      <div className="border-b border-outline-variant/40 p-4">
        <Logo />
      </div>

      <div className="custom-scrollbar flex-1 overflow-y-auto p-4">
        <Button className="mb-4 w-full justify-center">
          <IconSymbol filled size={20}>
            add
          </IconSymbol>
          New Session
        </Button>

        <nav className="space-y-1">
          {sidebarMenu.map((item) => (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  px-3
                  py-2.5
                  text-sm
                  font-medium
                  transition-colors
                  ${
                    isActive
                      ? "bg-secondary-container text-on-secondary-container shadow-lg shadow-[rgba(111,0,190,0.2)]"
                      : "text-on-surface-variant hover:bg-surface-high hover:text-on-surface"
                  }
                `
              }
            >
              <IconSymbol filled size={18}>
                {item.icon}
              </IconSymbol>

              <span>{item.title}</span>
            </NavLink>
          ))}

          <div className="px-3 pb-2 pt-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-outline">
              Recent Sessions
            </p>
          </div>

          <div className="space-y-1">
            {recentSessions.map((session) => (
              <button
                key={session.id}
                type="button"
                className="
                  w-full
                  rounded-xl
                  px-3
                  py-2
                  text-left
                  transition-colors
                  hover:bg-surface-high
                "
              >
                <p className="text-sm font-medium text-on-surface">
                  {session.title}
                </p>

                <p className="text-[11px] text-on-surface-variant">
                  {session.time}
                </p>
              </button>
            ))}
          </div>
        </nav>
      </div>

      <div className="border-t border-outline-variant/40 p-4">
        <div className="glass-card flex items-center gap-3 rounded-2xl p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary/30 bg-primary-container text-sm font-semibold text-on-primary-container">
            MF
          </div>

          <div>
            <h4 className="text-sm font-semibold text-on-surface">
              Muhammad Faiz
            </h4>

            <p className="text-xs text-on-surface-variant">
              Informatics Student
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
