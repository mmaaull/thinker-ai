import { Link } from "react-router-dom";

import Logo from "./Logo";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="border-b border-outline-variant/70 bg-[rgba(5,20,36,0.88)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6">
        <Logo />

        <div className="flex gap-3">
          <Button as={Link} to="/dashboard" variant="outline">
            Dashboard
          </Button>

          <Button as={Link} to="/workspace">
            Launch Workspace
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
