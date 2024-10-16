import { Folder, LayoutDashboard, Menu, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

const menuItems = [
  { icon: <LayoutDashboard />, label: "Dashboard" },
  { icon: <ShoppingCart />, label: "Cart" },
  { icon: <Folder />, label: "Folder" },
  { icon: <Menu />, label: "Menu" },
  { icon: <LayoutDashboard />, label: "Dashboard" },
  { icon: <ShoppingCart />, label: "Cart" },
  { icon: <Folder />, label: "Folder" },
  { icon: <Menu />, label: "Menu" },
  // Add more items as needed
];

const ITEMS_PER_PAGE = 5;

export default function BottomNavigation() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(menuItems.length / ITEMS_PER_PAGE);

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const displayedItems = menuItems.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#0b1121] border-t h-16 flex justify-between items-center px-4">
      {/* Previous Button */}
      <Button variant="ghost" size="icon" onClick={handlePreviousPage} disabled={currentPage === 0}>
        Previous
      </Button>

      {/* Menu Items */}
      <div className="flex justify-center space-x-4">
        {displayedItems.map((item, index) => (
          <Button key={index} variant="ghost" size="icon">
            {item.icon}
          </Button>
        ))}
      </div>

      {/* Next Button */}
      <Button variant="ghost" size="icon" onClick={handleNextPage} disabled={currentPage === totalPages - 1}>
        Next
      </Button>
    </nav>
  );
}
