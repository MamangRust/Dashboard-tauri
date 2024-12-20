import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MenuItemComponent, { menuItems } from "./menu-item";
import ReactLogo from "@/assets/react.svg";

export default function Sidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <aside
      className={`bg-[#2563eb] dark:bg-[#0b1121] shadow-lg text-white dark:text-gray-300 transition-all duration-300 border-r border-gray-200 dark:border-gray-700 ${
        isOpen ? "w-64" : "w-16"
      } h-screen`}
    >
      <div className="flex flex-col h-full">
        <div className={`flex items-center ${isOpen ? "p-4" : "justify-center py-4"}`}>
          <img
            src={ReactLogo}
            alt="Logo"
            className="h-8 w-8"
          />
          {isOpen && (
            <span className="ml-2 text-lg font-semibold">Point Of Sale</span> // Title
          )}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="self-end m-2 text-white dark:text-gray-300 hover:bg-blue-600 dark:hover:bg-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <ChevronLeft /> : <ChevronRight />}
        </Button>

        {/* Sidebar Navigation */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <MenuItemComponent key={index} item={item} isOpen={isOpen} />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
