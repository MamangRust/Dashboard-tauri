import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1); // Track the highlighted result

  const data = [
    "Dashboard",
    "User Management",
    "Settings",
    "Notifications",
    "Analytics",
    "Reports",
    "Integrations",
  ];

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);
    setActiveIndex(-1);

    if (value) {
      const filteredResults = data.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      // Navigate down
      setActiveIndex((prevIndex) =>
        prevIndex < results.length - 1 ? prevIndex + 1 : 0
      );
    } else if (event.key === "ArrowUp") {
      // Navigate up
      setActiveIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : results.length - 1
      );
    } else if (event.key === "Enter" && activeIndex >= 0) {
      // Select active item
      alert(`Selected: ${results[activeIndex]}`);
      setQuery(results[activeIndex]);
      setResults([]);
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
        <Input
          type="text"
          value={query}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          placeholder="Search..."
          className="pl-8 pr-4 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none"
        />
      </div>

      {/* Search Results Dropdown */}
      {results.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden">
          {results.map((result, index) => (
            <li
              key={index}
              className={`p-2 cursor-pointer ${
                index === activeIndex
                  ? "bg-gray-100 dark:bg-gray-700"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => {
                alert(`Selected: ${result}`);
                setQuery(result);
                setResults([]);
              }}
            >
              {result}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
