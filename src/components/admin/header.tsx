import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell, ChevronDown } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import Luffy from "@/assets/Luffy.jpg"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function SiteHeader() {
  return (
    <header className="bg-white dark:bg-[#0b1121] shadow-lg p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
        Dashboard Templates
      </h1>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Bell className="text-gray-900 dark:text-white" />
        </Button>
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
