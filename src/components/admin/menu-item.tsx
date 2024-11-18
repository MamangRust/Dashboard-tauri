import {
  LayoutDashboard,
  ShoppingCart,
  FileText,
  Folder,
  Settings,
  Users,
  ChevronRight,
} from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

type MenuItem = {
  icon: React.ElementType;
  label: string;
  children?: MenuItem[];
};

export const menuItems: MenuItem[] = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: ShoppingCart, label: "Point of Sale" },
  {
    icon: Folder,
    label: "Projects",
    children: [
      { icon: FileText, label: "Documents" },
      {
        icon: Settings,
        label: "Settings",
        children: [
          { icon: Users, label: "Team" },
          { icon: FileText, label: "Logs" },
        ],
      },
    ],
  },
];

export default function MenuItemComponent({
  item,
  depth = 0,
  isOpen,
}: {
  item: MenuItem;
  depth?: number;
  isOpen: boolean;
}) {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const hasChildren = (item.children?.length ?? 0) > 0; // Optional chaining to check if 'children' exists
  const Icon = item.icon;

  return (
    <li>
      <Button
        variant="ghost"
        className={`w-full text-white hover:text-white hover:bg-blue-400 dark:hover:bg-gray-700 justify-start ${
          isOpen ? "px-3" : "px-0 justify-center"
        }`}
        onClick={() => hasChildren && setIsSubmenuOpen(!isSubmenuOpen)}
      >
        <Icon className={`h-5 w-5 ${isOpen && depth === 0 ? "mr-2" : ""}`} />
        {isOpen && (
          <span
            className={`flex items-center justify-between w-full ${
              depth > 0 ? "pl-4" : ""
            }`}
          >
            {item.label}
            {hasChildren && (
              <ChevronRight
                className={`h-4 w-4 transition-transform ${
                  isSubmenuOpen ? "rotate-90" : ""
                }`}
              />
            )}
          </span>
        )}
      </Button>
      {hasChildren && isSubmenuOpen && isOpen && (
        <ul className="ml-4 mt-2 space-y-2">
          {item.children?.map(
            (
              child,
              index // Optional chaining added here too
            ) => (
              <MenuItemComponent
                key={index}
                item={child}
                depth={depth + 1}
                isOpen={isOpen}
              />
            )
          )}
        </ul>
      )}
    </li>
  );
}
