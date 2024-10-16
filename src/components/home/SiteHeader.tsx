import { MainNav } from "./MainNav";
import { ModeToggle } from "./mode-toggle";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <header className="z-10 sticky top-0 w-full border-b border-border bg-gray-100 dark:bg-[#1e2023] backdrop-blur supports-[backdrop-filter]:bg-gray-100/60 dark:supports-[backdrop-filter]:bg-[#1e2023]/60">
      <div className="container flex h-14 max-w-screen-2xl items-center text-[#585a5c] dark:text-slate-200 pl-8">
        <MainNav /> {/* Main navigation visible on larger screens */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="hidden md:flex items-center"> {/* Hidden on small screens */}
            <ModeToggle />
          </nav>
          <MobileNav /> 
        </div>
      </div>
    </header>
  );
}
