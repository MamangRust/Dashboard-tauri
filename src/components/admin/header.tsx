import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell, ChevronDown, Search, MessageSquare, Settings, AlertCircle } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import Luffy from "@/assets/Luffy.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Input } from "../ui/input";
import SearchInput from "./searchInput";

export default function SiteHeader() {
  const [notifications, setNotifications] = useState([
    { type: "message", text: "New message from User1" },
    { type: "settings", text: "Your profile was updated" },
    { type: "alert", text: "Server maintenance at 3:00 PM" },
  ]);

  const renderIcon = (type) => {
    switch (type) {
      case "message":
        return <MessageSquare className="text-blue-500 mr-2" />;
      case "settings":
        return <Settings className="text-green-500 mr-2" />;
      case "alert":
        return <AlertCircle className="text-red-500 mr-2" />;
      default:
        return <Bell className="text-gray-500 mr-2" />;
    }
  };

  return (
    <header className="bg-white dark:bg-[#0b1121] shadow-md p-3 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
        Dashboard Templates
      </h1>
      <div className="flex items-center space-x-4">
        <SearchInput />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="text-gray-900 dark:text-white" />
              {notifications.length > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-2 h-2 p-2 bg-red-500 text-white text-xs rounded-full">
                  {notifications.length}
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-white dark:bg-gray-700 w-64"
          >
            <DropdownMenuLabel className="text-gray-900 dark:text-gray-200">
              Notifications
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="border-gray-200 dark:border-gray-600" />
            {notifications.length > 0 ? (
              notifications.map((notification, index) => (
                <DropdownMenuItem
                  key={index}
                  className="flex items-center text-gray-900 dark:text-gray-200"
                >
                  {renderIcon(notification.type)}
                  {notification.text}
                </DropdownMenuItem>
              ))
            ) : (
              <DropdownMenuItem className="text-gray-500 dark:text-gray-400">
                No notifications
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center space-x-2 text-gray-900 dark:text-white"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src={Luffy} alt="User" />
                <AvatarFallback>R</AvatarFallback>
              </Avatar>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="bg-white dark:bg-gray-700"
          >
            <DropdownMenuLabel className="text-gray-900 dark:text-gray-200">
              My Account
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="border-gray-200 dark:border-gray-600" />
            <DropdownMenuItem className="text-gray-900 dark:text-gray-200">
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-900 dark:text-gray-200">
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator className="border-gray-200 dark:border-gray-600" />
            <DropdownMenuItem className="text-gray-900 dark:text-gray-200">
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
